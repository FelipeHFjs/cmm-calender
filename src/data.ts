export interface botschaftAuswartigAssignment {
  name: string;
  ort: string;
}

export interface sangerHalferAssignment {
  name: string;
  gruppe: number;
}

export interface InstrumentenAssignment {
  name: string;
  instrument: string;
  gruppe: number;
  icon: string | null;
}

export interface SoundAssignment {
  name: string;
  gruppe: number;
}

export interface LiveStreamAssignment {
  name: string;
  gruppe: number;
}

export interface ServiceAssignment {
  datum: string;
  botschaft: string;
  botschaftAuswartig: botschaftAuswartigAssignment[] | null;
  programmleiter: string;
  ubersetzung: string;
  singLeiter: string;
  sangerHalfer?: sangerHalferAssignment[];
  instrumenten: InstrumentenAssignment[];
  pianistin: string;
  praludium?: string;
  extraNumer?: string;
  lobgesangKinder: string;
  ssPianistinErwachsene?: string;
  ssGesangErwachsene?: string;
  ssGesangHelfer?: sangerHalferAssignment[];
  sound: SoundAssignment[];
  liveStream: LiveStreamAssignment[];
}

export const sangerHalferData: sangerHalferAssignment[] = [
  { name: "Lisa Wieler", gruppe: 1 },
  { name: "Martha Teichroeb", gruppe: 1 },
  { name: "Andrew Dyck", gruppe: 2 },
  { name: "Paulina Wieler", gruppe: 2 },
  { name: "Jimmy K.", gruppe: 3 },
  { name: "Neta K", gruppe: 3 },
  { name: "Leonel Enns", gruppe: 4 },
  { name: "Savanah Friesen", gruppe: 4 },
  { name: "Jugend", gruppe: 5 },
];

export const instrumentenData: InstrumentenAssignment[] = [
  // Gruppe 1
  { name: "Amy D.", instrument: "?", gruppe: 1, icon: "" },
  { name: "Gracie K.", instrument: "Violin", gruppe: 1, icon: "🎻" },
  { name: "Kaylee K.", instrument: "Mandolin", gruppe: 1, icon: "" },
  { name: "Santiago B.", instrument: "Gitarre", gruppe: 1, icon: "🎸" },
  { name: "Janika T.", instrument: "Violin", gruppe: 1, icon: "🎻" },

  // Gruppe 2
  { name: "Ingrid F.", instrument: "Violin", gruppe: 2, icon: "🎻" },
  { name: "Paulina W.", instrument: "Gitarre", gruppe: 2, icon: "🎸" },
  { name: "Katharina K.", instrument: "Violin", gruppe: 2, icon: "🎻" },
  { name: "Valeria R.", instrument: "Violin", gruppe: 2, icon: "🎻" },

  // Gruppe 3
  { name: "Obelia F.", instrument: "Violin", gruppe: 3, icon: "🎻" },
  { name: "Tina W", instrument: "Violin", gruppe: 3, icon: "🎻" },
  { name: "Caleb H.", instrument: "Gitarre", gruppe: 3, icon: "🎸" },
  { name: "Rosella V.", instrument: "Violin", gruppe: 3, icon: "🎻" },

  // Gruppe 4
  { name: "Karol N.", instrument: "Violin", gruppe: 4, icon: "🎻" },
  { name: "Alec N.", instrument: "Gitarre", gruppe: 4, icon: "🎸" },
  { name: "Gisela .", instrument: "Violin", gruppe: 4, icon: "🎻" },
  { name: "Rachel H.", instrument: "Drums", gruppe: 4, icon: "🥁" },
  { name: "Nancy E.", instrument: "Violin", gruppe: 4, icon: "🎻" },

  // Jugend Gruppe
  { name: "Jugend", instrument: "Verschiedene", gruppe: 5, icon: "🎶" },
];

