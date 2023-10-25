# TypeScript

타입스크립트의 사용 이유: 타입 안정성(_버그 감소, 런타임 에러 감소, 생산성 증가_)

> `TypeScript` ⇒ 오류 확인 ⇒ 컴파일 ⇒ `JavaScript`

# Types

## Implicit Types vs Explicit Types

### Implicit Type

TypeScript의 TypeChecker가 타입을 추론

### Explicit Type

타입을 명시적으로 정의

```tsx
let a = "hello1"; // implicit type
let b: string = "hello2"; // explicit type
let c: number[] = []; // explicit type을 통해 빈 배열의 타입 선언
const player = {
  name: "abc",
};
```

> `Implicit Type` 사용을 추천 → 코드 양 감소, 가독성 향상

## Optional Chaining

해당 객체가 유효한 값을 가지고 있지 않다면 에러 대신 `undefined`를 리턴

```tsx
const player: {
  name: string;
  age?: number; // Optional Chaning(?)을 통해 age 속성을 optional하게 설정
} = {
  name: "abc",
};
```

## Alias

`type` 키워드를 사용하여 타입에 이름을 설정 -> <b>코드양 감소</b>

```tsx
type Player = {
	name: string,
	age? : number
}
const a : Player {
	name: "A"
}
const b : Player {
	name: "B"
	age: 12
}
```

## Function Type

매개변수와 반환 값의 타입을 포함해서 함수를 정의

1. `function 함수명(변수: 매개변수 타입): 리턴 타입 { ~~ }`
2. `const 함수명 = (변수: 매개변수 타입) : 리턴 타입 ⇒ { ~~ }`

```tsx
type Player = {
  name: string;
  age?: number;
};
function playerMaker(name: string): Player {
  return {
    name,
  };
}
const a = playerMaker("A");
a.age = 12;
```

## ReadOnly

값의 속성을 **읽기 전용**으로 설정해주는 기능
함수가 매개변수로 받는 값을 **변경없이 그대로 사용해야할 때 적합**

> ReadOnly를 사용하지 않더라도 JS는 암묵적으로 매개변수를 변경하지 않는다고 가정하지만 명확하지 않기 때문에 명시적으로 선언하는 것이 좋음

```tsx
type Player = {
  readonly name: string;
  age?: Age;
};
const playerMaker = (name: string): Player => ({ name });
const a = playerMaker("A");
a.age = 12;
a.name = "AA"; // ERROR
```

## Tuple

최소한의 길이를 가지며 특정 위치에 특정 타입이 있는 Array를 생성

```tsx
// 최소 3개의 아이템을 가지며 string, number, boolean 값을 차례대로 가져야함을 명시
const player: [string, number, boolean] = ["A", 1, true];
```

## Any

TypeScript의 보호장치들을 비활성화

```tsx
let a = []; // 빈 값을 설정하면 TypeScript는 any 타입이라고 판단함.
let b: any = "abc";
b = 3; // b를 any로 부여했기 때문에 가능
```

## Unknown

어떤 타입인지 모르는 변수일 경우 사용 (API의 응답의 타입을 모를 경우)

```tsx
let a: unknown;
if (typeof a === "number") {
  let b = a + 1;
}
if (typeof a === "string") {
  let b = a.toUpperCase();
}
```

## Never

함수가 절대로 return 하지 않을 경우 사용.</br>
매개변수 타입이 제한되어 있는 상황에 발생

```tsx
// 1. 절대로 return 하지 않음
function hello(): never {
  throw new Error("xxx");
}

// 2. 매개변수 타입이 제한되어 있는 상황
function hello(name: string | number) {
  // 매개변수의 타입이 string 혹은 number
  if (typeof name === "string") {
  } // string 타입
  else if (typeof name === "number") {
  } // number 타입
  else {
  } // never 타입 (절대로 작동하지 않음)
}
```

## Call Signature

함수 인자의 타입과 결과의 타입을 알려주는 도움말

```tsx
// Add 타입 선언 및 을 통해 함수 타입 설명
type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
```

## Overloading

함수가 여러 개의 Call Signature를 가지고 있을 경우 발생. 패키지 혹은 라이브러리를 디자인할 때 많이 사용

```tsx
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
```

> Call Signature들의 파라미터 개수가 다른 경우
>
> ```tsx
> type Add = {
>   (a: number, b: number): number;
>   (a: number, b: number, c: number): number;
> };
>
> const add4: Add4 = (a, b, c?: number) => {
>   if (c) return a + b + c;
>   return a + b;
> };
> ```
>
> ?를 통해 마지막 추가 파라미터(c)는 추가 파라미터는 선택사항(옵션)임을 명시

## Polymorphism

타입스크립트가 배열의 값들을 보고 타입을 유추.

> Generic Type을 선언함으로서 사용 가능</br>`<T>(arr: T[]): void` </br>**Concrete Type**: number, string, Null, unknown, ...</br>**Generic Type**: 타입의 Placeholder

```tsx
type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["hi", 3, true, 6]);
```
