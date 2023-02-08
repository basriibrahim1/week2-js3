const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ["January","February","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","December"]
        if(!error){
            callback(null, month)
        } else {
            callback(new Error("Sorry Data Not Found"), [])
        }
    })
}


getMonth((error, month) => {
    if(error) console.log(error)
    else console.log(month.map(m => m))
})