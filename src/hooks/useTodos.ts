import { useQuery } from "@tanstack/react-query";
import axios from "axios";
interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const useTodos = () => {
  const fetchTodos = async (): Promise<Todo[]> => {
    const { data } = await axios.get<Todo[]>(
      "https://jsonplaceholder.typicode.com/todos"
    );
    return data;
  };

  const {
    data: todos,
    error,
    isLoading,
  } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 10 * 1000,
  });
  return { todos, error, isLoading };
};

export default useTodos;
