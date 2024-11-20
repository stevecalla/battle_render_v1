import { Link } from 'react-router-dom';

const NavBar = (props:any) => {

    const { loginToken, setLoginToken } = props.context;

    const handleLogOut = () => {
      localStorage.removeItem('LOGIN_TOKEN');
      setLoginToken(null);
    };

    return (
      <nav id="navBar" className="navBar">
        <h2 id="navTitle" className="navTitle">Shonen Showdown</h2>
        <ul id="navList" className="navList">
          <li className="navDash">
            <Link to="/" aria-label="Go to Battle Dash">Battle Dash</Link>
          </li>
          {loginToken && (
            <>
              <li className="navTeams">
                <Link to="/teamsRoom" aria-label="Go to Locker Room">Locker Room</Link>
              </li>
              <li className="navBattle">
                <Link to="/battleRoom" aria-label="Go to Battle Room">Battle Room</Link>
              </li>
              <li className="navLogOut">
                <Link to="/login" onClick={handleLogOut} aria-label="Log out of the application">Log Out</Link>
              </li>
            </>
          )}
          {!loginToken && (
            <>
              <li className="navLogin">
                <Link to="/login" aria-label="Go to Login Page">Login</Link>
              </li>
              <li className="navSignUp">
                <Link to="/signUp" aria-label="Go to Sign Up Page">SignUp</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  };

export default NavBar;