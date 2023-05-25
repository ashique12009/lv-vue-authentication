<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

onMounted(async () => {
    await authStore.getUser();
});

</script>

<template>
    <div class="container">
        <div v-if="authStore.authUser">
            <h1>Home</h1>
            <h3>Welcome Home, {{ authStore.authUser.name }}</h3>
            <p>Email address is: {{ authStore.authUser.email }}</p>
        </div>
        <div v-else>
            <h3>Go and login</h3>
        </div>        
    </div>
</template>

<style scoped>

</style>