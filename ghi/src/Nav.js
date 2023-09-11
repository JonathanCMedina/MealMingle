import { useAuthContext } from "@galvanize-inc/jwtdown-for-react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
    const { token } = useAuthContext();

    if (token) {
        return (
            <div>
                <h1>Meal Mingle</h1>
                <div>
                    <ul>
                        <li>
                            <NavLink className="nav-link" to="/main">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/event">Create An Event</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/events">All Events</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/users/events">My Events</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Meal Mingle</h1>
                <div>
                    <ul>
                        <li>
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Nav;