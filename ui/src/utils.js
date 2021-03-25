export const getKeyValue = (keyList, data) => {
    if(data){        
        if(keyList instanceof Array){
            if(keyList.length > 0){
                let output = data
                let stopLoop = -1
                keyList.forEach((key)=>{
                    if(output[key]){
                        output = output[key]
                    } else {
                        stopLoop = 1
                        return
                    }                    
                })
                return stopLoop === -1 ? output : null
            } else {
                return data
            }
        } else {
            return data
        }
    } else {
        return null
    }
}