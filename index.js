const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

    // end-point "/bola" dengan method POST
app.post("/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let tinggi = Number(req.body.tinggi) // mengamil nilai tinggi dari body 
    let jari_jari = Number(req.body.jari_jari) // mengamil nilai tinggi dari body 

    let luas_permukaan = 2 * 3.14 * jari_jari *( jari_jari + tinggi )
    let volume = 3.14 * jari_jari * jari_jari * tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        jari_jari: jari_jari,
        luas_permukaan: luas_permukaan,
        volume: volume
    }

    // memberikan response dengan format JSON yang berisi objek di atas
    res.json(response)
})


// end-point "/balok" dengan method POST
app.post("/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let tinggi = Number(req.body.tinggi) // mengamil nilai tinggi dari body 
    let jari_jari = Number(req.body.jari_jari) // mengamil nilai tinggi dari body 

    let luas_permukaan = 2 * 3.14 * jari_jari *( jari_jari + tinggi )
    let volume = 3.14 * jari_jari * jari_jari * tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        jari_jari: jari_jari,
        luas_permukaan: luas_permukaan,
        volume: volume
    }




// menjalankan server pada port 8000
app.listen(8000, () => {
    console.log("Server run on port 8000");
})

