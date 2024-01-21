## URL aplikacije na cloud-u (render): https://web2-spa-dz.onrender.com

### NOTE: U aplikaciji je koristen Composition API nacin pisanja komponenti. Aplikacija se pokrece s 'npm run dev' (prije toga 'npm i')

1. interpolation/one-way binding - Da, src/components/TaskItem.vue, :4
2. two-way binding - Da, src/views/TasksView.vue :6-11, :36, :45-48, varijabla newTaskText je dvosmjerno povezana s inputom na liniji 6 (v-model).
3. methods - Da, src/views/TasksView.vue :45-58, funkcije 'addTask', 'toggleTask' i 'deleteTask' su methods
4. computed properties - Da, src/views/TasksView.vue :38-40, 'totalTasks', 'finishedTasks' i 'completionRate' su computed i prikaz completionRate je na liniji :4
5. barem jedan scoped style - Da, src/components/TaskItem.vue :31-72, style za TaskItem komponentu je scoped
6. koristiti barem jedan lifecycle hook - Da, src/views/TasksView.vue :60-62, koristen je 'onMounted' lifecycle hook za dohvat podataka nakon sto se komponenta ucita
7. routing (više stranica) - Da, src/router/index.js :7-36, ovdje se vidi routing za vise stranica ('home', 'about', 'tasks', 'stats')
    - aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) - Da, src/router/index.js :6 i uz to na renderu podesen redirect/rewrite rule (source: '/*', destination: '/index.html', action: 'rewrite')
    - dinamičko usmjeravanje s 404 stranicom ("catch all") - Da, src/router/index.js :31-35, koristen catchAll za usmjeravanje na NotFound view jer trazena ruta ne postoji
8. (barem) dvije komponente - Da, src/components/TaskItem.vue, src/views/TasksView.vue
    - komponenta bez stanja, koristiti properties - Da, src/components/TaskItem.vue :12-16, komponenta prima samo props, nema stanje
    - komponenta sa stanjem - Da, src/views/TasksView.vue :34-36, komponenta koristi pinia store i newTaskText kao trenutno stanje
9. barem jedna komponenta mora emitirati barem jedan event - Da, src/components/TaskItem.vue :3, :5, :18-25, komponenta emitira dva eventa, jedan je delete (brisanje task-a), a drugi je toggle (izmjena rjesenosti task-a)
10. store (Pinia) - Da, src/stores/todo.js, :6, u ovoj se datoteci definira store koji se onda koristi u ostalim komponentama (src/views/TasksView.vue :34, :35)
11. asinkroni dohvat podataka s backenda, možete:
    - koristiti Firebase - Da, src/firebase.js, ovdje je setup za koristenje firestore-a, a u src/stores/todo.js se taj firestore koristi (tocnije na linijama :7, :18, :24, :35, :40) mozemo i vidjeti da se poziva asinkrono i await-a
    - ostvariti asinkrono (lazy, po potrebi) učitavanje nekog dijela aplikacije (stranice ili komponente) - Da, src/router/index.js :24 TasksView komponenta se ucitava po potrebi



## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
