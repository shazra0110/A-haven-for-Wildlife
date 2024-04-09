 //newsletter

 function storeNewsLetter() {
    let email = document.getElementById("emailInput").value;
  
    let getEmail = JSON.parse(localStorage.getItem("newsLetter")) || [];
  
    if (getEmail.some(v => v.email === email)) {
      alert("Duplicate Email")
    } else {
      getEmail.push({
        "email": email,
      });
      localStorage.setItem("newsLetter", JSON.stringify(getEmail));
      alert("Registration Successful")
    }
  }