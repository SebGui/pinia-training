<template>
    <form @submit.prevent="handleSubmit">
        <input 
            type="text"
            placeholder="I need to do..."
            v-model="newTask"
        >
        <button>Add task</button>
    </form>
</template>

<script setup>
    import { ref } from 'vue';
    import { useTaskStore } from '../stores/TaskStore';

    const taskStore = useTaskStore()
    const newTask = ref('')

    const handleSubmit = () => {
        if (newTask.value.length > 0) {
            taskStore.addTask({
                title: newTask.value,
                isFav: false,
                id: Math.floor(Math.random() * 10000) // Should be updated with better idMaker
            })
            newTask.value = ''
        }
    }
</script>