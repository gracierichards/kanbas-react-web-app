export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
    todo: { id: string; title: string };
    setTodo: (todo: { id: string; title: string }) => void;
    addTodo: (todo: { id: string; title: string }) => void;
    updateTodo: (todo: { id: string; title: string }) => void;
  }) {
    return (
        <li className="list-group-item">
        <button onClick={() => addTodo(todo)} className="btn btn-success me-1 float-end"
                id="wd-add-todo-click">Add</button>
        <button onClick={() => updateTodo(todo)} className="btn btn-warning me-1 float-end"
                id="wd-update-todo-click">
            Update </button>
        <input defaultValue={todo.title} className="float-end form-control" style={{width: "325px"}}
            onChange={(e) =>
            setTodo({ ...todo,
                title: e.target.value })
            }
        />
        </li>
  );}
  