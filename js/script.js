const {createApp} = Vue;

createApp ({
  data(){
    return {
      todoList : [
        {
          text: 'Andare in spiaggia',
          done: true
        },
        {
          text: 'Fare la spesa',
          done: false
        },
        {
          text: 'Chiamare la nonna',
          done: false
        }
      ],
      newTask : {
        newTask: '',
      }
    }
  },
  methods : {
    addTask(){
      this.todoList.unshift(this.newTask)
    },
    eliminaTask(indice){
      this.todoList.splice(indice,1)
    }
  }
}).mount('#app')