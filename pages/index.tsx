const bool: boolean = true;
const boo: true = true;
const num: number = 12;
const numb: 123 = 123;
const str: string = "a";
const a: "a" = "a";
const aa: null = null;
const und: undefined = undefined;

const double = (x: number): number | undefined => {
  if (x > 0) {
    return;
  }
  return x * 2;
};

const Home = () => {
  return (
    <div className="">
      <Comp />
    </div>
  );
};

const Comp = (props: { type?: true }) => {
  if (props.type) {
  }
  return <>テストプレイ</>;
};

export default Home;
