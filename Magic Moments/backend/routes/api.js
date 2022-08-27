var express = require("express");
var router = express.Router();
var combosModel = require ("./../models/combosModel")
var cloudinary = require("cloudinary").v2;

router.get("/combos", async function (req, res, next){
  let combos = await combosModel.getCombos();

  combos = combos.map(combos =>{
    if (combos.img_id){
        const imagen = cloudinary.url(combos.img_id, {
            width:960,
            height:200,
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
  })

  res.json(combos);
});

module.exports= router;