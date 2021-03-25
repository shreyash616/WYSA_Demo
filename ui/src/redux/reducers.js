import * as ACTION_TYPES from './actions'
import {combineReducers} from 'redux'

const USER_DATA_INITIAL_STATE = {
    data: null,
    error: null,
    status: null
}

const GLOBAL_INITIAL_STATE = {    
    spinnerState: {
        status: false
    },
    step: null,
    userId: null
}

export const GlobalReducer = (state = GLOBAL_INITIAL_STATE, action) => {

    switch (action.type) {
        case ACTION_TYPES.TRIGGER_SERVICE_CALL: {
            const successData = {...state, spinnerState: {
                status: true
            }}
            return successData
        }
        case ACTION_TYPES.STOP_SERVICE_CALL: {
            const failureData = {...state, spinnerState: {
                status: false
            }}
            return failureData
        }
        case ACTION_TYPES.SAVE_STEP: {
            const stepData = {
                ...state,
                step: action.step,
                userId: action.userId
            }
            return stepData
        }
        case ACTION_TYPES.CLEAR_STEP: {
            const clearedStepData = {
                ...state,
                step: null,
                userId: null
            }
            return clearedStepData
        }
        default:
            return state
    }

}

const UserDataReducer = (state = USER_DATA_INITIAL_STATE, action) => {

    switch (action.type) {
        case ACTION_TYPES.GET_USER_DATA_SUCCESS: {               
            const successData = {...state, data: action.successData, status: 'success'}
            return successData
        }
        case ACTION_TYPES.GET_USER_DATA_FAILURE: {
            const failureData = {...state, error: action.failureData, status: 'error'}
            return failureData
        }
        case ACTION_TYPES.CLEAR_USER_DATA: {
            return USER_DATA_INITIAL_STATE
        }
        default:
            return state
    }

}

const saveUsernameReducer = (state = USER_DATA_INITIAL_STATE, action) => {

    switch (action.type) {
        case ACTION_TYPES.SAVE_USERNAME_SUCCESS: {               
            const successData = {...state, data: action.successData, status: 'success'}
            return successData
        }
        case ACTION_TYPES.SAVE_USERNAME_FAILURE: {
            const failureData = {...state, error: action.failureData, status: 'error'}
            return failureData
        }
        case ACTION_TYPES.CLEAR_USERNAME_DATA: {
            return USER_DATA_INITIAL_STATE
        }
        default:
            return state
    }

}

const allReducers = Object.assign(
    {},
    {GlobalReducer},
    {UserDataReducer},
    {saveUsernameReducer}    
)

const appReducer = combineReducers({
    globalData: allReducers.GlobalReducer,
    userData: allReducers.UserDataReducer,
    saveUsernameData: allReducers.saveUsernameReducer        
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer