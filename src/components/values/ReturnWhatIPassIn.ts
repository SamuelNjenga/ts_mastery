export const returnWhatIPassIn = (val: string | number | {} | []) => {
  return val;
};

// Instead of the above, make use of
export const returnWhatIPassInV2 = <TVal>(val: TVal) => {
  return val;
};

const result = returnWhatIPassIn("node");
const result2 = returnWhatIPassInV2("node");
