import axios from 'axios'
import {takeEvery, put, select} from 'redux-saga/effects'

import {all} from 'redux-saga/effects'
import { getKeyValue } from '../utils'

import * as ACTION_TYPES from './actions'

import actions from './actions'

function * watchUserData (action) {  
    yield put(actions.showApiLoader())     
    const userServiceData = yield axios.post('http://localhost:3001/getUserData', action.payload).then((successData) => {                    
        return successData.data
    }).catch((failureData) => {            
        return failureData
    })
    if (userServiceData instanceof Error) {                        
        yield put (actions.getUserDataFailure(userServiceData))
    } else {
        const step = getKeyValue(['data', 'data', 'step'], userServiceData)
        const userId = getKeyValue(['data', 'data', 'userId'], userServiceData)
        yield put (actions.saveStep(step, userId))
        yield put (actions.getUserDataSuccess(userServiceData))
    }
    yield put(actions.hideApiLoader())
}

function * userDataSaga () {
    yield takeEvery(ACTION_TYPES.GET_USER_DATA, watchUserData)
}

function * watchSaveUsername (action) {  
    yield put(actions.showApiLoader())     
    const userServiceData = yield axios.post('http://localhost:3001/saveName', action.payload).then((successData) => {                    
        return successData.data
    }).catch((failureData) => {            
        return failureData
    })
    if (userServiceData instanceof Error) {
        yield put (actions.saveUsernameFailure(userServiceData))
    } else {
        const step = getKeyValue(['data', 'data', 'step'], userServiceData)
        const userId = getKeyValue(['data', 'data', 'userId'], userServiceData)
        yield put (actions.saveStep(step, userId))
        yield put (actions.saveUsernameSuccess(userServiceData))
    }
    yield put(actions.hideApiLoader())
}

function * saveUsernameSaga () {
    yield takeEvery(ACTION_TYPES.SAVE_USERNAME, watchSaveUsername)
}

function * watchSaveStrugglePeriod (action) {  
    yield put(actions.showApiLoader())     
    const userServiceData = yield axios.post('http://localhost:3001/saveStrugglePeriod', action.payload).then((successData) => {                    
        return successData.data
    }).catch((failureData) => {            
        return failureData
    })
    if (userServiceData instanceof Error) {
        yield put (actions.saveStrugglePeriodFailure(userServiceData))
    } else {
        const step = getKeyValue(['data', 'data', 'step'], userServiceData)
        const userId = getKeyValue(['data', 'data', 'userId'], userServiceData)
        yield put (actions.saveStep(step, userId))
        yield put (actions.saveStrugglePeriodSuccess(userServiceData))
    }
    yield put(actions.hideApiLoader())
}

function * saveStrugglePeriod () {
    yield takeEvery(ACTION_TYPES.SAVE_STRUGGLE_PERIOD, watchSaveStrugglePeriod)
}

// saga for saving both bedTime and wakeTime
function * watchSaveTime (action) {  
    yield put(actions.showApiLoader())     
    const userServiceData = yield axios.post('http://localhost:3001/saveSleepWakeTime', action.payload).then((successData) => {                    
        return successData.data
    }).catch((failureData) => {            
        return failureData
    })
    if (userServiceData instanceof Error) {
        yield put (actions.saveTimeFailure(userServiceData))
    } else {
        const step = getKeyValue(['data', 'data', 'step'], userServiceData)
        const userId = getKeyValue(['data', 'data', 'userId'], userServiceData)
        yield put (actions.saveStep(step, userId))
        yield put (actions.saveTimeSuccess(userServiceData))
    }
    yield put(actions.hideApiLoader())
}

function * saveTime () {
    yield takeEvery(ACTION_TYPES.SAVE_TIME, watchSaveTime)
}

function * watchGoToStep (action) {    
    yield put(actions.showApiLoader())     
    const userServiceData = yield axios.post('http://localhost:3001/saveStep', action.payload).then((successData) => {                    
        return successData.data
    }).catch((failureData) => {            
        return failureData
    })
    if (userServiceData instanceof Error) {
        const stepData = state => state.globalData
        const {step, userId} = yield select(stepData)
        yield put (actions.saveStep(step, userId))
    } else {
        const step = getKeyValue(['data', 'data', 'step'], userServiceData)
        const userId = getKeyValue(['data', 'data', 'userId'], userServiceData)
        yield put (actions.saveStep(step, userId))        
    }
    yield put(actions.hideApiLoader())
}

function * goToStep () {
    yield takeEvery(ACTION_TYPES.GO_TO_STEP, watchGoToStep)
}

export default function * rootSaga () {
    yield all([
        userDataSaga(),
        saveUsernameSaga(),
        saveStrugglePeriod(),
        saveTime(),
        goToStep()
    ])
}