import { cardData } from "../data";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="w-full px-4 py-10 flex justify-center">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h2 className="text-3xl font-bold mb-6 text-center text-[var(--text-color)]">
          Personal Blogs
        </h2>

        <div className="flex flex-col space-y-4">
          {cardData.map((card) => (
            <Link key={card.id} to={`/details/${card.id}`}>
              <div className="bg-[var(--card-bg)] p-6 rounded-lg shadow-md hover:scale-105 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-[var(--text-color)]">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
