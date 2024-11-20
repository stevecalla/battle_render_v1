import {TeamData} from './TeamData';

export interface UserData extends TeamData {
    userName: string;
    teams: TeamData[];
}