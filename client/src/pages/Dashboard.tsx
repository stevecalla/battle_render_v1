/*type DashProps = {
    loginToken: string | null;
}*/

import { useOutletContext } from 'react-router-dom';

const Dashboard = () => {

    const { loginToken } = useOutletContext<{
        loginToken: string | null,
        setLoginToken: (loginToken: string | null) => void
    }>();

    //const loginToken = localStorage.getItem('LOGIN_TOKEN');

    console.log(loginToken);


    const user = {
        name: "User Name",
        wins: 10,
        losses: 5,
        draws: 2,
        gamesPlayed: 17,
        winRate: 58.8,
        curWinStreak: 3,
        bigWinStreak: 5,
        bigLoseStreak: 3
    }

    const hiScores = [
        {name: "Player1", score: 1000},
        {name: "Player2", score: 900},
        {name: "Player3", score: 800},
        {name: "Player4", score: 700},
        {name: "Player5", score: 600},
        {name: "Player6", score: 500},
        {name: "Player7", score: 400},
        {name: "Player8", score: 300},
        {name: "Player9", score: 200},
        {name: "Player10", score: 100}
    ]

    const components = [];

    for (let i = 0; i < 10; i++) {
        components.push(<p id="dashHiP{i+1}" className="dashHiPlayer">{i+1}. {hiScores[i].name} - {hiScores[i].score}</p>);
        //components.push(<Team teamDisplay={1} team={hiScores[i].team} />);
    }
    

    if (loginToken) {
        return (
            <div id="dashPage">
                <div id="dashImage"></div>
                <div id="battleDash">
                    <h1 id="dashTitle" className="dashTitle">Battle Dash</h1>
                    <div id="dashUser">
                        <h3 id="dashWelcomeMsg" className="dashWelcomeMsg">Welcome {user.name}</h3>
                        <div id="dashStats" className="dashStats">
                            <section id="dashStatsLeft" className="dashStatsLeft">
                                <p id="dashWins">Wins: {user.wins}</p>
                                <p id="dashLosses">Losses: {user.losses}</p>
                                <p id="dashDraws">Draws: {user.draws}</p>
                                <p id="dashGamesPlayed">Games Played: {user.gamesPlayed}</p>
                            </section>
                            <section id="dashStatsRight">
                                <p id="dashWinRate">Win Rate: {user.winRate}</p>
                                <p id="dashCurWinStreak">Current Win Streak: {user.curWinStreak}</p>
                                <p id="dashBigWinStreak">Biggest Win Streak: {user.bigWinStreak}</p>
                                <p id="dashBigLoseStreak">Biggest Losing Streak: {user.bigLoseStreak}</p>
                            </section>
                        </div>
                    </div>
                    {/*}
                    <div id="dashHiScores">
                        <h3 id="dashHiTitle">HiScores</h3>
                        {components}
                    </div>*/}
                </div>
            </div>
        );
    } else {  
        return (
            <div id="dashPage">
                <div id="dashImage"></div>
                <div id="battleDash">
                    <h1 id="dashTitle">Battle Dash</h1>
                    <div id="dashUser">
                        <h3 id="dashWelcomeMsg">Welcome! Please <a href="/login">Login</a> or <a href="/signUp">Create</a> an account!</h3>
                        <a href="/signUp">Create Account</a>
                        <a href="/login">Login</a>
                    </div>
                    {/*}
                    <div id="dashHiScores">
                        <h3 id="dashHiTitle">HiScores</h3>
                        <p id="dashHiP1" className="dashHiPlayer">1. 1000</p>
                        <p id="dashHiP2" className="dashHiPlayer">2. 900</p>
                        <p id="dashHiP3" className="dashHiPlayer">3. 800</p>
                        <p id="dashHiP4" className="dashHiPlayer">4. 700</p>
                        <p id="dashHiP5" className="dashHiPlayer">5. 600</p>
                        <p id="dashHiP6" className="dashHiPlayer">6. 500</p>
                        <p id="dashHiP7" className="dashHiPlayer">7. 400</p>
                        <p id="dashHiP8" className="dashHiPlayer">8. 300</p>
                        <p id="dashHiP9" className="dashHiPlayer">9. 200</p>
                        <p id="dashHiP10" className="dashHiPlayer">10. 100</p>
                    </div>*/}
                </div>
            </div>
        );
    }
};

export default Dashboard;