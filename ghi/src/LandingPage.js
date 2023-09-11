import { NavLink } from "react-router-dom";
import landingImage from './Images/landingImage.jpeg'

const LandingPage = (props) => {
    return (
        <div className="landing-page p-7 relative w-100% h-100% overflow-hidden bg-cover bg-[100%] bg-no-repeat bg-black bg-center relative">
            <img src={landingImage} className="w-full h-full object-cover" alt="A variety of people gathered around an outdoor table enjoying a meal together"/>
            <div className="pic-text-left">
                <p className="p-5 text-white">Welcome to Meal Mingle, the place for mates, meals and merryment! Set a location, pick a theme and invite your closest friends to enjoy foods from around the world.</p>
                <NavLink className="bg-yellow-500 m-5 p-3 rounded" to="/signup">Signup</NavLink>
                <NavLink className="bg-green-500 m-5 p-3 rounded" to="/login">Login</NavLink>
            </div>
        </div>
    )
}

export default LandingPage
