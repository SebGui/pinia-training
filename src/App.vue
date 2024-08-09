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

    <!-- Task list -->
    <div v-if="filter === 'all'" class="task-list">
      <p>You have {{ taskStore.totalCount }} Tasks to do</p>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <div v-if="filter === 'favs'" class="task-list">
      <p>You have {{ taskStore.favCount }} fav tasks to do</p>
      <div v-for="task in taskStore.favs" :key="task.id">
        <TaskDetails :task="task"/>
      </div>
    </div>

  </main>
</template>

<script setup>
  import { useTaskStore } from './stores/TaskStore';
  import { ref } from 'vue';

  import TaskDetails from './components/TaskDetails.vue';
  import TaskForm from './components/TaskForm.vue';

  const taskStore = useTaskStore()
  const filter = ref('all')
</script>