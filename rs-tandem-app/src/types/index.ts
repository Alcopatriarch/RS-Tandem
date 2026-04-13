export interface TeamMember {
  id: number;
  name: string;
  git: string;
  description: string;
  image: string;
}

import alcopatriarchImage from "../assets/images/alcopatriarch.png";
import karinaImage from "../assets/images/karina.jfif";
import sergeyImage from "../assets/images/sergey.png";

export const team: TeamMember[] = [
  {
    id: 1,
    name: "team.member1.name",
    git: "https://github.com/Alcopatriarch",
    description: "team.member1.description",
    image: alcopatriarchImage,
  },
  {
    id: 2,
    name: "team.member2.name",
    git: "https://github.com/karinavd",
    description: "team.member2.description",
    image: karinaImage,
  },
  {
    id: 3,
    name: "team.member3.name",
    git: "https://github.com/SergLestr",
    description: "team.member3.description",
    image: sergeyImage,
  },
];
