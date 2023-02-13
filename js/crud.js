// validate form inputs

function validateForm() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var address = document.getElementById("address").value;
  var email = document.getElementById("email").value;

  if (name == "") {
    alert("Nome é Incorreto");
    return false;
  }

  if (age == "") {
    alert("Sua Edade Incorreta");
    return false;
  } else if (age < 1) {
    alert("Edade 1 para cima deve ser um número");
    return false;
  }

  if (address == "") {
    alert("Sua Enderço Incorreta");
    return false;
  }

  if (email == "") {
    alert("Sua E-mail Incorreta");
    return false;
  } else if (!email.includes("@")) {
    alert("E-mail invalido");
    return false;
  }

  return true;
}

//function toshow Data

function showData() {
  var peopleList;

  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  var html = "";

  peopleList.forEach(function (element, index) {
    html += "<tr class='text-warning text-center fw-bolder'>";
    html += "<td>" + element.name + "</td>";
    html += "<td>" + element.age + "</td>";
    html += "<td>" + element.address + "</td>";
    html += "<td>" + element.email + "</td>";
    html +=
      '<td><button onclick="deleteData(' +
      index +
      ')" class="btn btn-danger ">Delete</button> <button onclick="updateData(' +
      index +
      ')" class="btn btn-warning m-2 ">Editar </button></td>';
    html += "</tr>";
  });

  document.querySelector("#crudTable thead").innerHTML = html;
}

//loads all data when dacument or page loaded
document.onload = showData();

// function to add data

function AddDato() {
  //if form validate
  if (validateForm() == true) {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;

    var peopleList;

    if (localStorage.getItem("peopleList") == null) {
      peopleList = [];
    } else {
      peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.push({
      name: name,
      age: age,
      address: address,
      email: email,
    });

    localStorage.setItem("peopleList", JSON.stringify(peopleList));
    showData();
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
  }
}

//  function to delete data form

function deleteData(index) {
  var peopleList;

  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  peopleList.splice(index, 1);
  localStorage.setItem("peopleList", JSON.stringify(peopleList));
  showData();
}

// function to update/edite data form

function updateData(index) {
  //Submit button will hide and Updata button

  document.getElementById("Submit").style.display = "name";
  document.getElementById("Updata").style.display = "block";

  var peopleList;

  if (localStorage.getItem("peopleList") == null) {
    peopleList = [];
  } else {
    peopleList = JSON.parse(localStorage.getItem("peopleList"));
  }

  document.getElementById("name").value = peopleList[index].name;
  document.getElementById("age").value = peopleList[index].age;
  document.getElementById("address").value = peopleList[index].address;
  document.getElementById("email").value = peopleList[index].email;

  document.querySelector("#Updata").onclick = function () {
    if (validateForm() == true) {
      peopleList[index].name = document.getElementById("name").value;
      peopleList[index].age = document.getElementById("age").value;
      peopleList[index].address = document.getElementById("address").value;
      peopleList[index].email = document.getElementById("email").value;

      localStorage.setItem("peopleList", JSON.stringify(peopleList));
      showData();

      document.getElementById("name").value = "";
      document.getElementById("age").value = "";
      document.getElementById("address").value = "";
      document.getElementById("email").value = "";

      //Updata button will hide and Submit button

      document.getElementById("Updata").style.display = "block";
      document.getElementById("Submit").style.display = "name";
    }
  };
}
