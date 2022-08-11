var express = require('express');
var router = express.Router();
var usuariosModel = require("./../../models/usuariosModel")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render("admin/login", {
    layout: "admin/layout"
  });
});


router.get("/logout",function (req,res, next){
  req.session.destroy();
  res.render("/admin/login",{
    layout: "admin/layout"
  });
});




router.post(' / ', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password req.body.password;

    var data = await 
    usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {
      req.session.id_usario =data.id_usario;
      req.session.nombre = data.usuario;
      res.redirect(' / admin / combos ');
    } else {
      res.render(' admin / login ', {
        layout: ' admin / layout ', 
        error: true
      });
    }
  } catch (error) {
    console.log(error)
  }
})

module.exports = router;
