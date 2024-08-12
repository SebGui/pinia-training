/* Task store */
import { defineStore } from 'pinia'

// defineStore('storeName', states)// states is an object : {}
export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
        isLoading : false
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
        async getTasks() {
            this.isLoading = true
            const res = await fetch('http://localhost:3000/tasks')
            const data = await res.json()

            this.tasks = data
            this.isLoading = false
        },
        async deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
                return id !== t.id
            })

            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'DELETE'
            })

            if (res.error) {
                console.log("Error : ", res.error);
            }
        },
        async addTask(task) {
            this.tasks.push(task);

            const res = await fetch('http://localhost:3000/tasks', {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {'Content-Type': 'application/json'}
            })

            if (res.error) {
                console.log("Error : ", res.error);
            }
        },
        async toggleFav(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav

            const res = await fetch('http://localhost:3000/tasks/' + id, {
                method: 'PATCH',
                body: JSON.stringify({isFav : task.isFav}),
                headers: {'Content-Type': 'application/json'}
            })

            if (res.error) {
                console.log("Error : ", res.error);
            }
        }
    }
})
