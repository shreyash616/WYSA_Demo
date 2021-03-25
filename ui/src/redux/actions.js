export const GET_USER_DATA = 'GET_USER_DATA'
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS'
export const GET_USER_DATA_FAILURE = 'GET_USER_DATA_FAILURE'
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA'
export const TRIGGER_SERVICE_CALL = 'TRIGGER_SERVICE_CALL'
export const STOP_SERVICE_CALL = 'STOP_SERVICE_CALL'
export const SAVE_USERNAME = 'SAVE_USERNAME'
export const SAVE_USERNAME_SUCCESS = 'SAVE_USERNAME_SUCCESS'
export const SAVE_USERNAME_FAILURE = 'SAVE_USERNAME_FAILURE'
export const CLEAR_USERNAME_DATA = 'CLEAR_USERNAME_DATA'
export const SAVE_STEP = 'SAVE_STEP'
export const CLEAR_STEP = 'CLEAR_STEP'
export const SAVE_STRUGGLE_PERIOD = 'SAVE_STRUGGLE_PERIOD'
export const SAVE_STRUGGLE_PERIOD_SUCCESS = 'SAVE_STRUGGLE_PERIOD_SUCCESS'
export const SAVE_STRUGGLE_PERIOD_FAILURE = 'SAVE_STRUGGLE_PERIOD_FAILURE'
export const CLEAR_STRUGGLE_PERIOD = 'CLEAR_STRUGGLE_PERIOD'
export const SAVE_TIME = 'SAVE_TIME'
export const SAVE_TIME_SUCCESS = 'SAVE_TIME_SUCCESS'
export const SAVE_TIME_FAILURE = 'SAVE_TIME_FAILURE'
export const CLEAR_TIME = 'CLEAR_TIME'

export const showApiLoader = () => {
    return {
        type: TRIGGER_SERVICE_CALL
    }
}

export const hideApiLoader = () => {
    return {
        type: STOP_SERVICE_CALL
    }
}

const getUserData = (payload) => {
    return {
        type: GET_USER_DATA,
        payload
    }
}

const getUserDataSuccess = (successData) => {
    return {
        type: GET_USER_DATA_SUCCESS,
        successData
    }
}

const getUserDataFailure = (failureData) => {
    return {
        type: GET_USER_DATA_FAILURE,
        failureData
    }
}

const clearUserData = () => {
    return {
        type: CLEAR_USER_DATA
    }
}

const saveUsername = (payload) => {
    return {
        type: SAVE_USERNAME,
        payload
    }
}

const saveUsernameSuccess = (successData) => {
    return {
        type: SAVE_USERNAME_SUCCESS,
        successData
    }
}

const saveUsernameFailure = (failureData) => {
    return {
        type: SAVE_USERNAME_FAILURE,
        failureData
    }
}

const clearUsernameData = () => {
    return {
        type: CLEAR_USERNAME_DATA
    }
}

const saveStep = (step, userId) => {
    return  {
        type: SAVE_STEP,
        step,
        userId
    }
}

const clearStep = () => {
    return {
        type: CLEAR_STEP
    }
}

const saveStrugglePeriod = (payload) => {
    return {
        type: SAVE_STRUGGLE_PERIOD,
        payload
    }
}

const saveStrugglePeriodSuccess = (successData) => {
    return {
        type: SAVE_STRUGGLE_PERIOD_SUCCESS,
        successData
    }
}

const saveStrugglePeriodFailure = (failureData) => {
    return {
        type: SAVE_STRUGGLE_PERIOD_FAILURE,
        failureData
    }
}

const clearStrugglePeriod = () => {
    return {
        type: CLEAR_STRUGGLE_PERIOD
    }
}

const saveTime = (payload) => {
    return {
        type: SAVE_TIME,
        payload
    }
}

const saveTimeSuccess = (successData) => {
    return {
        type: SAVE_TIME_SUCCESS,
        successData
    }
}

const saveTimeFailure = (failureData) => {
    return {
        type: SAVE_TIME_FAILURE,
        failureData
    }
}

const clearTime = () => {
    return {
        type: CLEAR_TIME
    }
}

const userDataActions = {
    getUserData,
    getUserDataSuccess,
    getUserDataFailure,
    clearUserData
}

const globalActions = {
    showApiLoader,
    hideApiLoader,
    saveStep,
    clearStep
}

const usernameActions = {
    saveUsername,
    saveUsernameSuccess,
    saveUsernameFailure,
    clearUsernameData
}

const strugglePeriodActions = {
    saveStrugglePeriod,
    saveStrugglePeriodSuccess,
    saveStrugglePeriodFailure,
    clearStrugglePeriod
}

const timeActions = {
    saveTime,
    saveTimeSuccess,
    saveTimeFailure,
    clearTime
}

const actionCreators = Object.assign(
    {},
    globalActions,
    userDataActions,
    usernameActions,
    strugglePeriodActions,
    timeActions
)

export default actionCreators