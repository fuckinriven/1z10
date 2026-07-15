import type { Contestant, Personality } from '../types/game';

const COLORS = [
  '#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4',
  '#3b82f6', '#8b5cf6', '#ec4899', '#14b8a6',
];

function avatar(params: string): string {
  return `https://api.dicebear.com/9.x/avataaars/svg?${params}`;
}

interface AIData {
  id: number;
  name: string;
  skill: number;
  buzzSpeed: number;
  emoji: string;
  avatarUrl: string;
  color: string;
  personality: Personality;
}

const AI_ROSTER: AIData[] = [
  // 1. Prof. Zbigniew — the arrogant know-it-all who answers fast but mumbles
  {
    id: 1, name: 'Prof. Zbigniew Kowalski', skill: 0.60, buzzSpeed: 650,
    emoji: '👨‍🏫',
    avatarUrl: avatar('seed=zbigniew&top=turban&accessories=blank&facialHair=beardMedium&clothe=blazerShirt&eyes=eyeRoll&mouth=disbelief&skin=light'),
    color: COLORS[0],
    personality: {
      trait: 'Arogancki ekspert',
      nominationStyle: 'showman',
      catchphrases: {
        correct: [
          'Oczywiście, że to wiem. Pytanie było banalne.',
          'Hm. Spodziewałem się czegoś trudniejszego.',
          'Proszę, żaden problem.',
          'Na moim poziomie to było oczywiste.',
        ],
        wrong: [
          'Niemożliwe... To chyba pomyłka w pytaniu.',
          'Yyy... no cóż, każdemu zdarza się potknąć.',
          'To był wyjątek potwierdzający regułę.',
          'Dziwne... zupełnie dziwne pytanie.',
        ],
        nominate: [
          'Niech on/ona spróbuje, może będzie miał więcej szczęścia.',
          'Proponuję sprawdzić wiedzę pana/pani X.',
          'Ciekaw jestem, czy ktoś inny sobie poradzi.',
        ],
        buzz: [
          'Już ja to wiem!',
          'Proszę o ciszę!',
          'Hm, to akurat wiem.',
        ],
      },
    },
  },
  // 2. Anna Nowak — sweet and cheerful, knows a lot but is humble
  {
    id: 2, name: 'Mgr Anna Nowak', skill: 0.55, buzzSpeed: 950,
    emoji: '👩‍💼',
    avatarUrl: avatar('seed=anna&top=longHairBigHair&accessories=blank&facialHair=blank&clothe=shirtVNeck&eyes=happy&mouth=smile&skin=light'),
    color: COLORS[1],
    personality: {
      trait: 'Sympatyczna profesjonalistka',
      nominationStyle: 'random',
      catchphrases: {
        correct: [
          'Ojej, rzeczywiście! Świetne pytanie!',
          'Udało się! Cieszę się, że to wiedziałam.',
          'Fajne pytanie! I miło, że znałam odpowiedź.',
          'Ależ ciekawe pytanie! Trafiłam!',
        ],
        wrong: [
          'Och, nie wiedziałam. Ale ciekawe!',
          'No cóż, nie można wiedzieć wszystkiego!',
          'Przepraszam, pomyliłam się. Następnym razem!',
          'Ach, szkoda! Ale fajnie się gra!',
        ],
        nominate: [
          'Może pan/pani X? Jestem ciekawa jego/jej wiedzy!',
          'O, niech pan/pani Y spróbuje!',
          'Myślę, że teraz kolej na pana/panią Z!',
        ],
        buzz: [
          'Oooch, ja to wiem!',
          'Proszę, pozwólcie mi spróbować!',
          'Ojej, ja to wiem, ja to wiem!',
        ],
      },
    },
  },
  // 3. Jan Wiśniewski — the mumbler, answers very slowly, gets stuff right
  {
    id: 3, name: 'Dr hab. Jan Wiśniewski', skill: 0.58, buzzSpeed: 1200,
    emoji: '👨‍🔬',
    avatarUrl: avatar('seed=jan&top=shortHairShortFlat&accessories=eyepatch&facialHair=beardLight&clothe=collarSweater&eyes=concerned&mouth=serious&skin=pale'),
    color: COLORS[2],
    personality: {
      trait: 'Mamroczący profesor',
      nominationStyle: 'strategist',
      catchphrases: {
        correct: [
          'Yyyy... znaczy... no tak. Wimbledon... to znaczy... odpowiedź.',
          'Hmmm... po dłuższym namyśle... skłaniałbym się ku... tej odpowiedzi. Tak.',
          'No... po głębokiej analizie... mogę potwierdzić.',
          'Yyy... to jest... jakby to powiedzieć... poprawne.',
        ],
        wrong: [
          'Yyyy... to znaczy... nie trafiłem. No cóż.',
          'Hm... widocznie moja wiedza... w tym temacie... jest niepełna.',
          'No... proszę... bardzo interesujące. Będę musiał... doczytać.',
        ],
        nominate: [
          'Yyy... niech pan/pani X... spróbuje.',
          'Proponuję... żeby teraz... odpowiedział pan/pani Y.',
          'Hm... może pan/pani Z... będzie wiedział.',
        ],
        buzz: [
          'Yyy... przepraszam... ja chciałem...',
          'Hm... mógłbym... spróbować.',
          'No... pozwólcie państwo...',
        ],
      },
    },
  },
  // 4. Krzysztof — the annoying one who talks loud but often gets it wrong
  {
    id: 4, name: 'Inż. Krzysztof Adamczyk', skill: 0.40, buzzSpeed: 700,
    emoji: '👨‍💻',
    avatarUrl: avatar('seed=krzysztof&top=shortHairDreads01&accessories=blank&facialHair=moustacheFancy&clothe=hoodie&eyes=wink&mouth=grimace&skin=yellow'),
    color: COLORS[3],
    personality: {
      trait: 'Głośny pewniak',
      nominationStyle: 'hunter',
      catchphrases: {
        correct: [
          'No jak mogło być inaczej! Mówiłem!',
          'A nie mówiłem? Przecież to oczywiste!',
          'Łatwizna! Dawajcie następne!',
          'Haha! I po sprawie!',
        ],
        wrong: [
          'Co?! Niemożliwe! Tam była podpucha!',
          'No bez jaj! Źle sformułowane pytanie!',
          'Eee... no dobra, pomyliłem się. Ale następnym razem!',
          'Kto tak wymyśla te pytania?!',
        ],
        nominate: [
          'Niech on/ona spróbuje, ale nie ma szans!',
          'Dawaj, teraz pan/pani X! Zobaczymy!',
          'A może pan/pani Y? Ha!',
        ],
        buzz: [
          'Ja wiem! Ja! Ja!',
          'Ooooo! To akurat wiem świetnie!',
          'Spadajcie, moja kolej!',
        ],
      },
    },
  },
  // 5. Maria — the nervous one who stresses out
  {
    id: 5, name: 'Lek. Maria Jankowska', skill: 0.50, buzzSpeed: 1000,
    emoji: '👩‍⚕️',
    avatarUrl: avatar('seed=maria&top=longHairStraight&accessories=blank&facialHair=blank&clothe=shirtCrewNeck&eyes=squint&mouth=concerned&skin=pale'),
    color: COLORS[4],
    personality: {
      trait: 'Stresująca się perfekcjonistka',
      nominationStyle: 'strategist',
      catchphrases: {
        correct: [
          'Ojej... naprawdę? Udało mi się?',
          'Nie wierzę... myślałam, że się pomyliłam...',
          'O matko! Dobrze odpowiedziałam!',
          'Ach, jakie szczęście! Trafiłam!',
        ],
        wrong: [
          'No tak... wiedziałam, że nie umiem...',
          'Przepraszam, bardzo mi przykro...',
          'Ojejku... fatalnie. Totalnie fatalnie.',
          'No i oczywiście... zawaliłam.',
        ],
        nominate: [
          'Może pan/pani X? Jestem pewna, że da radę...',
          'Proszę, niech pan/pani Y spróbuje, ja się nie nadaję...',
          'Pani/Pan Z, proszę, ratuj sytuację...',
        ],
        buzz: [
          'Ojej, ojej... chyba wiem...',
          'Boże... próbuję, dobrze?',
          'Yyy... chyba... chyba mogę...',
        ],
      },
    },
  },
  // 6. Piotr — lucky idiot, gets easy ones wrong, hard ones right
  {
    id: 6, name: 'Mgr Piotr Lewandowski', skill: 0.45, buzzSpeed: 900,
    emoji: '👨‍🎓',
    avatarUrl: avatar('seed=piotr&top=shortHairSideswept&accessories=roundGlasses&facialHair=blank&clothe=graphicShirt&clotheGraphic=pizza&eyes=surprised&mouth=twinkle&skin=light'),
    color: COLORS[5],
    personality: {
      trait: 'Szczęściarz z przypadku',
      nominationStyle: 'random',
      catchphrases: {
        correct: [
          'No proszę! Czasem się udaje!',
          'Nie spodziewałem się, ale jest!',
          'Ło! A jednak trafiłem!',
          'No kto by pomyślał! Udało się!',
        ],
        wrong: [
          'No jasne, akurat tego nie wiedziałem...',
          'A nie, no łatwizna... a tu klapa.',
          'Haha, no dobra, znowu mi nie poszło.',
          'No i oczywiście... typowe.',
        ],
        nominate: [
          'Niech pan/pani X spróbuje, może ma więcej szczęścia!',
          'Dawaj, teraz pan/pani Y!',
          'A może pan/pani Z? Zobaczymy!',
        ],
        buzz: [
          'O! O! To wiem! Chyba...',
          'Dawajcie, to akurat może być moje!',
          'Aaaaa, to znam! Albo nie...',
        ],
      },
    },
  },
  // 7. Barbara — the quiet strategic player, knows a lot, targets strongest
  {
    id: 7, name: 'Dr Barbara Kamińska', skill: 0.62, buzzSpeed: 780,
    emoji: '👩‍🏫',
    avatarUrl: avatar('seed=barbara&top=shortHairShortWaved&accessories=prescription01&facialHair=blank&clothe=blazerShirt&eyes=default&mouth=default&skin=tanned'),
    color: COLORS[6],
    personality: {
      trait: 'Cicha strateg',
      nominationStyle: 'strategist',
      catchphrases: {
        correct: [
          'Tak, wiedziałam.',
          'Oczekiwałam tego pytania.',
          'Dobrze. Kontrolujemy sytuację.',
          'Tak, to było przewidywalne.',
        ],
        wrong: [
          'Interesujące. Nie tędy droga.',
          'Zapamiętam. Następnym razem.',
          'Błąd. Wyciągnę wnioski.',
          'Nie spodziewałam się tego. Notuję.',
        ],
        nominate: [
          'Proponuję pana/panią X. Sprawdźmy jego/jej wiedzę.',
          'Niech pan/pani Y odpowiada. Interesuje mnie to.',
          'Wybór pada na pana/panią Z.',
        ],
        buzz: [
          'Mogę?',
          'Proszę.',
          'Teraz ja.',
        ],
      },
    },
  },
  // 8. Tomasz Zieliński — arrogant, fastest, best player
  {
    id: 8, name: 'Prof. Tomasz Zieliński', skill: 0.65, buzzSpeed: 550,
    emoji: '👨‍🎓',
    avatarUrl: avatar('seed=tomasz&top=shortHairTheCaesar&accessories=sunglasses&facialHair=fullBeard&clothe=blazerSweater&eyes=close&mouth=serious&skin=brown'),
    color: COLORS[7],
    personality: {
      trait: 'Arogancki mistrz',
      nominationStyle: 'showman',
      catchphrases: {
        correct: [
          'Dziecinnie proste.',
          'Czy mogę dostać coś trudniejszego?',
          'Marnuję tu swój talent.',
          'Kolejne pytanie, kolejny punkt.',
        ],
        wrong: [
          'Co? To absolutnie niedopuszczalne.',
          'Pomyłka systemu. Zdecydowanie.',
          'Nie mam w zwyczaju się mylić.',
          'Hm. Anomalia statystyczna.',
        ],
        nominate: [
          'Niech ktoś inny spróbuje, może będzie ciekawiej.',
          'Daję szansę panu/pani X.',
          'Słuchajmy, co ma do powiedzenia pan/pani Y.',
        ],
        buzz: [
          'Oczywiście, że ja.',
          'Zanim ktokolwiek zdąży pomyśleć...',
          'Nie ma sensu, żeby ktokolwiek inny próbował.',
        ],
      },
    },
  },
  // 9. Ewa Szymańska — positive and cheerful but weak
  {
    id: 9, name: 'Mgr Ewa Szymańska', skill: 0.35, buzzSpeed: 1100,
    emoji: '👩‍💻',
    avatarUrl: avatar('seed=ewa&top=longHairCurvy&accessories=blank&facialHair=blank&clothe=hoodie&eyes=happy&mouth=smile&skin=light'),
    color: COLORS[8],
    personality: {
      trait: 'Wiecznie pozytywna',
      nominationStyle: 'hunter',
      catchphrases: {
        correct: [
          'Tak! Udało się! Jestem taka szczęśliwa!',
          'Wow! Nawet mi dobrze poszło!',
          'Świetnie! Dzień dobry zaczyna się dobrze!',
          'Ha! Kto by pomyślał! Super sprawa!',
        ],
        wrong: [
          'No trudno! Następnym razem będzie lepiej!',
          'Nie szkodzi! Ważne, że się bawimy!',
          'Ajj, ale i tak jest fajnie!',
          'Następne pytanie będzie moje!',
        ],
        nominate: [
          'O, niech pan/pani X pokaże co potrafi!',
          'Dawaj, pan/pani Y! Dasz radę!',
          'Teraz pan/pani Z! Trzymam kciuki!',
        ],
        buzz: [
          'Ooo! Ja wiem! Chyba!',
          'Dajcie mi szansę!',
          'Proooszę! Ja! Ja!',
        ],
      },
    },
  },
];

