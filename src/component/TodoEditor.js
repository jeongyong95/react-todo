import "./TodoEditor.css"
import {useRef, useState} from "react";

const TodoEditor = ({createItem}) => {
    const [title, setTitle] = useState("")
    const inputRef = useRef()

    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            submitItem()
        }
    }

    const changeTitle = (event) => {
        setTitle(event.target.value)
    }

    const submitItem = () => {
        if (!title) {
            inputRef.current.focus()
            return;
        }
        createItem(title)
        setTitle('')
    }

    return (
        <div className={"TodoEditor"}>
            <h4>새로운 할 일 작성하기 ✏️</h4>
            <div className={"editor_wrapper"}>
                <input ref={inputRef}
                       type={"text"}
                       value={title}
                       onKeyDown={onKeyDown}
                       onChange={changeTitle}
                       placeholder={"새로운 할 일..."}/>
                <button onClick={submitItem}>추가</button>
            </div>
        </div>
    )
}

export default TodoEditor