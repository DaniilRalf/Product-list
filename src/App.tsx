import Product from "./components/Product/Product";
import { data } from '../src/data/data'
import { ProductInterface } from "./Interfaces/Interfaces";



function App() {

  let construct = data.map((item: ProductInterface) => {
    return <Product key={item.id} product={item}></Product>
  })

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {construct}
    </div>
  );
}

export default App;
