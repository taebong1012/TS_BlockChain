function add1(a: number, b: number): number {
  return a + b;
}

// 화살표 함수
const add2 = (a: number, b: number) => a + b;

type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
