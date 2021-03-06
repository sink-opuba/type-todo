interface Todo {
    text: string;
    complete: boolean;
}

type toggleTodo = (selectedTodo: Todo) => void;
type addTodo = (todo: Todo) => void;