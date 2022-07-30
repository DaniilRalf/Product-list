import { useState } from "react";
import { ProductInterface } from "../../Interfaces/Interfaces";

interface ProductProps{
    product: ProductInterface;
}


function Product(props: ProductProps) {

    let [btnClick, setBtnClick] = useState(false);
    let click = () => {
        if(btnClick === false){
            setBtnClick(true);
        } else{
            setBtnClick(false);
        }
    }

    return (
      <div className="border py-2 px-4 rounder flex flex-col items-center mb-2">
        <img className="w-1/6" src={props.product.image} />
        <p className="font-bold">{props.product.title}</p>
        <p className="">{props.product.price}</p>
        {btnClick && <p>{props.product.description}</p>}

        <button 
        className={!btnClick ? "py-2 px-4 border bg-yellow-400" : "py-2 px-4 border bg-blue-400"} 
        onClick={() => click()}
        >{!btnClick ? 'Show more' : 'Hide details'}
        </button>
      </div>
    )
}
export default Product;