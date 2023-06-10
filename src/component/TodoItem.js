import "./TodoItem.css"

const TodoItem = ({id, title, isDone, createdAt, updateItem, deleteItem}) => {
    const changeCheckBox = () => {
        updateItem(id)
    }

    const pushDeletion = () => {
        deleteItem(id)
    }

    return (
        <div className={"TodoItem"}>
            <div className={"CheckboxColumn"}>
                <input type={"checkbox"}
                       onChange={changeCheckBox}
                       checked={isDone}/>
            </div>
            {isDone ?
                <div className={"TitleColumn"}>
                    <del>{title}</del>
                </div>
                :
                <div className={"TitleColumn"}>{title}</div>
            }
            <div className={"DateColumn"}>{new Date(createdAt).toLocaleDateString()}</div>
            <div className={"ButtonColumn"}>
                <button onClick={pushDeletion}>삭제</button>
            </div>
        </div>
    )
}

export default TodoItem