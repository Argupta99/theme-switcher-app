import { useParams } from "react-router-dom";
import { cardData } from "../data";

function Details() {
  const { id } = useParams();
  const card = cardData.find((item) => item.id === id);

  return (
    <div className="w-full px-4 py-10 flex justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-[var(--text-color)]">
          {card?.title}
        </h1>

        <img
          src={card?.image}
          alt={card?.title}
          className="w-full h-auto max-h-[450px] object-cover rounded-lg mb-6"
        />

        <p className="text-sm italic text-center text-gray-500 mb-4">
          {card?.image_prompt}
        </p>

        <p className="text-base leading-relaxed text-[var(--text-color)] text-justify">
          {card?.long_description}
        </p>
      </div>
    </div>
  );
}

export default Details;

