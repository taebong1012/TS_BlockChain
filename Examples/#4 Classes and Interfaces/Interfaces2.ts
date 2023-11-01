// 1. 추상클래스 사용
abstract class UserAbs {
  constructor(protected firstName: string, protected lastName: string) {}
  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class PlayerAbs extends UserAbs {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My Name is ${this.fullName}`;
  }
}

// 2. 인터페이스 사용
interface UserInt {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface HumanInt {
  health: number;
}

class PlayerInt implements UserInt, HumanInt {
  constructor(
    // 인터페이스를 상속할 때에는 property를 private으로 만들지 못함
    // private firstName: string,
    // private lastName: string,
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My Name is ${this.fullName}`;
  }
}

// 2-1. 인터페이스를 타입으로 사용하기
function makeUserInt(user: UserInt): UserInt {
  return {
    firstName: "result",
    lastName: "r",
    fullName: () => "aa",
    sayHi: (name) => "hey",
  };
}

makeUserInt({
  firstName: "tae",
  lastName: "an",
  fullName: () => "xx",
  sayHi: (name) => "hoho",
});
