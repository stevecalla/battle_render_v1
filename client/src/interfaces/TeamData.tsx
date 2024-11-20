import { CharacterData } from './CharacterData';

export interface TeamData extends CharacterData {
    id: number;
    name: string;
    characters: CharacterData[];
    health: number;
    attack: number;
    defense: number;
    speed: number;
}
