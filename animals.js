






const texts = {
    h1: '',
    pmain: '',
    where: '',
    h2par: '',
    ppar: '',
    h2cey: '',
    pcey: '',
    h2pur: '',
    ppur: '',
    h2hum: '',
    phum: '',
    h2toq: '',
    ptoq: ''
};

fetch('animals.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        texts.h1 = data.h1;
        texts.pmain = data.pmain;
        texts.where = data.where;
        texts.h2par = data.h2par;
        texts.ppar = data.ppar;
        texts.h2cey = data.h2cey;
        texts.pcey = data.pcey;
        texts.h2pur = data.h2pur;
        texts.ppur = data.ppur;
        texts.h2hum = data.h2hum;
        texts.phum = data.phum;
        texts.h2toq = data.h2toq;
        texts.ptoq = data.ptoq;
    })
    .catch(error => console.error('Error fetching data:', error));


   // Get reference to the login dialog
   const popUpLogin = document.getElementById('login-dialog');

   // Function to show the login dialog
   function showLoginDialog() {
       popUpLogin.showModal();
   }
   
   $(document).ready(function() {
       function openPopUp() {
           popUpLogin.showModal(); // Call the function to show the dialog
           var existingContent = $('#editableContent').html();
           $('#editedContent').val(existingContent);
       }
   
       function saveEdit() {
           var editedContent = $('#editedContent').val();
           $('#editableContent').html(editedContent);
           popUpLogin.close(); // Close the dialog after saving
           // Save data to localStorage
           localStorage.setItem('editedContent', editedContent);
       }
   
       $('#editButton').click(function() {
           $('#editedContent').val(''); // Clear the edited content
           openPopUp();
       });
   
       $('#btnSave').click(function() {
           saveEdit();
       });
   
       $('#btnClose').click(function() {
           popUpLogin.close(); // Close the dialog if close button is clicked
       });
   });