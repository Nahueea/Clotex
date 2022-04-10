require('dotenv').config()
const express = require("express");
const app = express();
const Port = process.env.PORT || 8081;
const path = require("path");
const hbs = require("hbs");
const nodemailer = require('nodemailer')

/*const { error } = require("console");
const async = require("hbs/lib/async");
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "q1optica",
    database: "clotex",
    port: 3306
});

conexion.connect((error) =>{
    if(error) throw error;
    console.log("conexion a la Data Base exitosa!!");
});*/

app.use(express.json());
app.use(express.urlencoded({extended:false})); //
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"))


app.get("/", (req, res) =>{
    res.render("index", {titulo: "Clotex"})
})

app.get("/home", (req, res) =>{
    res.json({
        titulo: "Clotex deploy"})
})

app.get("/administrador", (req, res) =>{
    res.render("administrador", {titulo: "Modificar"})
})

app.post("/administrador", (req, res) =>{


const { nombre, codigo, stock, precio } = req.body;



    if(nombre == "" || codigo == "" || stock == "" || precio == ""){
        
        let validacion = "Faltan datos"
        res.render("administrador", {titulo: "No se pueden cargar los datos",
        validacion 
        })
    }else{
        console.log(nombre);
        console.log(codigo);
        console.log(stock);
        console.log(precio);

        let data = {
            nombre: nombre,
            codigo: codigo,
            stock: stock,
            precio: precio
        }

        let sql = "Insert into productos set ?"
        conexion.query(sql, data, (error, results) =>{
            if(error) throw error;
            res.render("administrador",{ 
                titulo: "Cargado correctamente",
        });
    })
}
});


app.get("/productos", (req, res) =>{
    let sql = "SELECT * FROM productos";

    conexion.query(sql, (error, results) =>{
        if(error) throw error;
        res.render("productos", {
            titulo: "Productos",
            results: results,
        })
    })
});


app.get("/newsletter", (req, res) =>{
    res.render("newsletter", {titulo: "Recibe las novedades!"})
});
app.post("/newsletter", (req, res) =>{

const { Nombre, Email} = req.body;

    
    if( Nombre == "" || Email == ""){
        
        let validacion = "Faltan datos"
        res.render("newsletter", {titulo: "No se pudo enviar",
        validacion 
        })
    }else{
        console.log(Nombre);
        console.log(Email);
        
/*async function main(){
let transporter = nodemailer.createTransport({
host: 'smtp.gmail.com'
port: 465,
secure: true,
auth: {
    user: "aimonenahuel@gmail.com",
    pass: "nmfj tmfp wiry zvgl",
}

})

} */

        res.render("enviado",{ 
            titulo: "Mail enviado con exito!!",
            Nombre,
            Email
    });
    }
});





app.get("/login", (req, res) =>{
    res.render("login", {titulo: "Iniciar sesión"})
})

app.post("/login", (req, res) =>{

    const { Email, Contraseña} = req.body;
    
        
        if(Email == "aimonenahuel@gmail.com" && Contraseña == "utnverano"){

            res.render("administrador", {
                titulo: 'Puedes realizar cambios',
                
            })
        }else{
        

            
            let validacion = "Error en los datos";
            
            res.render("login", {
                titulo: 'Usuario o contraseña incorrectos',
                validacion
            })
        } 
    });

    app.get("/ayuda", (req, res) =>{
        res.render("ayuda", {titulo: "Ayuda"})
    })


app.listen(Port, () =>{
    console.log(`Servidor esta trabajando en el puerto ${Port}`);
});

app.on("error" , (err) => {
    console.log("Error en la ejecución del Servidor ${error}");
});