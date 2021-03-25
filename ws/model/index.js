const connection = require('../utilities/connection')
const e = require('express')
const wysaModel = {}

const insertNameIntoDb = (obj, db) => {
    return db.insertMany([obj]).then((confirmation)=>{
        if(confirmation){                        
            return {
                context: {
                    code: 1001,
                    message: 'Name saved.'
                },
                data: obj
            }
        }
    }).catch((error)=>{
        throw error
    })
}

wysaModel.saveName = (apiData) => {    
    return connection.getUserModel().then((userDb)=>{        
        return userDb.find().then((allUsers)=>{
            if(allUsers.length === 0){
                return insertNameIntoDb({
                    userId: 1,
                    userName: apiData.userName,
                    step: 2
                }, userDb)
            } else if (allUsers.length > 0) {
                return insertNameIntoDb({
                    userId: allUsers[allUsers.length - 1].userId + 1,
                    userName: apiData.userName,
                    step: 2
                }, userDb)
            }
        })
    }).catch((error)=>{        
        throw error
    })
}

wysaModel.saveStrugglePeriod = (apiData) => {
    return connection.getUserModel().then((userDb)=>{   
        return userDb.find({userId: apiData.userId}).then((user)=>{
            if(user.length > 0){
                return userDb.updateOne({
                    userId: apiData.userId
                },
                {
                    $set: {
                        strugglePeriod: apiData.strugglePeriod,
                        step: 3
                    }
                },
                {_id: 0}).then(()=>{        
                    return {
                        context: {
                            code: 1002,
                            message: 'Struggle time saved.'
                        },
                        data: {...apiData, step: 3}
                    }
                }).catch((error)=>{        
                    throw error
                })
            } else {
                let err = new Error('User not found')
                err.status = 404
                throw err
            }
        })
    }).catch((error)=>{        
        throw error
    })
}

const getTimeObj = (apiData) => {
    return apiData.sleepTime ? {sleepTime: apiData.sleepTime, step: 4} : {wakeTime: apiData.wakeTime, step: 5}
}

const getSleepWakeConf = (apiData) => {
    return apiData.sleepTime ? {message: 'Sleep time saved.', code: 1003} : {message: 'Wake time saved.', code: 1004}
}

wysaModel.saveSleepWakeTime = (apiData) => {
    return connection.getUserModel().then((userDb)=>{   
        return userDb.find({userId: apiData.userId}).then((user)=>{
            if(user.length > 0){
                return userDb.updateOne({
                    userId: apiData.userId
                },
                {
                    $set: getTimeObj(apiData)
                },
                {_id: 0}).then(()=>{        
                    return {
                        context: getSleepWakeConf(apiData),
                        data: {...apiData, step: getTimeObj(apiData).step}
                    }
                }).catch((error)=>{        
                    throw error
                })
            } else {
                let err = new Error('User not found')
                err.status = 404
                throw err
            }
        })
    }).catch((error)=>{        
        throw error
    })
}

wysaModel.saveStep = (apiData) => {    
    return connection.getUserModel().then((userDb)=>{        
        return userDb.find({userId: apiData.userId}).then((user)=>{
            if(user.length > 0){
                return userDb.updateOne({
                    userId: apiData.userId
                },
                {
                    $set: {step: apiData.step}
                },
                {_id: 0}).then(()=>{        
                    return userDb.findOne({userId: apiData.userId}).then((user)=>{
                        return {
                            context: {
                                code: 1005,
                                message: 'Step saved.'
                            },
                            data: user
                        }
                    })
                }).catch((error)=>{        
                    throw error
                })
            } else {
                let err = new Error('User not found')
                err.status = 404
                throw err
            }
        })
    }).catch((error)=>{        
        throw error
    })
}

wysaModel.getUserData = (apiData) => { 
    return connection.getUserModel().then((userDb)=>{        
        return userDb.findOne({userId: apiData.userId}).then((user)=>{
            if(user){
                return {
                    context: {
                        code: 1006,
                        message: 'User found'
                    },
                    data: user
                }
            } else {
                let err = new Error('User not found')
                err.status = 404
                throw err
            }
        })
    }).catch((error)=>{        
        throw error
    })
}


                        

module.exports = wysaModel