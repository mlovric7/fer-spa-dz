import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import db from '@/firebase.js'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'

export const useTodoStore = defineStore('todo', () => {
  const tasksCollection = collection(db, 'tasks')
  const _tasks = ref([]);

  const tasks = computed(() => _tasks.value)

  const unfinishedTodosCount = computed(() => {
    return _tasks.value.filter(todo => !todo.completed).length;
  });

  async function fetchTasks() {
    if(_tasks.value.length === 0){
      const querySnapshot = await getDocs(tasksCollection);
      _tasks.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
  }

  async function addTask(text) {
    const docRef = await addDoc(tasksCollection, { text, completed: false });
    _tasks.value.push({ id: docRef.id, text, completed: false });
  }

  async function toggleTask(taskId) {
    const task = tasks.value.find(t => t.id === taskId);
    if (!task) return;

    task.completed = !task.completed;

    const taskDoc = doc(db, 'tasks', task.id);
    await updateDoc(taskDoc, { completed: task.completed });
  }

  async function deleteTask(taskId) {
    _tasks.value = _tasks.value.filter(task => task.id !== taskId);
    await deleteDoc(doc(db, 'tasks', taskId));
  }


  return {
    tasks,
    addTask,
    toggleTask,
    fetchTasks,
    deleteTask,
    unfinishedTodosCount
  };
});
