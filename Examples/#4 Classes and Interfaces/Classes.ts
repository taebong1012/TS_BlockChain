class Player2 {
  constructor(
    private firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
}

const taehyun = new Player2("tae", "hi", "taebong");

// 추상 클래스
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}
  abstract getFullName(): void;
}

class Player3 extends User {
  getFullName(): void {
    console.log(`${this.firstName} ${this.lastName}`); // 가능
  }
}

const tae1 = new Player3("tae", "hi", "taebong");
// tae1.firstName; // 불가능


type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");

const dict = new Dict();
dict.add(kimchi);
// let tmp = dict.def("kimchi");
// console.log(tmp);
