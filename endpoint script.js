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

    -------------------------------------------------------------------------
    // end-point "/bola" dengan method POST
app.post("/bola", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jari_jari = Number(req.body.jari_jari) // mengambil nilai jarijari dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai diameter dari body
 
    let luas_permukaan = 4 * 3.14 * Math.pow(jari_jari,3)
    let volume = 4/3 * 3.14 * Math.pow(jari_jari,3)
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        jari_jari: jari_jari,
        luas_permukaan: luas_permukaan,
        volume: volume
    }
 
    ----------------------------------------------------------------------------
    // end-point "/tabung" dengan method POST
app.post("/tabung", (req,res) => {
    // menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let tinggi = Number(req.body.tinggi) // mengamil nilai tinggi dari body
    let jari_jari = Number(req.body.jari_jari) // mengamil nilai jarijari dari body
    let diameter = Number(req.body.diameter) // mengamil nilai diameter dari body
 
    let luas_permukaan = 3.14 * jari_jari * jari_jari * tinggi
    let volume = 3.14 * jari_jari * jari_jari * tinggi
 
    // membuat objek yang berisi data yang akan dijadikan response
    let response = {
        tinggi: tinggi,
        diameter: diameter,
        jari_jari: jari_jari,
        luas_permukaan: luas_permukaan,
        volume: volume
    }








    app.get("/convert/celcius/:celcius", (req,res) => {
        let celcius = Number(req.params.celcius)
        let result;
     
        let reamur = 4/5 * celcius
        let fahrenheit = (9/5 * celcius) + 32
        let kelvin = 273 + celcius
     
        let response = {
            celcius : celcius,
            result : result = {
                reamur : reamur,
                fahrenheit : fahrenheit,
                kelvin : kelvin
            }
        }
        res.json(response);
    })
     
    app.get("/convert/reamur/:reamur", (req,res) => {
        let reamur = Number(req.params.reamur)
        let result;
     
        let celcius = 5/4 * reamur
        let fahrenheit = (9/4 * reamur) + 32
        let kelvin = (5/4 * reamur) + 273
     
        let response = {
            reamur : reamur,
            result : result = {
                celcius : celcius,
                fahrenheit : fahrenheit,
                kelvin : kelvin
            }
        }
        res.json(response);
    })
     
    app.get("/convert/kelvin/:kelvin", (req,res) => {
        let kelvin = Number(req.params.kelvin)
        let result;
     
        let celcius = kelvin - 273
        let reamur = 4/5 * (kelvin - 273.15)
        let fahrenheit = 9/5 * (kelvin - 273.15) + 32
     
        let response = {
            kelvin : kelvin,
            result : result = {
                celcius : celcius,
                fahrenheit : fahrenheit,
                reamur : reamur
            }
        }
        res.json(response);
    })
     
    app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {
        let fahrenheit = Number(req.params.fahrenheit)
        let result;
     
        let celcius = 5/9 * (fahrenheit - 32)
        let reamur = 4/9 * (fahrenheit - 32)
        let kelvin = 5/9 * (fahrenheit - 32) + 273
     
        let response = {
            fahrenheit : fahrenheit,
            result : result = {
                celcius : celcius,
                reamur : reamur,
                kelvin : kelvin
            }
        }
        




        // end-point "/BMI" dengan method POST  
app.post("/BMI", (req,res) => { 
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)
   
 
 
    let bmi = berat / Math.pow(tinggi,2) *100
    let status = bmi
 
    if(bmi < 18.5){
        status = "kekurangan berat badan";
    }else if (bmi >= 18.5 && bmi <= 24.9){
        status = "berat badan normal";
    }else if (bmi >= 25 && bmi <= 29.9){
        status = "kelebihan berat badan";
    }else{
        status = "obesitas"
    }
 
    let response = {  
        tinggi: tinggi,
        berat: berat,
        bmi: bmi,
        status: status
    } 

