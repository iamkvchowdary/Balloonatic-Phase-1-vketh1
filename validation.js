function EmailValid(inputEmail){
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    console.log(inputEmail);
    if(inputEmail.value.match(validRegex)){
        alert("Valid Email");
		Window.location.href="home.html"
        return true;
    }else{
         alert("Valid Email");
         return false;
    }
}