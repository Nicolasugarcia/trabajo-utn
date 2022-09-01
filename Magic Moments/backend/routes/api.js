var express = require("express");
var router = express.Router();
var combosModel = require ("./../models/combosModel")
var cloudinary = require("cloudinary").v2;
var nodemailer= require("nodemailer");

router.get("/combos", async function (req, res, next){
  let combos = await combosModel.getCombos();

  combos = combos.map(combos =>{
    if (combos.img_id){
        const imagen = cloudinary.url(combos.img_id, {
            width:250,
            height:250,
            crop: "fill"
        });
        return {
            ...combos,
            imagen
        }
    } else {
        return{
            ...combos,
            imagen: ""
        }
    }
  });

  res.json(combos);
});


router.post("/contacto", async (req, res)=>{
    const mail={
        to: "nicolasgarciasam@gmail.com",
        subject: "contacto web",
        html: `${req.body.nombre} ${req.body.apellido} se conecto a traves de la web y quiero coordinar su pedido en este correo:
        ${req.body.email}<br> Ademas sugerio el dia ${req.body.date} con horario ${req.body.time}<br> Su numero de contacto es ${req.body.telefono} ` 
    }
    const transport = nodemailer.createTransport({
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
        auth: {
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        }
    });
    
    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: "Mensaje enviado"
    });
});

module.exports= router;
