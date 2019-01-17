import React, { Component } from 'react';
import Modal from 'react-modal';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import './tasks-page.css'

const TaskItem = SortableElement(({value}) => {
    return (
        <div className="task-item">{value}</div>
    )
})

const TaskList = SortableContainer(({items}) => {
    return (
        <ul className="task-list">
            {items.map((value, index) => (
                <TaskItem key={`item-${index}`} index={index} value={value} />
            ))}
        </ul>
    );
});

class TasksPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addTaskModalIsOpen: false,
            tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4']
        };

        this.bound = {
            openModal: this.openModal.bind(this),
            closeModal: this.closeModal.bind(this),
            onSortEnd: this.onSortEnd.bind(this)
        }
    }

    onSortEnd({ oldIndex, newIndex }) {
        this.setState({
            tasks: arrayMove(this.state.tasks, oldIndex, newIndex)
        })
    }

    openModal() {
        this.setState({ addTaskModalIsOpen: true });
    }
    
    closeModal() {
        this.setState({ addTaskModalIsOpen: false });
    }

    render() {
        const { tasks } = this.state
        const { onSortEnd } = this.bound

        return(
            <div className="container">
                <h1 className="task-title">Tasks</h1>
                <button className="btn btn-default task-add">Add <i className="fa fa-plus task-add-icon"/></button>
                <TaskList
                    items={tasks}
                    onSortEnd={onSortEnd}
                />
            </div>
        );
    }
}

export default TasksPage;