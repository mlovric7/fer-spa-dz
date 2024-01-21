<template>
  <div class="todo-item">
    <input type="checkbox" :checked="completed" @change="emitToggle" />
    <span :class="{ completed: completed }">{{ text }}</span>
    <button @click="emitDelete">X</button>
  </div>
</template>

<script setup>
const props = defineProps({
  id: String,
  text: String,
  completed: Boolean
});

const emits = defineEmits(['toggle', 'delete']);
const emitToggle = () => {
  emits('toggle', props.id);
};

const emitDelete = () => {
  if(confirm('Jeste li sigurni da zelite izbirsati ovaj zadatak?')) {
    emits('delete', props.id)
  }
}

</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #aaa;
}

.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #f9f9f9;
  transition: background-color 0.3s;
}

.todo-item:hover {
  background-color: #f0f0f0;
}

input[type="checkbox"] {
  margin-right: 20px;
  width: 1.5em;
  height: 1.5em;
}


button {
  margin-left: auto;
  padding: 2px 6px;
  border: none;
  border-radius: 3px;
  font-size: 0.6em;
  background-color: #ff6b6b;
  color: white;
  cursor: pointer;
}
button:hover {
  background-color: #ff5252;
}
</style>
