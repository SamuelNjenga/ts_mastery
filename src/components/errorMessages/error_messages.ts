export const deepEqualCompare = <Arg>(a: Arg, b: Arg): boolean => {
  if (Array.isArray(a) || Array.isArray(b)) {
    throw new Error("You cannot compare two arrays using deepEqualCompare");
  }
  return a === b;
};

deepEqualCompare([], []);
deepEqualCompare("a", "a");
