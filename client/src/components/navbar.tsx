
const NavBar = (props:any) => {

    const { loginToken, setLoginToken } = props.context;

    return (
        <nav id="navBar" className="navBar">
            <h2 id="navTitle" className="navTitle">Shonen Showdown</h2>
            <ul id="navList" className="navList">
                <li id="navDash" className="navDash"><a href="/">Battle Dash</a></li>
                {loginToken && <li id="navTeams" className="navTeams"><a href="/teamsRoom">Locker Room</a></li>}
                {loginToken && <li id="navBattle" className="navBattle"><a href="/battleRoom">Battle Room</a></li>}
                {loginToken ? 
                (<li id="navLogOut" className="navLogOut"><a href="/login" onClick={() => {
                    localStorage.removeItem('LOGIN_TOKEN');
                    setLoginToken(null);
                }}>Log Out</a></li>) : null}
                {!loginToken && <li id="navLogin" className="navLogin"><a href="/login">Login</a></li>}
                {!loginToken && <li id="navSignUp" className="navSignUp"><a href="/signUp">SignUp</a></li>}
            </ul>
        </nav>
    );
};

export default NavBar;