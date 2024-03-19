function number(){
    var phone = document.forms["num"]["num"].value;
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
    if(phone.value.match(phoneNum)) {
        return true;
    }
    else {
        document.getElementById("num").className = document.getElementById("num").className + " error";
        return false;
    }
}
function fname(){
    var name = document.forms["var"]["var".value];
    var fname = [a-z][A-Z];
    alert ("write a alphabetic words");
}
function num(){
    
}