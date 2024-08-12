<template>
  <main>
    <!-- Header -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia logo">
      <h1>Pinia intro</h1>
    </header>

    <div class="new-task-form">
      <TaskForm/>
    </div>

    <!-- Filter -->
     <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Favs tasks</button>
     </nav>

    <!-- Loading -->
     <div v-if="isLoading" class="loading">Loading tasks...</div>

    <!-- Task list -->
    <div v-if="filter === 'all'" class="task-list">
      <p>You have {{ totalCount }} Tasks to do</p>
      <div v-for="task in tasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <div v-if="filter === 'favs'" class="task-list">
      <p>You have {{ favCount }} fav tasks to do</p>
      <div v-for="task in favs" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <button @click="taskStore.$reset">Reset</button>

  </main>
</template>

<script setup>
  // Core Methods
  import { ref } from 'vue';

  // Store to refs, get Methods/Properties from our store
  import { storeToRefs } from 'pinia';
  // Pinia taskStore
  import { useTaskStore } from './stores/TaskStore';

  // Components
  import TaskDetails from './components/TaskDetails.vue';
  import TaskForm from './components/TaskForm.vue';

  // Instanciate taskStore
  const taskStore = useTaskStore()

  // Fetching tasks from "db"
  taskStore.getTasks();

  // Initialize task filter
  const filter = ref('all')

  // Deconstruct needed elements from store for readability
  const { tasks, isLoading, favs, totalCount, favCount } = storeToRefs(taskStore)
</script>