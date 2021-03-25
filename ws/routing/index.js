const express = require('express')
const router = express.Router()
const wysaService = require('../model/index')

router.post('/saveName',(req,res,next)=>{      
    wysaService.saveName(req.body).then((response)=>{
        setTimeout(()=>{
            res.send({data: response, status: 200})
        }, 5000)
    }).catch((err)=>{        
        next(err)
    })
})

router.post('/saveStrugglePeriod',(req,res,next)=>{      
    wysaService.saveStrugglePeriod(req.body).then((response)=>{
        setTimeout(()=>{
            res.send({data: response, status: 200})
        }, 20)
    }).catch((err)=>{        
        next(err)
    })
})

router.post('/saveSleepWakeTime',(req,res,next)=>{      
    wysaService.saveSleepWakeTime(req.body).then((response)=>{
        setTimeout(()=>{
            res.send({data: response, status: 200})
        }, 20)
    }).catch((err)=>{        
        next(err)
    })
})

router.post('/saveStep',(req,res,next)=>{      
    wysaService.saveStep(req.body).then((response)=>{
        setTimeout(()=>{
            res.send({data: response, status: 200})
        }, 20)
    }).catch((err)=>{        
        next(err)
    })
})

router.post('/getUserData',(req,res,next)=>{      
    wysaService.getUserData(req.body).then((response)=>{
        setTimeout(()=>{
            res.send({data: response, status: 200})
        }, 20)
    }).catch((err)=>{        
        next(err)
    })
})



module.exports = router