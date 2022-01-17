let vm = new Vue({
  el: '#app',
  data: {
    title: '',
    content: '',
    color: '#ffffff',
    colorInput: '#ffffff',
    bgColor: '#000000',
    bgColorInput: '#000000',
    fontSize: '',
    todo: [],
    progress: [],
    done: [],
    buttonDisabled: true,
  },
  methods: {
    addTask() {
      this.todo.push({
        title: this.title,
        content: this.content,
        color: this.color,
        bgColor: this.bgColor,
        fontSize: this.fontSize + 'px',
      });
      this.title = this.content = '';
    },
    swapTodo(index, name, direction) {
      if (name === 'todo' && direction === 'right') {
        this.progress.push(this.todo[index]);
        this.todo.splice(index, 1);
      }
      if (name === 'progress' && direction === 'left') {
        this.todo.push(this.progress[index]);
        this.progress.splice(index, 1);
      }
      if (name === 'progress' && direction === 'right') {
        this.done.push(this.progress[index]);
        this.progress.splice(index, 1);
      }
      if (name === 'done' && direction === 'left') {
        this.progress.push(this.done[index]);
        this.done.splice(index, 1);
      }
    },
    checkColor(str) {
      str === 'text'
        ? (this.color = this.colorInput)
        : (this.bgColor = this.bgColorInput);
    },
    deleteTask(str, index) {
      str === 'todo'
        ? this.todo.splice(index, 1)
        : str === 'progress'
        ? this.progress.splice(index, 1)
        : this.done.splice(index, 1);
    },
  },
  computed: {
    isEmpty() {
      return this.title && this.content;
    },
  },
});
