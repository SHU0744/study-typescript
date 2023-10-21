import { type } from "os";
import { string } from "prop-types";

const bool: boolean = true;
const boo: true = true;
const num: number = 12;
const numb: 123 = 123;
const str: string = "a";
const a: "a" = "a";
const aa: null = null;
const und: undefined = undefined;

const wid: "wid" = "wid";
let bar = wid;

const nums: number[] = [1, 2];
const nums2: Array<number> = [2, 3];
const nums3: (number | string)[] = [1, "2"];
const nums4: Array<number | string> = ["a"];

const array1: [number, string] = [1, "a"];
const array2: any = "a";
const array3: unknown = "a";
if (typeof array3 === "string") {
  array3.substr(2);
}

const foo = (): void => {
  alert("a");
};
let obj: { [key: string]: unknown } = {
  a: true,
  b: 123,
};
let obj2: { [key: string]: { foo: unknown } } = {
  a: {
    foo: "a",
  },
};

type Foo = {
  a: string;
  b: number;
};

type Bar = {
  a: number;
  c: boolean;
};

// type FooBar = Foo & Bar;
type FooBar2 = Foo | Bar;

// const Test: FooBar = {
//   a: "1",
//   b: 1,
//   c: true,
// };

const test: FooBar2 = {
  a: "string",
  b: 1,
  c: true,
};

if ("b" in test) {
  test.a.toString();
} else {
  test.a.toFixed();
}

const foo2 = (bar: "a" | "b") => {
  switch (bar) {
    case "a":
      return;
    case "b":
      return;
    default:
      // never
      break;
  }
};

const double = (x: number): number | undefined => {
  if (x > 0) {
    return;
  }
  return x * 2;
};

const Home = () => {
  return <div className=""></div>;
};

export default Home;
