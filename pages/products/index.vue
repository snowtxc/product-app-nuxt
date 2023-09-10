<template>
    <div v-if="pending">
        Cargando...
    </div>
    <div class="w-full p-5" v-else>
        <div class="flex justify-end"> 
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="addProducto">
                Agregar
            </button>
        </div>
        <div class="w-full flex justify-center gap-5 flex-wrap" >
             <CardProduct v-for="product in responseProducts.products" :key="product.id" :product="product"></CardProduct>
        </div>
    </div>
  
</template>

<script setup>

    import { getProducts, addProduct } from '~/api/products.service';
    
    import { store } from '~/store/store';

    const { data : responseProducts , pending , error} = getProducts();   
    const $storeApp = store();


     
  
    const addProducto = async()=>{
       const body = {
            "id": 15,
            "title": "Infinix INBOOK",
            "description": "Infinix Inbook X1 Ci3 10th 8GB...",
            "price": 1099,
            "discountPercentage": 11.83,
            "rating": 4.54,
            "stock": 96,
            "brand": "Infinix",
            "category": "laptops",
            "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
            "images": [
                "https://i.dummyjson.com/data/products/9/1.jpg",
                "https://i.dummyjson.com/data/products/9/2.png",
                "https://i.dummyjson.com/data/products/9/3.png",
                "https://i.dummyjson.com/data/products/9/4.jpg",
                "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
            ]
        }
       const { data , error ,upload}  =  await  addProduct(body);
       if(error.value){
         return;
       }

    }

    watch(
    () => pending.value,
    (newPending) => {
        
        $storeApp.setGlobalLoading(newPending);
    }
    );
</script>