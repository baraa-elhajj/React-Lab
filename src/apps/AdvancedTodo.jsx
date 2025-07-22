import Header from "../components/ui/custom/Header";
import { Text, CheckboxCard, VStack } from "@chakra-ui/react";
import AddTodoForm from "../components/ui/custom/Todo/AddTodoForm";
import TodoList from "../components/ui/custom/Todo/TodoList";
import { TodoProvider } from "../components/context/TodoContext";

export default function AdvancedTodo() {
  return (
    <TodoProvider>
      <Header
        description="An advanced version of Todo app using a reducer/context
        combination. Worked with useReducer(), useContext(), and custom hooks 
        to scale up the app, and avoid props drilling. Also moved all the wiring
        into one context provider file."
      />

      <Text textStyle="sm" fontWeight="bold">
        What's on your mind?
      </Text>
      <AddTodoForm />
      <br />
      <TodoList />
    </TodoProvider>
  );
}
