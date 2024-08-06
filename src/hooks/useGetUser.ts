// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// interface Todo {
//   id: number;
//   title: string;
//   userId: number;
//   completed: boolean;
// }

// const useGetUser = () => {
//   const fetchTodo = () => axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => res.data);

//   const store = useQuery<Todo[], Error>({
//     queryKey: ["todo"],
//     queryFn: fetchTodo,
//   });

//   return store;
// };

// export default useGetUser;
