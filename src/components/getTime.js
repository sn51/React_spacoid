export function getCurrentTime(separator=':'){

    let newTime = new Date()
    let hour = newTime.getHours();
    let min = newTime.getMinutes();
    let sec = newTime.getSeconds();
    
    return `${hour}${separator}${min}${separator}${sec}`
    }