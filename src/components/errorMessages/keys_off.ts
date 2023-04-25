export interface Letters {
  a: string;
  b: string;
  c: string;
}

export type LettersAsUnion = "a" | "b" | "c";

const letter: LettersAsUnion = "a";

export type LettersAsUnionV2 = keyof Letters;

const letterV2: LettersAsUnionV2 = "a";
