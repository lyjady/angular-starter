export interface HeroArg {
  name: string;
  job: string;
  sort: 'desc' | 'asc';
}

export interface Hero {
  id: string;
  name: string;
  phone: number;
  createTime: number;
  gender: string;
  genderText: string;
  job: string;
  jobText: string;
  role: string;
  age?: number;
  email?: string;
  brief?: string;
}

const heroes = [
  {
    id: 'hero_3861592711335647',
    name: '吉安娜',
    phone: 13356788776,
    gender: '0',
    genderText: '女',
    age: 18,
    job: '0',
    jobText: '法师',
    role: 'admin',
    email: '11245767788@lol.com',
    createTime: 1592711335647,
    brief: '塞拉摩的领导者'
  },
  {
    id: 'hero_3081592487543496',
    name: '泰兰德',
    phone: 15356708566,
    gender: '0',
    genderText: '女',
    age: 1000,
    job: '0',
    jobText: '牧师',
    role: 'user',
    email: '11245767788@lol.com',
    createTime: 1592487543496,
    brief: '艾露恩女祭司'
  }
]

export default heroes;
