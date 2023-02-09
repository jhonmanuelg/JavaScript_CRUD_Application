function validateForm(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    if(name == ""){
        alert("Nome é Incorreto");
        return false;
    }

    if(age == ""){
        alert("Sua Edade Incorreta");
        return false;
    }
    else if(age < 1){
        alert("Edade 1 para cima deve ser um número")
        return false
    }

    if(address == ""){
        alert("Sua Enderço Incorreta");
        return false;
    }

    if(email == ""){
        alert("Sua E-mail Incorreta");
        return false;
    }
}