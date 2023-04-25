import { String, Union } from "ts-toolbelt";

const query = `/home?a=foo&b=wow`;

// This code will take search param above(a=foo&b=wow) and turn it into an object

type Query = typeof query; // turn query from value to type

type SecondQueryPart = String.Split<Query, "?">[1]; // split query at ? and access second part of it

type QueryElements = String.Split<SecondQueryPart, "&">;

type Key = String.Split<QueryElements[0], "=">[0];
type Value = String.Split<QueryElements[0], "=">[1];

type QueryParams = {
  [QueryElement in QueryElements[number]]: {
    [Key in String.Split<QueryElement, "=">[0]]: String.Split<
      QueryElement,
      "="
    >[1];
  };
}[QueryElements[number]];

const obj: Union.Merge<QueryParams> = {
  a: "foo",
  b: "wow",
};
