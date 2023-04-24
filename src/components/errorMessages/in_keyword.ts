export const func = (val: { name: string } | { age: number }) => {
  if (typeof val === "object" && val && "name" in val) {
    //Does this value have an object key of the name val
    val.name;
  }
};

// Then reformat to
export const funcV2 = (val: { name: string } | { age: number }) => {
  if ("name" in val) {
    //Does this value have an object key of the name val
    val.name;
  } else {
    val.age;
  }
};
