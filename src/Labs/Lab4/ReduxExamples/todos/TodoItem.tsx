export default function TodoItem({ todo, deleteTodo, setTodo }: {
    todo: { id: string; title: string };
    deleteTodo: (id: string) => void;
    setTodo: (todo: { id: string; title: string }) => void;
  }) {
    return (
    <li key={todo.id} className="list-group-item">
    <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger me-1 float-end"
            id="wd-delete-todo-click">
        Delete </button>
    <button onClick={() => setTodo(todo)} className="btn btn-primary me-1 float-end"
            id="wd-set-todo-click">
        Edit </button>
    {todo.title}
    </li>
    );}