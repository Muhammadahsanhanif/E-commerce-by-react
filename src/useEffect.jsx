import { useEffect, useState } from "react";
import Cards from "./components/cards";
import Footer from "./components/footer";
import Header from "./components/header";
import Feauther from "./components/feauther";
import Pricing from "./components/pricing";
import Termonil from "./components/termonil";
function UseEffect() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState("");

  useEffect(() => {
    fetchproduct();
  }, []);

  const fetchproduct = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((product) => setProduct(product));
  };

  console.log("show products", product);

  const filtered = product.filter((data) => {
    const matchesSearch = data.title.toLowerCase().includes(search.toLowerCase());
    const matchesPrice =
      !priceRange || (priceRange === "0-50" && data.price <= 50) ||
      (priceRange === "50-100" && data.price > 50 && data.price <= 100) ||
      (priceRange === "100-200" && data.price > 100 && data.price <= 200) ||
      (priceRange === "200+" && data.price > 200);

    return matchesSearch && matchesPrice;
  });

  return (
    <>
      <Header />
      <input
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border rounded w-40"
      />

      <select
        onChange={(e) => setPriceRange(e.target.value)}
        className="p-2 border rounded w-40 ml-2"
      >
        <option value="">All Prices</option>
        <option value="0-50">0 - 50</option>
        <option value="50-100">50 - 100</option>
        <option value="100-200">100 - 200</option>
        <option value="200+">200+</option>
      </select>

      <Feauther />

      <div className="container px-5 py-24 mx-auto mt-40">
        <div className="flex flex-wrap -m-4">
          {filtered.map((product) => (
            <Cards
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>

       
       <Pricing/>

      <Termonil/>
      
      <Footer />
    </>
  );
}

export default UseEffect;
