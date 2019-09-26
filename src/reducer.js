import React from 'react'

export const ADD_TODOLIST = 'TodoList/Reducer/ADD_TODOLIST';
export const DELETE_TODOLIST = 'TodoList/Reducer/DELETE_TODOLIST';

const initialState = {
    'todolists': [
        {'id': 0, 'title': 'every day', tasks: []},
        {'id': 1, 'title': 'tomorrow', tasks: []},
        {'id': 2, 'title': 'hello', tasks: []},
        {'id': 3, 'title': 'hello', tasks: []},
    ]
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        // case ADD_TASK:
        //     return {
        //         ...state,
        //         todolists: [...state.todolists, action.newTodoList]
        //     }
        case DELETE_TODOLIST:
            return {
                ...state,
                todolists: state.todolists.filter(tl => {
                    return tl.id !== action.todolistId
                })
            }

        case ADD_TODOLIST:
            return {
                ...state,
                todolists: [...state.todolists, action.newTodoList]
            }


        default:
            return state
    }
}

export default reducer;


// Action creators
export const addTodoListAC = (newTodoList) => ({type: ADD_TODOLIST, newTodoList});
export const deleteTodolistAC = (todolistId) => ({type: DELETE_TODOLIST, todolistId});

