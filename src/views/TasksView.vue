<template>
  <div class="tasks-view">
    <div class="completion-rate">
      Postotak dovršenih zadataka: {{ completionRate }}%
    </div>
    <input
      type="text"
      v-model="newTaskText"
      placeholder="Dodaj novi zadatak..."
      @keyup.enter="addTask"
      class="new-task-input"
    />

    <div class="tasks-list">
      <task-item
        v-for="task in tasks"
        :key="task.id"
        :id="task.id"
        :text="task.text"
        :completed="task.completed"
        @toggle="toggleTask"
        @delete="deleteTask"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useTodoStore } from '@/stores/todo.js'
import TaskItem from '@/components/TaskItem.vue'
import { storeToRefs } from 'pinia'

const todoStore = useTodoStore();
let { tasks } = storeToRefs(todoStore)
const newTaskText = ref('');

const totalTasks = computed(() => tasks.value.length)
const finishedTasks = computed(() => tasks.value.filter(todo => todo.completed).length)
const completionRate = computed(() => {
  if (totalTasks.value === 0) return 100;
  return Math.round((finishedTasks.value / totalTasks.value) * 100);
});

const addTask = () => {
  if (newTaskText.value.trim()) {
    todoStore.addTask(newTaskText.value);
    newTaskText.value = '';
  }
};

const toggleTask = (taskId) => {
  todoStore.toggleTask(taskId);
};

const deleteTask = (taskId) => {
  todoStore.deleteTask(taskId);
};

onMounted(async () => {
  await todoStore.fetchTasks();
});
</script>

<style scoped>
.tasks-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.new-task-input {
  font-size: 0.8em;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.tasks-list {
  margin-top: 20px;
}

.completion-rate {
  margin-bottom: 10px;
  font-size: 1em;
  font-weight: bold;
}
</style>
