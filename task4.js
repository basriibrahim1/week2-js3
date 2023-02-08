
import fetch from "node-fetch"

// const fetchApi = fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(show => {
//     show.forEach(getName => {
//         console.log(getName.name)
//     })
// })
// .catch((err) => console.log(`${err} data not found`))


const fetchApi = async () => {
    try {
        const getApi = await fetch('https://jsonplaceholder.typicode.com/users')
        const getData = await getApi.json()
        const getName = getData.map((names) => names.name)
        console.log(getName)
        console.log(`data has been found`)
    } catch (error) {
        console.log(`${error} no data has been found`)
    } 
}

fetchApi()