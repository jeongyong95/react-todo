import TodoItem from "./TodoItem";

const TodoList = () => {
    return (
        <div>
            <h2>todoList</h2>
            <ol>
                <li>
                    <TodoItem></TodoItem>
                </li>
                <li>
                    <TodoItem></TodoItem>
                </li>
            </ol>
        </div>
    )
}

export default TodoList