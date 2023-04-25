export interface Letters {
  a: number;
  b: string;
  c: {
    name: string;
  };
}

export type LettersAsUnion = "a" | "b" | "c";

const letter: LettersAsUnion = "a";

export type LettersAsUnionV2 = Letters[keyof Letters];

const letterV2: LettersAsUnionV2 = "a";

export type LettersAsUnionV3 = Letters["a"|"b"];

const letterV3: LettersAsUnionV3 = "a";
