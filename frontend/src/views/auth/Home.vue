<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';

const user = ref();
onMounted(async () => {
    const data = await axios.get('/api/user');
    user.value = data.data;
});
</script>

<template>
    <div class="container">
        <h1>Home</h1>
        <h3>Welcome Home, {{ user?.name }}</h3>
        <h3>Email address is: {{ user?.email }}</h3>
    </div>
</template>

<style scoped>

</style>