import {createStore} from "redux";

const initialState = {
    'todolists': [
        {'id':0, 'title': 'every day', tasks:[]},
        {'id':1, 'title': 'tomorrow', tasks:[]},
        {'id':2, 'title': 'hello', tasks:[]},
        {'id':3, 'title': 'hello', tasks:[]},
    ]
}

const reducer = (state =initialState, action) =>{

    switch (action.type){
        case 'ADD-TODOLIST':
            return {
                ...state,
                todolists: [...state.todolists, action.newTodoList]
            }
        default:
            return state
    }
    console.log('reducer: ', action);
    return state
}

const store = createStore(reducer);

export default store