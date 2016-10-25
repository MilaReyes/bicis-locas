function validateForm(){
  var name=document.getElementById('name').value;
    //var lastName=document.getElementById('lastname').value;
    //var mail=document.getElementById('input-email').value;
    //var password=document.getElementById('input-password').value;
    
    if( name == null || name.length <=2 || /^\s+$/.test(name) || /^[a-zA-Z]*$/.test(name)==false) {
        alert("Ingresa un nombre valido!");
        return false;
}
}
