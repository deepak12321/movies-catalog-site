import { NavLink } from "react-router-dom";
import "../style/card.css";

const Card = (prop) => {

    return (

        <NavLink to={`/movie/${prop.id}`}>
            <div className="main-card ">
                <img src={prop.Poster} alt="No_image_available" className="poster-img-card" id='card-img' />
            </div>
        </NavLink>
    )
}

export default Card