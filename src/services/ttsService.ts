class TtsService {
  private apiKey: string | null = null;
  private voiceId: string = '21m00Tcm4TlvDq8ikWAM'; // Default ElevenLabs Polish voice
  private isSpeaking = false;

  constructor() {
    // Try to load API key from localStorage
    const saved = localStorage.getItem('elevenlabs_key');
    if (saved) {
      this.apiKey = saved;
    }
    // Use a good Polish voice by default
    this.voiceId = localStorage.getItem('elevenlabs_voice') || 'Xr4N3Kv4ZxQBbhWniN7Q';
  }

  setApiKey(key: string) {
    this.apiKey = key;
    localStorage.setItem('elevenlabs_key', key);
  }

  getApiKey(): string | null {
    return this.apiKey;
  }

  isConfigured(): boolean {
    return this.apiKey !== null && this.apiKey.length > 0;
  }

  setVoice(voiceId: string) {
    this.voiceId = voiceId;
    localStorage.setItem('elevenlabs_voice', voiceId);
  }

  async speak(text: string): Promise<void> {
    // Anuluj poprzednią mowę — Web Speech API kolejkowo dodaje utterance'y
    this.stop();

    // 1. Web Speech API — darmowe, działa od razu, nie potrzebuje klucza
    if ('speechSynthesis' in window) {
      // Czekamy aż voices się załadują (przy pierwszym wywołaniu mogą być puste)
      const allVoices = window.speechSynthesis.getVoices();
      if (allVoices.length === 0) {
        await new Promise<void>((resolve) => {
          window.speechSynthesis.onvoiceschanged = () => resolve();
          setTimeout(resolve, 500); // timeout bezpieczeństwa
        });
      }

      return new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pl-PL';
        utterance.rate = 1.0;
        utterance.pitch = 0.95;

        // Szukamy polskiego głosu
        const voices = window.speechSynthesis.getVoices();
        const polishVoice = voices.find(v => v.lang.startsWith('pl'));
        if (polishVoice) {
          utterance.voice = polishVoice;
        }

        utterance.onend = () => {
          this.isSpeaking = false;
          resolve();
        };
        utterance.onerror = (e) => {
          console.warn('Web Speech error:', e);
          this.isSpeaking = false;
          resolve(); // resolve mimo błędu, żeby nie blokować gry
        };

        this.isSpeaking = true;
        window.speechSynthesis.speak(utterance);
      });
    }

    // 2. Jeśli Web Speech API nie jest dostępne, próbujemy ElevenLabs
    if (this.apiKey) {
      try {
        const response = await fetch(
          `https://api.elevenlabs.io/v1/text-to-speech/${this.voiceId}`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'xi-api-key': this.apiKey,
            },
            body: JSON.stringify({
              text,
              model_id: 'eleven_multilingual_v2',
              voice_settings: {
                stability: 0.5,
                similarity_boost: 0.75,
                style: 0.2,
                use_speaker_boost: true,
              },
            }),
          }
        );

        if (!response.ok) throw new Error('ElevenLabs API error');

        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        const audio = new Audio(audioUrl);

        return new Promise((resolve) => {
          audio.onended = () => {
            this.isSpeaking = false;
            URL.revokeObjectURL(audioUrl);
            resolve();
          };
          audio.onerror = () => {
            this.isSpeaking = false;
            URL.revokeObjectURL(audioUrl);
            resolve();
          };
          this.isSpeaking = true;
          audio.play();
        });
      } catch (err) {
        console.warn('ElevenLabs TTS failed:', err);
        this.isSpeaking = false;
      }
    }

    console.warn('Brak dostępnej metody TTS');
  }

  async speakQuestion(text: string): Promise<void> {
    await this.speak(text);
  }

  async speakResult(correct: boolean, answer: string): Promise<void> {
    if (correct) {
      await this.speak(`Tak, ${answer}`);
    } else {
      await this.speak(`Nie. Prawidłowa odpowiedź: ${answer}`);
    }
  }

  async speakAnnouncement(text: string): Promise<void> {
    await this.speak(text);
  }

  stop() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.isSpeaking = false;
  }

  get isActive() {
    return this.isSpeaking;
  }
}

export const ttsService = new TtsService();
