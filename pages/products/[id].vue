<template>
    <div v-if="product">
        <CardProduct :product="product"></CardProduct>
    </div>
    <div v-else>
        <h1>No se ha encontrado resultados</h1>
    </div>
</template> 

<script setup>
    import { products } from '~/products';

    const product = ref(null);
    const route  = useRoute();

    const id = route.params.id;
    product.value =  products.find(item => item.id == id);
    
    
</script>