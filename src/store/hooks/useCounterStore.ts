import {defineStore} from "pinia";

const useCounterStore = defineStore({
    id: 'count',
    state: () => {
        return {
            number: 0
        }
    },
    getters: {
        doubleNumber(state) {
            return state.number * 2
        },
        addAnyNumber(state) {
            return (n: number) => state.number + n
        }
    },
    actions: {
        addMany() {
            let random = Math.round(Math.random() * 1000)
            this.$state.number += random
        },
        addAsyncMany() {
            let random = Math.round(Math.random() * 1000)
            setTimeout(() => {
                this.$state.number += random
            }, 1000)
        },
        async addAsyncWithAwait() {
            try {
                let n = await anyAwait()
                this.$state.number += n
            } catch (e) {
                console.log('error', e)
            }

        }
    }
})
const anyAwait = () => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            let a = Math.random()
            if (a < 0.5) {
                resolve(30)
            } else {
                reject('error!!!!!!!!!!!!!!!!!')
            }
        }, 1000)
    })
}

export const initCounter = () => {
//localstorage
    const instance = useCounterStore()
//listen hooks
    instance.$subscribe((mutation, state) => {
        //save
        localStorage.setItem(instance.$id, JSON.stringify(state))
    })
//recover
    let re = localStorage.getItem(instance.$id)
    if (re) {
        instance.$patch({
            ...JSON.parse(re)
        })
    }
}


// const useCounterStore = defineStore('count', {
//     state: () => {
//         return {
//             number: 0
//         }
//     }
// })


export default useCounterStore
