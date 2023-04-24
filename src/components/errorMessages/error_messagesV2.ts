export const deepEqualCompare = <Arg>(a: Arg extends any[] ? `Don't pass an array!`:Arg, b: Arg extends any[] ? `Don't pass an array!`): boolean => {
  return a === b;
};

deepEqualCompare([], []);
deepEqualCompare("a", "a");
