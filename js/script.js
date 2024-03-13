const {createApp} = Vue;

createApp ({
  data(){
    return {
      todoList : [
        {
          text: 'Andare in spiaggia',
          done: false
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
      newTask: ''
    }
  },
  methods : {
    addTask(){

    }
  }
}).mount('#app')