import Team from './team';
import { TeamData } from '../interfaces/TeamData';

const pullEnemyTeams = async () => {
    // Fetch teams from database
    const response = await fetch('/api/team/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (response.status === 200) {
        const teams = await response.json();
        const selectedTeam:TeamData = teams(Math.floor(Math.random()*teams.length));
        return(selectedTeam);
    } else {
        const selectedTeam:TeamData = {
            id: 0,
            name: "Null",
            characters: [
                {name: "Null", health: 100, attack: 10, defense: 5, speed: 5},
                {name: "Null", health: 100, attack: 10, defense: 5, speed: 5},
                {name: "Null", health: 100, attack: 10, defense: 5, speed: 5},
                {name: "Null", health: 100, attack: 10, defense: 5, speed: 5},
                {name: "Null", health: 100, attack: 10, defense: 5, speed: 5}
            ],
            health: 500,
            attack: 50,
            defense: 25,
            speed:25
        }
        return(selectedTeam);
    }
}

const pullMyTeam = async () => {
    const token = localStorage.getItem('LOGIN_TOKEN');

    if (!token) {
        throw new Error('No login token found');
    }
    const payload = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    const userId = payload.id;

    const response = await fetch(`/api/team/?${userId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (response.status === 200) {
        return(await response.json());
    } else {
        return({
            id: 0,
            name: "Null",
            characters: [
                {name: "Null", health: 100, attack: 10, defense: 5, speed: 5},
                {name: "Null", health: 100, attack: 10, defense: 5, speed: 5},
                {name: "Null", health: 100, attack: 10, defense: 5, speed: 5},
                {name: "Null", health: 100, attack: 10, defense: 5, speed: 5},
                {name: "Null", health: 100, attack: 10, defense: 5, speed: 5}
            ],
            health: 500,
            attack: 50,
            defense: 25,
            speed:25
        });
    }
}

const runBattle = async (enemyTeam:TeamData, myTeam:TeamData) => {
    const vsSpan = document.getElementById('battleVSContainerSpan');

    if (vsSpan) {vsSpan.innerHTML = '';}

    const response = await fetch('/api/battling', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            team1Id: myTeam.id,
            team2Id: enemyTeam.id
        })
    });

    if (response.status === 200) {
        const { team1Points, team2Points } = await response.json();
        if (team1Points > team2Points) {
            if(vsSpan) {vsSpan.innerHTML = 'VICTORY!';}
        } else if (team1Points < team2Points) {
            if(vsSpan) {vsSpan.innerHTML = 'DEFEAT!';}
        } else {
            if(vsSpan) {vsSpan.innerHTML = 'TIE!';}
        }
    } else {
        if(vsSpan) {vsSpan.innerHTML = '';}
    }
}


const Battle = async () => {
    let enemyTeam:TeamData = await pullEnemyTeams();

    const myTeam:TeamData = await pullMyTeam();

    return (
        <div id="battle">
            <h1 id="battleTitle" onClick={async () => {
                        await runBattle(enemyTeam, myTeam);
                        enemyTeam = await pullEnemyTeams();
                    }}>Battle</h1>
            <div id="battleDisplay">
                <Team teamDisplay={0} team={myTeam} teamNames={[]} align="left"/>
                <div id="battleVSContainer">
                    <span id="battleVSContainerSpan"></span>
                    <h1 id="battleVS">VS</h1>
                </div>
                <Team teamDisplay={0} team={enemyTeam} teamNames={[]} align="right"/>
            </div>
        </div>
    )
}

export default Battle;