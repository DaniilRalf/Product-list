import Product from "./components/Product/Product";
// import { data } from '../src/data/data'
import { ProductInterface } from "./Interfaces/Interfaces";
import { getProduct } from "./services/requests";
import { useEffect, useState } from "react";



function App() {

//GET ALL PRODUCTS===========================================
    let [allProducts, setAllProducts] = useState<any>([]); //products
    let [preload, setPreload] = useState<boolean>(true); //preload
    let [error, setError] = useState<boolean>(false); //error

    useEffect(() => {
      getProduct()
      .then(item => {
        setAllProducts(item);
        setPreload(false);
      })
      .catch(() => {
        setError(true);
        setPreload(false);
      })
    }, []);

    let construct = allProducts.map((item: ProductInterface) => {
      return <Product key={item.id} product={item}></Product>
    })
//GET ALL PRODUCTS===========================================



  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {error && <p>SERVER ERROR...</p>}
      {preload && <p>LOADING...</p>}
      {construct}
    </div>
  );
}

export default App;
