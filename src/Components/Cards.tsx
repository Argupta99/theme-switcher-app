import { Link } from "react-router-dom";

type CardProps 
= {id: string, 
    title: string,
 description: string; 
};


function Card ({id,title, description}: CardProps) {

    return (
        <Link to={`/details/${id}`}>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        </Link>
    );

}

export default Card;


