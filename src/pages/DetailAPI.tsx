import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
};

function DetailAPI() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center min-h-[70vh]">
        <p className="text-center text-lg text-gray-500">Loading product...</p>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-10 flex justify-center">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <h1 className="text-3xl font-bold mb-6 text-center text-[var(--text-color)]">
          {product.title}
        </h1>

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto max-h-[450px] object-contain rounded-lg mb-6"
        />

        <p className="text-base leading-relaxed text-[var(--text-color)] text-justify">
          {product.description}
        </p>

        <p className="mt-4 font-medium italic text-sm">Category: {product.category}</p>
        <p className="font-bold text-[var(--accent-color)] mt-2 text-lg">
          Price: ${product.price}
        </p>
      </div>
    </div>
  );
}

export default DetailAPI;
