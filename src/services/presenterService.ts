import { ttsService } from './ttsService';

class PresenterService {
  private reactions = {
    correct: ['Tak!', 'Dobrze!', 'Prawidłowo!', 'Zgadza się!'],
    wrong: ['Nie.', 'Źle.', 'Błąd.', 'Nieprawda.'],
    elimination: ['Odpada!', 'Koniec!', 'Żegnamy!'],
    stage2: ['Runda 2! Nominacje!', 'Czas na nominacje!', 'Runda druga!'],
    stage3: ['Finał! Zaczynamy!', 'Wielki finał!', 'Trzech finalistów!'],
    playerCorrect: ['Tak!', 'Brawo!', 'Dobrze!'],
    playerWrong: ['Nie.', 'Źle.', 'Pudło.'],
    playerEliminated: ['Odpadasz!', 'Koniec gry!', 'Żegnamy!'],
    playerWins: ['Wygrałeś! Gratulacje!', 'Zwycięstwo! Brawo!'],
    aiCorrect: ['Tak!', 'Dobrze!', 'Prawidłowo!'],
    aiWrong: ['Nie.', 'Źle.', 'Błąd.'],
    aiEliminated: ['Odpada!', 'Koniec!', 'Żegnamy!'],
    nomination: ['Wybieraj!', 'Kto następny?', 'Wskaż przeciwnika.'],
    timeout: ['Czas minął!', 'Za wolno!', 'Czas!'],
    buzzOpen: ['Pytanie!', 'Uwaga, pytanie!', 'Do przycisków!'],
    selfNominate: ['Podwójna stawka!', 'Odważnie!', 'Ryzykanctwo!'],
  };

  private pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  async announceIntro() {
    await this.say('Witamy państwa w teleturnieju "Jeden z Dziesięciu"! Zaczynamy!');
  }

  async announceCorrect(isHuman: boolean, answer: string) {
    const intro = this.pick(isHuman ? this.reactions.playerCorrect : this.reactions.correct);
    await this.say(`${intro} ${answer}`);
  }

  async announceWrong(isHuman: boolean, answer: string, selected?: string | null) {
    const intro = this.pick(isHuman ? this.reactions.playerWrong : this.reactions.wrong);
    if (selected && selected !== answer) {
      await this.say(`Nie ${selected}, tylko ${answer}`);
    } else {
      await this.say(`${intro} ${answer}`);
    }
  }

  async announceEliminated(_name: string, isPlayer: boolean) {
    await this.say(this.pick(isPlayer ? this.reactions.playerEliminated : this.reactions.aiEliminated));
  }

  async announceStage2() {
    await this.say(this.pick(this.reactions.stage2));
  }

  async announceStage3() {
    await this.say(this.pick(this.reactions.stage3));
  }

  async announceNomination() {
    await this.say(this.pick(this.reactions.nomination));
  }

  async announceSelfNomination() {
    await this.say(this.pick(this.reactions.selfNominate));
  }

  async announceTimeout() {
    await this.say(this.pick(this.reactions.timeout));
  }

  async announceBuzzOpen() {
    await this.say(this.pick(this.reactions.buzzOpen));
  }

  async announcePlayerWins() {
    await this.say(this.pick(this.reactions.playerWins));
  }

  async announceAiCorrect(n: string) {
    const phrase = this.pick(this.reactions.aiCorrect);
    await this.say(`${phrase} Punkt dla ${n}.`);
  }

  async announceAiWrong(_n: string) {
    const phrase = this.pick(this.reactions.aiWrong);
    await this.say(phrase);
  }

  async announceAiEliminated(n: string) {
    await this.say(`${n}, ${this.pick(this.reactions.aiEliminated)}`);
  }

  stop() {
    ttsService.stop();
  }

  private async say(text: string) {
    return ttsService.speak(text);
  }
}

export const presenter = new PresenterService();
