import React from 'react';
import './App.css';
import TodoListTasks from "./TodoListTasks";
import TodoListFooter from "./TodoListFooter";
import TodoListTitle from "./TodoListTitle";
import AddNewItemForm from "./AddNewItemForm";
import {connect} from "react-redux";
import {deleteTodolistAC} from "./reducer";


class TodoList extends React.Component {

    nextTaskId = 0;

    state = {
        filterValue: "All"
    };

    addTask = (newText) => {
        let newTask = {
            id: this.nextTaskId,
            title: newText,
            isDone: false,
            priority: "low"
        };

        this.nextTaskId++;
    }

    changeFilter = (newFilterValue) => {
        this.setState( {
            filterValue: newFilterValue
        },
            // () => { this.saveState(); }
            );
    }

    changeTask = (taskId, obj) => {

        let newTasks = this.state.tasks.map(t => {
            if (t.id !== taskId) {
                return t;
            }
            else {
                return {...t, ...obj};
            }
        });
    }
    changeStatus = (taskId, isDone) => {
        this.changeTask(taskId, {isDone: isDone});
    }
    changeTitle = (taskId, title) => {
        this.changeTask(taskId, {title: title});
    }

    onDeleteTodoList = ()=>{
        this.props.deleteTodolist(this.props.id);
    };

    render = () => {

        return (

                <div className="todoList">
                    <div className="todoList-header">
                            <TodoListTitle title={this.props.title}/>
                            <AddNewItemForm addItem={this.addTask} />
                    </div>

                    <TodoListTasks changeStatus={this.changeStatus }
                                   changeTitle={this.changeTitle }
                                   tasks={this.props.tasks.filter(t => {
                        if (this.state.filterValue === "All") {
                            return true;
                        }
                        if (this.state.filterValue === "Active") {
                            return t.isDone === false;
                        }
                        if (this.state.filterValue === "Completed") {
                            return t.isDone === true;
                        }
                    })}/>
                    <TodoListFooter changeFilter={this.changeFilter} filterValue={this.state.filterValue} />
                    <button onClick={this.onDeleteTodoList}>Delete</button>
                </div>

        );
    }
}

const mapStateToProps = (state => {
    return {}
});

const mapDispatchToProps = (dispatch)=> {
    return {
        deleteTodolist: (todolistId)=> {
            dispatch(deleteTodolistAC(todolistId))
        }
    }
};





const connectTodoList =  connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default connectTodoList;

