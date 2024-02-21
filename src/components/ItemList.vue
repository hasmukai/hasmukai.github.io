<script setup lang="ts">
import { ref } from 'vue'

interface Item {
    name: string
    price: number 

}

const items = ref<Item[]>([
    { name: 'たまご', price: 100},
    { name: 'りんご', price: 160}
])

</script>


<template>
    <div>Itemlist</div>
    <ul>
        <li v-for="item in items" :key="item.name">
        <div>名前: {{ item.name }}</div>
        <div>{{ item.price }} 円</div>
    </li>
    </ul>
</template>

<style></style>