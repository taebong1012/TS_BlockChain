type Nickname = string;
type HealthBar = number;
type Friends = Array<string>;
type Team = "red" | "blue" | "yellow";

// 오브젝트의 모양을 특정해주기 위함
interface Player4 {
  nickname: Nickname;
  healthBar: HealthBar;
  team: Team;
}

const nico: Player4 = {
  nickname: "nick",
  healthBar: 10,
  team: "red",
};

type Food = string;

const aaa: Food = "delicious";

//

interface User2 {
  name: string;
}

interface Player5 extends User2 {}

const nico2: Player5 = {
  name: "nico",
};
