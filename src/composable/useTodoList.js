import { reactive } from "@vue/composition-api";
function useTodoList() {
  let state = reactive({
    newTodo: "",
    todos: [
      {
        id: 1,
        title: "Buy groceries for next week",
        completed: false,
      },
      {
        id: 2,
        title: "Pay credit card bill ",
        completed: false,
      },
    ],
  });

  function addToDo(e) {
    console.log("state.newTodo", state, state.newTodo);
    e.preventDefault();
    state.todos.push({
      id: state.todos.length + 1,
      title: state.newTodo,
      completed: false,
    });
    state.newTodo = "";
  }

  function toggleCompleted(item) {
    item.completed = !item.completed;
  }
  function removeItem(item) {
    state.todos = state.todos.filter((newItem) => newItem.id !== item.id);
  }
  return {
    state,
    addToDo,
    toggleCompleted,
    removeItem,
  };
}

export default useTodoList