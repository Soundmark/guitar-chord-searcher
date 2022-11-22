export type ChordSetting = Record<
  string,
  Record<
    string,
    {
      firstTab: number;
      chords: number[];
      finger?: number[];
      spanTab?: { x: number; y: number; span: number };
    }
  >
>;

export const typeArr = [
  "maj",
  "5",
  "6",
  "7",
  "maj7",
  "9",
  "maj9",
  "11",
  "13",
  "maj13",
  "min",
  "m6",
  "m7",
  "m9",
  "m11",
  "m13",
  "m(maj7)",
  "sus2",
  "sus4",
  "dim",
  "aug",
  "6/9",
  "7sus4",
  "7b5",
  "7b9",
  "9sus4",
  "add9",
  "aug9",
];

export const chordSetting: ChordSetting = {
  C: {
    maj: {
      firstTab: 1,
      chords: [-1, 3, 2, 0, 1, 0],
      finger: [0, 3, 2, 0, 1, 0],
    },
    5: {
      firstTab: 1,
      chords: [-1, 3, 5, 5, -1, -1],
      finger: [0, 1, 2, 3, 0, 0],
    },
    6: {
      firstTab: 1,
      chords: [3, -1, 2, 2, 1, -1],
      finger: [4, 0, 2, 3, 1, 0],
    },
    7: {
      firstTab: 1,
      chords: [-1, 3, 2, 3, 1, 0],
      finger: [0, 3, 2, 4, 1, 0],
    },
    maj7: {
      firstTab: 1,
      chords: [-1, 3, 2, 0, 0, 0],
      finger: [0, 3, 2, 0, 0, 0],
    },
    9: {
      firstTab: 1,
      chords: [-1, 3, 2, 3, 3, 3],
      finger: [0, 2, 1, 3, 3, 3],
    },
    maj9: {
      firstTab: 1,
      chords: [-1, 3, 5, 4, 3, 0],
      finger: [0, 1, 4, 3, 2, 0],
    },
    11: {
      firstTab: 1,
      chords: [-1, 3, 2, 3, 1, 1],
      finger: [0, 3, 2, 4, 1, 1],
    },
    13: {
      firstTab: 1,
      chords: [-1, 1, 2, 2, 1, -1],
      finger: [0, 1, 3, 4, 2, 0],
    },
    maj13: {
      firstTab: 1,
      chords: [-1, 3, -1, 4, 5, 5],
      finger: [0, 1, 0, 2, 3, 4],
    },
    min: {
      firstTab: 1,
      chords: [-1, 3, 1, 0, 1, -1],
      finger: [0, 4, 2, 0, 1, 0],
    },
    m6: {
      firstTab: 1,
      chords: [-1, 0, 1, 0, 1, 3],
      finger: [0, 0, 1, 0, 2, 4],
    },
    m7: {
      firstTab: 1,
      chords: [-1, -1, 1, 3, 1, 3],
      finger: [0, 0, 1, 3, 1, 4],
    },
    m9: {
      firstTab: 1,
      chords: [-1, 3, 1, 3, 3, -1],
      finger: [0, 2, 1, 3, 4, 0],
    },
    m11: {
      firstTab: 1,
      chords: [-1, 3, 3, 3, 4, 3],
      finger: [0, 1, 1, 1, 2, 1],
    },
    m13: {
      firstTab: 1,
      chords: [-1, 3, -1, 3, 4, 5],
      finger: [0, 1, 0, 2, 3, 4],
    },
    "m(maj7)": {
      firstTab: 1,
      chords: [-1, 3, 5, 4, 4, 3],
      finger: [0, 1, 4, 2, 3, 1],
    },
    sus2: {
      firstTab: 1,
      chords: [-1, 3, 0, 0, 1, 3],
      finger: [0, 3, 0, 0, 1, 4],
    },
    sus4: {
      firstTab: 1,
      chords: [-1, 3, 3, 0, 1, -1],
      finger: [0, 3, 4, 0, 1, 0],
    },
    dim: {
      firstTab: 1,
      chords: [-1, -1, 1, 2, 1, 2],
      finger: [0, 0, 1, 3, 2, 4],
    },
    aug: {
      firstTab: 1,
      chords: [-1, 3, 2, 1, 1, -1],
      finger: [0, 3, 2, 1, 1, 0],
    },
    "6/9": {
      firstTab: 1,
      chords: [-1, 3, 2, 2, 3, 3],
      finger: [0, 2, 1, 1, 3, 4],
    },
    "7sus4": {
      firstTab: 1,
      chords: [3, -1, 3, 3, 1, -1],
      finger: [2, 0, 3, 4, 1, 0],
    },
    "7b5": {
      firstTab: 1,
      chords: [-1, 3, 4, 3, 5, -1],
      finger: [0, 1, 2, 1, 4, 0],
    },
    "7b9": {
      firstTab: 1,
      chords: [-1, 3, 2, 3, 2, 0],
      finger: [0, 3, 1, 4, 2, 0],
    },
    "9sus4": {
      firstTab: 1,
      chords: [-1, 3, -1, 3, 3, 1],
      finger: [0, 2, 0, 3, 4, 1],
    },
    add9: {
      firstTab: 1,
      chords: [-1, 3, 2, 0, 3, 3],
      finger: [0, 2, 1, 0, 3, 4],
    },
    aug9: {
      firstTab: 1,
      chords: [0, 1, 0, 1, 1, 0],
      finger: [0, 1, 0, 2, 3, 0],
    },
  },
  "C#/Db": {
    maj: {
      firstTab: 1,
      chords: [-1, 4, 3, 1, 2, 1],
      finger: [0, 4, 3, 1, 2, 1],
    },
    5: {
      firstTab: 1,
      chords: [-1, -1, -1, 1, 2, 4],
      finger: [0, 0, 0, 1, 2, 4],
    },
    6: {
      firstTab: 1,
      chords: [-1, -1, 3, 3, 2, 4],
      finger: [0, 0, 2, 3, 1, 4],
    },
    7: {
      firstTab: 1,
      chords: [-1, 4, 3, 4, 2, -1],
      finger: [0, 3, 2, 4, 1, 0],
    },
    maj7: {
      firstTab: 1,
      chords: [-1, 4, 3, 1, 1, 1],
      finger: [0, 4, 3, 1, 1, 1],
    },
    9: {
      firstTab: 1,
      chords: [-1, 4, 3, 4, 4, 4],
      finger: [0, 2, 1, 3, 3, 3],
    },
    maj9: {
      firstTab: 1,
      chords: [-1, 4, 1, 1, 1, 1],
      finger: [0, 4, 1, 1, 1, 1],
    },
    11: {
      firstTab: 1,
      chords: [-1, 4, 3, 4, 2, 2],
      finger: [0, 3, 2, 4, 1, 1],
    },
    13: {
      firstTab: 1,
      chords: [-1, 2, 1, 2, 2, 4],
      finger: [0, 2, 1, 3, 3, 4],
    },
    maj13: {
      firstTab: 1,
      chords: [-1, 1, -1, 2, 3, 3],
      finger: [0, 1, 0, 2, 3, 4],
    },
    min: {
      firstTab: 1,
      chords: [-1, -1, 2, 1, 2, 0],
      finger: [0, 0, 2, 1, 3, 0],
    },
    m6: {
      firstTab: 1,
      chords: [-1, 4, -1, 3, 5, 4],
      finger: [0, 2, 0, 1, 4, 3],
    },
    m7: {
      firstTab: 1,
      chords: [-1, 4, 2, 1, 0, 0],
      finger: [0, 4, 2, 1, 0, 0],
    },
    m9: {
      firstTab: 1,
      chords: [-1, 4, 2, 4, 4, 0],
      finger: [0, 2, 1, 3, 4, 0],
    },
    m11: {
      firstTab: 1,
      chords: [-1, 4, 1, 4, 4, 1],
      finger: [0, 2, 1, 3, 4, 1],
    },
    m13: {
      firstTab: 1,
      chords: [-1, 1, -1, 1, 2, 3],
      finger: [0, 1, 0, 2, 3, 4],
    },
    "m(maj7)": {
      firstTab: 1,
      chords: [-1, 1, 3, 2, 2, 1],
      finger: [0, 1, 4, 2, 3, 1],
    },
    sus2: {
      firstTab: 1,
      chords: [-1, -1, 1, 1, 2, -1],
      finger: [0, 0, 1, 1, 3, 0],
    },
    sus4: {
      firstTab: 1,
      chords: [-1, 1, 3, 3, 4, -1],
      finger: [0, 1, 3, 3, 4, 0],
    },
    dim: {
      firstTab: 1,
      chords: [-1, -1, 2, 3, 2, 3],
      finger: [0, 0, 1, 3, 2, 4],
    },
    aug: {
      firstTab: 1,
      chords: [-1, 4, 3, 2, 2, -1],
      finger: [0, 3, 2, 1, 1, 0],
    },
    "6/9": {
      firstTab: 1,
      chords: [-1, 1, 1, 1, 2, 1],
      finger: [0, 1, 1, 1, 2, 1],
    },
    "7sus4": {
      firstTab: 1,
      chords: [4, -1, 4, 4, 2, -1],
      finger: [2, 0, 3, 4, 1, 0],
    },
    "7b5": {
      firstTab: 1,
      chords: [3, -1, 3, 4, 2, -1],
      finger: [2, 0, 3, 4, 1, 0],
    },
    "7b9": {
      firstTab: 1,
      chords: [-1, 4, -1, 4, 3, 1],
      finger: [0, 3, 0, 4, 2, 1],
    },
    "9sus4": {
      firstTab: 1,
      chords: [-1, 4, -1, 4, 4, 2],
      finger: [0, 2, 0, 3, 4, 1],
    },
    add9: {
      firstTab: 1,
      chords: [-1, 4, 3, 1, 4, -1],
      finger: [0, 3, 2, 1, 4, 0],
    },
    aug9: {
      firstTab: 1,
      chords: [-1, 4, 3, 4, 4, 5],
      finger: [0, 2, 1, 3, 3, 4],
    },
  },
  D: {
    maj: {
      firstTab: 1,
      chords: [-1, -1, 0, 2, 3, 2],
      finger: [0, 0, 0, 1, 3, 2],
    },
    5: {
      firstTab: 1,
      chords: [-1, -1, 0, 2, 3, -1],
      finger: [0, 0, 0, 1, 2, 0],
    },
    6: {
      firstTab: 1,
      chords: [-1, -1, 0, 2, 0, 2],
      finger: [0, 0, 0, 2, 0, 3],
    },
    7: {
      firstTab: 1,
      chords: [-1, -1, 0, 2, 1, 2],
      finger: [0, 0, 0, 2, 1, 3],
    },
    maj7: {
      firstTab: 1,
      chords: [-1, 5, 4, 2, 2, 2],
      finger: [0, 4, 3, 1, 1, 1],
    },
    9: {
      firstTab: 1,
      chords: [-1, 5, 4, 2, 1, 0],
      finger: [0, 4, 3, 2, 1, 0],
    },
    maj9: {
      firstTab: 1,
      chords: [-1, 5, 2, 2, 2, 2],
      finger: [0, 4, 1, 1, 1, 1],
    },
    11: {
      firstTab: 1,
      chords: [-1, -1, 0, 0, 1, 2],
      finger: [0, 0, 0, 0, 1, 2],
    },
    13: {
      firstTab: 1,
      chords: [-1, 3, 4, 4, 3, -1],
      finger: [0, 1, 3, 4, 2, 0],
    },
    maj13: {
      firstTab: 5,
      chords: [-1, 1, -1, 2, 3, 3],
      finger: [0, 1, 0, 2, 3, 4],
    },
    min: {
      firstTab: 1,
      chords: [-1, -1, 0, 2, 3, 1],
      finger: [0, 0, 0, 2, 3, 1],
    },
    m6: {
      firstTab: 1,
      chords: [-1, -1, 0, 2, 0, 1],
      finger: [0, 0, 0, 2, 0, 1],
    },
    m7: {
      firstTab: 1,
      chords: [-1, -1, 0, 2, 1, 1],
      finger: [0, 0, 0, 2, 1, 1],
    },
    m9: {
      firstTab: 1,
      chords: [-1, 5, 3, 5, 5, -1],
      finger: [0, 2, 1, 3, 4, 0],
    },
    m11: {
      firstTab: 1,
      chords: [-1, -1, 0, 0, 1, 1],
      finger: [0, 0, 0, 0, 1, 1],
    },
    m13: {
      firstTab: 1,
      chords: [-1, -1, 0, 4, 1, 1],
      finger: [0, 0, 0, 4, 1, 1],
    },
    "m(maj7)": {
      firstTab: 1,
      chords: [-1, -1, 0, 2, 2, 1],
      finger: [0, 0, 0, 2, 3, 1],
    },
    sus2: {
      firstTab: 1,
      chords: [-1, -1, 0, 2, 3, 0],
      finger: [0, 0, 0, 1, 3, 0],
    },
    sus4: {
      firstTab: 1,
      chords: [-1, -1, 0, 2, 3, 3],
      finger: [0, 0, 0, 1, 3, 4],
    },
    dim: {
      firstTab: 1,
      chords: [-1, -1, 0, 1, 0, 1],
      finger: [0, 0, 0, 1, 0, 2],
    },
    aug: {
      firstTab: 1,
      chords: [-1, -1, 0, 3, 3, 2],
      finger: [0, 0, 0, 2, 3, 1],
    },
    "6/9": {
      firstTab: 1,
      chords: [-1, 5, 4, 2, 0, 0],
      finger: [0, 4, 3, 1, 0, 0],
    },
    "7sus4": {
      firstTab: 1,
      chords: [-1, -1, 0, 2, 1, 3],
      finger: [0, 0, 0, 2, 1, 4],
    },
    "7b5": {
      firstTab: 1,
      chords: [-1, -1, 0, 1, 1, 2],
      finger: [0, 0, 0, 1, 1, 3],
    },
    "7b9": {
      firstTab: 1,
      chords: [-1, -1, 0, 5, 4, 2],
      finger: [0, 0, 0, 4, 3, 1],
    },
    "9sus4": {
      firstTab: 1,
      chords: [-1, 5, -1, 5, 5, 3],
      finger: [0, 2, 0, 3, 4, 1],
    },
    add9: {
      firstTab: 1,
      chords: [-1, -1, 4, 2, 3, 0],
      finger: [0, 0, 3, 1, 2, 0],
    },
    aug9: {
      firstTab: 1,
      chords: [2, 3, 2, 3, 3, 2],
      finger: [1, 2, 1, 3, 4, 1],
    },
  },
  "D#/Eb": {
    maj: {
      firstTab: 1,
      chords: [-1, -1, 1, 3, 4, 3],
      finger: [0, 0, 1, 2, 4, 3],
    },
    5: {
      firstTab: 1,
      chords: [-1, -1, 1, 3, 4, -1],
      finger: [0, 0, 1, 3, 4, 0],
    },
    6: {
      firstTab: 1,
      chords: [-1, -1, 1, 3, 1, 3],
      finger: [0, 0, 1, 3, 1, 4],
    },
    7: {
      firstTab: 1,
      chords: [-1, -1, 1, 3, 2, 3],
      finger: [0, 0, 1, 3, 2, 4],
    },
    maj7: {
      firstTab: 1,
      chords: [-1, -1, 1, 3, 3, 3],
      finger: [0, 0, 1, 3, 3, 3],
    },
    9: {
      firstTab: 1,
      chords: [-1, -1, 1, 0, 2, 1],
      finger: [0, 0, 1, 0, 3, 2],
    },
    maj9: {
      firstTab: 1,
      chords: [-1, -1, 1, 0, 3, 1],
      finger: [0, 0, 1, 0, 4, 2],
    },
    11: {
      firstTab: 1,
      chords: [-1, -1, 1, 1, 2, 3],
      finger: [0, 0, 1, 1, 2, 3],
    },
    13: {
      firstTab: 4,
      chords: [-1, 1, 2, 2, 1, -1],
      finger: [0, 1, 3, 4, 2, 0],
    },
    maj13: {
      firstTab: 1,
      chords: [-1, 2, 1, 3, 4, 4],
      finger: [0, 2, 1, 3, 4, 4],
    },
    min: {
      firstTab: 1,
      chords: [2, -1, 1, 3, 4, -1],
      finger: [2, 0, 1, 3, 4, 0],
    },
    m6: {
      firstTab: 1,
      chords: [-1, -1, 1, 3, 1, 2],
      finger: [0, 0, 1, 3, 1, 2],
    },
    m7: {
      firstTab: 1,
      chords: [-1, -1, 1, 3, 2, 2],
      finger: [0, 0, 1, 4, 2, 3],
    },
    m9: {
      firstTab: 1,
      chords: [2, -1, 1, 3, 2, 1],
      finger: [2, 0, 1, 4, 3, 1],
    },
    m11: {
      firstTab: 1,
      chords: [-1, 1, 1, 1, 2, 2],
      finger: [0, 1, 1, 1, 3, 3],
    },
    m13: {
      firstTab: 6,
      chords: [-1, 1, -1, 1, 2, 3],
      finger: [0, 1, 0, 2, 3, 4],
    },
    "m(maj7)": {
      firstTab: 1,
      chords: [-1, -1, 1, 3, 3, 2],
      finger: [0, 0, 1, 3, 4, 2],
    },
    sus2: {
      firstTab: 1,
      chords: [-1, -1, 1, 3, 4, 1],
      finger: [0, 0, 1, 3, 4, 1],
    },
    sus4: {
      firstTab: 1,
      chords: [-1, -1, 1, 3, 4, 4],
      finger: [0, 0, 1, 3, 4, 4],
    },
    dim: {
      firstTab: 1,
      chords: [-1, -1, 1, 2, 1, 2],
      finger: [0, 0, 1, 3, 2, 4],
    },
    aug: {
      firstTab: 1,
      chords: [-1, -1, 1, 0, 0, 3],
      finger: [0, 0, 1, 0, 0, 3],
    },
    "6/9": {
      firstTab: 1,
      chords: [-1, 3, 3, 3, 4, 3],
      finger: [0, 1, 1, 1, 2, 1],
    },
    "7sus4": {
      firstTab: 1,
      chords: [-1, -1, 1, 1, 2, -1],
      finger: [0, 0, 1, 1, 2, 0],
    },
    "7b5": {
      firstTab: 1,
      chords: [-1, -1, 1, 2, 2, 3],
      finger: [0, 0, 1, 2, 2, 4],
    },
    "7b9": {
      firstTab: 3,
      chords: [-1, 4, -1, 4, 3, 1],
      finger: [0, 3, 0, 4, 2, 1],
    },
    "9sus4": {
      firstTab: 1,
      chords: [-1, -1, 1, 1, 2, 1],
      finger: [0, 0, 1, 1, 2, 1],
    },
    add9: {
      firstTab: 1,
      chords: [-1, -1, 3, 3, 4, 3],
      finger: [0, 0, 1, 1, 2, 1],
    },
    aug9: {
      firstTab: 1,
      chords: [3, 4, 3, 4, 4, 3],
      finger: [1, 2, 1, 3, 4, 1],
    },
  },
  E: {
    maj: {
      firstTab: 1,
      chords: [0, 2, 2, 1, 0, 0],
      finger: [0, 2, 3, 1, 0, 0],
    },
    5: {
      firstTab: 1,
      chords: [0, 2, 2, -1, -1, -1],
      finger: [0, 2, 3, 0, 0, 0],
    },
    6: {
      firstTab: 1,
      chords: [0, 2, 2, 1, 2, 0],
      finger: [0, 2, 3, 1, 4, 0],
    },
    7: {
      firstTab: 1,
      chords: [0, 2, 0, 1, 0, 0],
      finger: [0, 2, 0, 1, 0, 0],
    },
    maj7: {
      firstTab: 1,
      chords: [0, 2, 1, 1, 0, 0],
      finger: [0, 3, 1, 2, 0, 0],
    },
    9: {
      firstTab: 1,
      chords: [0, 2, 0, 1, 0, 2],
      finger: [0, 2, 0, 1, 0, 3],
    },
    maj9: {
      firstTab: 1,
      chords: [0, 2, 4, 4, 4, 4],
      finger: [0, 1, 3, 3, 3, 3],
    },
    11: {
      firstTab: 1,
      chords: [0, 0, 2, 1, 3, 2],
      finger: [0, 0, 2, 1, 4, 3],
    },
    13: {
      firstTab: 1,
      chords: [0, 2, 0, 1, 2, 2],
      finger: [0, 2, 0, 1, 3, 4],
    },
    maj13: {
      firstTab: 1,
      chords: [0, 2, 1, 1, 2, 2],
      finger: [0, 2, 1, 1, 3, 3],
    },
    min: {
      firstTab: 1,
      chords: [0, 2, 2, 0, 0, 0],
      finger: [0, 2, 3, 0, 0, 0],
    },
    m6: {
      firstTab: 1,
      chords: [0, 2, 2, 0, 2, 0],
      finger: [0, 2, 3, 0, 4, 0],
    },
    m7: {
      firstTab: 1,
      chords: [0, 2, 0, 0, 0, 0],
      finger: [0, 2, 0, 0, 0, 0],
    },
    m9: {
      firstTab: 1,
      chords: [0, 2, 0, 0, 0, 2],
      finger: [0, 2, 0, 0, 0, 3],
    },
    m11: {
      firstTab: 1,
      chords: [0, 0, 0, 0, 0, 0],
      finger: [0, 0, 0, 0, 0, 0],
    },
    m13: {
      firstTab: 1,
      chords: [0, 2, 0, 0, 2, 2],
      finger: [0, 2, 0, 0, 3, 4],
    },
    "m(maj7)": {
      firstTab: 1,
      chords: [0, 2, 1, 0, 0, 0],
      finger: [0, 2, 1, 0, 0, 0],
    },
    sus2: {
      firstTab: 1,
      chords: [-1, -1, 2, 4, 5, 2],
      finger: [0, 0, 1, 3, 4, 1],
    },
    sus4: {
      firstTab: 1,
      chords: [0, 2, 2, 2, 0, 0],
      finger: [0, 2, 3, 4, 0, 0],
    },
    dim: {
      firstTab: 1,
      chords: [-1, -1, 2, 3, 2, 3],
      finger: [0, 0, 1, 3, 2, 4],
    },
    aug: {
      firstTab: 1,
      chords: [-1, -1, 2, 1, 1, 0],
      finger: [0, 0, 3, 1, 2, 0],
    },
    "6/9": {
      firstTab: 1,
      chords: [0, 2, -1, 1, 2, 2],
      finger: [0, 2, 0, 1, 3, 4],
    },
    "7sus4": {
      firstTab: 1,
      chords: [-1, 2, 2, 2, 3, -1],
      finger: [0, 1, 1, 1, 3, 0],
    },
    "7b5": {
      firstTab: 1,
      chords: [-1, -1, 2, 3, 3, 4],
      finger: [0, 0, 1, 2, 2, 4],
    },
    "7b9": {
      firstTab: 1,
      chords: [0, 2, 3, 1, 3, -1],
      finger: [0, 2, 3, 1, 4, 0],
    },
    "9sus4": {
      firstTab: 1,
      chords: [-1, 2, 2, 2, 3, 2],
      finger: [0, 1, 1, 1, 2, 1],
    },
    add9: {
      firstTab: 1,
      chords: [0, 2, 2, 1, 0, 2],
      finger: [0, 2, 3, 1, 0, 4],
    },
    aug9: {
      firstTab: 1,
      chords: [0, 3, 0, 1, 1, 2],
      finger: [0, 3, 0, 1, 1, 2],
    },
  },
  F: {
    maj: {
      firstTab: 1,
      chords: [1, 3, 3, 2, 1, 1],
      finger: [1, 3, 4, 2, 1, 1],
    },
    5: {
      firstTab: 1,
      chords: [1, 3, 3, -1, -1, -1],
      finger: [1, 3, 4, 0, 0, 0],
    },
    6: {
      firstTab: 1,
      chords: [1, 3, -1, 2, 3, -1],
      finger: [1, 3, 0, 2, 4, 0],
    },
    7: {
      firstTab: 1,
      chords: [1, 3, -1, 2, 4, -1],
      finger: [1, 3, 0, 2, 4, 0],
    },
    maj7: {
      firstTab: 1,
      chords: [1, -1, 2, 2, 1, -1],
      finger: [1, 0, 3, 4, 2, 0],
    },
    9: {
      firstTab: 1,
      chords: [1, 3, 1, 2, 1, 3],
      finger: [1, 3, 1, 2, 1, 4],
    },
    maj9: {
      firstTab: 1,
      chords: [1, 0, 2, 0, 1, -1],
      finger: [1, 0, 3, 0, 2, 0],
    },
    11: {
      firstTab: 1,
      chords: [-1, -1, 3, 3, 4, 5],
      finger: [0, 0, 1, 1, 2, 3],
    },
    13: {
      firstTab: 1,
      chords: [1, 3, 1, 2, 3, 1],
      finger: [1, 3, 1, 2, 4, 1],
    },
    maj13: {
      firstTab: 1,
      chords: [1, -1, 2, 2, 3, -1],
      finger: [1, 0, 2, 3, 4, 0],
    },
    min: {
      firstTab: 1,
      chords: [1, 3, 3, 1, 1, 1],
      finger: [1, 3, 4, 1, 1, 1],
    },
    m6: {
      firstTab: 1,
      chords: [-1, -1, 0, 1, 1, 1],
      finger: [0, 0, 0, 1, 1, 1],
    },
    m7: {
      firstTab: 1,
      chords: [1, 3, 3, 1, 4, 1],
      finger: [1, 2, 3, 1, 4, 1],
    },
    m9: {
      firstTab: 1,
      chords: [1, -1, 1, 1, 1, 3],
      finger: [2, 0, 3, 3, 3, 4],
    },
    m11: {
      firstTab: 1,
      chords: [1, 1, 1, 1, 1, 1],
      finger: [1, 1, 1, 1, 1, 1],
    },
    m13: {
      firstTab: 1,
      chords: [1, 3, 1, 1, 3, 1],
      finger: [1, 3, 1, 1, 4, 1],
    },
    "m(maj7)": {
      firstTab: 1,
      chords: [1, 3, 2, 1, 1, 1],
      finger: [1, 3, 2, 1, 1, 1],
    },
    sus2: {
      firstTab: 1,
      chords: [-1, -1, 3, 0, 1, 1],
      finger: [0, 0, 3, 0, 1, 1],
    },
    sus4: {
      firstTab: 1,
      chords: [1, 3, 3, 3, 1, 1],
      finger: [1, 2, 3, 4, 1, 1],
    },
    dim: {
      firstTab: 1,
      chords: [-1, -1, 3, 4, 3, 4],
      finger: [0, 0, 1, 3, 2, 4],
    },
    aug: {
      firstTab: 1,
      chords: [-1, -1, 3, 2, 2, 1],
      finger: [0, 0, 4, 2, 3, 1],
    },
    "6/9": {
      firstTab: 1,
      chords: [1, 3, -1, 2, 3, 3],
      finger: [1, 3, 0, 2, 4, 4],
    },
    "7sus4": {
      firstTab: 1,
      chords: [1, 3, 1, 3, 1, 1],
      finger: [1, 3, 1, 4, 1, 1],
    },
    "7b5": {
      firstTab: 1,
      chords: [1, -1, 1, 2, 0, -1],
      finger: [1, 0, 2, 3, 0, 0],
    },
    "7b9": {
      firstTab: 1,
      chords: [1, 3, 1, 2, 1, 2],
      finger: [1, 4, 1, 2, 1, 3],
    },
    "9sus4": {
      firstTab: 1,
      chords: [-1, 3, 3, 3, 4, 3],
      finger: [0, 1, 1, 1, 2, 1],
    },
    add9: {
      firstTab: 1,
      chords: [-1, -1, 3, 2, 1, 3],
      finger: [0, 0, 3, 2, 1, 4],
    },
    aug9: {
      firstTab: 1,
      chords: [1, -1, 1, 2, 2, 3],
      finger: [1, 0, 2, 3, 3, 4],
    },
  },
  "F#/Gb": {
    maj: {
      firstTab: 1,
      chords: [2, 4, 4, 3, 2, 2],
      finger: [1, 3, 4, 2, 1, 1],
    },
    5: {
      firstTab: 1,
      chords: [2, 4, 4, -1, -1, -1],
      finger: [1, 3, 4, 0, 0, 0],
    },
    6: {
      firstTab: 1,
      chords: [2, -1, 1, 3, 2, -1],
      finger: [2, 0, 1, 4, 3, 0],
    },
    7: {
      firstTab: 1,
      chords: [-1, -1, 4, 3, 2, 0],
      finger: [0, 0, 3, 2, 1, 0],
    },
    maj7: {
      firstTab: 1,
      chords: [2, -1, 3, 3, 2, -1],
      finger: [1, 0, 3, 4, 2, 0],
    },
    9: {
      firstTab: 1,
      chords: [-1, -1, 4, 3, 5, 4],
      finger: [0, 0, 2, 1, 4, 3],
    },
    maj9: {
      firstTab: 1,
      chords: [2, -1, 3, 3, -1, 4],
      finger: [1, 0, 2, 3, 0, 4],
    },
    11: {
      firstTab: 1,
      chords: [2, 2, 2, 3, 2, 4],
      finger: [1, 1, 1, 2, 1, 3],
    },
    13: {
      firstTab: 1,
      chords: [-1, -1, 2, 3, 4, 2],
      finger: [0, 0, 1, 2, 3, 1],
    },
    maj13: {
      firstTab: 1,
      chords: [2, 1, 1, 1, 2, 1],
      finger: [2, 1, 1, 1, 3, 1],
    },
    min: {
      firstTab: 1,
      chords: [-1, -1, 4, 2, 2, 5],
      finger: [0, 0, 3, 1, 1, 4],
    },
    m6: {
      firstTab: 1,
      chords: [2, -1, 1, 2, 2, 2],
      finger: [2, 0, 1, 3, 3, 3],
    },
    m7: {
      firstTab: 1,
      chords: [2, -1, 2, 2, 2, -1],
      finger: [2, 0, 3, 3, 3, 0],
    },
    m9: {
      firstTab: 1,
      chords: [2, 0, 2, 1, 2, -1],
      finger: [2, 0, 3, 1, 4, 0],
    },
    m11: {
      firstTab: 1,
      chords: [2, 2, 2, 2, 2, 2],
      finger: [1, 1, 1, 1, 1, 1],
    },
    m13: {
      firstTab: 1,
      chords: [2, 4, 2, 2, 4, 2],
      finger: [1, 3, 1, 1, 4, 1],
    },
    "m(maj7)": {
      firstTab: 1,
      chords: [2, 4, 3, 2, 2, 2],
      finger: [1, 3, 2, 1, 1, 1],
    },
    sus2: {
      firstTab: 1,
      chords: [2, -1, -1, 1, 2, 2],
      finger: [2, 0, 0, 1, 3, 4],
    },
    sus4: {
      firstTab: 1,
      chords: [2, 4, 4, 4, 2, 2],
      finger: [1, 2, 3, 4, 1, 1],
    },
    dim: {
      firstTab: 1,
      chords: [2, -1, 1, 2, 1, -1],
      finger: [2, 0, 1, 3, 1, 0],
    },
    aug: {
      firstTab: 1,
      chords: [-1, -1, 0, 3, 3, 2],
      finger: [0, 0, 0, 2, 3, 1],
    },
    "6/9": {
      firstTab: 1,
      chords: [-1, 4, 4, 3, 4, 4],
      finger: [0, 2, 3, 1, 4, 4],
    },
    "7sus4": {
      firstTab: 1,
      chords: [2, 4, 2, 4, 2, 2],
      finger: [1, 3, 1, 4, 1, 1],
    },
    "7b5": {
      firstTab: 1,
      chords: [2, -1, 2, 3, 1, -1],
      finger: [2, 0, 3, 4, 1, 0],
    },
    "7b9": {
      firstTab: 2,
      chords: [1, 3, 1, 2, 1, 2],
      finger: [1, 4, 1, 2, 1, 3],
    },
    "9sus4": {
      firstTab: 4,
      chords: [-1, 1, 1, 1, 2, 1],
      finger: [0, 1, 1, 1, 2, 1],
    },
    add9: {
      firstTab: 1,
      chords: [-1, -1, 4, 3, 2, 4],
      finger: [0, 0, 3, 2, 1, 4],
    },
    aug9: {
      firstTab: 1,
      chords: [2, -1, 2, 3, 3, 4],
      finger: [1, 0, 2, 3, 3, 4],
    },
  },
  G: {
    maj: {
      firstTab: 1,
      chords: [3, 2, 0, 0, 0, 3],
      finger: [3, 2, 0, 0, 0, 4],
    },
    5: {
      firstTab: 1,
      chords: [-1, -1, 0, 0, 3, 3],
      finger: [0, 0, 0, 0, 3, 3],
    },
    6: {
      firstTab: 1,
      chords: [3, 2, 0, 0, 0, 0],
      finger: [3, 2, 0, 0, 0, 0],
    },
    7: {
      firstTab: 1,
      chords: [3, 2, 0, 0, 0, 1],
      finger: [3, 2, 0, 0, 0, 1],
    },
    maj7: {
      firstTab: 1,
      chords: [3, 2, 0, 0, 0, 2],
      finger: [3, 2, 0, 0, 0, 1],
    },
    9: {
      firstTab: 1,
      chords: [3, -1, 0, 2, 0, 1],
      finger: [3, 0, 0, 2, 0, 1],
    },
    maj9: {
      firstTab: 1,
      chords: [3, -1, 0, 2, 0, 2],
      finger: [3, 0, 0, 2, 0, 1],
    },
    11: {
      firstTab: 1,
      chords: [3, 2, 0, 2, 1, 1],
      finger: [4, 2, 0, 3, 1, 1],
    },
    13: {
      firstTab: 1,
      chords: [-1, -1, 3, 0, 0, 0],
      finger: [0, 0, 3, 0, 0, 0],
    },
    maj13: {
      firstTab: 1,
      chords: [3, 2, 2, 2, 3, 2],
      finger: [2, 1, 1, 1, 3, 1],
    },
    min: {
      firstTab: 1,
      chords: [3, 1, 0, 0, 3, 3],
      finger: [2, 1, 0, 0, 3, 4],
    },
    m6: {
      firstTab: 1,
      chords: [-1, -1, 2, 3, 3, 3],
      finger: [0, 0, 1, 3, 3, 3],
    },
    m7: {
      firstTab: 1,
      chords: [-1, 1, 3, 0, 3, -1],
      finger: [0, 1, 3, 0, 4, 0],
    },
    m9: {
      firstTab: 1,
      chords: [3, -1, 3, 3, 3, 5],
      finger: [2, 0, 3, 3, 3, 4],
    },
    m11: {
      firstTab: 1,
      chords: [3, 3, 3, 3, 3, 3],
      finger: [1, 1, 1, 1, 1, 1],
    },
    m13: {
      firstTab: 1,
      chords: [3, 5, 3, 3, 5, 3],
      finger: [1, 3, 1, 1, 4, 1],
    },
    "m(maj7)": {
      firstTab: 1,
      chords: [3, 5, 4, 3, 3, 3],
      finger: [1, 3, 2, 1, 1, 1],
    },
    sus2: {
      firstTab: 1,
      chords: [3, 0, 0, 2, 3, 3],
      finger: [2, 0, 0, 1, 3, 4],
    },
    sus4: {
      firstTab: 1,
      chords: [3, 5, 5, 5, 3, 3],
      finger: [1, 3, 3, 3, 1, 1],
    },
    dim: {
      firstTab: 1,
      chords: [3, -1, 2, 3, 2, -1],
      finger: [2, 0, 1, 3, 1, 0],
    },
    aug: {
      firstTab: 1,
      chords: [3, 2, 1, 0, 0, 3],
      finger: [3, 2, 1, 0, 0, 4],
    },
    "6/9": {
      firstTab: 1,
      chords: [3, 5, -1, 4, 5, 5],
      finger: [1, 3, 0, 2, 4, 4],
    },
    "7sus4": {
      firstTab: 1,
      chords: [3, 5, 3, 5, 3, 3],
      finger: [1, 3, 1, 4, 1, 1],
    },
    "7b5": {
      firstTab: 1,
      chords: [3, -1, 3, 4, 2, -1],
      finger: [2, 0, 3, 4, 1, 0],
    },
    "7b9": {
      firstTab: 1,
      chords: [3, 2, -1, 1, 3, 1],
      finger: [3, 2, 0, 1, 4, 1],
    },
    "9sus4": {
      firstTab: 1,
      chords: [3, -1, 3, 2, 1, 1],
      finger: [3, 0, 4, 2, 1, 1],
    },
    add9: {
      firstTab: 1,
      chords: [3, 0, 0, 2, 0, 3],
      finger: [2, 0, 0, 1, 0, 3],
    },
    aug9: {
      firstTab: 1,
      chords: [3, -1, 3, 4, 4, 5],
      finger: [1, 0, 2, 3, 3, 4],
    },
  },
  "G#/Ab": {
    maj: {
      firstTab: 1,
      chords: [-1, -1, 1, 1, 1, 4],
      finger: [0, 0, 1, 1, 1, 4],
    },
    5: {
      firstTab: 1,
      chords: [-1, -1, 1, 1, 4, 4],
      finger: [0, 0, 1, 1, 4, 4],
    },
    6: {
      firstTab: 1,
      chords: [-1, -1, 1, 1, 1, 1],
      finger: [0, 0, 1, 1, 1, 1],
    },
    7: {
      firstTab: 1,
      chords: [-1, -1, 1, 1, 1, 2],
      finger: [0, 0, 1, 1, 1, 2],
    },
    maj7: {
      firstTab: 1,
      chords: [-1, -1, 1, 1, 1, 3],
      finger: [0, 0, 1, 1, 1, 3],
    },
    9: {
      firstTab: 1,
      chords: [4, -1, 4, 3, 1, -1],
      finger: [3, 0, 4, 2, 1, 0],
    },
    maj9: {
      firstTab: 1,
      chords: [4, 3, 5, 3, 4, -1],
      finger: [2, 1, 4, 1, 3, 0],
    },
    11: {
      firstTab: 1,
      chords: [-1, 3, 1, 1, 2, 2],
      finger: [0, 4, 1, 1, 2, 3],
    },
    13: {
      firstTab: 1,
      chords: [4, -1, 4, 3, 1, 1],
      finger: [3, 0, 4, 2, 1, 1],
    },
    maj13: {
      firstTab: 1,
      chords: [4, 3, 3, 3, 4, 3],
      finger: [2, 1, 1, 1, 3, 1],
    },
    min: {
      firstTab: 1,
      chords: [-1, 2, 1, 1, 4, 4],
      finger: [0, 2, 1, 1, 4, 4],
    },
    m6: {
      firstTab: 1,
      chords: [4, -1, 3, 4, 4, -1],
      finger: [2, 0, 1, 3, 3, 0],
    },
    m7: {
      firstTab: 4,
      chords: [1, -1, 1, 1, 1, -1],
      finger: [2, 0, 3, 3, 3, 0],
    },
    m9: {
      firstTab: 1,
      chords: [-1, 2, 4, 3, 4, 4],
      finger: [0, 1, 3, 2, 4, 4],
    },
    m11: {
      firstTab: 1,
      chords: [4, 4, 4, 4, 4, 4],
      finger: [1, 1, 1, 1, 1, 1],
    },
    m13: {
      firstTab: 4,
      chords: [1, -1, 1, 1, 3, -1],
      finger: [2, 0, 3, 3, 4, 0],
    },
    "m(maj7)": {
      firstTab: 4,
      chords: [1, 3, 2, 1, 1, 1],
      finger: [1, 3, 2, 1, 1, 1],
    },
    sus2: {
      firstTab: 1,
      chords: [-1, 1, 1, 1, 4, 4],
      finger: [0, 1, 1, 1, 4, 4],
    },
    sus4: {
      firstTab: 1,
      chords: [-1, -1, 1, 1, 2, 4],
      finger: [0, 0, 1, 1, 2, 4],
    },
    dim: {
      firstTab: 1,
      chords: [4, -1, 3, 4, 3, -1],
      finger: [2, 0, 1, 3, 1, 0],
    },
    aug: {
      firstTab: 1,
      chords: [0, 3, 2, 1, 1, 0],
      finger: [0, 4, 3, 1, 2, 0],
    },
    "6/9": {
      firstTab: 1,
      chords: [4, 3, 3, 3, 4, -1],
      finger: [2, 1, 1, 1, 3, 0],
    },
    "7sus4": {
      firstTab: 1,
      chords: [-1, -1, 1, 1, 2, 2],
      finger: [0, 0, 1, 1, 3, 3],
    },
    "7b5": {
      firstTab: 1,
      chords: [4, -1, 4, 5, 3, -1],
      finger: [2, 0, 3, 4, 1, 0],
    },
    "7b9": {
      firstTab: 2,
      chords: [3, 2, -1, 1, 3, 1],
      finger: [3, 2, 0, 1, 4, 1],
    },
    "9sus4": {
      firstTab: 1,
      chords: [4, -1, 4, 3, 2, -1],
      finger: [3, 0, 4, 2, 1, 0],
    },
    add9: {
      firstTab: 1,
      chords: [4, 3, 1, 3, 1, -1],
      finger: [4, 2, 1, 3, 1, 0],
    },
    aug9: {
      firstTab: 1,
      chords: [4, 3, 4, 3, 5, -1],
      finger: [2, 1, 3, 1, 4, 0],
    },
  },
  A: {
    maj: {
      firstTab: 1,
      chords: [-1, 0, 2, 2, 2, 0],
      finger: [0, 0, 2, 3, 4, 0],
    },
    5: {
      firstTab: 1,
      chords: [-1, 0, 2, 2, -1, -1],
      finger: [0, 0, 2, 3, 0, 0],
    },
    6: {
      firstTab: 1,
      chords: [-1, 0, 2, 2, 2, 2],
      finger: [0, 0, 1, 1, 1, 1],
    },
    7: {
      firstTab: 1,
      chords: [-1, 0, 2, 0, 2, 0],
      finger: [0, 0, 2, 0, 3, 0],
    },
    maj7: {
      firstTab: 1,
      chords: [-1, 0, 2, 1, 2, 0],
      finger: [0, 0, 2, 1, 3, 0],
    },
    9: {
      firstTab: 1,
      chords: [-1, 0, 2, 4, 2, 3],
      finger: [0, 0, 1, 3, 1, 2],
    },
    maj9: {
      firstTab: 1,
      chords: [-1, 0, 2, 4, 2, 4],
      finger: [0, 0, 1, 3, 1, 4],
    },
    11: {
      firstTab: 1,
      chords: [-1, 0, 0, 0, 2, 0],
      finger: [0, 0, 0, 0, 1, 0],
    },
    13: {
      firstTab: 1,
      chords: [-1, 0, 2, 0, 2, 2],
      finger: [0, 0, 2, 0, 3, 4],
    },
    maj13: {
      firstTab: 1,
      chords: [-1, 0, 2, 1, 2, 2],
      finger: [0, 0, 2, 1, 3, 4],
    },
    min: {
      firstTab: 1,
      chords: [-1, 0, 2, 2, 1, 0],
      finger: [0, 0, 2, 3, 1, 0],
    },
    m6: {
      firstTab: 1,
      chords: [-1, 0, 2, 2, 1, 2],
      finger: [0, 0, 2, 3, 1, 4],
    },
    m7: {
      firstTab: 1,
      chords: [-1, 0, 2, 0, 1, 0],
      finger: [0, 0, 2, 0, 1, 0],
    },
    m9: {
      firstTab: 1,
      chords: [-1, 0, 5, 5, 0, 0],
      finger: [0, 0, 2, 3, 0, 0],
    },
    m11: {
      firstTab: 1,
      chords: [-1, 0, 0, 0, 1, 0],
      finger: [0, 0, 0, 0, 1, 0],
    },
    m13: {
      firstTab: 1,
      chords: [-1, 0, 2, 0, 1, 2],
      finger: [0, 0, 2, 0, 1, 3],
    },
    "m(maj7)": {
      firstTab: 1,
      chords: [-1, 0, 2, 2, 1, 4],
      finger: [0, 0, 2, 3, 1, 4],
    },
    sus2: {
      firstTab: 1,
      chords: [-1, 0, 2, 2, 0, 0],
      finger: [0, 0, 1, 2, 0, 0],
    },
    sus4: {
      firstTab: 1,
      chords: [-1, 0, 2, 2, 3, 0],
      finger: [0, 0, 1, 2, 3, 0],
    },
    dim: {
      firstTab: 1,
      chords: [-1, 0, 1, 2, 1, 2],
      finger: [0, 0, 1, 3, 2, 4],
    },
    aug: {
      firstTab: 1,
      chords: [-1, 0, 3, 2, 2, 1],
      finger: [0, 0, 4, 2, 3, 1],
    },
    "6/9": {
      firstTab: 1,
      chords: [-1, 0, 4, 4, 2, 0],
      finger: [0, 0, 3, 4, 1, 0],
    },
    "7sus4": {
      firstTab: 1,
      chords: [-1, 0, 2, 0, 3, 0],
      finger: [0, 0, 1, 0, 2, 0],
    },
    "7b5": {
      firstTab: 1,
      chords: [-1, 0, 1, 2, 2, 3],
      finger: [0, 0, 1, 2, 2, 4],
    },
    "7b9": {
      firstTab: 3,
      chords: [3, 2, -1, 1, 3, 1],
      finger: [3, 2, 0, 1, 4, 1],
    },
    "9sus4": {
      firstTab: 1,
      chords: [5, -1, 5, 4, 3, -1],
      finger: [3, 0, 4, 2, 1, 0],
    },
    add9: {
      firstTab: 1,
      chords: [-1, 0, 2, 4, 2, 0],
      finger: [0, 0, 1, 4, 2, 0],
    },
    aug9: {
      firstTab: 5,
      chords: [1, -1, 1, 2, 2, 3],
      finger: [1, 0, 2, 3, 3, 4],
    },
  },
  "A#/Bb": {
    maj: {
      firstTab: 1,
      chords: [-1, 1, 3, 3, 3, 1],
      finger: [0, 1, 2, 3, 4, 1],
    },
    5: {
      firstTab: 1,
      chords: [-1, 1, 3, 3, -1, -1],
      finger: [0, 1, 3, 4, 0, 0],
    },
    6: {
      firstTab: 1,
      chords: [-1, 1, 3, 3, 3, 3],
      finger: [0, 1, 3, 3, 3, 3],
    },
    7: {
      firstTab: 1,
      chords: [4, -1, 3, 3, 3, -1],
      finger: [2, 0, 1, 1, 1, 0],
    },
    maj7: {
      firstTab: 1,
      chords: [-1, 1, 3, 2, 3, 1],
      finger: [0, 1, 2, 3, 4, 1],
    },
    9: {
      firstTab: 1,
      chords: [-1, 1, 0, 1, 1, 1],
      finger: [0, 2, 0, 3, 3, 3],
    },
    maj9: {
      firstTab: 1,
      chords: [-1, 1, 0, 2, 1, 1],
      finger: [0, 1, 0, 4, 2, 3],
    },
    11: {
      firstTab: 1,
      chords: [-1, 1, 1, 1, 3, 1],
      finger: [0, 1, 1, 1, 3, 1],
    },
    13: {
      firstTab: 1,
      chords: [-1, 1, -1, 1, 3, 3],
      finger: [0, 1, 0, 2, 4, 4],
    },
    maj13: {
      firstTab: 1,
      chords: [-1, 1, -1, 2, 3, 3],
      finger: [0, 1, 0, 2, 3, 4],
    },
    min: {
      firstTab: 1,
      chords: [-1, 1, 3, 3, 2, 1],
      finger: [0, 1, 4, 3, 2, 1],
    },
    m6: {
      firstTab: 1,
      chords: [-1, 1, 3, 0, 2, -1],
      finger: [0, 1, 3, 0, 2, 0],
    },
    m7: {
      firstTab: 1,
      chords: [-1, 1, 3, 1, 2, 1],
      finger: [0, 1, 3, 1, 2, 1],
    },
    m9: {
      firstTab: 6,
      chords: [1, -1, 1, 1, 1, 3],
      finger: [2, 0, 3, 3, 3, 4],
    },
    m11: {
      firstTab: 1,
      chords: [-1, 1, 1, 1, 2, 1],
      finger: [0, 1, 1, 1, 2, 1],
    },
    m13: {
      firstTab: 1,
      chords: [-1, 1, -1, 1, 2, 3],
      finger: [0, 1, 0, 2, 3, 4],
    },
    "m(maj7)": {
      firstTab: 1,
      chords: [-1, 1, 3, 2, 2, 1],
      finger: [0, 1, 4, 2, 3, 1],
    },
    sus2: {
      firstTab: 1,
      chords: [-1, 1, 3, 3, 1, 1],
      finger: [0, 1, 3, 4, 1, 1],
    },
    sus4: {
      firstTab: 1,
      chords: [-1, 1, 1, 3, 4, 1],
      finger: [0, 1, 1, 3, 4, 1],
    },
    dim: {
      firstTab: 5,
      chords: [2, -1, 1, 2, 1, -1],
      finger: [2, 0, 1, 3, 1, 0],
    },
    aug: {
      firstTab: 1,
      chords: [-1, 1, 0, 3, 3, 2],
      finger: [0, 1, 0, 3, 4, 2],
    },
    "6/9": {
      firstTab: 1,
      chords: [-1, 1, 0, 0, 1, 1],
      finger: [0, 2, 0, 0, 3, 3],
    },
    "7sus4": {
      firstTab: 1,
      chords: [-1, 1, 3, 1, 4, 1],
      finger: [0, 1, 2, 3, 4, 1],
    },
    "7b5": {
      firstTab: 1,
      chords: [-1, 1, 0, 1, 3, 0],
      finger: [0, 1, 0, 2, 4, 0],
    },
    "7b9": {
      firstTab: 1,
      chords: [-1, 1, 0, 1, 0, 1],
      finger: [0, 1, 0, 2, 0, 3],
    },
    "9sus4": {
      firstTab: 1,
      chords: [-1, 1, 1, 1, 1, 1],
      finger: [0, 1, 1, 1, 1, 1],
    },
    add9: {
      firstTab: 1,
      chords: [-1, 1, 1, 1, 1, -1],
      finger: [0, 1, 1, 1, 1, 0],
    },
    aug9: {
      firstTab: 1,
      chords: [-1, 1, 0, 1, 1, 2],
      finger: [0, 2, 0, 3, 3, 4],
    },
  },
  B: {
    maj: {
      firstTab: 1,
      chords: [-1, 2, 4, 4, 4, 2],
      finger: [0, 1, 2, 3, 4, 1],
    },
    5: {
      firstTab: 1,
      chords: [-1, 2, 4, 4, -1, -1],
      finger: [0, 1, 3, 4, 0, 0],
    },
    6: {
      firstTab: 1,
      chords: [2, 2, 1, 1, 0, -1],
      finger: [3, 4, 1, 2, 0, 0],
    },
    7: {
      firstTab: 1,
      chords: [-1, 2, 1, 2, 0, 2],
      finger: [0, 2, 1, 3, 0, 4],
    },
    maj7: {
      firstTab: 1,
      chords: [2, 2, 1, 3, 0, -1],
      finger: [2, 3, 1, 4, 0, 0],
    },
    9: {
      firstTab: 1,
      chords: [-1, 2, 1, 2, 2, 2],
      finger: [0, 2, 1, 3, 3, 3],
    },
    maj9: {
      firstTab: 1,
      chords: [-1, 2, 1, 3, 2, 2],
      finger: [0, 2, 1, 4, 3, 3],
    },
    11: {
      firstTab: 1,
      chords: [-1, 2, 1, 2, 2, 0],
      finger: [0, 2, 1, 3, 4, 0],
    },
    13: {
      firstTab: 1,
      chords: [-1, 2, -1, 2, 4, 4],
      finger: [0, 1, 0, 2, 4, 4],
    },
    maj13: {
      firstTab: 1,
      chords: [-1, 2, -1, 3, 4, 4],
      finger: [0, 1, 0, 2, 3, 4],
    },
    min: {
      firstTab: 1,
      chords: [-1, 2, 4, 4, 3, 2],
      finger: [0, 1, 4, 3, 2, 1],
    },
    m6: {
      firstTab: 1,
      chords: [-1, 2, -1, 1, 3, 2],
      finger: [0, 2, 0, 1, 4, 3],
    },
    m7: {
      firstTab: 1,
      chords: [-1, 2, 0, 2, 0, 2],
      finger: [0, 2, 0, 3, 0, 4],
    },
    m9: {
      firstTab: 1,
      chords: [-1, 2, 0, 2, 2, 2],
      finger: [0, 2, 0, 3, 3, 3],
    },
    m11: {
      firstTab: 1,
      chords: [-1, 2, 2, 2, 3, 2],
      finger: [0, 1, 1, 1, 2, 1],
    },
    m13: {
      firstTab: 1,
      chords: [-1, 2, -1, 2, 3, 4],
      finger: [0, 1, 0, 2, 3, 4],
    },
    "m(maj7)": {
      firstTab: 1,
      chords: [-1, 2, -1, 3, 3, 2],
      finger: [0, 1, 0, 3, 4, 2],
    },
    sus2: {
      firstTab: 1,
      chords: [-1, 2, 4, 4, 2, 2],
      finger: [0, 1, 3, 4, 1, 1],
    },
    sus4: {
      firstTab: 1,
      chords: [-1, 2, 4, 4, 5, 2],
      finger: [0, 1, 2, 3, 4, 1],
    },
    dim: {
      firstTab: 1,
      chords: [-1, 2, 3, 1, 3, -1],
      finger: [0, 2, 3, 1, 4, 0],
    },
    aug: {
      firstTab: 1,
      chords: [-1, 2, 1, 0, 0, 3],
      finger: [0, 2, 1, 0, 0, 4],
    },
    "6/9": {
      firstTab: 1,
      chords: [-1, 2, 1, 1, 2, 2],
      finger: [0, 2, 1, 1, 3, 3],
    },
    "7sus4": {
      firstTab: 1,
      chords: [-1, 2, 4, 2, 5, 2],
      finger: [0, 1, 2, 1, 4, 1],
    },
    "7b5": {
      firstTab: 1,
      chords: [-1, 2, 3, 2, 4, -1],
      finger: [0, 1, 2, 1, 4, 0],
    },
    "7b9": {
      firstTab: 1,
      chords: [-1, 2, 1, 2, 1, 2],
      finger: [0, 2, 1, 3, 1, 4],
    },
    "9sus4": {
      firstTab: 1,
      chords: [-1, 2, 2, 2, 2, 2],
      finger: [0, 1, 1, 1, 1, 1],
    },
    add9: {
      firstTab: 1,
      chords: [-1, 4, 4, 4, 4, -1],
      finger: [0, 1, 1, 1, 1, 0],
    },
    aug9: {
      firstTab: 1,
      chords: [-1, 2, 1, 2, 2, 3],
      finger: [0, 2, 1, 3, 3, 4],
    },
  },
};
