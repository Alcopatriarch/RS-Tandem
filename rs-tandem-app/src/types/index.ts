export interface TeamMember {
  id: number;
  name: string;
  git: string;
  description: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    id: 1,
    name: "Vladyslav Ivankov",
    git: "https://github.com/Alcopatriarch",
    description: "Тимлид, веб-разработчик и немного геймдизайнер",
    image: "../../public/alcopatriarch.png",
  },
  {
    id: 2,
    name: "Karyna Avdieieva",
    git: "https://github.com/karinavd",
    description: "Дизайнер, веб-разработчик и просто хороший человек",
    image: "../../public/karina.jfif",
  },
  {
    id: 3,
    name: "Sergey Lee",
    git: "https://github.com/SergLestr",
    description: "Веб-разработчик и бэкендер",
    image: "../../public/sergey.png",
  },
];
