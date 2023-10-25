type SuperPrint = {
  <TypePlaceholder>(arr: TypePlaceholder[]): void;
};

const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["hi", 3, true, 6]);

function superPrint2<V>(a: V[]) {
  return a[0];
}

type Player<E> = {
  name: string;
  extraInfo: E;
};

const tae: Player<{ favFood: string }> = {
  name: "tae",
  extraInfo: {
    favFood: "chicken",
  },
};
