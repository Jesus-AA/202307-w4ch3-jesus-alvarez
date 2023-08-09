import { Advisor } from './advisor';
import { Fighter } from './fighter';
import { King } from './king';
import { Squire } from './squire';

export type GOTCharacters = Fighter | Advisor | Squire | King;

export interface Character {
  serie: 'Game of thrones';
  isAlive: boolean;
  name: string;
  family: string;
  age: number;
}
