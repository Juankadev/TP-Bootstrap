function validar(){
    let nombre, apellido, email, password, cpassword;
    nombre= document.forms["formulario"]["nombre"].value;
    apellido= document.forms["formulario"]["apellido"].value;
    email= document.forms["formulario"]["email"].value;
    password= document.forms["formulario"]["password"].value;
    cpassword= document.forms["formulario"]["cpassword"].value;
    fecha= document.forms["formulario"]["fecha"].value;
    genero= document.forms["formulario"]["genero"].value;


    if(nombre=="" || apellido=="" || email=="" || password=="" || cpassword=="" || fecha=="" || genero==""){
        alert("falta completar un campo obligatorio");
        return false;

    }
    if(password != cpassword){
        alert("no coinsiden las contraseñas");
        return false;
        
    }
    if(password.length < 8){
        alert("la contraseña debe tener mas de 8 caracteres");
        return false;
    }
    
}


