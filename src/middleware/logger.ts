import { Middleware } from 'redux'
import {RootState}  from '../store'

const actionLogger:Middleware<{}, RootState> =state => next => action=> {

    // simply logs the action type before dispatching
    console.log(action.type)
    return next(action)

};
export default actionLogger;
