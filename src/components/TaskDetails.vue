<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons deleteRed" @click="taskStore.deleteTask(task.id)">delete</i>
            <i class="material-icons" :class="{favRed:task.isFav}" @click="taskStore.toggleFav(task.id)">favorite</i>
        </div>
    </div>
</template>

<script setup>
    import { useTaskStore } from '../stores/TaskStore';

    const taskStore = useTaskStore();

    /* Define props */
    defineProps({
        task : {
            require: true
        }
    })
</script>