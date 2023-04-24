export interface Letters {
  a: string;
  b: string;
  c: string;
}
export type LettersAsUnion = "a" | "b" | "c";

const letter: LettersAsUnion = "a";
