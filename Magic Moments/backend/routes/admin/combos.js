var express = require('express');
var router = express.Router();
var combosModel = require("./../../models/combosModel");
var util= require("util");
var cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy)

/* GET home page. */
router.get('/',async function (req, res, next) {
  var combos = await combosModel.getCombos();

  combos = combos.map(combo => {
    if (combo.img_id){
      const imagen = cloudinary.image(combo.img_id, {
        width: 100,
        height: 100,
        crop:"fill"
      });
      return {
        ...combo,
        imagen
      }
    } else {
      return {
        ...combo,
        imagen: ""
      }
    }
  });

  res.render("admin/combos", {
    layout: "admin/layout",
    usuario: req.session.nombre,
    combos  
  });
});

router.get("/agregar",(req, res, next)=>{
  res.render("admin/agregar", {
    layout: "admin/layout"
  })
});

router.get("/eliminar/:id" , async (req, res, next)=>{
  var id = req.params.id;

let combo = await combosModel.getCombosById(id);
if (combo.img_id){
  await (destroy (combo.img_id))
}

  await combosModel.deleteCombosById(id);
  res.redirect("/admin/combos")
});

router.get("/modificar/:id" , async (req, res, next)=>{
  let id = req.params.id;
  let combos = await combosModel.getCombosById(id);
  res.render("admin/modificar", {
    layout: "admin/layout",
    combos
  });
});


router.post("/agregar", async (req, res, next)=>{
  try{

      var img_id ="";
      if(req.files && Object.keys(req.files).length > 0){
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
      }

    if (req.body.titulo != "" && req.body.descripcion != ""){
      await combosModel.insertCombos({
        ...req.body,
        img_id
      });
      res.redirect("/admin/combos")
    } else {
      res.render("admin/agregar", {
        layout: "admin/layout",
        error: true,
        message: "todos los campos son requeridos"
      })
    }
  } catch (error){
    console.log(error)
    res.render("admin/agregar", {
      layout: "admin/layout",
      error: true,
      massage: "no se cargo el nuevo combo"
    })
  }
});

router.post("/modificar", async (req, res, next)=>{ 
try{
  let img_id = req.body,img_original;
  let borrar_img_vieja = false;
  if (req.body.img_delete === "1"){
    img_id = null;
    borrar_img_vieja=true;
  } else {
    if (req.files && Object.keys(req.files).length > 0) {
      imagen = req.files.imagen;
      img_id = (await
      uploader(imagen.tempFilePath)).public_id;
      borrar_img_vieja = true;
    }
  }
  if (borrar_img_vieja && req.body.img_original){
    await (destroy(req.body.img_original));
  }



  let obj ={
    titulo: req.body.titulo,
    descripcion: req.body.descripcion,
    img_id
  }
  await combosModel.modificarCombosById(obj, req.body.id);
  res.redirect("/admin/combos");
}
catch (error){
  console.log(error)
  res.render("admin/modificar", {
    layout: "admin/layout",
    error: true, message: " No se modifico el combo"
  })
}
});

module.exports= router;