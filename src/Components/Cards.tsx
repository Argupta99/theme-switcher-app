import { Link } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import Button from "../Components/Button";

type CardProps 
= {id: string, 
title: string,
 description: string;
 image: string;
};


function Card ({id,title, description, image }: CardProps) {

    const { theme } = useTheme();
    const isGrid = theme === "monokai";
    return (
        
        <Link to={`/product/${id}`}>
        <div
        className={`${
          isGrid
            ? "bg-[var(--card-bg)] rounded p-4 shadow h-full flex flex-col justify-between"
            : "bg-[var(--card-bg)] p-4 mb-4 rounded shadow"
        }`}
      >
        <img
          src={image}
          alt={title}
          className={`w-full ${
            isGrid ? "h-48 object-cover rounded" : "h-40 object-contain"
          }`}
        />
        <h3 className="text-xl font-bold mt-4">{title}</h3>
        <p className="text-sm mt-2">{description}</p>
        <div className="mt-auto text-right text-[var(--accent-color)] hover:underline">
          <Button text ="Read More"></Button>
        </div>
      </div>
        </Link>
    );

}

export default Card;


