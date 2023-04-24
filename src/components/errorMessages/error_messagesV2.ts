export const deepEqualCompare = <Arg>(a: Arg extends any[] ? `Don't pass an array!`:Arg, b: Arg): boolean => {
  return a === b;
};

deepEqualCompare([], []);
deepEqualCompare("a", "a");
