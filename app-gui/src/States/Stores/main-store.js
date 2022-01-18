import {applyMiddleware,createStore} from 'redux'


import promise from 'redux-promise-middleware'
import reducer from '../Reducers'



const middlewareList = [promise]
const middleware=applyMiddleware(...middlewareList)


const store = createStore(reducer,middleware)

export default store