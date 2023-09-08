import { NavLink } from "react-router-dom";

const MainPage = (props) => {
    return (
        <div className="main-page p-7">
            <div className="pic-text-left">
                <h2>Main content goes here</h2>
            </div>
            <div className="links-from-main m-5">
                <NavLink className="bg-yellow-500 m-5 p-3 rounded" to="/events">List All events</NavLink>
                <NavLink className="bg-green-500 m-5 p-3 rounded" to="/event">Create An Event</NavLink>
            </div> 
        </div>

    )
}

export default MainPage