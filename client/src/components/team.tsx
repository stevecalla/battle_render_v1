import Character from './character';
import { TeamData } from '../interfaces/TeamData';
import { useState, useEffect } from 'react';

type TeamProps = {
    teamDisplay: number;
    team: TeamData;
    align: any;
    teamNames: string[];
}

const Team = (props:TeamProps) => {
    const [noTeam, setNoTeam] = useState(false);
    useEffect(() => {
        if (props.teamNames.length > 0) {
            setNoTeam(true);
        }
    }, [props.teamNames]);

    const components = [];

    if (props.teamDisplay == 1) {
        const teamOptions = [];

        for (let i = 0; i < props.team.characters.length; i++) {
            components.push(<Character statsDisplay={1} character={props.team.characters[i]}/>);
        }

        if (props.team.characters.length < 5) {
            components.push(<input type="button" value="+ Character" id="addCharacter"/>);
        }

        if (props.teamNames.length > 0) {
           for (let i = 0; i < props.teamNames.length; i++) {
                teamOptions.push(<option value={props.teamNames[i]}>{props.teamNames[i]}</option>);
            }
        }

        return (
            <div className="teamDisplayStats">
                <form className="addTeamContainerStats">
                    <input type="text" id="teamNameTBStats" placeholder="Team Name"/>
                    <input type="button" value="+ Team" id="addTeamStats"/>
                </form>
                <div className="teamNameContainerStats">
                    {noTeam && <select className="teamNameStats" name="teamSelect" id="teamSelect">
                        {teamOptions}
                    </select>}
                    {noTeam && <input type="button" value="- Team" id="deleteTeam"/>}
                </div>
                <div className="teamStats">
                    {components}
                </div>
            </div>
        );
    } else {
        for (let i = 0; i < props.team.characters.length; i++) {
            components.push(<Character statsDisplay={0} character={props.team.characters[i]}/>);
        }

        return (
            <div className="teamDisplayNoStats">
                <h3 className="teamNameNoStats" style={{textAlign: props.align}}>Team Name</h3>
                {components}
            </div>
        );
    }
}

export default Team;