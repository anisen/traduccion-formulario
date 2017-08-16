function translate(){
	var title= document.getElementById("form-signin-heading");
	var email= document.getElementById("inputEmail");
	var password= document.getElementById("inputPassword");

	var remember= document.getElementsByTagName("span")[0];
	var button= document.getElementsByTagName("btn")[0];

	title.innerHTML="Por favor iniciar sesion";
	email.placeholder="Correo Electronico";
	password.placeholder= "Contraseña";
	remember.innerHTML="Recordar Datos";
	button.innerHTML="Iniciar Sesion";
};
translate();