// Case 1
type Add3 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add3: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

// Case 2
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") console.log(config);
  else {
    console.log(config.path);
  }
};

// Case 3
// 각각 다른 파라미터의 개수를 가지고 있을 때
type Add4 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add4: Add4 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};
