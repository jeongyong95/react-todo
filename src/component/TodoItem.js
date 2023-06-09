import "./TodoItem.css"

const TodoItem = () => {
    return (
        <div className={"TodoItem"}>
            <div className={"CheckboxColumn"}>
                <input type={"checkbox"}/>
            </div>

            <div className={"TitleColumn"}>할 일</div>
            <div className={"DateColumn"}>{new Date().toLocaleDateString()}</div>
            <div className={"ButtonColumn"}>
                <button>삭제</button>
            </div>
        </div>
    )
}

export default TodoItem