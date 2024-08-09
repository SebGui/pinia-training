/* Task store */
import { defineStore } from 'pinia'

// defineStore('storeName', states)// states is an object : {}
export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "buy some milk", isFav: false},
            {id: 2, title: "play Gloomhaven", isFav: true}
        ],
        name : 'toto'
    }),
    getters: {
        favs() {
            return this.tasks.filter((item) => item.isFav)
        },
        favCount() {
            return this.tasks.reduce((p, curr) => {
                return curr.isFav ? p + 1 : p
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    },
    actions : {
        deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return id !== t.id
            })
        },
        addTask(task) {
            this.tasks.push(task);
        },
        toggleFav(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        }
    }
})
