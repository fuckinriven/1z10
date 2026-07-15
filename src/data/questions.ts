import type { Question } from '../types/game';

export const QUESTIONS: Question[] = [
  // === GEOGRAFIA ===
  {
    id: 1, text: 'Jaka jest najdłuższa rzeka w Polsce?', answer: 'Wisła',
    options: ['Odra', 'Wisła', 'Warta', 'Bug'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 2, text: 'Które miasto jest stolicą Małopolski?', answer: 'Kraków',
    options: ['Warszawa', 'Wrocław', 'Gdańsk', 'Kraków'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 3, text: 'Najwyższy szczyt Polski to…', answer: 'Rysy',
    options: ['Rysy', 'Giewont', 'Kasprowy Wierch', 'Śnieżka'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 4, text: 'Ile województw ma Polska?', answer: '16',
    options: ['14', '18', '20', '16'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 5, text: 'Jaki ocean jest największy na Ziemi?', answer: 'Spokojny',
    options: ['Atlantycki', 'Spokojny', 'Indyjski', 'Arktyczny'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 6, text: 'Które państwo ma największą powierzchnię na świecie?', answer: 'Rosja',
    options: ['Chiny', 'Kanada', 'Rosja', 'USA'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 7, text: 'Morze Bałtyckie jest morzem…', answer: 'śródlądowym',
    options: ['otwartym', 'przybrzeżnym', 'śródlądowym', 'marginalnym'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 8, text: 'Stolica Australii to…', answer: 'Canberra',
    options: ['Sydney', 'Melbourne', 'Perth', 'Canberra'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 9, text: 'Która pustynia jest największą gorącą pustynią świata?', answer: 'Sahara',
    options: ['Gobi', 'Kalahari', 'Sahara', 'Arabijska'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 10, text: 'Najdłuższa rzeka świata to…', answer: 'Amazonka',
    options: ['Nil', 'Jangcy', 'Amazonka', 'Missisipi'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 11, text: 'Które państwo leży najdalej na południe Ameryki Południowej?', answer: 'Chile',
    options: ['Argentyna', 'Chile', 'Urugwaj', 'Peru'],
    category: 'Geografia', difficulty: 'hard',
  },
  {
    id: 12, text: 'Jaka jest stolica Mongolii?', answer: 'Ułan Bator',
    options: ['Pekin', 'Ułan Bator', 'Bangkok', 'Astana'],
    category: 'Geografia', difficulty: 'hard',
  },

  // === HISTORIA ===
  {
    id: 13, text: 'W którym roku miała bitwa pod Grunwaldem?', answer: '1410',
    options: ['1409', '1411', '1415', '1410'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 14, text: 'Kto był pierwszym królem Polski?', answer: 'Bolesław Chrobry',
    options: ['Bolesław Chrobry', 'Mieszko I', 'Władysław Łokietek', 'Kazimierz Wielki'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 15, text: 'W którym roku Polska wstąpiła do Unii Europejskiej?', answer: '2004',
    options: ['2002', '2004', '2006', '2008'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 16, text: 'Konstytucja 3 Maja została uchwalona w roku…', answer: '1791',
    options: ['1791', '1789', '1793', '1795'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 17, text: 'Bitwa Warszawska 1920 roku nazywana jest „Cudem nad Wisłą”. Kto dowodził wojskami polskimi?', answer: 'Józef Piłsudski',
    options: ['Józef Haller', 'Józef Piłsudski', 'Władysław Sikorski', 'Kazimierz Sosnkowski'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 18, text: 'W którym roku wybuchło Powstanie Warszawskie?', answer: '1944',
    options: ['1943', '1944', '1945', '1942'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 19, text: 'Kto był ostatnim królem Polski?', answer: 'Stanisław August Poniatowski',
    options: ['August III Sas', 'Stanisław Leszczyński', 'Jan III Sobieski', 'Stanisław August Poniatowski'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 20, text: 'W którym roku upadł mur berliński?', answer: '1989',
    options: ['1987', '1988', '1989', '1990'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 21, text: 'Średniowieczna wyprawa krzyżowa, która zdobyła Konstantynopol w 1204 roku, to…', answer: 'IV wyprawa krzyżowa',
    options: ['IV wyprawa krzyżowa', 'I wyprawa krzyżowa', 'III wyprawa krzyżowa', 'VI wyprawa krzyżowa'],
    category: 'Historia', difficulty: 'hard',
  },
  {
    id: 22, text: 'Bitwa pod Wiedniem odbyła się w roku…', answer: '1683',
    options: ['1673', '1693', '1683', '1663'],
    category: 'Historia', difficulty: 'medium',
  },

  // === NAUKA ===
  {
    id: 23, text: 'Jaki pierwiastek chemiczny ma symbol O?', answer: 'Tlen',
    options: ['Ołów', 'Tlen', 'Osm', 'Wodór'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 24, text: 'Ile wynosi przyspieszenie ziemskie (w przybliżeniu)?', answer: '9,81 m/s²',
    options: ['8,91 m/s²', '9,81 m/s²', '10,81 m/s²', '9,18 m/s²'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 25, text: 'Który pierwiastek jest najlżejszy?', answer: 'Wodór',
    options: ['Wodór', 'Hel', 'Lit', 'Beryl'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 26, text: 'Ile chromosomów ma człowiek?', answer: '46',
    options: ['44', '48', '46', '42'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 27, text: 'Jaka jest prędkość światła w próżni (w km/s)?', answer: '299 792',
    options: ['199 792', '399 792', '150 000', '299 792'],
    category: 'Nauka', difficulty: 'hard',
  },
  {
    id: 28, text: 'Kto sformułował teorię względności?', answer: 'Albert Einstein',
    options: ['Isaac Newton', 'Albert Einstein', 'Niels Bohr', 'Max Planck'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 29, text: 'Jaka jest najmniejsza jednostka materii?', answer: 'Atom',
    options: ['Cząsteczka', 'Proton', 'Atom', 'Elektron'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 30, text: 'Które zwierzę jest najszybsze na lądzie?', answer: 'Gepard',
    options: ['Lew', 'Antylopa', 'Koń', 'Gepard'],
    category: 'Nauka', difficulty: 'easy',
  },

  // === LITERATURA ===
  {
    id: 31, text: 'Kto napisał „Pana Tadeusza”?', answer: 'Adam Mickiewicz',
    options: ['Juliusz Słowacki', 'Adam Mickiewicz', 'Henryk Sienkiewicz', 'Cyprian Kamil Norwid'],
    category: 'Literatura', difficulty: 'easy',
  },
  {
    id: 32, text: '„Lalka” Bolesława Prusa – jak nazywa się główny bohater?', answer: 'Stanisław Wokulski',
    options: ['Rzecki', 'Łęcki', 'Ochocki', 'Stanisław Wokulski'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 33, text: 'Kto jest autorem „Quo Vadis”?', answer: 'Henryk Sienkiewicz',
    options: ['Henryk Sienkiewicz', 'Eliza Orzeszkowa', 'Stefan Żeromski', 'Władysław Reymont'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 34, text: '„Romeo i Julia” to sztuka którego dramaturga?', answer: 'William Shakespeare',
    options: ['Molier', 'C.S. Lewis', 'George Bernard Shaw', 'William Shakespeare'],
    category: 'Literatura', difficulty: 'easy',
  },
  {
    id: 35, text: 'Ile ksiąg ma „Pan Tadeusz”?', answer: '12',
    options: ['10', '12', '14', '8'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 36, text: 'W jakim mieście rozgrywa się akcja „Lalki”?', answer: 'Warszawa',
    options: ['Kraków', 'Warszawa', 'Paryż', 'Wrocław'],
    category: 'Literatura', difficulty: 'medium',
  },

  // === SPORT ===
  {
    id: 37, text: 'Ilu graczy liczy drużyna siatkarska na boisku?', answer: '6',
    options: ['5', '7', '8', '6'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 38, text: 'Kto jest najbardziej utytułowanym polskim skoczkiem narciarskim?', answer: 'Adam Małysz',
    options: ['Kamil Stoch', 'Dawid Kubacki', 'Adam Małysz', 'Piotr Żyła'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 39, text: 'Ile czasu trwa mecz piłki nożnej?', answer: '90 minut',
    options: ['80 minut', '100 minut', '90 minut', '120 minut'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 40, text: 'Który polski lekkoatleta zdobył złoto olimpijskie w rzucie młotem w 2024 roku?', answer: 'Wojciech Nowicki',
    options: ['Wojciech Nowicki', 'Paweł Fajdek', 'Piotr Małachowski', 'Michał Haratyk'],
    category: 'Sport', difficulty: 'medium',
  },
  {
    id: 41, text: 'W którym roku Polska była gospodarzem Mistrzostw Europy w Piłce Nożnej?', answer: '2012',
    options: ['2010', '2012', '2014', '2016'],
    category: 'Sport', difficulty: 'medium',
  },
  {
    id: 42, text: 'Który klub piłkarski zdobył najwięcej tytułów mistrza Polski?', answer: 'Legia Warszawa',
    options: ['Górnik Zabrze', 'Wisła Kraków', 'Ruch Chorzów', 'Legia Warszawa'],
    category: 'Sport', difficulty: 'hard',
  },

  // === KULTURA ===
  {
    id: 43, text: 'Kto wyreżyserował film „Miasto 44”?', answer: 'Jan Komasa',
    options: ['Andrzej Wajda', 'Jan Komasa', 'Paweł Pawlikowski', 'Agnieszka Holland'],
    category: 'Kultura', difficulty: 'medium',
  },
  {
    id: 44, text: 'Jaki instrument kojarzy się z Fryderykiem Chopinem?', answer: 'Fortepian',
    options: ['Skrzypce', 'Fortepian', 'Wiolonczela', 'Flet'],
    category: 'Kultura', difficulty: 'easy',
  },
  {
    id: 45, text: 'Kto namalował „Damę z gronostajem”?', answer: 'Leonardo da Vinci',
    options: ['Rafael Santi', 'Michał Anioł', 'Sandro Botticelli', 'Leonardo da Vinci'],
    category: 'Kultura', difficulty: 'medium',
  },
  {
    id: 46, text: 'Ile oskarów zdobył film „Ida” Pawła Pawlikowskiego?', answer: '1',
    options: ['1', '2', '3', '0'],
    category: 'Kultura', difficulty: 'hard',
  },
  {
    id: 47, text: 'Polski reżyser, twórca „Ziemi obiecanej” to…', answer: 'Andrzej Wajda',
    options: ['Andrzej Wajda', 'Krzysztof Kieślowski', 'Krzysztof Zanussi', 'Roman Polański'],
    category: 'Kultura', difficulty: 'medium',
  },
  {
    id: 48, text: 'W jakim mieście odbywa się coroczny Festiwal Piosenki Polskiej?', answer: 'Opole',
    options: ['Opole', 'Kraków', 'Sopot', 'Zakopane'],
    category: 'Kultura', difficulty: 'easy',
  },

  // === POLITYKA ===
  {
    id: 49, text: 'Kto był pierwszym prezydentem III RP?', answer: 'Wojciech Jaruzelski',
    options: ['Lech Wałęsa', 'Bronisław Komorowski', 'Aleksander Kwaśniewski', 'Wojciech Jaruzelski'],
    category: 'Polityka', difficulty: 'hard',
  },
  {
    id: 50, text: 'W którym roku powstała „Solidarność”?', answer: '1980',
    options: ['1980', '1978', '1981', '1982'],
    category: 'Polityka', difficulty: 'medium',
  },
  {
    id: 51, text: 'Kto był premierem Polski w czasie wprowadzenia stanu wojennego?', answer: 'Wojciech Jaruzelski',
    options: ['Tadeusz Mazowiecki', 'Mieczysław Rakowski', 'Wojciech Jaruzelski', 'Edward Babiuch'],
    category: 'Polityka', difficulty: 'medium',
  },
  {
    id: 52, text: 'Ile kadencji może sprawować prezydent Polski?', answer: '2',
    options: ['1', '3', 'bez ograniczeń', '2'],
    category: 'Polityka', difficulty: 'easy',
  },

  // === MATEMATYKA ===
  {
    id: 53, text: 'Ile wynosi liczba Pi (w przybliżeniu)?', answer: '3,14',
    options: ['2,72', '3,41', '3,14', '4,14'],
    category: 'Matematyka', difficulty: 'easy',
  },
  {
    id: 54, text: 'Jaki jest pierwiastek kwadratowy ze 144?', answer: '12',
    options: ['11', '13', '14', '12'],
    category: 'Matematyka', difficulty: 'easy',
  },
  {
    id: 55, text: 'Ile stopni ma kąt prosty?', answer: '90',
    options: ['90', '45', '180', '360'],
    category: 'Matematyka', difficulty: 'easy',
  },
  {
    id: 56, text: 'Która liczba jest liczbą pierwszą?', answer: '17',
    options: ['15', '16', '18', '17'],
    category: 'Matematyka', difficulty: 'medium',
  },

  // === MUZYKA ===
  {
    id: 57, text: 'Który zespół wykonał utwór „Sen o Warszawie”?', answer: 'Czesław Niemen',
    options: ['Lady Pank', 'Perfect', 'Dżem', 'Czesław Niemen'],
    category: 'Muzyka', difficulty: 'medium',
  },
  {
    id: 58, text: 'Kto jest autorem „Poloneza As-dur”?', answer: 'Fryderyk Chopin',
    options: ['Stanisław Moniuszko', 'Fryderyk Chopin', 'Wojciech Kilar', 'Henryk Wieniawski'],
    category: 'Muzyka', difficulty: 'medium',
  },
  {
    id: 59, text: 'Jaki jest narodowy taniec polski?', answer: 'Polonez',
    options: ['Polonez', 'Walc', 'Mazurek', 'Krakowiak'],
    category: 'Muzyka', difficulty: 'easy',
  },
  {
    id: 60, text: 'Z którego roku pochodzi utwór „Niepokonani” Perfectu?', answer: '1982',
    options: ['1982', '1980', '1984', '1986'],
    category: 'Muzyka', difficulty: 'hard',
  },

  // =============== NOWE PYTANIA (id 61-100) ===============

  // === GEOGRAFIA (więcej) ===
  {
    id: 61, text: 'Jaka jest stolica Francji?', answer: 'Paryż',
    options: ['Lyon', 'Marsylia', 'Paryż', 'Nicea'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 62, text: 'Które morze oblewa polskie wybrzeże?', answer: 'Bałtyckie',
    options: ['Czarne', 'Bałtyckie', 'Północne', 'Śródziemne'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 63, text: 'Największe miasto w Polsce to…', answer: 'Warszawa',
    options: ['Kraków', 'Łódź', 'Wrocław', 'Warszawa'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 64, text: 'Jaka jest stolica Włoch?', answer: 'Rzym',
    options: ['Rzym', 'Mediolan', 'Wenecja', 'Neapol'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 65, text: 'Który kraj ma najwięcej mieszkańców na świecie?', answer: 'Indie',
    options: ['Chiny', 'Indie', 'USA', 'Indonezja'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 66, text: 'Jaka jest stolica Wielkiej Brytanii?', answer: 'Londyn',
    options: ['Londyn', 'Manchester', 'Edynburg', 'Birmingham'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 67, text: 'Największe jezioro w Polsce to…', answer: 'Śniardwy',
    options: ['Mamry', 'Łebsko', 'Gopło', 'Śniardwy'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 68, text: 'Które państwo leży najbliżej Polski na zachód?', answer: 'Niemcy',
    options: ['Niemcy', 'Czechy', 'Holandia', 'Dania'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 69, text: 'Jaka jest najwyższa góra na Ziemi?', answer: 'Mount Everest',
    options: ['Mount Everest', 'K2', 'Góra Kościuszki', 'Mont Blanc'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 70, text: 'Stolica Norwegii to…', answer: 'Oslo',
    options: ['Sztokholm', 'Helsinki', 'Oslo', 'Kopenhaga'],
    category: 'Geografia', difficulty: 'medium',
  },

  // === HISTORIA (więcej) ===
  {
    id: 71, text: 'W którym roku zakończyła się II wojna światowa?', answer: '1945',
    options: ['1944', '1945', '1946', '1943'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 72, text: 'Kto wynalazł druk?', answer: 'Jan Gutenberg',
    options: ['Mikołaj Kopernik', 'Leonardo da Vinci', 'Jan Gutenberg', 'Galileusz'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 73, text: 'W którym roku Polska odzyskała niepodległość?', answer: '1918',
    options: ['1916', '1920', '1918', '1914'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 74, text: 'Kto był pierwszym człowiekiem na Księżycu?', answer: 'Neil Armstrong',
    options: ['Buzz Aldrin', 'Jurij Gagarin', 'John Glenn', 'Neil Armstrong'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 75, text: 'Który polski papież pochodził z Wadowic?', answer: 'Jan Paweł II',
    options: ['Benedykt XVI', 'Jan Paweł II', 'Franciszek', 'Paweł VI'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 76, text: 'Bitwa pod Waterloo miała miejsce w roku…', answer: '1815',
    options: ['1805', '1825', '1815', '1795'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 77, text: 'Kto był wodzem powstania styczniowego?', answer: 'Romuald Traugutt',
    options: ['Tadeusz Kościuszko', 'Józef Piłsudski', 'Jan Kiliński', 'Romuald Traugutt'],
    category: 'Historia', difficulty: 'hard',
  },
  {
    id: 78, text: 'W którym roku odbyły się pierwsze nowożytne igrzyska olimpijskie?', answer: '1896',
    options: ['1890', '1900', '1896', '1904'],
    category: 'Historia', difficulty: 'medium',
  },

  // === NAUKA (więcej) ===
  {
    id: 79, text: 'Ile nóg ma pająk?', answer: '8',
    options: ['8', '6', '10', '4'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 80, text: 'Który gaz jest niezbędny do oddychania?', answer: 'Tlen',
    options: ['Tlen', 'Azot', 'Dwutlenek węgla', 'Wodór'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 81, text: 'Ile zębów ma dorosły człowiek?', answer: '32',
    options: ['28', '32', '36', '30'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 82, text: 'Jaka jest największa planeta Układu Słonecznego?', answer: 'Jowisz',
    options: ['Saturn', 'Jowisz', 'Neptun', 'Uran'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 83, text: 'Czym oddychają ryby?', answer: 'Skrzelami',
    options: ['Płucami', 'Skrzelami', 'Skórą', 'Płetwami'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 84, text: 'Ile stopni Celsjusza wynosi temperatura wrzenia wody?', answer: '100',
    options: ['90', '110', '120', '100'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 85, text: 'Który narząd odpowiada za pompowanie krwi?', answer: 'Serce',
    options: ['Płuca', 'Wątroba', 'Mózg', 'Serce'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 86, text: 'Najmniejszy ptak na świecie to…', answer: 'Koliber',
    options: ['Sikorka', 'Wróbel', 'Koliber', 'Mysikrólik'],
    category: 'Nauka', difficulty: 'easy',
  },

  // === LITERATURA (więcej) ===
  {
    id: 87, text: 'Kto napisał „Krzyżaków”?', answer: 'Henryk Sienkiewicz',
    options: ['Adam Mickiewicz', 'Henryk Sienkiewicz', 'Stefan Żeromski', 'Władysław Reymont'],
    category: 'Literatura', difficulty: 'easy',
  },
  {
    id: 88, text: 'Autor „Dziadów” to…', answer: 'Adam Mickiewicz',
    options: ['Juliusz Słowacki', 'Zygmunt Krasiński', 'Cyprian Kamil Norwid', 'Adam Mickiewicz'],
    category: 'Literatura', difficulty: 'easy',
  },
  {
    id: 89, text: 'Główna bohaterka „Pana Tadeusza” to…', answer: 'Zosia',
    options: ['Telimena', 'Hrabina', 'Ewa', 'Zosia'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 90, text: 'Kto napisał powieść „Chłopi”?', answer: 'Władysław Reymont',
    options: ['Henryk Sienkiewicz', 'Władysław Reymont', 'Stefan Żeromski', 'Eliza Orzeszkowa'],
    category: 'Literatura', difficulty: 'medium',
  },

  // === SPORT (więcej) ===
  {
    id: 91, text: 'Ilu koszykarzy gra na boisku w jednej drużynie?', answer: '5',
    options: ['4', '6', '7', '5'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 92, text: 'Jaki kolor kartki oznacza ostrzeżenie w piłce nożnej?', answer: 'Żółty',
    options: ['Czerwony', 'Zielony', 'Niebieski', 'Żółty'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 93, text: 'Który polski piłkarz zdobył Złotą Piłkę?', answer: 'Robert Lewandowski',
    options: ['Zbigniew Boniek', 'Robert Lewandowski', 'Grzegorz Lato', 'Kazimierz Deyna'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 94, text: 'Ile zawodników liczy drużyna piłki ręcznej na boisku?', answer: '7',
    options: ['7', '5', '6', '8'],
    category: 'Sport', difficulty: 'medium',
  },
  {
    id: 95, text: 'Jaki dystans ma maraton?', answer: '42,195 km',
    options: ['40 km', '42,195 km', '45 km', '41 km'],
    category: 'Sport', difficulty: 'medium',
  },

  // === KULTURA (więcej) ===
  {
    id: 96, text: 'Kto namalował „Mona Lizę”?', answer: 'Leonardo da Vinci',
    options: ['Michał Anioł', 'Rafael Santi', 'Leonardo da Vinci', 'Tycjan'],
    category: 'Kultura', difficulty: 'easy',
  },
  {
    id: 97, text: 'Które miasto jest stolicą polskiego filmu?', answer: 'Łódź',
    options: ['Łódź', 'Warszawa', 'Kraków', 'Wrocław'],
    category: 'Kultura', difficulty: 'hard',
  },
  {
    id: 98, text: 'Zespół muzyczny Dżem śpiewał o…', answer: 'Whisky',
    options: ['Whisky', 'Piwie', 'Wódce', 'Winie'],
    category: 'Kultura', difficulty: 'medium',
  },

  // === PRZYRODA ===
  {
    id: 99, text: 'Która krowa daje mleko? Tylko ta, która…', answer: 'miała cielę',
    options: ['ma rogi', 'miała cielę', 'je trawę', 'ma ogon'],
    category: 'Przyroda', difficulty: 'easy',
  },
  {
    id: 100, text: 'Które zwierzę zapada w sen zimowy?', answer: 'Niedźwiedź',
    options: ['Lis', 'Niedźwiedź', 'Wilk', 'Sarna'],
    category: 'Przyroda', difficulty: 'easy',
  },
// =============== NOWE PYTANIA GENEROWANE (id 101-580) ===============

// === GEOGRAFIA ===
// ...(questions from generator)...

  {
    id: 101, text: 'Stolicą Hiszpanii jest…', answer: 'Madryt',
    options: ['Amsterdam', 'Madryt', 'Barcelona', 'Rzym'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 102, text: 'Stolicą Portugalii jest…', answer: 'Lizbona',
    options: ['Berlin', 'Rzym', 'Marsylia', 'Lizbona'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 103, text: 'Stolicą Holandii jest…', answer: 'Amsterdam',
    options: ['Wiedeń', 'Bruksela', 'Amsterdam', 'Madryt'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 104, text: 'Stolicą Belgii jest…', answer: 'Bruksela',
    options: ['Bruksela', 'Kopenhaga', 'Sztokholm', 'Wiedeń'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 105, text: 'Stolicą Austrii jest…', answer: 'Wiedeń',
    options: ['Mediolan', 'Amsterdam', 'Wiedeń', 'Zurych'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 106, text: 'Stolicą Szwajcarii jest…', answer: 'Berno',
    options: ['Barcelona', 'Paryż', 'Mediolan', 'Berno'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 107, text: 'Stolicą Szwecji jest…', answer: 'Sztokholm',
    options: ['Rzym', 'Oslo', 'Sztokholm', 'Madryt'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 108, text: 'Stolicą Norwegii jest…', answer: 'Oslo',
    options: ['Sztokholm', 'Mediolan', 'Oslo', 'Bruksela'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 109, text: 'Stolicą Danii jest…', answer: 'Kopenhaga',
    options: ['Barcelona', 'Kopenhaga', 'Bruksela', 'Mediolan'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 110, text: 'Stolicą Finlandii jest…', answer: 'Helsinki',
    options: ['Helsinki', 'Amsterdam', 'Sztokholm', 'Kopenhaga'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 111, text: 'Stolicą Grecji jest…', answer: 'Ateny',
    options: ['Zurych', 'Wiedeń', 'Mediolan', 'Ateny'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 112, text: 'Stolicą Irlandii jest…', answer: 'Dublin',
    options: ['Sztokholm', 'Dublin', 'Wiedeń', 'Berlin'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 113, text: 'Stolicą Chorwacji jest…', answer: 'Zagrzeb',
    options: ['Kopenhaga', 'Zagrzeb', 'Madryt', 'Wiedeń'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 114, text: 'Stolicą Serbii jest…', answer: 'Belgrad',
    options: ['Rzym', 'Belgrad', 'Barcelona', 'Lyon'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 115, text: 'Stolicą Bułgarii jest…', answer: 'Sofia',
    options: ['Berlin', 'Zurych', 'Sztokholm', 'Sofia'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 116, text: 'Stolicą Rumunii jest…', answer: 'Bukareszt',
    options: ['Bukareszt', 'Amsterdam', 'Zurych', 'Mediolan'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 117, text: 'Stolicą Węgier jest…', answer: 'Budapeszt',
    options: ['Budapeszt', 'Berlin', 'Paryż', 'Bruksela'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 118, text: 'Stolicą Słowacji jest…', answer: 'Bratysława',
    options: ['Mediolan', 'Bruksela', 'Bratysława', 'Rzym'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 119, text: 'Stolicą Litwy jest…', answer: 'Wilno',
    options: ['Wilno', 'Oslo', 'Paryż', 'Berlin'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 120, text: 'Stolicą Łotwy jest…', answer: 'Ryga',
    options: ['Ryga', 'Oslo', 'Rzym', 'Sztokholm'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 121, text: 'Stolicą Estonii jest…', answer: 'Tallin',
    options: ['Wiedeń', 'Madryt', 'Tallin', 'Zurych'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 122, text: 'Stolicą Ukrainy jest…', answer: 'Kijów',
    options: ['Berlin', 'Mediolan', 'Kijów', 'Madryt'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 123, text: 'Stolicą Białorusi jest…', answer: 'Mińsk',
    options: ['Wiedeń', 'Kopenhaga', 'Berlin', 'Mińsk'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 124, text: 'Stolicą Chin jest…', answer: 'Pekin',
    options: ['Paryż', 'Zurych', 'Pekin', 'Marsylia'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 125, text: 'Stolicą Japonii jest…', answer: 'Tokio',
    options: ['Tokio', 'Amsterdam', 'Kopenhaga', 'Paryż'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 126, text: 'Stolicą Indii jest…', answer: 'New Delhi',
    options: ['New Delhi', 'Oslo', 'Rzym', 'Kopenhaga'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 127, text: 'Stolicą Korei Płd. jest…', answer: 'Seul',
    options: ['Amsterdam', 'Seul', 'Sztokholm', 'Marsylia'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 128, text: 'Stolicą Tajlandii jest…', answer: 'Bangkok',
    options: ['Bruksela', 'Bangkok', 'Rzym', 'Kopenhaga'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 129, text: 'Stolicą Egiptu jest…', answer: 'Kair',
    options: ['Kair', 'Amsterdam', 'Wiedeń', 'Barcelona'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 130, text: 'Stolicą RPA jest…', answer: 'Pretoria',
    options: ['Lyon', 'Zurych', 'Berlin', 'Pretoria'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 131, text: 'Stolicą Kenii jest…', answer: 'Nairobi',
    options: ['Nairobi', 'Rzym', 'Zurych', 'Mediolan'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 132, text: 'Stolicą Nigerii jest…', answer: 'Abudża',
    options: ['Mediolan', 'Amsterdam', 'Abudża', 'Madryt'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 133, text: 'Stolicą Maroka jest…', answer: 'Rabat',
    options: ['Oslo', 'Paryż', 'Rabat', 'Mediolan'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 134, text: 'Stolicą Etiopii jest…', answer: 'Addis Abeba',
    options: ['Wiedeń', 'Addis Abeba', 'Oslo', 'Barcelona'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 135, text: 'Stolicą Turcji jest…', answer: 'Ankara',
    options: ['Ankara', 'Paryż', 'Oslo', 'Bruksela'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 136, text: 'Stolicą Kanady jest…', answer: 'Ottawa',
    options: ['Paryż', 'Mediolan', 'Ottawa', 'Zurych'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 137, text: 'Stolicą Meksyku jest…', answer: 'Meksyk',
    options: ['Oslo', 'Meksyk', 'Marsylia', 'Sztokholm'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 138, text: 'Stolicą Kuby jest…', answer: 'Hawana',
    options: ['Bruksela', 'Paryż', 'Hawana', 'Lyon'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 139, text: 'Stolicą Brazylii jest…', answer: 'Brasilia',
    options: ['Mediolan', 'Oslo', 'Marsylia', 'Brasilia'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 140, text: 'Stolicą Argentyny jest…', answer: 'Buenos Aires',
    options: ['Marsylia', 'Sztokholm', 'Berlin', 'Buenos Aires'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 141, text: 'Stolicą Chile jest…', answer: 'Santiago',
    options: ['Santiago', 'Madryt', 'Berlin', 'Bruksela'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 142, text: 'Stolicą Kolumbii jest…', answer: 'Bogota',
    options: ['Bruksela', 'Bogota', 'Wiedeń', 'Rzym'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 143, text: 'Stolicą Peru jest…', answer: 'Lima',
    options: ['Marsylia', 'Lima', 'Paryż', 'Berlin'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 144, text: 'Stolicą Wenezueli jest…', answer: 'Caracas',
    options: ['Amsterdam', 'Caracas', 'Marsylia', 'Bruksela'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 145, text: 'Stolicą Australii jest…', answer: 'Canberra',
    options: ['Sztokholm', 'Amsterdam', 'Oslo', 'Canberra'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 146, text: 'Stolicą Nowej Zelandii jest…', answer: 'Wellington',
    options: ['Barcelona', 'Wellington', 'Amsterdam', 'Wiedeń'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 147, text: 'Stolicą Islandii jest…', answer: 'Reykjavik',
    options: ['Marsylia', 'Lyon', 'Reykjavik', 'Bruksela'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 148, text: 'Najdłuższa rzeka Azji…', answer: 'Jangcy',
    options: ['Ganges', 'Wołga', 'Jangcy', 'Dunaj'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 149, text: 'Najdłuższa rzeka Ameryki Pd.…', answer: 'Amazonka',
    options: ['Parana', 'Missisipi', 'Orinoko', 'Amazonka'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 150, text: 'Najdłuższa rzeka Afryki…', answer: 'Nil',
    options: ['Nil', 'Zambia', 'Niger', 'Kongo'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 151, text: 'Która rzeka przepływa przez Londyn…', answer: 'Tamiza',
    options: ['Ren', 'Sekwana', 'Loara', 'Tamiza'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 152, text: 'Która rzeka przepływa przez Paryż…', answer: 'Sekwana',
    options: ['Tamiza', 'Ren', 'Sekwana', 'Loara'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 153, text: 'Która rzeka przepływa przez Berlin…', answer: 'Sprewa',
    options: ['Łaba', 'Sprewa', 'Dunaj', 'Ren'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 154, text: 'Najdłuższa rzeka w Rosji…', answer: 'Ob',
    options: ['Jenisej', 'Ob', 'Łena', 'Wołga'],
    category: 'Geografia', difficulty: 'hard',
  },
  {
    id: 155, text: 'Najwyższy szczyt Europy…', answer: 'Mont Blanc',
    options: ['Elbrus', 'Monte Rosa', 'Dufourspitze', 'Mont Blanc'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 156, text: 'Najwyższy szczyt Afryki…', answer: 'Kilimandżaro',
    options: ['Rwenzori', 'Góra Stołowa', 'Kilimandżaro', 'Kenia'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 157, text: 'Najwyższy szczyt Ameryki Pd.…', answer: 'Aconcagua',
    options: ['Chimborazo', 'Aconcagua', 'Huascaran', 'Cotopaxi'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 158, text: 'Góry oddzielające Europę od Azji…', answer: 'Ural',
    options: ['Ural', 'Himalaje', 'Kaukaz', 'Ałtaj'],
    category: 'Geografia', difficulty: 'hard',
  },
  {
    id: 159, text: 'Największa pustynia Azji…', answer: 'Gobi',
    options: ['Karakum', 'Gobi', 'Rub al-Chali', 'Takla Makan'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 160, text: 'Największy archipelag świata…', answer: 'Indonezja',
    options: ['Filipiny', 'Indonezja', 'Bahamy', 'Japonia'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 161, text: 'Największa wyspa Europy…', answer: 'Wielka Brytania',
    options: ['Irlandia', 'Sycylia', 'Grenlandia', 'Wielka Brytania'],
    category: 'Geografia', difficulty: 'hard',
  },
  {
    id: 162, text: 'Który kraj ma najwięcej wysp…', answer: 'Szwecja',
    options: ['Indonezja', 'Norwegia', 'Szwecja', 'Filipiny'],
    category: 'Geografia', difficulty: 'hard',
  },
  {
    id: 163, text: 'Najdłuższa jaskinia Polski…', answer: 'Jaskinia Wielka Śnieżna',
    options: ['Jaskinia Łokietka', 'Jaskinia Wielka Śnieżna', 'Jaskinia Niedźwiedzia', 'Jaskinia Mroźna'],
    category: 'Geografia', difficulty: 'hard',
  },
  {
    id: 164, text: 'Największe miasto Polski…', answer: 'Warszawa',
    options: ['Wrocław', 'Kraków', 'Warszawa', 'Łódź'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 165, text: 'Największe miasto Europy…', answer: 'Stambuł',
    options: ['Stambuł', 'Paryż', 'Londyn', 'Moskwa'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 166, text: 'Najmniejsze państwo świata…', answer: 'Watykan',
    options: ['San Marino', 'Liechtenstein', 'Monako', 'Watykan'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 167, text: 'Przez ile państw przepływa Dunaj…', answer: '10',
    options: ['12', '8', '6', '10'],
    category: 'Geografia', difficulty: 'hard',
  },
  {
    id: 168, text: 'Ile województw ma Polska…', answer: '16',
    options: ['18', '20', '16', '14'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 169, text: 'Najgłębszy ocean…', answer: 'Spokojny',
    options: ['Atlantycki', 'Spokojny', 'Indyjski', 'Arktyczny'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 170, text: 'Ile oceanów ma Ziemia…', answer: '5',
    options: ['5', '4', '6', '7'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 171, text: 'Największy kontynent…', answer: 'Azja',
    options: ['Afryka', 'Ameryka Płn.', 'Europa', 'Azja'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 172, text: 'Najmniejszy kontynent…', answer: 'Australia',
    options: ['Europa', 'Antarktyda', 'Ameryka Pd.', 'Australia'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 173, text: 'Które państwo leży na 2 kontynentach…', answer: 'Turcja',
    options: ['Rosja', 'Egipt', 'Hiszpania', 'Turcja'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 174, text: 'Najdłuższe pasmo górskie świata…', answer: 'Andy',
    options: ['Andy', 'Alpy', 'Kordyliery', 'Himalaje'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 175, text: 'Największy półwysep Europy…', answer: 'Skandynawski',
    options: ['Bałkański', 'Iberyjski', 'Apeniński', 'Skandynawski'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 176, text: 'Który kraj ma najdłuższą linię brzegową…', answer: 'Kanada',
    options: ['Norwegia', 'Indonezja', 'Australia', 'Kanada'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 177, text: 'Największe jezioro Polski…', answer: 'Śniardwy',
    options: ['Gopło', 'Mamry', 'Łebsko', 'Śniardwy'],
    category: 'Geografia', difficulty: 'easy',
  },
  {
    id: 178, text: 'Najgłębsze jezioro świata…', answer: 'Bajkał',
    options: ['Górne', 'Tanganika', 'Bajkał', 'Wiktoria'],
    category: 'Geografia', difficulty: 'medium',
  },
  {
    id: 179, text: 'W którym roku Odkrycie Ameryki?', answer: '1492',
    options: ['1482', '1502', '1492', '1512'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 180, text: 'W którym roku Telefon wynaleziono w roku?', answer: '1876',
    options: ['1876', '1886', '1896', '1856'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 181, text: 'W którym roku Chrzest Polski odbył się w roku?', answer: '966',
    options: ['980', '966', '960', '972'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 182, text: 'W którym roku I wojna światowa rozpoczęła się w roku?', answer: '1914',
    options: ['1914', '1913', '1915', '1912'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 183, text: 'W którym roku Polska wstąpiła do NATO w roku?', answer: '1999',
    options: ['1999', '1997', '2003', '2001'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 184, text: 'W którym roku Upadek Cesarstwa Rzymskiego?', answer: '476',
    options: ['676', '576', '476', '376'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 185, text: 'W którym roku Kongres wiedeński odbył się w roku?', answer: '1815',
    options: ['1825', '1815', '1835', '1805'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 186, text: 'W którym roku Powstanie państwa Izrael?', answer: '1948',
    options: ['1948', '1955', '1950', '1945'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 187, text: 'W którym roku Rozbiory Polski rozpoczęły się w roku?', answer: '1772',
    options: ['1776', '1782', '1768', '1772'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 188, text: 'W którym roku ONZ założono w roku?', answer: '1945',
    options: ['1945', '1943', '1947', '1949'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 189, text: 'W którym roku Bitwa pod Wiedniem?', answer: '1683',
    options: ['1693', '1683', '1673', '1663'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 190, text: 'W którym roku Założenie Akademii Krakowskiej?', answer: '1364',
    options: ['1376', '1348', '1364', '1388'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 191, text: 'W którym roku Pierwszy lot człowieka w kosmos?', answer: '1961',
    options: ['1965', '1961', '1957', '1963'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 192, text: 'W którym roku Rewolucja francuska wybuchła w roku?', answer: '1789',
    options: ['1779', '1789', '1799', '1809'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 193, text: 'W którym roku Upadek Konstantynopola?', answer: '1453',
    options: ['1353', '1653', '1553', '1453'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 194, text: 'W którym roku Stan wojenny w Polsce?', answer: '1981',
    options: ['1981', '1982', '1980', '1983'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 195, text: 'W którym roku Pierwszy człowiek na Księżycu?', answer: '1969',
    options: ['1973', '1967', '1971', '1969'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 196, text: 'W którym roku Bitwa pod Hastings?', answer: '1066',
    options: ['1016', '1066', '1106', '1156'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 197, text: 'W którym roku Pierwsze mistrzostwa świata w piłce?', answer: '1930',
    options: ['1928', '1938', '1930', '1934'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 198, text: 'W którym roku Atak na Pearl Harbor?', answer: '1941',
    options: ['1941', '1940', '1943', '1942'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 199, text: 'W którym roku Bitwa pod Waterloo?', answer: '1815',
    options: ['1805', '1835', '1825', '1815'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 200, text: 'W którym roku Wynalezienie druku?', answer: '1455',
    options: ['1455', '1475', '1465', '1445'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 201, text: 'W którym roku Wojna koreańska wybuchła?', answer: '1950',
    options: ['1954', '1948', '1950', '1952'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 202, text: 'W którym roku Zamach w Sarajewie?', answer: '1914',
    options: ['1915', '1912', '1914', '1913'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 203, text: 'W którym roku Polska odzyskała niepodległość?', answer: '1918',
    options: ['1920', '1918', '1914', '1916'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 204, text: 'W którym roku Mur berliński upadł w roku?', answer: '1989',
    options: ['1989', '1987', '1990', '1988'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 205, text: 'W którym roku Polska wstąpiła do UE?', answer: '2004',
    options: ['2008', '2002', '2006', '2004'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 206, text: 'W którym roku Zakończenie II wojny światowej?', answer: '1945',
    options: ['1946', '1943', '1944', '1945'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 207, text: 'W którym roku Powstanie Warszawskie?', answer: '1944',
    options: ['1944', '1942', '1945', '1943'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 208, text: 'W którym roku Bitwa pod Grunwaldem?', answer: '1410',
    options: ['1410', '1411', '1415', '1409'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 209, text: 'W którym roku Konstytucja 3 Maja?', answer: '1791',
    options: ['1795', '1793', '1789', '1791'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 210, text: 'Kto pierwszym królem Polski?', answer: 'Bolesław Chrobry',
    options: ['Mieszko I', 'Władysław Łokietek', 'Bolesław Chrobry', 'Kazimierz Wielki'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 211, text: 'Kto poznał żarówkę?', answer: 'Thomas Edison',
    options: ['Thomas Edison', 'James Watt', 'Nikola Tesla', 'Benjamin Franklin'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 212, text: 'Kto pierwszym prezydentem USA?', answer: 'George Washington',
    options: ['Thomas Jefferson', 'Benjamin Franklin', 'John Adams', 'George Washington'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 213, text: 'Kto wynalazł radio?', answer: 'Marconi',
    options: ['Tesla', 'Popow', 'Marconi', 'Edison'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 214, text: 'Kto wynalazł szczepionkę?', answer: 'Edward Jenner',
    options: ['Edward Jenner', 'Koch', 'Fleming', 'Pasteur'],
    category: 'Historia', difficulty: 'hard',
  },
  {
    id: 215, text: 'Kto wynalazł proch strzelniczy?', answer: 'Chińczycy',
    options: ['Arabowie', 'Grecy', 'Chińczycy', 'Indianie'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 216, text: 'Kto wynalazł maszynę parową?', answer: 'James Watt',
    options: ['James Watt', 'Stephenson', 'Trevithick', 'Boulton'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 217, text: 'Kto był twórcą Reformacji?', answer: 'Marcin Luter',
    options: ['Zwingli', 'Hus', 'Kalwin', 'Marcin Luter'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 218, text: 'Kto był pierwszym cesarzem rzymskim?', answer: 'Oktawian August',
    options: ['Juliusz Cezar', 'Kaligula', 'Neron', 'Oktawian August'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 219, text: 'Kto był wodzem powstania styczniowego?', answer: 'Romuald Traugutt',
    options: ['Józef Piłsudski', 'Tadeusz Kościuszko', 'Romuald Traugutt', 'Jan Kiliński'],
    category: 'Historia', difficulty: 'hard',
  },
  {
    id: 220, text: 'Kto był twórcą potęgi Polski w XIV w.?', answer: 'Kazimierz Wielki',
    options: ['Bolesław Chrobry', 'Kazimierz Wielki', 'Władysław Łokietek', 'Mieszko II'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 221, text: 'Kto był naczelnikiem powstania kościuszkowskiego?', answer: 'Tadeusz Kościuszko',
    options: ['Józef Piłsudski', 'Jan Kiliński', 'Romuald Traugutt', 'Tadeusz Kościuszko'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 222, text: 'Kto był pierwszym cesarzem Chin?', answer: 'Qin Shi Huang',
    options: ['Kangxi', 'Han Wudi', 'Qin Shi Huang', 'Taizong'],
    category: 'Historia', difficulty: 'hard',
  },
  {
    id: 223, text: 'Kto odkrył promieniotwórczość?', answer: 'Maria Skłodowska-Curie',
    options: ['Röntgen', 'Becquerel', 'Thomson', 'Maria Skłodowska-Curie'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 224, text: 'Kto był twórcą odrodzonego państwa polskiego?', answer: 'Józef Piłsudski',
    options: ['Roman Dmowski', 'Ignacy Paderewski', 'Wojciech Korfanty', 'Józef Piłsudski'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 225, text: 'Kto był ostatnim carem Rosji?', answer: 'Mikołaj II',
    options: ['Aleksander III', 'Paweł I', 'Piotr Wielki', 'Mikołaj II'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 226, text: 'Kto był pierwszym kanclerzem Niemiec?', answer: 'Bismarck',
    options: ['Adenauer', 'Brandt', 'Kohl', 'Bismarck'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 227, text: 'Kto był królem Polski w czasie potopu?', answer: 'Jan Kazimierz',
    options: ['Jan Kazimierz', 'Jan Sobieski', 'Władysław IV', 'Zygmunt August'],
    category: 'Historia', difficulty: 'medium',
  },
  {
    id: 228, text: 'Kto kierował ZSRR podczas II wojny?', answer: 'Stalin',
    options: ['Breżniew', 'Lenin', 'Chruszczow', 'Stalin'],
    category: 'Historia', difficulty: 'easy',
  },
  {
    id: 229, text: 'Kto był ostatnim szogunem Japonii?', answer: 'Yoshinobu',
    options: ['Yoshinobu', 'Hidetada', 'Yoshimune', 'Ieyasu'],
    category: 'Historia', difficulty: 'hard',
  },
  {
    id: 230, text: 'Ile kości ma dorosły człowiek', answer: '206',
    options: ['226', '246', '206', '186'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 231, text: 'Prędkość dźwięku w powietrzu', answer: '343 m/s',
    options: ['243 m/s', '343 m/s', '443 m/s', '543 m/s'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 232, text: 'Jaki pierwiastek ma symbol Fe', answer: 'Żelazo',
    options: ['Fran', 'Żelazo', 'Fluor', 'Fosfor'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 233, text: 'Wzór chemiczny wody to…', answer: 'H2O',
    options: ['CO2', 'H2O', 'NH3', 'HCl'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 234, text: 'Ile planet ma Układ Słoneczny', answer: '8',
    options: ['9', '7', '8', '10'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 235, text: 'Ile litrów krwi ma człowiek', answer: '5-6',
    options: ['5-6', '3-4', '6-7', '7-8'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 236, text: 'Zero bezwzględne to…', answer: '-273°C',
    options: ['-250°C', '-273°C', '-300°C', '-200°C'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 237, text: 'Jaki pierwiastek jest najcięższy', answer: 'Uran',
    options: ['Uran', 'Rad', 'Ołów', 'Pluton'],
    category: 'Nauka', difficulty: 'hard',
  },
  {
    id: 238, text: 'Który gaz powoduje efekt cieplarniany', answer: 'Dwutlenek węgla',
    options: ['Wodór', 'Tlen', 'Azot', 'Dwutlenek węgla'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 239, text: 'Ile zębów mlecznych ma dziecko', answer: '20',
    options: ['24', '28', '20', '32'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 240, text: 'Jakie pH ma czysta woda', answer: '7',
    options: ['8', '5', '6', '7'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 241, text: 'Ile par żeber ma człowiek', answer: '12',
    options: ['11', '13', '12', '10'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 242, text: 'Jaki jest największy organ człowieka', answer: 'Skóra',
    options: ['Płuco', 'Skóra', 'Wątroba', 'Mózg'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 243, text: 'Czas dotarcia światła słonecznego do Ziemi', answer: '8 minut',
    options: ['15 minut', '10 minut', '8 minut', '5 minut'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 244, text: 'Który metal jest najlepszym przewodnikiem', answer: 'Srebro',
    options: ['Złoto', 'Aluminium', 'Miedź', 'Srebro'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 245, text: 'Który kolor ma najdłuższą falę', answer: 'Czerwony',
    options: ['Niebieski', 'Fioletowy', 'Czerwony', 'Zielony'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 246, text: 'Która planeta ma najwięcej księżyców', answer: 'Saturn',
    options: ['Jowisz', 'Neptun', 'Uran', 'Saturn'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 247, text: '1 litr to ile cm³', answer: '1000',
    options: ['100 000', '1000', '10 000', '100'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 248, text: 'Jaka jest najtwardsza substancja naturalna', answer: 'Diament',
    options: ['Kwarc', 'Rubin', 'Diament', 'Szafir'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 249, text: 'Który pierwiastek jest gazem szlachetnym', answer: 'Argon',
    options: ['Brom', 'Chlor', 'Jod', 'Argon'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 250, text: 'Ile procent mózgu stanowi woda', answer: '75%',
    options: ['90%', '60%', '50%', '75%'],
    category: 'Nauka', difficulty: 'hard',
  },
  {
    id: 251, text: 'Najmniejsza kość w ciele to…', answer: 'Strzemiączko',
    options: ['Młoteczek', 'Strzemiączko', 'Kowadełko', 'Graczka'],
    category: 'Nauka', difficulty: 'hard',
  },
  {
    id: 252, text: 'Która witamina powstaje w skórze na słońcu', answer: 'D',
    options: ['A', 'C', 'E', 'D'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 253, text: 'Symbol chemiczny złota to…', answer: 'Au',
    options: ['Fe', 'Au', 'Ag', 'Cu'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 254, text: 'Ile procent powierzchni Ziemi to woda', answer: '71%',
    options: ['81%', '71%', '51%', '61%'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 255, text: 'Najlżejszy metal', answer: 'Lit',
    options: ['Magnez', 'Lit', 'Potas', 'Sód'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 256, text: 'Ile kręgów ma kręgosłup człowieka', answer: '33',
    options: ['28', '33', '36', '24'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 257, text: 'Największa tętnica to…', answer: 'Aorta',
    options: ['Udowa', 'Płucna', 'Aorta', 'Szyjna'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 258, text: 'Symbol chemiczny sodu to…', answer: 'Na',
    options: ['Ca', 'K', 'Na', 'Mg'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 259, text: 'Ile neutronów ma atom wodoru', answer: '0',
    options: ['1', '3', '0', '2'],
    category: 'Nauka', difficulty: 'hard',
  },
  {
    id: 260, text: 'Normalne ciśnienie atmosferyczne', answer: '1013 hPa',
    options: ['1025 hPa', '1013 hPa', '1000 hPa', '1050 hPa'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 261, text: 'Największy ssak morski', answer: 'Płetwal błękitny',
    options: ['Delfin', 'Płetwal błękitny', 'Orka', 'Kaszałot'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 262, text: 'Skala Richtera mierzy…', answer: 'Trzęsienia ziemi',
    options: ['Tornada', 'Wulkany', 'Trzęsienia ziemi', 'Huragany'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 263, text: 'Który kwas jest w żołądku', answer: 'Sólny',
    options: ['Azotowy', 'Sólny', 'Octowy', 'Siarkowy'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 264, text: 'Co bada cytologia', answer: 'Komórki',
    options: ['Geny', 'Białka', 'Tkanki', 'Komórki'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 265, text: 'Który pierwiastek ma symbol Hg', answer: 'Rtęć',
    options: ['Hafn', 'Wodór', 'Rtęć', 'Hel'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 266, text: 'Co bada entomologia', answer: 'Owady',
    options: ['Ptaki', 'Owady', 'Ryby', 'Gady'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 267, text: 'Co bada kardiologia', answer: 'Serce',
    options: ['Mózg', 'Serce', 'Nerki', 'Płuca'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 268, text: 'Fotosynteza to produkcja…', answer: 'Glukozy',
    options: ['Glukozy', 'Tlenu', 'Wody', 'Białka'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 269, text: 'Co to jest antybiotyk', answer: 'Lek przeciwbakteryjny',
    options: ['Lek przeciwgrzybiczy', 'Lek przeciwpasożytniczy', 'Lek przeciwbakteryjny', 'Lek przeciwwirusowy'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 270, text: 'Jaka planeta jest najgorętsza', answer: 'Wenus',
    options: ['Wenus', 'Merkury', 'Mars', 'Jowisz'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 271, text: 'Jaki gaz dominuje w powietrzu', answer: 'Azot',
    options: ['Argon', 'Azot', 'CO2', 'Tlen'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 272, text: 'Gęstość wody to…', answer: '1 g/cm³',
    options: ['2 g/cm³', '1 g/cm³', '0,5 g/cm³', '1,5 g/cm³'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 273, text: 'Okres półtrwania radu to…', answer: '1600 lat',
    options: ['2000 lat', '2500 lat', '1600 lat', '1000 lat'],
    category: 'Nauka', difficulty: 'hard',
  },
  {
    id: 274, text: 'Najbardziej rozpowszechniony gaz we Wszechświecie', answer: 'Wodór',
    options: ['Hel', 'Tlen', 'Wodór', 'Azot'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 275, text: 'Jaka jest średnia temperatura Ziemi', answer: '15°C',
    options: ['5°C', '20°C', '10°C', '15°C'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 276, text: 'Co to jest endorfina', answer: 'Hormon szczęścia',
    options: ['Hormon snu', 'Hormon stresu', 'Hormon wzrostu', 'Hormon szczęścia'],
    category: 'Nauka', difficulty: 'medium',
  },
  {
    id: 277, text: 'Ile zębów mądrości ma człowiek', answer: '4',
    options: ['0', '3', '2', '4'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 278, text: 'Który pierwiastek ma najwyższą temp. topnienia', answer: 'Wolfram',
    options: ['Krzem', 'Żelazo', 'Platyna', 'Wolfram'],
    category: 'Nauka', difficulty: 'hard',
  },
  {
    id: 279, text: 'Co bada neurologia', answer: 'Układ nerwowy',
    options: ['Układ kostny', 'Układ krwionośny', 'Układ mięśniowy', 'Układ nerwowy'],
    category: 'Nauka', difficulty: 'easy',
  },
  {
    id: 280, text: 'Kto napisał „Faraona”', answer: 'Bolesław Prus',
    options: ['Bolesław Prus', 'Eliza Orzeszkowa', 'Stefan Żeromski', 'Henryk Sienkiewicz'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 281, text: 'Autor „W pustyni i w puszczy”', answer: 'Henryk Sienkiewicz',
    options: ['Bolesław Prus', 'Henryk Sienkiewicz', 'Karol May', 'Juliusz Verne'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 282, text: 'Główny bohater „Przedwiośnia”', answer: 'Cezary Baryka',
    options: ['Wokulski', 'Andrzej Radkiewicz', 'Tomasz Judym', 'Cezary Baryka'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 283, text: 'Kto napisał „Ludzi bezdomnych”', answer: 'Stefan Żeromski',
    options: ['Maria Dąbrowska', 'Eliza Orzeszkowa', 'Stefan Żeromski', 'Władysław Reymont'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 284, text: 'Autor „Nad Niemnem”', answer: 'Eliza Orzeszkowa',
    options: ['Stefan Żeromski', 'Henryk Sienkiewicz', 'Bolesław Prus', 'Eliza Orzeszkowa'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 285, text: 'Kto napisał „Zbrodnię i karę”', answer: 'Dostojewski',
    options: ['Turgieniew', 'Dostojewski', 'Gogol', 'Tołstoj'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 286, text: 'Autor „Mistrza i Małgorzaty”', answer: 'Bułhakow',
    options: ['Sołżenicyn', 'Bułhakow', 'Czechow', 'Pasternak'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 287, text: 'Kto napisał „Rok 1984”', answer: 'George Orwell',
    options: ['George Orwell', 'Aldous Huxley', 'Arthur C. Clarke', 'Ray Bradbury'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 288, text: 'Autor „Władcy Pierścieni”', answer: 'J.R.R. Tolkien',
    options: ['C.S. Lewis', 'J.K. Rowling', 'J.R.R. Tolkien', 'George R.R. Martin'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 289, text: 'Kto napisał „Hamleta”', answer: 'William Shakespeare',
    options: ['William Shakespeare', 'Ben Jonson', 'Christopher Marlowe', 'John Milton'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 290, text: 'Autor „Boskie Komedii”', answer: 'Dante',
    options: ['Petrarka', 'Dante', 'Boccaccio', 'Ariosto'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 291, text: 'Kto napisał „Don Kichota”', answer: 'Cervantes',
    options: ['García Márquez', 'Cervantes', 'Calderon', 'Lope de Vega'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 292, text: 'Autor „Cierpienia młodego Wertera”', answer: 'Goethe',
    options: ['Schiller', 'Goethe', 'Lessing', 'Heine'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 293, text: 'Kto napisał „Opowieść wigilijną”', answer: 'Charles Dickens',
    options: ['Mark Twain', 'Brontë', 'Charles Dickens', 'Jane Austen'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 294, text: 'Autor „Sklepów cynamonowych”', answer: 'Bruno Schulz',
    options: ['Stanisław Ignacy Witkiewicz', 'Sławomir Mrożek', 'Bruno Schulz', 'Witold Gombrowicz'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 295, text: 'Kto napisał „Ferdydurke”', answer: 'Witold Gombrowicz',
    options: ['Władysław Reymont', 'Stanisław Ignacy Witkiewicz', 'Bruno Schulz', 'Witold Gombrowicz'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 296, text: 'Autor „Tanga”', answer: 'Sławomir Mrożek',
    options: ['Stanisław Ignacy Witkiewicz', 'Sławomir Mrożek', 'Tadeusz Różewicz', 'Witold Gombrowicz'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 297, text: 'Kto napisał „Pana Tadeusza”', answer: 'Adam Mickiewicz',
    options: ['Adam Mickiewicz', 'Juliusz Słowacki', 'Cyprian Kamil Norwid', 'Zygmunt Krasiński'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 298, text: 'Autor „Kordiana”', answer: 'Juliusz Słowacki',
    options: ['Zygmunt Krasiński', 'Juliusz Słowacki', 'Cyprian Kamil Norwid', 'Adam Mickiewicz'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 299, text: 'Kto napisał „Nie-Boską komedię”', answer: 'Zygmunt Krasiński',
    options: ['Cyprian Kamil Norwid', 'Zygmunt Krasiński', 'Adam Mickiewicz', 'Juliusz Słowacki'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 300, text: 'Autor „Wesela”', answer: 'Stanisław Wyspiański',
    options: ['Adam Mickiewicz', 'Zygmunt Krasiński', 'Stanisław Wyspiański', 'Juliusz Słowacki'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 301, text: 'Kto napisał „Redutę Ordona”', answer: 'Adam Mickiewicz',
    options: ['Cyprian Kamil Norwid', 'Adam Mickiewicz', 'Zygmunt Krasiński', 'Juliusz Słowacki'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 302, text: 'Autor „Beniowskiego”', answer: 'Juliusz Słowacki',
    options: ['Adam Mickiewicz', 'Juliusz Słowacki', 'Zygmunt Krasiński', 'Cyprian Kamil Norwid'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 303, text: 'Kto napisał serię o Harrym Potterze', answer: 'J.K. Rowling',
    options: ['C.S. Lewis', 'J.K. Rowling', 'J.R.R. Tolkien', 'Stephen King'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 304, text: 'Kto napisał „Zemstę”', answer: 'Aleksander Fredro',
    options: ['Adam Mickiewicz', 'Aleksander Fredro', 'Stanisław Wyspiański', 'Juliusz Słowacki'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 305, text: 'Kto napisał „Makbeta”', answer: 'William Shakespeare',
    options: ['Christopher Marlowe', 'John Webster', 'William Shakespeare', 'Ben Jonson'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 306, text: 'Autor „Dziadów”', answer: 'Adam Mickiewicz',
    options: ['Adam Mickiewicz', 'Stanisław Wyspiański', 'Juliusz Słowacki', 'Zygmunt Krasiński'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 307, text: 'Kto napisał „Lalkę”', answer: 'Bolesław Prus',
    options: ['Stefan Żeromski', 'Eliza Orzeszkowa', 'Henryk Sienkiewicz', 'Bolesław Prus'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 308, text: 'Główna bohaterka „Pana Tadeusza”', answer: 'Zosia',
    options: ['Hrabina', 'Telimena', 'Ewa', 'Zosia'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 309, text: 'Ile ksiąg ma „Pan Tadeusz”', answer: '12',
    options: ['10', '12', '14', '8'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 310, text: 'Akcja „Lalki” rozgrywa się w…', answer: 'Warszawie',
    options: ['Krakowie', 'Warszawie', 'Paryżu', 'Wrocławiu'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 311, text: 'Kto napisał „Quo Vadis”', answer: 'Henryk Sienkiewicz',
    options: ['Władysław Reymont', 'Eliza Orzeszkowa', 'Stefan Żeromski', 'Henryk Sienkiewicz'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 312, text: 'Autor „Krzyżaków”', answer: 'Henryk Sienkiewicz',
    options: ['Władysław Reymont', 'Stefan Żeromski', 'Henryk Sienkiewicz', 'Adam Mickiewicz'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 313, text: 'Kto napisał „Chłopów”', answer: 'Władysław Reymont',
    options: ['Władysław Reymont', 'Henryk Sienkiewicz', 'Stefan Żeromski', 'Eliza Orzeszkowa'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 314, text: 'Autor „Solaris”', answer: 'Stanisław Lem',
    options: ['Philip K. Dick', 'Isaac Asimov', 'Ray Bradbury', 'Stanisław Lem'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 315, text: 'Kto napisał „Hobbita”', answer: 'J.R.R. Tolkien',
    options: ['C.S. Lewis', 'George R.R. Martin', 'J.K. Rowling', 'J.R.R. Tolkien'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 316, text: 'Autor „Opowieści z Narnii”', answer: 'C.S. Lewis',
    options: ['C.S. Lewis', 'Philip Pullman', 'J.R.R. Tolkien', 'J.K. Rowling'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 317, text: 'Kto napisał „Medaliony”', answer: 'Zofia Nałkowska',
    options: ['Kazimierz Moczarski', 'Gustaw Herling', 'Tadeusz Borowski', 'Zofia Nałkowska'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 318, text: 'Autor „Granicy”', answer: 'Zofia Nałkowska',
    options: ['Jarosław Iwaszkiewicz', 'Maria Dąbrowska', 'Tadeusz Borowski', 'Zofia Nałkowska'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 319, text: 'Kto napisał „Kartotekę”', answer: 'Tadeusz Różewicz',
    options: ['Tadeusz Różewicz', 'Sławomir Mrożek', 'Zbigniew Herbert', 'Czesław Miłosz'],
    category: 'Literatura', difficulty: 'medium',
  },
  {
    id: 320, text: 'Ilu graczy gra w golfa na polu', answer: '1',
    options: ['4', '2', '1', 'nie ma limitu'],
    category: 'Sport', difficulty: 'hard',
  },
  {
    id: 321, text: 'Jaki kraj zdobył najwięcej medali olimpijskich', answer: 'USA',
    options: ['USA', 'Rosja', 'Chiny', 'Niemcy'],
    category: 'Sport', difficulty: 'medium',
  },
  {
    id: 322, text: 'Ile okrążeń ma wyścig Formuły 1', answer: '~60',
    options: ['~40', '~80', '~100', '~60'],
    category: 'Sport', difficulty: 'hard',
  },
  {
    id: 323, text: 'Który polski sportowiec zdobył złoto w Rio 2016', answer: 'Anita Włodarczyk',
    options: ['Kamil Stoch', 'Justyna Kowalczyk', 'Agnieszka Radwańska', 'Anita Włodarczyk'],
    category: 'Sport', difficulty: 'medium',
  },
  {
    id: 324, text: 'Najszybszy człowiek świata', answer: 'Usain Bolt',
    options: ['Justin Gatlin', 'Usain Bolt', 'Carl Lewis', 'Maurice Greene'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 325, text: 'Ile zmian może dokonać drużyna w meczu piłki nożnej', answer: '3',
    options: ['3', '5', '4', '2'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 326, text: 'Który klub wygrał Ligę Mistrzów najwięcej razy', answer: 'Real Madryt',
    options: ['Real Madryt', 'Barcelona', 'Liverpool', 'Bayern'],
    category: 'Sport', difficulty: 'medium',
  },
  {
    id: 327, text: 'Ile kwart ma mecz koszykówki NBA', answer: '4',
    options: ['3', '2', '5', '4'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 328, text: 'Które państwo jest gospodarzem Tour de France', answer: 'Francja',
    options: ['Włochy', 'Hiszpania', 'Belgia', 'Francja'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 329, text: 'Ile sekund ma runda w boksie zawodowym', answer: '180',
    options: ['180', '240', '300', '120'],
    category: 'Sport', difficulty: 'medium',
  },
  {
    id: 330, text: 'Który sport nosi nazwę „short track”', answer: 'Łyżwiarstwo szybkie',
    options: ['Snowboard', 'Łyżwiarstwo szybkie', 'Bobsleje', 'Narciarstwo'],
    category: 'Sport', difficulty: 'medium',
  },
  {
    id: 331, text: 'W którym kraju powstało judo', answer: 'Japonia',
    options: ['Tajlandia', 'Japonia', 'Chiny', 'Korea'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 332, text: 'Ile metrów ma basen olimpijski', answer: '50',
    options: ['50', '33', '100', '25'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 333, text: 'Który tenisista ma najwięcej tytułów wielkoszlemowych', answer: 'Djoković',
    options: ['Nadal', 'Federer', 'Sampras', 'Djoković'],
    category: 'Sport', difficulty: 'medium',
  },
  {
    id: 334, text: 'Polski skoczek narciarski, mistrz z 2017', answer: 'Kamil Stoch',
    options: ['Dawid Kubacki', 'Piotr Żyła', 'Adam Małysz', 'Kamil Stoch'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 335, text: 'W którym sporcie używa się foczki', answer: 'Badminton',
    options: ['Tenis stołowy', 'Squash', 'Badminton', 'Tenis'],
    category: 'Sport', difficulty: 'medium',
  },
  {
    id: 336, text: 'Ile punktów ma set w tenisie ziemnym', answer: 'Do 4 wygranych',
    options: ['Do 6', 'Do 5', 'Do 4 wygranych', 'Do 7'],
    category: 'Sport', difficulty: 'hard',
  },
  {
    id: 337, text: 'Która dyscyplina nie jest olimpijska', answer: 'Szachy',
    options: ['Wspinaczka', 'E-sport', 'Surfing', 'Szachy'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 338, text: 'Ile graczy ma drużyna siatkówki plażowej', answer: '2',
    options: ['2', '6', '3', '4'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 339, text: 'Który kraj wygrał najwięcej mundialów', answer: 'Brazylia',
    options: ['Argentyna', 'Brazylia', 'Włochy', 'Niemcy'],
    category: 'Sport', difficulty: 'easy',
  },
  {
    id: 340, text: 'Jak wysoki jest kosz do koszykówki', answer: '305 cm',
    options: ['325 cm', '350 cm', '305 cm', '285 cm'],
    category: 'Sport', difficulty: 'medium',
  },
  {
    id: 341, text: 'Ile rund ma mecz bokserski o mistrzostwo świata', answer: '12',
    options: ['8', '12', '15', '10'],
    category: 'Sport', difficulty: 'hard',
  },
  {
    id: 342, text: 'Który polski żużlowiec zdobył najwięcej tytułów', answer: 'Tomasz Gollob',
    options: ['Tomasz Gollob', 'Pawlicki', 'Żarłok', 'Bartosz Zmarzlik'],
    category: 'Sport', difficulty: 'medium',
  },
  {
    id: 343, text: 'W którym roku Polska wygrała Euro siatkarzy', answer: '2009',
    options: ['2017', '2005', '2013', '2009'],
    category: 'Sport', difficulty: 'hard',
  },
  {
    id: 344, text: 'Kto założył Microsoft', answer: 'Bill Gates',
    options: ['Larry Page', 'Mark Zuckerberg', 'Steve Jobs', 'Bill Gates'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 345, text: 'Kto założył Apple', answer: 'Steve Jobs',
    options: ['Bill Gates', 'Tim Cook', 'Steve Jobs', 'Steve Wozniak'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 346, text: 'Kto założył Google', answer: 'Larry Page',
    options: ['Jeff Bezos', 'Larry Page', 'Mark Zuckerberg', 'Sergey Brin'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 347, text: 'Kto założył Facebook', answer: 'Mark Zuckerberg',
    options: ['Sean Parker', 'Eduardo Saverin', 'Mark Zuckerberg', 'Chris Hughes'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 348, text: 'Kto założył Amazon', answer: 'Jeff Bezos',
    options: ['Jack Ma', 'Jeff Bezos', 'Bill Gates', 'Elon Musk'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 349, text: 'Kto założył Teslę', answer: 'Elon Musk',
    options: ['Martin Eberhard', 'Nikola Tesla', 'JB Straubel', 'Elon Musk'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 350, text: 'Rok powstania Apple', answer: '1976',
    options: ['1975', '1976', '1980', '1977'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 351, text: 'Rok powstania Google', answer: '1998',
    options: ['2000', '1996', '2002', '1998'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 352, text: 'Rok powstania Facebook', answer: '2004',
    options: ['2006', '2008', '2002', '2004'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 353, text: 'Rok powstania Microsoft', answer: '1975',
    options: ['1977', '1978', '1975', '1976'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 354, text: 'Rok powstania Amazona', answer: '1994',
    options: ['1996', '1998', '2000', '1994'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 355, text: 'Rok powstania Twittera', answer: '2006',
    options: ['2010', '2004', '2008', '2006'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 356, text: 'Rok powstania YouTube', answer: '2005',
    options: ['2007', '2005', '2004', '2006'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 357, text: 'Rok powstania Netflix', answer: '1997',
    options: ['2001', '1997', '1999', '2003'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 358, text: 'Co oznacza HTML', answer: 'HyperText Markup Language',
    options: ['High Tech Modern Language', 'HyperText Modern Links', 'HyperText Markup Language', 'Home Tool Markup Language'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 359, text: 'Co oznacza CSS', answer: 'Cascading Style Sheets',
    options: ['Creative Style System', 'Computer Style Sheets', 'Coded Style Sheets', 'Cascading Style Sheets'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 360, text: 'Co oznacza SQL', answer: 'Structured Query Language',
    options: ['Structured Query Language', 'Sequential Query Language', 'Simple Query Language', 'Standard Query Logic'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 361, text: 'Co oznacza API', answer: 'Application Programming Interface',
    options: ['Automatic Protocol Interface', 'Application Programming Interface', 'Application Process Integration', 'Advanced Program Integration'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 362, text: 'Która firma stworzyła Androida', answer: 'Google',
    options: ['Microsoft', 'Google', 'Apple', 'Samsung'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 363, text: 'Która firma stworzyła iPhona', answer: 'Apple',
    options: ['Google', 'Apple', 'Samsung', 'Nokia'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 364, text: 'Którego języka używa się najczęściej w AI', answer: 'Python',
    options: ['Java', 'Python', 'JavaScript', 'C++'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 365, text: 'Co oznacza URL', answer: 'Uniform Resource Locator',
    options: ['Uniform Reference Locator', 'Universal Resource Link', 'Uniform Resource Locator', 'Universal Reference Link'],
    category: 'Technologia', difficulty: 'hard',
  },
  {
    id: 366, text: 'Który system operacyjny jest open source', answer: 'Linux',
    options: ['Linux', 'macOS', 'Windows', 'iOS'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 367, text: 'Co to jest JavaScript', answer: 'Język programowania',
    options: ['Kawa', 'Język programowania', 'Skrypt serwera', 'Baza danych'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 368, text: 'Która firma stworzyła Windows', answer: 'Microsoft',
    options: ['Google', 'Apple', 'IBM', 'Microsoft'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 369, text: 'Co to jest RAM', answer: 'Pamięć operacyjna',
    options: ['Karta graficzna', 'Pamięć operacyjna', 'Dysk twardy', 'Procesor'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 370, text: 'Co to jest GPU', answer: 'Procesor graficzny',
    options: ['Dysk SSD', 'Procesor główny', 'Procesor graficzny', 'Zasilacz'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 371, text: 'Rok wynalezienia internetu', answer: '1983',
    options: ['1983', '1995', '1990', '1975'],
    category: 'Technologia', difficulty: 'hard',
  },
  {
    id: 372, text: 'Co oznacza AI', answer: 'Artificial Intelligence',
    options: ['Artificial Integration', 'Advanced Interface', 'Automated Input', 'Artificial Intelligence'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 373, text: 'Która firma stworzyła Chat GPT', answer: 'OpenAI',
    options: ['Microsoft', 'Google', 'OpenAI', 'Meta'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 374, text: 'Co oznacza LAN', answer: 'Local Area Network',
    options: ['Long Access Network', 'Local Access Node', 'Local Area Network', 'Large Area Network'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 375, text: 'Co oznacza Wi-Fi', answer: 'Wireless Fidelity',
    options: ['Wide Frequency', 'Wireless File', 'Wireless Frequency', 'Wireless Fidelity'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 376, text: 'Który język programowania stworzył Guido van Rossum', answer: 'Python',
    options: ['Perl', 'Java', 'Ruby', 'Python'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 377, text: 'Kto stworzył język C', answer: 'Dennis Ritchie',
    options: ['Bjarne Stroustrup', 'Dennis Ritchie', 'Linus Torvalds', 'Ken Thompson'],
    category: 'Technologia', difficulty: 'hard',
  },
  {
    id: 378, text: 'Kto stworzył Linuksa', answer: 'Linus Torvalds',
    options: ['Richard Stallman', 'Bill Gates', 'Steve Jobs', 'Linus Torvalds'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 379, text: 'Co oznacza VPN', answer: 'Virtual Private Network',
    options: ['Virtual Private Network', 'Verified Private Node', 'Virtual Protocol Network', 'Virtual Public Network'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 380, text: 'Które przeglądarki jest najpopularniejsza', answer: 'Chrome',
    options: ['Safari', 'Chrome', 'Firefox', 'Edge'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 381, text: 'Rok premiery pierwszego iPhona', answer: '2007',
    options: ['2011', '2009', '2007', '2005'],
    category: 'Technologia', difficulty: 'medium',
  },
  {
    id: 382, text: 'Ile bitów ma bajt', answer: '8',
    options: ['16', '4', '32', '8'],
    category: 'Technologia', difficulty: 'easy',
  },
  {
    id: 383, text: 'Co oznacza DNS', answer: 'Domain Name System',
    options: ['Domain Network Server', 'Dynamic Name Service', 'Digital Network Service', 'Domain Name System'],
    category: 'Technologia', difficulty: 'hard',
  },
  {
    id: 384, text: 'Kto śpiewał „Niebo z moich stron”', answer: 'Edyta Geppert',
    options: ['Ewa Bem', 'Maryla Rodowicz', 'Edyta Geppert', 'Irena Santor'],
    category: 'Muzyka', difficulty: 'hard',
  },
  {
    id: 385, text: 'Kto wygrał Eurowizję 2014', answer: 'Conchita Wurst',
    options: ['Loreen', 'Jamala', 'Conchita Wurst', 'Salvador Sobral'],
    category: 'Muzyka', difficulty: 'medium',
  },
  {
    id: 386, text: 'Ile żółw ma członków', answer: '5',
    options: ['4', '5', '6', '7'],
    category: 'Muzyka', difficulty: 'easy',
  },
  {
    id: 387, text: 'Który zespół nagrał „Bohemian Rhapsody”', answer: 'Queen',
    options: ['Led Zeppelin', 'The Beatles', 'Pink Floyd', 'Queen'],
    category: 'Muzyka', difficulty: 'easy',
  },
  {
    id: 388, text: 'Kto śpiewał „Thriller”', answer: 'Michael Jackson',
    options: ['Michael Jackson', 'Prince', 'Beyoncé', 'Madonna'],
    category: 'Muzyka', difficulty: 'easy',
  },
  {
    id: 389, text: 'Jaki instrument ma 88 klawiszy', answer: 'Fortepian',
    options: ['Klawesyn', 'Akordeon', 'Organy', 'Fortepian'],
    category: 'Muzyka', difficulty: 'easy',
  },
  {
    id: 390, text: 'Kto skomponował „Cztery pory roku”', answer: 'Vivaldi',
    options: ['Bach', 'Vivaldi', 'Mozart', 'Haydn'],
    category: 'Muzyka', difficulty: 'medium',
  },
  {
    id: 391, text: 'Kto skomponował „Requiem”', answer: 'Mozart',
    options: ['Chopin', 'Beethoven', 'Mozart', 'Bach'],
    category: 'Muzyka', difficulty: 'medium',
  },
  {
    id: 392, text: 'Który zespół nagrał „Stairway to Heaven”', answer: 'Led Zeppelin',
    options: ['Deep Purple', 'Led Zeppelin', 'Black Sabbath', 'The Who'],
    category: 'Muzyka', difficulty: 'medium',
  },
  {
    id: 393, text: 'Kto śpiewał „Imagine”', answer: 'John Lennon',
    options: ['George Harrison', 'Bob Dylan', 'Paul McCartney', 'John Lennon'],
    category: 'Muzyka', difficulty: 'easy',
  },
  {
    id: 394, text: 'Kto śpiewał „Billie Jean”', answer: 'Michael Jackson',
    options: ['James Brown', 'Stevie Wonder', 'Michael Jackson', 'Prince'],
    category: 'Muzyka', difficulty: 'easy',
  },
  {
    id: 395, text: 'Który zespół śpiewał „Autobiografię”', answer: 'Perfect',
    options: ['Perfect', 'Maanam', 'Dżem', 'Lady Pank'],
    category: 'Muzyka', difficulty: 'easy',
  },
  {
    id: 396, text: 'Kto śpiewał „Kocham Cię kochanie moje”', answer: 'Kayah',
    options: ['Edyta Górniak', 'Doda', 'Maryla Rodowicz', 'Kayah'],
    category: 'Muzyka', difficulty: 'easy',
  },
  {
    id: 397, text: 'Który polski zespół śpiewał „Sen o Warszawie”', answer: 'Czesław Niemen',
    options: ['Lady Pank', 'Czesław Niemen', 'Perfect', 'Dżem'],
    category: 'Muzyka', difficulty: 'medium',
  },
  {
    id: 398, text: 'Jaka skala muzyczna ma 8 dźwięków', answer: 'Oktawa',
    options: ['Skala chromatyczna', 'Skala pentatoniczna', 'Oktawa', 'Skala dorycka'],
    category: 'Muzyka', difficulty: 'medium',
  },
  {
    id: 399, text: 'Kto śpiewał „Wind of Change”', answer: 'Scorpions',
    options: ['Metallica', 'Aerosmith', 'Scorpions', 'Bon Jovi'],
    category: 'Muzyka', difficulty: 'medium',
  },
  {
    id: 400, text: 'Który zespół wykonał „Smells Like Teen Spirit”', answer: 'Nirvana',
    options: ['Soundgarden', 'Nirvana', 'Pearl Jam', 'Alice in Chains'],
    category: 'Muzyka', difficulty: 'easy',
  },
  {
    id: 401, text: 'Kto śpiewał „Zacznij od Bacha”', answer: 'Zbigniew Wodecki',
    options: ['Zbigniew Wodecki', 'Marek Grechuta', 'Stasiek Wielanek', 'Czesław Niemen'],
    category: 'Muzyka', difficulty: 'medium',
  },
  {
    id: 402, text: 'Który polski zespół śpiewał „Niech żyje bal”', answer: 'Maryla Rodowicz',
    options: ['Maryla Rodowicz', 'Edyta Górniak', 'Doda', 'Kayah'],
    category: 'Muzyka', difficulty: 'medium',
  },
  {
    id: 403, text: 'Kto jest królem popu', answer: 'Michael Jackson',
    options: ['Madonna', 'Elvis Presley', 'Michael Jackson', 'Prince'],
    category: 'Muzyka', difficulty: 'easy',
  },
  {
    id: 404, text: 'Ile komór ma ludzkie serce', answer: '4',
    options: ['5', '4', '2', '3'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 405, text: 'Jaka jest najdłuższa kość w ciele', answer: 'Udo',
    options: ['Ramię', 'Kręgosłup', 'Goleń', 'Udo'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 406, text: 'Co to jest neuron', answer: 'Komórka nerwowa',
    options: ['Komórka mięśniowa', 'Komórka skóry', 'Komórka kostna', 'Komórka nerwowa'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 407, text: 'Gdzie powstaje żółć', answer: 'Wątroba',
    options: ['Żołądek', 'Trzustka', 'Wątroba', 'Jelita'],
    category: 'Biologia', difficulty: 'medium',
  },
  {
    id: 408, text: 'Ile nerwów czaszkowych ma człowiek', answer: '12',
    options: ['8', '12', '14', '10'],
    category: 'Biologia', difficulty: 'hard',
  },
  {
    id: 409, text: 'Co to jest synapsa', answer: 'Połączenie między neuronami',
    options: ['Komórka', 'Połączenie między neuronami', 'Białko', 'Hormon'],
    category: 'Biologia', difficulty: 'medium',
  },
  {
    id: 410, text: 'Jaki jest największy mózg wśród zwierząt', answer: 'Kaszalot',
    options: ['Słoń', 'Kaszalot', 'Delfin', 'Człowiek'],
    category: 'Biologia', difficulty: 'medium',
  },
  {
    id: 411, text: 'Który zmysł ma najwięcej receptorów', answer: 'Wzrok',
    options: ['Słuch', 'Wzrok', 'Węch', 'Dotyk'],
    category: 'Biologia', difficulty: 'medium',
  },
  {
    id: 412, text: 'Co to jest fotosynteza', answer: 'Produkcja glukozy z CO2',
    options: ['Fermentacja', 'Produkcja glukozy z CO2', 'Transpiracja', 'Oddychanie'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 413, text: 'Ile par gruczołów ślinowych mamy', answer: '3',
    options: ['3', '4', '5', '2'],
    category: 'Biologia', difficulty: 'hard',
  },
  {
    id: 414, text: 'Co produkuje trzustka', answer: 'Insulinę',
    options: ['Insulinę', 'Sok żołądkowy', 'Tyreoidynę', 'Żółć'],
    category: 'Biologia', difficulty: 'medium',
  },
  {
    id: 415, text: 'Gdzie zachodzi trawienie wchłanianie', answer: 'Jelito cienkie',
    options: ['Jelito grube', 'Jelito cienkie', 'Dwunastnica', 'Żołądek'],
    category: 'Biologia', difficulty: 'medium',
  },
  {
    id: 416, text: 'Ile jest grup krwi', answer: '4',
    options: ['5', '3', '6', '4'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 417, text: 'Co to jest przeciwciało', answer: 'Białko ochronne',
    options: ['Białko ochronne', 'Antybiotyk', 'Enzym', 'Hormon'],
    category: 'Biologia', difficulty: 'medium',
  },
  {
    id: 418, text: 'Jaki pierwiastek jest w hemoglobinie', answer: 'Żelazo',
    options: ['Cynk', 'Żelazo', 'Magnez', 'Miedź'],
    category: 'Biologia', difficulty: 'medium',
  },
  {
    id: 419, text: 'Co to jest allel', answer: 'Wariant genu',
    options: ['Chromosom', 'Wariant genu', 'Nukleotyd', 'Białko'],
    category: 'Biologia', difficulty: 'hard',
  },
  {
    id: 420, text: 'Ile par chromosomów ma człowiek', answer: '23',
    options: ['20', '22', '24', '23'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 421, text: 'Co bada genetyka', answer: 'Dziedziczenie',
    options: ['Komórki', 'Białka', 'Dziedziczenie', 'Tkanki'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 422, text: 'Jaki kolor mają liście chloroplastów', answer: 'Zielony',
    options: ['Czerwony', 'Niebieski', 'Żółty', 'Zielony'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 423, text: 'Co to jest metabolizm', answer: 'Przemiana materii',
    options: ['Trawienie', 'Temperatura', 'Oddychanie', 'Przemiana materii'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 424, text: 'Która część oka odpowiada za ostrość widzenia', answer: 'Siatkówka',
    options: ['Rogówka', 'Soczewka', 'Tęczówka', 'Siatkówka'],
    category: 'Biologia', difficulty: 'medium',
  },
  {
    id: 425, text: 'Ile płatów ma prawa nerka', answer: '2',
    options: ['2', '3', '4', '1'],
    category: 'Biologia', difficulty: 'hard',
  },
  {
    id: 426, text: 'Co bada embriologia', answer: 'Rozwój zarodkowy',
    options: ['Komórki', 'Geny', 'Tkanki', 'Rozwój zarodkowy'],
    category: 'Biologia', difficulty: 'medium',
  },
  {
    id: 427, text: 'Jaki narząd filtruje krew', answer: 'Nerka',
    options: ['Serce', 'Nerka', 'Płuco', 'Wątroba'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 428, text: 'Ile litrów krwi przepływa przez nerki dziennie', answer: '~180',
    options: ['~150', '~180', '~200', '~100'],
    category: 'Biologia', difficulty: 'hard',
  },
  {
    id: 429, text: 'Który hormon jest hormonem stresu', answer: 'Adrenalina',
    options: ['Adrenalina', 'Insulina', 'Testosteron', 'Tyroksyna'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 430, text: 'Co to jest enzym', answer: 'Katalizator biologiczny',
    options: ['Przeciwciało', 'Katalizator biologiczny', 'Hormon', 'Białko transportowe'],
    category: 'Biologia', difficulty: 'medium',
  },
  {
    id: 431, text: 'Jaki ptak nie lata', answer: 'Struś',
    options: ['Orzeł', 'Sokół', 'Kruk', 'Struś'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 432, text: 'Ile żołądków ma krowa', answer: '4',
    options: ['3', '4', '2', '5'],
    category: 'Biologia', difficulty: 'medium',
  },
  {
    id: 433, text: 'Najszybszy ptak świata', answer: 'Sokół wędrowny',
    options: ['Orzeł', 'Jerzyk', 'Jaskółka', 'Sokół wędrowny'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 434, text: 'Które zwierzę jest największym ssakiem lądowym', answer: 'Słoń afrykański',
    options: ['Hipopotam', 'Nosorożec', 'Żyrafa', 'Słoń afrykański'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 435, text: 'Ile serc ma ośmiornica', answer: '3',
    options: ['3', '1', '2', '4'],
    category: 'Biologia', difficulty: 'medium',
  },
  {
    id: 436, text: 'Jaki kolor krwi mają kraby podkowiaste', answer: 'Niebieski',
    options: ['Zielony', 'Fioletowy', 'Niebieski', 'Czerwony'],
    category: 'Biologia', difficulty: 'hard',
  },
  {
    id: 437, text: 'Która małpa jest najbliżej spokrewniona z człowiekiem', answer: 'Szympans',
    options: ['Gibbon', 'Goryl', 'Orangutan', 'Szympans'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 438, text: 'Ile zębów ma rekin', answer: '~3000',
    options: ['~500', '~5000', '~1000', '~3000'],
    category: 'Biologia', difficulty: 'hard',
  },
  {
    id: 439, text: 'Które zwierzę zmienia kolor skóry', answer: 'Kameleon',
    options: ['Żaba', 'Jaszczurka', 'Kameleon', 'Wąż'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 440, text: 'Ile nóg ma stonoga', answer: 'Para na każdy segment',
    options: ['Para na każdy segment', '100', '200', '500'],
    category: 'Biologia', difficulty: 'hard',
  },
  {
    id: 441, text: 'Co to jest plankton', answer: 'Drobne organizmy wodne',
    options: ['Bakterie', 'Glony', 'Zarodniki', 'Drobne organizmy wodne'],
    category: 'Biologia', difficulty: 'easy',
  },
  {
    id: 442, text: 'Kto jest obecnie prezydentem Polski', answer: 'Andrzej Duda',
    options: ['Lech Wałęsa', 'Donald Tusk', 'Mateusz Morawiecki', 'Andrzej Duda'],
    category: 'Polityka', difficulty: 'easy',
  },
  {
    id: 443, text: 'Kto jest premierem Polski', answer: 'Donald Tusk',
    options: ['Andrzej Duda', 'Mateusz Morawiecki', 'Szymon Hołownia', 'Donald Tusk'],
    category: 'Polityka', difficulty: 'easy',
  },
  {
    id: 444, text: 'Ile klubów ma Sejm RP', answer: '~6',
    options: ['~6', '4', '7', '5'],
    category: 'Polityka', difficulty: 'medium',
  },
  {
    id: 445, text: 'Gdzie mieści się siedziba ONZ', answer: 'Nowy Jork',
    options: ['Genewa', 'Paryż', 'Nowy Jork', 'Wiedeń'],
    category: 'Polityka', difficulty: 'easy',
  },
  {
    id: 446, text: 'Kto był premierem w 1989', answer: 'Tadeusz Mazowiecki',
    options: ['Tadeusz Mazowiecki', 'Jan Olszewski', 'Wojciech Jaruzelski', 'Lech Wałęsa'],
    category: 'Polityka', difficulty: 'medium',
  },
  {
    id: 447, text: 'Kto był pierwszym marszałkiem Senatu', answer: 'Andrzej Stelmachowski',
    options: ['Bronisław Komorowski', 'Tadeusz Mazowiecki', 'Lech Wałęsa', 'Andrzej Stelmachowski'],
    category: 'Polityka', difficulty: 'hard',
  },
  {
    id: 448, text: 'Ile głosów ma Polska w Parlamencie Europejskim', answer: '53',
    options: ['53', '51', '57', '55'],
    category: 'Polityka', difficulty: 'hard',
  },
  {
    id: 449, text: 'Kto był twórcą „Solidarności”', answer: 'Lech Wałęsa',
    options: ['Tadeusz Mazowiecki', 'Anna Walentynowicz', 'Lech Wałęsa', 'Bronisław Geremek'],
    category: 'Polityka', difficulty: 'easy',
  },
  {
    id: 450, text: 'Rok wejścia Polski do NATO', answer: '1999',
    options: ['2003', '1999', '1997', '2001'],
    category: 'Polityka', difficulty: 'easy',
  },
  {
    id: 451, text: 'Prezydentem USA w 2023 był…', answer: 'Joe Biden',
    options: ['Joe Biden', 'Donald Trump', 'Kamala Harris', 'Barack Obama'],
    category: 'Polityka', difficulty: 'easy',
  },
  {
    id: 452, text: 'Premier Wielkiej Brytanii w 2023', answer: 'Rishi Sunak',
    options: ['Liz Truss', 'Keir Starmer', 'Rishi Sunak', 'Boris Johnson'],
    category: 'Polityka', difficulty: 'medium',
  },
  {
    id: 453, text: 'Kanclerz Niemiec w 2023', answer: 'Olaf Scholz',
    options: ['Angela Merkel', 'Olaf Scholz', 'Robert Habeck', 'Gerhard Schröder'],
    category: 'Polityka', difficulty: 'medium',
  },
  {
    id: 454, text: 'Prezydent Rosji', answer: 'Władimir Putin',
    options: ['Michaił Gorbaczow', 'Dmitrij Miedwiediew', 'Borys Jelcyn', 'Władimir Putin'],
    category: 'Polityka', difficulty: 'easy',
  },
  {
    id: 455, text: 'Prezydent Ukrainy', answer: 'Wołodymyr Zełenski',
    options: ['Wiktor Janukowycz', 'Petro Poroszenko', 'Julija Tymoszenko', 'Wołodymyr Zełenski'],
    category: 'Polityka', difficulty: 'easy',
  },
  {
    id: 456, text: 'Prezydent Francji', answer: 'Emmanuel Macron',
    options: ['Francois Hollande', 'Emmanuel Macron', 'Jacques Chirac', 'Nicolas Sarkozy'],
    category: 'Polityka', difficulty: 'easy',
  },
  {
    id: 457, text: 'Premier Indii', answer: 'Narendra Modi',
    options: ['Manmohan Singh', 'Rahul Gandhi', 'Narendra Modi', 'Atal Bihari Vajpayee'],
    category: 'Polityka', difficulty: 'medium',
  },
  {
    id: 458, text: 'Prezydent Chin', answer: 'Xi Jinping',
    options: ['Hu Jintao', 'Wen Jiabao', 'Xi Jinping', 'Li Keqiang'],
    category: 'Polityka', difficulty: 'easy',
  },
  {
    id: 459, text: 'Premier Japonii', answer: 'Fumio Kishida',
    options: ['Shinzo Abe', 'Yoshihide Suga', 'Yoshihiko Noda', 'Fumio Kishida'],
    category: 'Polityka', difficulty: 'medium',
  },
  {
    id: 460, text: 'Prezydent Brazylii', answer: 'Luiz Inácio Lula da Silva',
    options: ['Jair Bolsonaro', 'Luiz Inácio Lula da Silva', 'Michel Temer', 'Dilma Rousseff'],
    category: 'Polityka', difficulty: 'medium',
  },
  {
    id: 461, text: 'Wynik 7×8 to…', answer: '56',
    options: ['64', '56', '58', '54'],
    category: 'Matematyka', difficulty: 'easy',
  },
  {
    id: 462, text: 'Pierwiastek z 225 to…', answer: '15',
    options: ['17', '25', '15', '13'],
    category: 'Matematyka', difficulty: 'medium',
  },
  {
    id: 463, text: 'Ile stopni ma trójkąt', answer: '180',
    options: ['360', '270', '90', '180'],
    category: 'Matematyka', difficulty: 'easy',
  },
  {
    id: 464, text: 'Ile boków ma sześcian', answer: '12',
    options: ['6', '8', '10', '12'],
    category: 'Matematyka', difficulty: 'medium',
  },
  {
    id: 465, text: 'Liczba PI po przecinku zaczyna się od…', answer: '1415',
    options: ['1417', '1414', '1415', '1416'],
    category: 'Matematyka', difficulty: 'medium',
  },
  {
    id: 466, text: '2 do potęgi 10 to…', answer: '1024',
    options: ['512', '2048', '1000', '1024'],
    category: 'Matematyka', difficulty: 'medium',
  },
  {
    id: 467, text: 'Ile procent to 1/8', answer: '12,5%',
    options: ['8%', '10%', '15%', '12,5%'],
    category: 'Matematyka', difficulty: 'medium',
  },
  {
    id: 468, text: '0 do potęgi 0 to…', answer: 'Nieokreślone',
    options: ['Nieokreślone', '0', '∞', '1'],
    category: 'Matematyka', difficulty: 'hard',
  },
  {
    id: 469, text: 'Średnia z 2, 4, 6, 8, 10 to…', answer: '6',
    options: ['6', '8', '5', '7'],
    category: 'Matematyka', difficulty: 'easy',
  },
  {
    id: 470, text: '25% z 200 to…', answer: '50',
    options: ['25', '50', '100', '75'],
    category: 'Matematyka', difficulty: 'easy',
  },
  {
    id: 471, text: 'Ile krawędzi ma ostrosłup o podstawie kwadratu', answer: '8',
    options: ['10', '6', '8', '12'],
    category: 'Matematyka', difficulty: 'hard',
  },
  {
    id: 472, text: '10! (silnia) to…', answer: '3 628 800',
    options: ['2 000 000', '5 000 000', '1 000 000', '3 628 800'],
    category: 'Matematyka', difficulty: 'hard',
  },
  {
    id: 473, text: 'Ile stopni ma kąt półpełny', answer: '180',
    options: ['180', '90', '270', '360'],
    category: 'Matematyka', difficulty: 'easy',
  },
  {
    id: 474, text: 'Mediana z 3, 7, 9, 12, 15 to…', answer: '9',
    options: ['10', '12', '9', '7'],
    category: 'Matematyka', difficulty: 'medium',
  },
  {
    id: 475, text: 'Najmniejsza liczba pierwsza', answer: '2',
    options: ['0', '3', '1', '2'],
    category: 'Matematyka', difficulty: 'easy',
  },
  {
    id: 476, text: 'Ile to logarytm z 100', answer: '2',
    options: ['3', '1', '10', '2'],
    category: 'Matematyka', difficulty: 'hard',
  },
  {
    id: 477, text: 'Jakie jest pole kwadratu o boku 5', answer: '25',
    options: ['20', '25', '35', '30'],
    category: 'Matematyka', difficulty: 'easy',
  },
  {
    id: 478, text: 'Obwód koła o promieniu 7', answer: '~44',
    options: ['~38', '~44', '~49', '~54'],
    category: 'Matematyka', difficulty: 'hard',
  },
  {
    id: 479, text: 'Reszta z dzielenia 17 przez 5', answer: '2',
    options: ['4', '2', '3', '1'],
    category: 'Matematyka', difficulty: 'easy',
  },
  {
    id: 480, text: 'Ile jest liczb doskonałych poniżej 10000', answer: '4',
    options: ['7', '5', '3', '4'],
    category: 'Matematyka', difficulty: 'hard',
  },
  {
    id: 481, text: 'Kto zagrał tytułową rolę w „Pianistce”', answer: 'Roman Polański',
    options: ['Andrzej Wajda', 'Agnieszka Holland', 'Krzysztof Kieślowski', 'Roman Polański'],
    category: 'Kultura', difficulty: 'hard',
  },
  {
    id: 482, text: 'Który film zdobył Oscara w 2020', answer: 'Parasite',
    options: ['Green Book', '1917', 'Parasite', 'Joker'],
    category: 'Kultura', difficulty: 'medium',
  },
  {
    id: 483, text: 'Kto wyreżyserował „Listę Schindlera”', answer: 'Steven Spielberg',
    options: ['Roman Polański', 'Martin Scorsese', 'Quentin Tarantino', 'Steven Spielberg'],
    category: 'Kultura', difficulty: 'easy',
  },
  {
    id: 484, text: 'Kto zagrał w „Titanic”', answer: 'Leonardo DiCaprio',
    options: ['Tom Cruise', 'Leonardo DiCaprio', 'Brad Pitt', 'Johnny Depp'],
    category: 'Kultura', difficulty: 'easy',
  },
  {
    id: 485, text: 'Jaki film zdobył najwięcej Oscarów', answer: 'Ben-Hur',
    options: ['Ben-Hur', 'Władca Pierścieni', 'La La Land', 'Titanic'],
    category: 'Kultura', difficulty: 'medium',
  },
  {
    id: 486, text: 'Kto wyreżyserował „Pulp Fiction”', answer: 'Quentin Tarantino',
    options: ['Quentin Tarantino', 'Steven Spielberg', 'Martin Scorsese', 'Coen Brothers'],
    category: 'Kultura', difficulty: 'easy',
  },
  {
    id: 487, text: 'Kto stworzył Mikiego', answer: 'Walt Disney',
    options: ['Ub Iwerks', 'Carl Barks', 'Walt Disney', 'Floyd Gottfredson'],
    category: 'Kultura', difficulty: 'easy',
  },
  {
    id: 488, text: 'Który polski film dostał Oscara', answer: 'Zimna wojna',
    options: ['Ida', 'Katyń', 'Zimna wojna', 'Wałęsa'],
    category: 'Kultura', difficulty: 'hard',
  },
  {
    id: 489, text: 'Kto zagrał Batmana', answer: 'Christian Bale',
    options: ['Michael Keaton', 'Christian Bale', 'George Clooney', 'Val Kilmer'],
    category: 'Kultura', difficulty: 'medium',
  },
  {
    id: 490, text: 'Który film zarobił najwięcej pieniędzy', answer: 'Avatar',
    options: ['Gwiezdne wojny', 'Avengers: Endgame', 'Avatar', 'Titanic'],
    category: 'Kultura', difficulty: 'medium',
  },
  {
    id: 491, text: 'Kto wyreżyserował „Obywatela Kane”', answer: 'Orson Welles',
    options: ['Frank Capra', 'Alfred Hitchcock', 'Orson Welles', 'John Ford'],
    category: 'Kultura', difficulty: 'hard',
  },
  {
    id: 492, text: 'Kto zagrał Jamesa Bonda najwięcej razy', answer: 'Roger Moore',
    options: ['Sean Connery', 'Roger Moore', 'Daniel Craig', 'Pierce Brosnan'],
    category: 'Kultura', difficulty: 'hard',
  },
  {
    id: 493, text: 'Jaki film animowany zdobył Oscara w 2024', answer: 'Chłopiec i czapla',
    options: ['Chłopiec i czapla', 'Życzenie', 'Spider-Verse', 'Nimona'],
    category: 'Kultura', difficulty: 'hard',
  },
  {
    id: 494, text: 'Kto wyreżyserował „Incepcję”', answer: 'Christopher Nolan',
    options: ['David Fincher', 'Christopher Nolan', 'Denis Villeneuve', 'James Cameron'],
    category: 'Kultura', difficulty: 'easy',
  },
  {
    id: 495, text: 'Który aktor grał Wolverine`a', answer: 'Hugh Jackman',
    options: ['Chris Hemsworth', 'Ryan Reynolds', 'Tom Hardy', 'Hugh Jackman'],
    category: 'Kultura', difficulty: 'easy',
  },
  {
    id: 496, text: 'Kto wyreżyserował „Seksmisję”', answer: 'Juliusz Machulski',
    options: ['Sylwester Chęciński', 'Stanisław Bareja', 'Juliusz Machulski', 'Krzysztof Kieślowski'],
    category: 'Kultura', difficulty: 'medium',
  },
  {
    id: 497, text: 'Jak nazywa się pies z „Psów”', answer: 'Czarny',
    options: ['Bury', 'Biały', 'Rudy', 'Czarny'],
    category: 'Kultura', difficulty: 'medium',
  },
  {
    id: 498, text: 'Jakie danie pochodzi z Włoch', answer: 'Pizza',
    options: ['Burrito', 'Kebab', 'Sushi', 'Pizza'],
    category: 'Kulinaria', difficulty: 'easy',
  },
  {
    id: 499, text: 'Jakie danie pochodzi z Japonii', answer: 'Sushi',
    options: ['Sushi', 'Tempura', 'Kimchi', 'Ramen'],
    category: 'Kulinaria', difficulty: 'easy',
  },
  {
    id: 500, text: 'Z jakiego kraju pochodzi kawa', answer: 'Etiopia',
    options: ['Brazylia', 'Etiopia', 'Kolumbia', 'Wietnam'],
    category: 'Kulinaria', difficulty: 'hard',
  },
  {
    id: 501, text: 'Najpopularniejsza przyprawa świata', answer: 'Pieprz',
    options: ['Papryka', 'Cynamon', 'Sól', 'Pieprz'],
    category: 'Kulinaria', difficulty: 'medium',
  },
  {
    id: 502, text: 'Z czego robi się wódkę', answer: 'Zboże',
    options: ['Ziemniaki', 'Zboże', 'Buraki', 'Owoce'],
    category: 'Kulinaria', difficulty: 'medium',
  },
  {
    id: 503, text: 'Który owoc zawiera najwięcej witaminy C', answer: 'Acerola',
    options: ['Acerola', 'Pomarańcza', 'Cytryna', 'Kiwi'],
    category: 'Kulinaria', difficulty: 'hard',
  },
  {
    id: 504, text: 'Z czego robi się czekoladę', answer: 'Kakao',
    options: ['Mleko', 'Cukier', 'Orzechy', 'Kakao'],
    category: 'Kulinaria', difficulty: 'easy',
  },
  {
    id: 505, text: 'Jakie danie to symbol Belgii', answer: 'Frytki',
    options: ['Frytki', 'Piwo', 'Deser', 'Goździki'],
    category: 'Kulinaria', difficulty: 'medium',
  },
  {
    id: 506, text: 'Z czego robi się brandy', answer: 'Wino',
    options: ['Jabłka', 'Wino', 'Wiśnie', 'Śliwki'],
    category: 'Kulinaria', difficulty: 'hard',
  },
  {
    id: 507, text: 'Gdzie wymyślono pączki', answer: 'Polska',
    options: ['Polska', 'Włochy', 'Austria', 'Francja'],
    category: 'Kulinaria', difficulty: 'hard',
  },
  {
    id: 508, text: 'Jakie danie pochodzi z Meksyku', answer: 'Taco',
    options: ['Kuskus', 'Burrito', 'Pierogi', 'Taco'],
    category: 'Kulinaria', difficulty: 'easy',
  },
  {
    id: 509, text: 'Ile łyżeczek ma łyżka', answer: '3',
    options: ['5', '4', '2', '3'],
    category: 'Kulinaria', difficulty: 'easy',
  },
  {
    id: 510, text: 'Z czego robi się ser żółty', answer: 'Mleka',
    options: ['Mleka', 'Jajek', 'Śmietany', 'Mąki'],
    category: 'Kulinaria', difficulty: 'easy',
  },
  {
    id: 511, text: 'Jaka herbata pochodzi z Chin', answer: 'Zielona',
    options: ['Biała', 'Zielona', 'Czarna', 'Czerwona'],
    category: 'Kulinaria', difficulty: 'medium',
  },
  {
    id: 512, text: 'Co to jest gluten', answer: 'Białko zbóż',
    options: ['Cukier', 'Skrobia', 'Białko zbóż', 'Tłuszcz'],
    category: 'Kulinaria', difficulty: 'medium',
  },
  {
    id: 513, text: 'Najpopularniejsze piwo świata', answer: 'Snow',
    options: ['Snow', 'Heineken', 'Corona', 'Budweiser'],
    category: 'Kulinaria', difficulty: 'hard',
  },
  {
    id: 514, text: 'Gdzie wynaleziono lody', answer: 'Chiny',
    options: ['USA', 'Włochy', 'Francja', 'Chiny'],
    category: 'Kulinaria', difficulty: 'hard',
  },
  {
    id: 515, text: 'Jaka jest bazowa przyprawa kuchni indyjskiej', answer: 'Kurkuma',
    options: ['Kolendra', 'Kmin', 'Kurkuma', 'Kardamon'],
    category: 'Kulinaria', difficulty: 'medium',
  },
  {
    id: 516, text: 'Które drzewo iglaste traci igły na zimę', answer: 'Modrzew',
    options: ['Świerk', 'Jodła', 'Sosna', 'Modrzew'],
    category: 'Przyroda', difficulty: 'medium',
  },
  {
    id: 517, text: 'Jaki jest największy drapieżnik lądowy', answer: 'Niedźwiedź polarny',
    options: ['Niedźwiedź brunatny', 'Tygrys', 'Niedźwiedź polarny', 'Lew'],
    category: 'Przyroda', difficulty: 'medium',
  },
  {
    id: 518, text: 'Który ptak jest symbolem narodowym Polski', answer: 'Bielik',
    options: ['Jastrząb', 'Orzeł', 'Bielik', 'Sokół'],
    category: 'Przyroda', difficulty: 'easy',
  },
  {
    id: 519, text: 'Który kwiat kwitnie najwcześniej wiosną', answer: 'Przebiśnieg',
    options: ['Krokus', 'Przebiśnieg', 'Żonkil', 'Tulipan'],
    category: 'Przyroda', difficulty: 'easy',
  },
  {
    id: 520, text: 'Ile płatków ma stokrotka', answer: '~30',
    options: ['~20', '~10', '~50', '~30'],
    category: 'Przyroda', difficulty: 'hard',
  },
  {
    id: 521, text: 'Które drzewo jest najwyższe w Polsce', answer: 'Daglezja',
    options: ['Modrzew', 'Świerk', 'Daglezja', 'Sosna'],
    category: 'Przyroda', difficulty: 'hard',
  },
  {
    id: 522, text: 'Co to jest las deszczowy', answer: 'Las równikowy',
    options: ['Las liściasty', 'Las górski', 'Las równikowy', 'Las borealny'],
    category: 'Przyroda', difficulty: 'easy',
  },
  {
    id: 523, text: 'Ile gatunków ptaków żyje w Polsce', answer: '~460',
    options: ['~400', '~300', '~460', '~500'],
    category: 'Przyroda', difficulty: 'medium',
  },
  {
    id: 524, text: 'Które zwierzę jest symbolem Australii', answer: 'Kangur',
    options: ['Kangur', 'Dingo', 'Koala', 'Emu'],
    category: 'Przyroda', difficulty: 'easy',
  },
  {
    id: 525, text: 'Jaki kwiat jest symbolem Holandii', answer: 'Tulipan',
    options: ['Storczyk', 'Róża', 'Frezja', 'Tulipan'],
    category: 'Przyroda', difficulty: 'easy',
  },
  {
    id: 526, text: 'Gdzie żyją pandy', answer: 'Chiny',
    options: ['Tybet', 'Japonia', 'Mongolia', 'Chiny'],
    category: 'Przyroda', difficulty: 'easy',
  },
  {
    id: 527, text: 'Które drzewo daje żołędzie', answer: 'Dąb',
    options: ['Dąb', 'Buk', 'Grab', 'Klon'],
    category: 'Przyroda', difficulty: 'easy',
  },
  {
    id: 528, text: 'Ile odnóg ma rozgwiazda', answer: '5',
    options: ['6', '8', '4', '5'],
    category: 'Przyroda', difficulty: 'easy',
  },
  {
    id: 529, text: 'Które zwierzę potrafi latać do tyłu', answer: 'Koliber',
    options: ['Koliber', 'Jaskółka', 'Nietoperz', 'Sokół'],
    category: 'Przyroda', difficulty: 'medium',
  },
  {
    id: 530, text: 'Który grzyb jest trujący', answer: 'Muchomor',
    options: ['Muchomor', 'Kurka', 'Pieczarka', 'Borowik'],
    category: 'Przyroda', difficulty: 'easy',
  },
  {
    id: 531, text: 'Które zwierzę śpi zimą przez cały sezon', answer: 'Niedźwiedź',
    options: ['Niedźwiedź', 'Wiewiórka', 'Borsuk', 'Szop'],
    category: 'Przyroda', difficulty: 'easy',
  },
  {
    id: 532, text: 'Co to jest bioróżnorodność', answer: 'Różnorodność gatunków',
    options: ['Różnorodność krajobrazu', 'Różnorodność klimatu', 'Różnorodność gleby', 'Różnorodność gatunków'],
    category: 'Przyroda', difficulty: 'medium',
  },
  {
    id: 533, text: 'Który park narodowy jest najstarszy w Polsce', answer: 'Białowieski',
    options: ['Ojcowski', 'Wielkopolski', 'Tatrzański', 'Białowieski'],
    category: 'Przyroda', difficulty: 'medium',
  },
  {
    id: 534, text: 'Ile liter ma polski alfabet', answer: '32',
    options: ['36', '32', '34', '30'],
    category: 'Język polski', difficulty: 'easy',
  },
  {
    id: 535, text: 'Która część mowy oznacza czynność', answer: 'Czasownik',
    options: ['Rzeczownik', 'Czasownik', 'Przymiotnik', 'Przysłówek'],
    category: 'Język polski', difficulty: 'easy',
  },
  {
    id: 536, text: 'Ile przypadków ma język polski', answer: '7',
    options: ['7', '8', '6', '5'],
    category: 'Język polski', difficulty: 'easy',
  },
  {
    id: 537, text: 'Jak się nazywa zdanie bez orzeczenia', answer: 'Równoważnik',
    options: ['Podmiot', 'Równoważnik', 'Okolicznik', 'Dopełnienie'],
    category: 'Język polski', difficulty: 'medium',
  },
  {
    id: 538, text: 'Nazwij przypadek „książki” (bez przyimków)', answer: 'Dopełniacz',
    options: ['Biernik', 'Dopełniacz', 'Mianownik', 'Celownik'],
    category: 'Język polski', difficulty: 'hard',
  },
  {
    id: 539, text: 'Co to jest synonim', answer: 'Wyraz bliskoznaczny',
    options: ['Wyraz przeciwstawny', 'Wyraz bliskoznaczny', 'Wyraz obcy', 'Wyraz pokrewny'],
    category: 'Język polski', difficulty: 'easy',
  },
  {
    id: 540, text: 'Co to jest antonim', answer: 'Wyraz przeciwstawny',
    options: ['Wyraz pokrewny', 'Wyraz bliskoznaczny', 'Wyraz obcy', 'Wyraz przeciwstawny'],
    category: 'Język polski', difficulty: 'easy',
  },
  {
    id: 541, text: 'Ile głosek ma wyraz „deszcz”', answer: '3',
    options: ['3', '5', '6', '4'],
    category: 'Język polski', difficulty: 'medium',
  },
  {
    id: 542, text: 'Co to jest zdrobnienie', answer: 'Wyrazy zdrobniałe',
    options: ['Wyrazy złożone', 'Wyrazy pochodne', 'Wyrazy zgrubiałe', 'Wyrazy zdrobniałe'],
    category: 'Język polski', difficulty: 'easy',
  },
  {
    id: 543, text: 'Jaki to tryb „zrobiłbym”', answer: 'Przypuszczający',
    options: ['Warunkowy', 'Przypuszczający', 'Rozkazujący', 'Oznajmujący'],
    category: 'Język polski', difficulty: 'hard',
  },
  {
    id: 544, text: 'Co oznacza skrót itd.', answer: 'I tak dalej',
    options: ['I tak dżentelmen', 'I tylko dlatego', 'I tym podobne', 'I tak dalej'],
    category: 'Język polski', difficulty: 'easy',
  },
  {
    id: 545, text: 'Jaka to liczba „nogi”', answer: 'Mnoga',
    options: ['Podwójna', 'Mnoga', 'Pojedyncza', 'Żadna'],
    category: 'Język polski', difficulty: 'easy',
  },
  {
    id: 546, text: 'Co to jest frazeologizm', answer: 'Związek frazeologiczny',
    options: ['Rodzaj zdania', 'Część zdania', 'Związek frazeologiczny', 'Część mowy'],
    category: 'Język polski', difficulty: 'medium',
  },
  {
    id: 547, text: 'Jakiego rodzaju jest „noc”', answer: 'Żeński',
    options: ['Żeński', 'Męski+żeński', 'Nijaki', 'Męski'],
    category: 'Język polski', difficulty: 'medium',
  },
  {
    id: 548, text: 'Co to jest przysłówek', answer: 'Nieodmienna część mowy',
    options: ['Rodzaj zaimka', 'Część zdania', 'Odmienna część mowy', 'Nieodmienna część mowy'],
    category: 'Język polski', difficulty: 'hard',
  },
  {
    id: 549, text: 'Jaka to część zdania: „szybko”', answer: 'Okolicznik',
    options: ['Podmiot', 'Przydawka', 'Okolicznik', 'Dopełnienie'],
    category: 'Język polski', difficulty: 'medium',
  },
  {
    id: 550, text: 'Ile samogłosek ma polski alfabet', answer: '9',
    options: ['7', '10', '9', '8'],
    category: 'Język polski', difficulty: 'medium',
  },
  {
    id: 551, text: 'Symbol chemiczny potasu to…', answer: 'K',
    options: ['K', 'P', 'Po', 'Pt'],
    category: 'Chemia', difficulty: 'medium',
  },
  {
    id: 552, text: 'Symbol chemiczny magnezu to…', answer: 'Mg',
    options: ['Mn', 'Mo', 'Mg', 'Md'],
    category: 'Chemia', difficulty: 'medium',
  },
  {
    id: 553, text: 'Symbol chemiczny chloru to…', answer: 'Cl',
    options: ['Cr', 'Co', 'Cl', 'Ch'],
    category: 'Chemia', difficulty: 'medium',
  },
  {
    id: 554, text: 'Symbol chemiczny siarki to…', answer: 'S',
    options: ['Se', 'Si', 'Sn', 'S'],
    category: 'Chemia', difficulty: 'medium',
  },
  {
    id: 555, text: 'Symbol chemiczny fosforu to…', answer: 'P',
    options: ['P', 'Ph', 'F', 'Po'],
    category: 'Chemia', difficulty: 'medium',
  },
  {
    id: 556, text: 'Jakie pH ma kwas', answer: 'Poniżej 7',
    options: ['0', '7', 'Poniżej 7', 'Powyżej 7'],
    category: 'Chemia', difficulty: 'easy',
  },
  {
    id: 557, text: 'Jakie pH ma zasada', answer: 'Powyżej 7',
    options: ['Powyżej 7', 'Poniżej 7', '0', '7'],
    category: 'Chemia', difficulty: 'easy',
  },
  {
    id: 558, text: 'Główny składnik powietrza', answer: 'Azot',
    options: ['Azot', 'Argon', 'CO2', 'Tlen'],
    category: 'Chemia', difficulty: 'easy',
  },
  {
    id: 559, text: 'Z czego składa się woda', answer: 'Wodór i tlen',
    options: ['Wodór i tlen', 'Wodór i azot', 'Azot i tlen', 'Tlen i chlor'],
    category: 'Chemia', difficulty: 'easy',
  },
  {
    id: 560, text: 'Który metal jest cieczą w temp. pokojowej', answer: 'Rtęć',
    options: ['Cyna', 'Ołów', 'Rtęć', 'Gal'],
    category: 'Chemia', difficulty: 'medium',
  },
  {
    id: 561, text: 'Co to jest cząsteczka', answer: 'Zbiór atomów',
    options: ['Zbiór elektronów', 'Zbiór związków', 'Zbiór atomów', 'Zbiór białek'],
    category: 'Chemia', difficulty: 'easy',
  },
  {
    id: 562, text: 'Co to jest katalizator', answer: 'Substancja przyspieszająca reakcję',
    options: ['Substrat', 'Inhibitor', 'Substancja przyspieszająca reakcję', 'Produkt'],
    category: 'Chemia', difficulty: 'medium',
  },
  {
    id: 563, text: 'Co to jest utlenianie', answer: 'Oddawanie elektronów',
    options: ['Oddawanie elektronów', 'Oddawanie tlenu', 'Pobieranie tlenu', 'Pobieranie elektronów'],
    category: 'Chemia', difficulty: 'hard',
  },
  {
    id: 564, text: 'Główny składnik gazu ziemnego', answer: 'Metan',
    options: ['Etan', 'Butan', 'Metan', 'Propan'],
    category: 'Chemia', difficulty: 'medium',
  },
  {
    id: 565, text: 'Jaki gaz powoduje zakwaszenie wody', answer: 'CO2',
    options: ['SO2', 'CO2', 'NO2', 'N2O'],
    category: 'Chemia', difficulty: 'hard',
  },
  {
    id: 566, text: 'Jednostka siły to…', answer: 'Newton',
    options: ['Wat', 'Dżul', 'Newton', 'Tesla'],
    category: 'Fizyka', difficulty: 'easy',
  },
  {
    id: 567, text: 'Jednostka energii to…', answer: 'Dżul',
    options: ['Dżul', 'Tesla', 'Newton', 'Wat'],
    category: 'Fizyka', difficulty: 'easy',
  },
  {
    id: 568, text: 'Jednostka mocy to…', answer: 'Wat',
    options: ['Dżul', 'Wat', 'Newton', 'Amper'],
    category: 'Fizyka', difficulty: 'easy',
  },
  {
    id: 569, text: 'Jednostka napięcia to…', answer: 'Wolt',
    options: ['Wat', 'Wolt', 'Amper', 'Om'],
    category: 'Fizyka', difficulty: 'easy',
  },
  {
    id: 570, text: 'Prawo Ohma dotyczy', answer: 'Natężenia i napięcia',
    options: ['Siły i masy', 'Natężenia i napięcia', 'Energii i ciepła', 'Prędkości i czasu'],
    category: 'Fizyka', difficulty: 'medium',
  },
  {
    id: 571, text: 'Prędkość światła to…', answer: '300 000 km/s',
    options: ['300 000 km/s', '500 000 km/s', '400 000 km/s', '200 000 km/s'],
    category: 'Fizyka', difficulty: 'easy',
  },
  {
    id: 572, text: 'Co to jest atom', answer: 'Podstawowa jednostka materii',
    options: ['Elektron', 'Związek chemiczny', 'Podstawowa jednostka materii', 'Cząsteczka'],
    category: 'Fizyka', difficulty: 'easy',
  },
  {
    id: 573, text: 'Kto odkrył grawitację', answer: 'Newton',
    options: ['Einstein', 'Newton', 'Galileusz', 'Kepler'],
    category: 'Fizyka', difficulty: 'easy',
  },
  {
    id: 574, text: 'Jaka jest najszybsza cząstka', answer: 'Foton',
    options: ['Neutron', 'Foton', 'Elektron', 'Proton'],
    category: 'Fizyka', difficulty: 'medium',
  },
  {
    id: 575, text: 'Co to jest próżnia', answer: 'Brak materii',
    options: ['Brak temperatury', 'Brak materii', 'Brak grawitacji', 'Brak ciśnienia'],
    category: 'Fizyka', difficulty: 'medium',
  },
  {
    id: 576, text: 'Zasada zachowania energii mówi że energię…', answer: 'Nie można stworzyć ani zniszczyć',
    options: ['Zawsze rośnie', 'Można stworzyć', 'Nie można stworzyć ani zniszczyć', 'Zawsze maleje'],
    category: 'Fizyka', difficulty: 'medium',
  },
  {
    id: 577, text: 'Która siła utrzymuje atomy razem', answer: 'Siły jądrowe',
    options: ['Grawitacja', 'Siły jądrowe', 'Elektromagnetyzm', 'Siły słabe'],
    category: 'Fizyka', difficulty: 'hard',
  },
  {
    id: 578, text: 'Co to jest dźwięk', answer: 'Fala mechaniczna',
    options: ['Cząsteczka', 'Fala elektromagnetyczna', 'Fala mechaniczna', 'Promieniowanie'],
    category: 'Fizyka', difficulty: 'easy',
  },
  {
    id: 579, text: 'Co mierzy termometr', answer: 'Temperaturę',
    options: ['Temperaturę', 'Energię', 'Ciśnienie', 'Ciepło'],
    category: 'Fizyka', difficulty: 'easy',
  },
  {
    id: 580, text: 'Prawo Archimedesa dotyczy…', answer: 'Wyporu',
    options: ['Cieczy', 'Wyporu', 'Napięcia', 'Gazów'],
    category: 'Fizyka', difficulty: 'medium',
  },

// Total questions generated: 480
];

export function shuffleQuestions(): Question[] {
  const shuffled = [...QUESTIONS];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const CATEGORIES = [...new Set(QUESTIONS.map(q => q.category))];
