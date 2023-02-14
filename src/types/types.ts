export interface ToDosStructure {
  todos: ToDoStructure[];
}

interface ToDoStructure {
  id: number;
  name: string;
  isDone: boolean;
}

export default ToDosStructure;
