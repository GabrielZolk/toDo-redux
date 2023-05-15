import { useState } from 'react';
import { addItem } from '../actions/listAction'
import { useDispatch } from 'react-redux';

export default function TodoForm(props) {
    const [text, setText] = useState('');
    const dispatch = useDispatch()

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItemEvent(event) {
        event.preventDefault();
        if (text) {
            // setItem([...item, text]);
            dispatch(addItem(text))
            setText('');
            props.hideOnClick(false)
        }
    }

    return (
        <form>
            <input onChange={handleChange} type='text' value={text} />
            <button onClick={addItemEvent} >Add Task</button>
        </form>
    )
}
