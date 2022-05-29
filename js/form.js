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
        alert("Falta completar un campo obligatorio");
        return false;

    }
    if(password != cpassword){
        alert("No coinciden las contraseñas");
        return false;
        
    }
    if(password.length < 8 || cpassword.length < 8){
        alert("Una contraseña tiene menos de 8 caracteres");
        return false;
    }
    
}


