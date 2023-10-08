let str = {} as { bar: string };
str.bar = "string";
let foo: number = 123;

const double = (x: number): number | undefined => {
  if (x > 0) {
    return;
  }
  return x * 2;
};

const Home = () => {
  return <div className="">test</div>;
};

export default Home;
