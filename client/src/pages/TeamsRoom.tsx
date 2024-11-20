import Team from '../components/team';
import { TeamData } from '../interfaces/TeamData';

const myTeam:TeamData = {
    id: 1,
    name: "Team Name",
    characters: [
        {name: "Character1", health: 100, attack: 10, defense: 5, speed: 5},
        {name: "Character2", health: 100, attack: 10, defense: 5, speed: 5},
        {name: "Character3", health: 100, attack: 10, defense: 5, speed: 5},
        {name: "Character4", health: 100, attack: 10, defense: 5, speed: 5},
        {name: "Character5", health: 100, attack: 10, defense: 5, speed: 5}
    ],
    health: 500,
    attack: 50,
    defense: 25,
    speed:25
}

const teamNames = ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5"];
//const teamNames = [] as string[];

const TeamsRoom = () => {
    return (
        <div id="teamsPage">
            <div id="teamsImage"></div>
            <div id="teamsRoom">
                <h1 id="teamsRoomTitle">Locker Room</h1>
                <div id="teamsRoomDisplay">
                    <Team teamDisplay={1} team={myTeam} teamNames={teamNames} align="left"/>
                </div>
            </div>
        </div>
    );
}

export default TeamsRoom;