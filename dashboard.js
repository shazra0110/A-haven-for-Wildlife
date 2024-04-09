
// newsletter part
let newsLetter = JSON.parse(localStorage.getItem("newsLetter")) || [];
const emailList = document.getElementById("emailList");

function displayEmails() {
    emailList.innerHTML = ""; // Clear previous list

    // Loop through emails and create list items
    newsLetter.forEach((emailObject, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${emailObject.email}</span>
       
    `;

        emailList.appendChild(li); // Append list item to emailList
    });
}
displayEmails();


// Retrieve query parameter
const urlParams = new URLSearchParams(window.location.search);
const isAdmin = urlParams.get('admin');

// Check if user is admin and display admin content
if (isAdmin === "true") {
  document.getElementById("admin-content").style.display = "grid";
} else {
  document.getElementById("admin-content").style.display = "none";
}


function logOut(){
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  window.location.href="signin.html"
  }