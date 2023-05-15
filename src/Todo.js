import { useState } from 'react';
import List from './Components/List'
import TodoForm from './Components/TodoForm';
import Modal from './Components/Modal';
import './Todo.css'

import listReducer from './reducers/listReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const SAVED_ITEMS = 'savedItems'

    function persistState(state) {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
    }

    function loadState() {
        const actualState = localStorage.getItem(SAVED_ITEMS);
        if(actualState) {
            return JSON.parse(actualState);
        } else {
            return [];
        }
    }

    const store = createStore(listReducer, loadState());

    store.subscribe(() => {
        persistState(store.getState())
    })

export default function Todo() {
    const [showModal, setShowModal] = useState(false);


    function onHideModal(event) {
        let target = event.target;
        if (target.id === 'modal') {
            setShowModal(false);
        }
    }

    return (
        <div className="container">
            <Provider store={store}>
                <header className='header'>
                    <h1>ToDo List</h1>
                    <button onClick={() => setShowModal(true)} className='addButton'>Add Task</button>
                </header>
                <List />
                <Modal show={showModal} onHideModal={onHideModal}>
                    <TodoForm hideOnClick={setShowModal}/>
                </Modal>
            </Provider>
        </div>
    )
}

