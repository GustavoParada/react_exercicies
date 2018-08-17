import React from 'react'

import ReactDOM from 'react-dom';
import Field from './fild'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import fieldReducer from './fieldReducer'


const reducers = combineReducers({
    field: fieldReducer
})

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='123'></Field>
    </Provider>
    , document.getElementById('app'))

