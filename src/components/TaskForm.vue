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
    // Core Methods
    import { ref } from 'vue';

    // Pinia taskStore
    import { useTaskStore } from '../stores/TaskStore';

    // Instanciate taskStore
    const taskStore = useTaskStore()

    // Initialize input field value
    const newTask = ref('')

    // Create form handler
    const handleSubmit = () => {
        // If we have an input value
        if (newTask.value.length > 0) {
            taskStore.addTask({
                title: newTask.value,
                isFav: false,
                id: Math.floor(Math.random() * 10000).toString() // Should be updated with better idMaker
            })
            newTask.value = ''
        }
    }
</script>