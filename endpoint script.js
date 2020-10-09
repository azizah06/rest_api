// end-point "/balok" dengan method POST
app.post("/balok", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) // mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) // mengamil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) // mengamil nilai tinggi dari body
    

    let luas_permukaan = 2*(panjang*lebar)+(panjang*tinggi)+(tinggi*lebar)
    let volume = panjang*lebar*tinggi

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        luas_permukaan: luas_permukaan,
        volume: volume
    })

    ---------------------------------------------------------------------
    // end-point "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let rusuk = Number(req.body.rusuk) // mengambil nilai panjang dari body
    

    let luas_permukaan = 6 * rusuk
    let volume = rusuk * rusuk * rusuk

    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        rusuk: rusuk,
        luas_permukaan: luas_permukaan,
        volume: volume
    })

    ---------------------------------------------------------------------------
