import "./TodoItem.css"
import {memo, useContext} from "react";
import {TodoDispatchContext} from "../context/Context";

const TodoItem = ({id, title, isDone, createdAt}) => {
    const {updateItem, deleteItem} = useContext(TodoDispatchContext)

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

export default memo(TodoItem)