//GIF

var cont = 0;

function CallTime() {
        var tiempo = setTimeout("Cambiar()", 2000);
    }

function Cambiar() {
        cont++;
        if(cont > 5) {
        cont = 0;
        }
        document.getElementById("image").src = "GIF/"+cont+".jpeg"; 
        CallTime();
    }

//Phone number check

function phonenumber(inputtxt) {
        var phoneno = /^\d{10}$/;
        if(inputtxt.value.match(phoneno)){
            alert("Gracias por su consulta")
            return true;
            }
        else {
            alert("Número de Teléfono inválido");
            return false;
            }
        }

//pop up

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
  }

function myFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
  }

function myFunction4() {
    var popup = document.getElementById("myPopup4");
    popup.classList.toggle("show");
  }

function buscador(x) {
  var txt;
  if (x == 1) {
    if (confirm("Confirmar")) {
      txt = "<img src='https://www.tersuave.com.ar/thumb?src=..%2Fassets%2Fmedia%2Fproducts%2Foriginal%2F10312-1554835489.png&w=246&h=189&bg=FFFFFF&far=1' alt='Interior Pared'> <h3>Interior Pared</h3>";
    } else {
      txt = "";
    }
  }
  else if (x == 2) {
    if (confirm("Confirmar")) {
      txt = "<img src='https://www.tersuave.com.ar/thumb?src=..%2Fassets%2Fmedia%2Fproducts%2Foriginal%2F10312-1554835489.png&w=246&h=189&bg=FFFFFF&far=1' alt='Interior Piso'> <h3>Interior Piso</h3>";
    } else {
      txt = "";
    }
  }
  else if (x == 3) {
    if (confirm("Confirmar")) {
      txt = "<img src='https://www.tersuave.com.ar/thumb?src=..%2Fassets%2Fmedia%2Fproducts%2Foriginal%2F10312-1554835489.png&w=246&h=189&bg=FFFFFF&far=1' alt='Interior Madera'> <h3>Interior Madera</h3>";
    } else {
      txt = "";
    }
  }
    document.getElementById("demo").innerHTML = txt;
  }