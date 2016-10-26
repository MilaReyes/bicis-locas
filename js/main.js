function validateForm(){
	var name=document.getElementById('name').value;
	var lastName=document.getElementById('lastname').value;
	var mail=document.getElementById('input-email').value;
	var password=document.getElementById('input-password').value;
	var biciTypes= document.querySelector('select').value;

	if( name == null || name.length <=2 || /^\s+$/.test(name) || /^[a-zA-Z]*$/.test(name)==false) {
		alert("Ingresa un nombre válido!");
		return false;
	} else if (name.substring(0,1) == name.substring(0,1).toUpperCase() == false){
		alert ("Ingresa la primera letra en mayúscula");
		return false;
	}

    if( lastName == null || lastName.length <=2 || /^\s+$/.test(lastName) || /^[a-zA-Z]*$/.test(lastName)==false){
		alert("Ingresa un apellido válido!");
		return false;    
	}
	else if (lastName.substring(0,1) == lastName.substring(0,1).toUpperCase() == false){
		alert ("Ingresa la primera letra en mayúscula");
		return false;
	}

    if (mail == null || mail.length < 0||/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(mail) != true){
		alert("Ingresa una dirección de correo electrónico válida");
		return false;  
	}

	if (password == null|| password.length<6){
		alert ("Contraseña demasiado corta")
		return false;
	}
	else if (password=='123456'|| password =='098754' || password == 'password'){
		alert ("Contraseña no segura");
		return false;
	}
	if (biciTypes == 0) {
		alert("Elige un tipo de bici!");
		return false;
	}
}

