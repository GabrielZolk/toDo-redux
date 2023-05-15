import doneImage from '../assets/done.png';
import undoneImage from '../assets/undone.png';
import trashImage from '../assets/trash.png';
import Card from './Card';
import { useDispatch } from 'react-redux';
import { deleteItem, changeDone } from '../actions/listAction'

function DoneImg(props) {
    if (props.done) {
        return <img alt="done" src={doneImage}></img>
    } else {
        return <img alt="undone" src={undoneImage}></img>
    }
}

export default function ListItem(props) {
    const dispatch = useDispatch()

    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={() => { dispatch(changeDone(props.item.id)) }}><DoneImg done={props.item.done} /></button>
                    <button onClick={() => { dispatch(deleteItem(props.item.id)) }}><img alt="trash" src={trashImage}></img></button>
                </div>
            </Card>
        </li>
    )
}
