import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext(null);
const TodoDispatchContext = createContext(null);

// Custom Hooks
export function useTodo() {
  return useContext(TodoContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

// Context Provider
export function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <TodoContext value={todos}>
      <TodoDispatchContext value={dispatch}>{children}</TodoDispatchContext>
    </TodoContext>
  );
}

// Reducer function
function todosReducer(todos, action) {
  switch (action.type) {
    case "added": {
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }

    case "changed": {
      return todos.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }

    case "deleted": {
      return todos.filter((t) => t.id !== action.id);
    }

    case "cleared": {
      return [];
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
