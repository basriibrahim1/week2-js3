/* Buatlah 2 program bebas dengan menggunakan promise seperti soal nomor 1 */


const receiveData = () => {
    return new Promise((res,err) => {
        setTimeout(()=>{
            let getData = ['budi','anto','rusman','ibot']
            let mapData = getData.includes('budi')

            if(mapData){
                res('data found successfully')
            } else{
                err(Error('data is not found'))
            }
        },200)
    })
}

const receiveDataAsync = async() => {
    try {
       let getDataAsync = await receiveData()
       return getDataAsync
    } catch (error) {
        return error
    }
}

receiveDataAsync()
.then((display) => {console.log(display)})
.catch((err) => {console.log(`${err} data is not found`)})




const random = (x) => {
    return new Promise((res, reject) => {
        setTimeout(() => {
            const result = Math.floor(Math.random() * x);
            
            if(result){
                res(`${result} data diterima`)
            } else{
                reject(`Error: data tidak diterima`)
            }
        }, 1000);
    });
};

const randomAsync = async (x) => {
    try {
        const getRandomAsync = await random(x);
        return getRandomAsync;
    } catch (error) {
        return error;
    }
};

randomAsync(2000)
.then((success) => { console.log(success) })
.catch((err) => console.log(err));
