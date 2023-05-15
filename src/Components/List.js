import { useSelector } from "react-redux"
import ListItem from "./ListItem"

export default function List() {
    const item = useSelector((state) => { return state })
    return (
        <ul>
            {item.map(item => <ListItem key={item.id} item={item} />)}
        </ul>
    )
}