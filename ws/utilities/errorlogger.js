//custom errorlogger
var errorLogger = (err,req,res,next) => {
    setTimeout(()=>{
        console.log(err.message)
        res.status(err.status).send(err.message)
    },2000)
}

module.exports = errorLogger
