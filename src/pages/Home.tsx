import { useEffect, useState } from "react";
import Card from "../Components/Cards";
import { useTheme } from "../Context/ThemeContext";


type ProductType = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  };




function Home () {
    const { theme } = useTheme();

const [products, setProducts] = useState<ProductType[]>([]);

 useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
      
  }, []);
    
return (
    <main className="p-6">
      
      <div className={`${
          theme === "monokai"
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            : "flex flex-col"
        }`}
      >
        

        {products.map((product) => (
            <Card
          key={product.id}
          id={product.id.toString()}
          title={product.title}
          description={product.description}
          image={product.image}
        />
        ))}
        </div>
    </main>
   
);




}
export default Home;