const soundData: SoundAssignment[] = [
  { name: "Felipe H.", gruppe: 1 },
  { name: "Beto N.", gruppe: 1 },
  { name: "Brandon D.", gruppe: 1 },
  { name: "Ricky E.", gruppe: 1 },
  { name: "Pedro F.", gruppe: 2 },
  { name: "Jacob T.", gruppe: 2 },
  { name: "Adrian G.", gruppe: 2 },
  { name: "Jaime F.", gruppe: 2 },
];

const liveStreamData: LiveStreamAssignment[] = [
  { name: "Ernie F.", gruppe: 1 },
  { name: "Cristobal R.", gruppe: 1 },
  { name: "Anita K.", gruppe: 2 },
  { name: "Angelina P.", gruppe: 2 },
  { name: "Corny D.", gruppe: 3 },
  { name: "Jacob P.", gruppe: 3 },
];

export const calendarData: ServiceAssignment[] = [
  {
    datum: "2026-01-04",
    botschaft: "Nicko Wiebe",
    botschaftAuswartig: null,
    programmleiter: "Jeffrey Schmidt",
    ubersetzung: "Pancho N.",
    singLeiter: "Jugend",
    sangerHalfer: [...sangerHalferData.filter((s) => s.gruppe === 5)],
    instrumenten: [...instrumentenData.filter((i) => i.gruppe === 5)],
    pianistin: "Jugend",
    praludium: "Jugend",
    lobgesangKinder: "Rosella V.",
    extraNumer: "Janika T.",
    ssPianistinErwachsene: "Anny Neufeld",
    ssGesangErwachsene: "Peter & Susie W.",
    ssGesangHelfer: [
      ...sangerHalferData.filter(
        (s) => s.gruppe === 1 || s.gruppe === 2 || s.gruppe === 4
      ),
    ],
    sound: [...soundData.filter((s) => s.gruppe === 1)],
    liveStream: [...liveStreamData.filter((l) => l.gruppe === 2)],
  },
  {
    datum: "2026-01-11",
    botschaft: "Pr. Juan Dyck",
    botschaftAuswartig: [{ name: "JP Andres Blatz", ort: "Anahuac" }],
    programmleiter: "Corny F.",
    ubersetzung: "Prisilla W.",
    singLeiter: "Jake Friessen",
    sangerHalfer: [...sangerHalferData.filter((s) => s.gruppe === 1)],
    instrumenten: [...instrumentenData.filter((i) => i.gruppe === 1)],
    pianistin: "Ingrid F.",
    praludium: "Gisela T.",
    extraNumer: "Gracie K.",
    lobgesangKinder: "Rosella V.",
    sound: [...soundData.filter((s) => s.gruppe === 2)],
    liveStream: [...liveStreamData.filter((l) => l.gruppe === 1)],
  },
  {
    datum: "2026-01-18",
    botschaft: "Kenny Wall",
    botschaftAuswartig: [
      { name: "Jeffrey Schmitt", ort: "Villa Ahumada" },
      { name: "Andres B", ort: "Igl. Tarahumara" },
      { name: "Juan D.", ort: "Erwakjunk" },
      { name: "Abram W.", ort: "Campo 79" },
    ],
    programmleiter: "Jacob N.",
    ubersetzung: "Rebecca Dyck",
    singLeiter: "Rudy & Annita Wall",
    sangerHalfer: [...sangerHalferData.filter((s) => s.gruppe === 2)],
    instrumenten: [...instrumentenData.filter((i) => i.gruppe === 2)],
    pianistin: "Rolanda G.",
    praludium: "Valeria R.",
    extraNumer: "Männerchor",
    lobgesangKinder: "Rosella V.",
    sound: [...soundData.filter((s) => s.gruppe === 1)],
    liveStream: [...liveStreamData.filter((l) => l.gruppe === 2)],
  },
  {
    datum: "2026-01-25",
    botschaft: "Pr. Andres Blatz",
    botschaftAuswartig: [{ name: "Pr Juan Dyck", ort: "El Valle" }],
    programmleiter: "Pancho N.",
    ubersetzung: "Pancho N.",
    singLeiter: "Isane Klassen",
    sangerHalfer: [...sangerHalferData.filter((s) => s.gruppe === 3)],
    instrumenten: [...instrumentenData.filter((i) => i.gruppe === 3)],
    pianistin: "Paulina W.",
    praludium: "Mary K.",
    lobgesangKinder: "Rosella V.",
    sound: [...soundData.filter((s) => s.gruppe === 2)],
    liveStream: [...liveStreamData.filter((l) => l.gruppe === 3)],
  },
  {
    datum: "2026-02-01",
    botschaft: "Pr. Jeffrey Schmitt",
    botschaftAuswartig: [
      { name: "Andres Blatz", ort: "El Valle" },
      { name: "Juan Dyck", ort: "Hillside" },
    ],
    programmleiter: "Kenny W.",
    ubersetzung: "Prisilla W.",
    singLeiter: "Daniel & Lorena",
    sangerHalfer: [...sangerHalferData.filter((s) => s.gruppe === 4)],
    instrumenten: [...instrumentenData.filter((i) => i.gruppe === 4)],
    pianistin: "Prisilla W.",
    praludium: "Rachel H.",
    extraNumer: "Yessenia N.",
    lobgesangKinder: "Rolanda G.",
    ssPianistinErwachsene: "Jugend",
    ssGesangErwachsene: "Jake Friessen",
    ssGesangHelfer: [...sangerHalferData.filter((s) => s.gruppe === 5)],
    sound: [...soundData.filter((s) => s.gruppe === 1)],
    liveStream: [...liveStreamData.filter((l) => l.gruppe === 1)],
  },
  {
    datum: "2026-02-08",
    botschaft: "SBS",
    botschaftAuswartig: null,
    programmleiter: "Juan Dyck",
    ubersetzung: "Rebecca Dyck",
    singLeiter: "SBS",
    sangerHalfer: [{ name: "SBS", gruppe: 99 }],
    instrumenten: [
      { name: "SBS", instrument: "Verschiedene", gruppe: 99, icon: "" },
    ],
    pianistin: "SBS",
    praludium: "SBS",
    extraNumer: "SBS",
    lobgesangKinder: "Rolanda G.",
    sound: [...soundData.filter((s) => s.gruppe === 2)],
    liveStream: [...liveStreamData.filter((l) => l.gruppe === 2)],
  },
  {
    datum: "2026-02-15",
    botschaft: "Pr. Abram Wieler",
    botschaftAuswartig: [
      { name: "Pr. Juan Dyck", ort: "Villa Ahumada" },
      { name: "Jeffrey Schmitt", ort: "Igl. Tarahumara" },
    ],
    programmleiter: "Peter W.",
    ubersetzung: "Pancho N.",
    singLeiter: "Jugend",
    sangerHalfer: [...sangerHalferData.filter((s) => s.gruppe === 5)],
    instrumenten: [...instrumentenData.filter((i) => i.gruppe === 5)],
    pianistin: "Jugend.",
    praludium: "Jugend.",
    extraNumer: "Mary E.",
    lobgesangKinder: "Rolanda G.",
    sound: [...soundData.filter((s) => s.gruppe === 1)],
    liveStream: [...liveStreamData.filter((l) => l.gruppe === 3)],
  },
  {
    datum: "2026-02-22",
    botschaft: "Pr. Juan Dyck",
    botschaftAuswartig: null,
    programmleiter: "David T.",
    ubersetzung: "Prisilla W.",
    singLeiter: "Jake Friessen",
    sangerHalfer: [...sangerHalferData.filter((s) => s.gruppe === 1)],
    instrumenten: [...instrumentenData.filter((i) => i.gruppe === 1)],
    pianistin: "Kenia N.",
    praludium: "Olivia W.",
    extraNumer: "Martens Familie",
    lobgesangKinder: "Rolanda G.",
    sound: [...soundData.filter((s) => s.gruppe === 2)],
    liveStream: [...liveStreamData.filter((l) => l.gruppe === 1)],
  },
];
