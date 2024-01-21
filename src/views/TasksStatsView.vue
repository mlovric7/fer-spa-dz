<template>
  <div class="tasks-stats">
    <h2>Statistika Zadataka</h2>
    <p>Ukupno zadataka: {{ totalTasks }}</p>
    <p>Dovršenih zadataka: {{ finishedTasks }}</p>
    <p>Nedovršenih zadataka: {{ unfinishedTasks }}</p>
    <p>Postotak dovršenih: {{ completionRate }}%</p>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useTodoStore } from '@/stores/todo.js'
import { storeToRefs } from 'pinia'

const todoStore = useTodoStore();
let { tasks, unfinishedTodosCount } = storeToRefs(todoStore)

const totalTasks = computed(() => tasks.value.length);
const unfinishedTasks = unfinishedTodosCount;
const finishedTasks = computed(() => totalTasks.value - unfinishedTasks.value)
const completionRate = computed(() => {
  if (totalTasks.value === 0) return 100;
  return Math.round((finishedTasks.value / totalTasks.value) * 100);
});

onMounted(async () => {
  await todoStore.fetchTasks();
});
</script>

<style scoped>
.tasks-stats {
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.tasks-stats h2 {
  margin-bottom: 15px;
  color: #333;
}
</style>
