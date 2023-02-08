const cekHariKerja = (day) =>  {
    return new Promise((res, err)=>{
     setTimeout(()=>{
        const dataDay = ['senin', 'selasa','rabu','kamis','jumat']
        let cek = dataDay.find((item)=>{
            return item === day
        })

        if(cek){
           res(cek)
        }else{
           err(Error)
        }
    },200)
    })
}


// Menggunakan try catch
// disini menggunakan async await yang dimana ketika success akan muncul di try dan jika error akan muncul di catch
// bagaimana cara async await bekerja? Async sendiri merupakan sebuah fungsi yang mengembalikan sebuah Promise. Await sendiri merupakan fungsi yang hanya berjalan di dalam Async. Await bertujuan untuk menunda jalannya Async hingga proses dari Await tersebut berhasil dieksekusi.
const cekHariKerjaAsync = async (day) => {
    try {
        const hasil = await cekHariKerja(day)
        console.log(`${hasil} adalah hari kerja`)
        return hasil
    } catch (error) {
        console.log(`${error} : error`)
    }
}

// disini menggunakan then-catch yang dimana ketika success akan muncul di then dan jika error akan muncul di catch
// bagaimana cara then-catch bekerja? Saat Promise sukses menyelesaikan tugasnya, metode .then() akan memanggil callback function yang diterima sebagai argumen lalu sebaliknya saat Promise gagal menyelesaikan tugasnya, metode .catch() akan memanggil callback function yang diterima sebagai argumen.

cekHariKerjaAsync('selasa')
.then((res) => {console.log(`${res} adalah hari kerja`)})
.catch((err) => {console.log(`ERROR : ${err}`)})