function pickRandom(arr: string[]): string {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getRandomCatchphrase(contestant: Contestant, type: keyof Personality['catchphrases'], targetName?: string): string {
  const phrases = contestant.personality.catchphrases[type];
  let phrase = pickRandom(phrases);
  // Replace X, Y, Z placeholders with actual target name
  if (targetName) {
    phrase = phrase.replace(/\bX\b|\bY\b|\bZ\b/g, targetName);
  }
  return phrase;
}

export function createContestants(playerPosition: number): Contestant[] {
  const contestants: Contestant[] = [];

  for (let pos = 1; pos <= 10; pos++) {
    if (pos === playerPosition) {
      contestants.push({
        id: 0,
        name: 'TY',
        chances: 3,
        points: 0,
        isHuman: true,
        isEliminated: false,
        passedStage1: false,
        position: pos,
        emoji: '🎯',
        avatarUrl: avatar('seed=gracz&top=shortHairTheCaesar&accessories=blank&facialHair=blank&clothe=shirtCrewNeck&eyes=default&mouth=smile&skin=light'),
        color: '#ffd700',
        skill: 0,
        buzzSpeed: 0,
        personality: {
          trait: 'Zawodnik',
          nominationStyle: 'random',
          catchphrases: { correct: [], wrong: [], nominate: [], buzz: [] },
        },
      });
    } else {
      const aiIndex = pos < playerPosition ? pos - 1 : pos - 2;
      const ai = AI_ROSTER[aiIndex];
      contestants.push({
        id: ai.id,
        name: ai.name,
        chances: 3,
        points: 0,
        isHuman: false,
        isEliminated: false,
        passedStage1: false,
        position: pos,
        emoji: ai.emoji,
        avatarUrl: ai.avatarUrl,
        color: ai.color,
        skill: ai.skill,
        buzzSpeed: ai.buzzSpeed,
        personality: ai.personality,
      });
    }
  }

  return contestants;
}
