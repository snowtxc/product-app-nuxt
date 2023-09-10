
import { useFetch } from "nuxt/app";

const baseUrl = "https://dummyjson.com";

export const getProducts = ()=>{
    const url = baseUrl+"/products";
    const getProducts =  useFetch(url, {
        lazy: true
    });
    return getProducts;
}

export const addProduct = async(body)=>{
    const url = baseUrl+"/products/add";
    const response =   useFetch(url, {
        headers: { "Content-type": "application/json" },
        method: 'POST',
        body: body
    }); 
    return response;

}