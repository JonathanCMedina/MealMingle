import { NavLink } from "react-router-dom";

const LandingPage = (props) => {
    return (
        <div className="landing-page p-7">
            <div className="pic-text-left">
                <p className="text-3xl">The image will be here</p>
                <p className="p-5">Welcome to Meal Mingle, the place for mates, meals and merryment! Set a location, pick a theme and invite your closest friends to enjoy foods from around the world.</p>
            </div>
            <div>
                <NavLink className="bg-yellow-500 m-5 p-3 rounded" to="/signup">Signup</NavLink>
                <NavLink className="bg-green-500 m-5 p-3 rounded" to="/login">Login</NavLink>
            </div> 
        </div>

    )
}

export default LandingPage








