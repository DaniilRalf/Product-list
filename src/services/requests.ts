import axios from "axios"
import { ProductInterface } from "../Interfaces/Interfaces";

const ALL_PRODUCTS: string = 'https://fakestoreapi.com/products';


export let getProduct = async () => {
    let request = await axios.get<ProductInterface>(ALL_PRODUCTS);
    return request.data;
}