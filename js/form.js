function validar(){
    let nombre, apellido, email, password, cpassword;
    nombre= document.forms["formulario"]["nombre"].value;
    apellido= document.forms["formulario"]["apellido"].value;
    email= document.forms["formulario"]["email"].value;
    password= document.forms["formulario"]["password"].value;
    cpassword= document.forms["formulario"]["cpassword"].value;
    fecha= document.forms["formulario"]["fecha"].value;


    if(nombre=="" || apellido=="" || email=="" || password=="" || cpassword=="" || fecha==""){
        alert("falta completar un campo obligatorio");
    } else if(password != cpassword){
        alert("no coinsiden las contraseñas");
    }
    
}


