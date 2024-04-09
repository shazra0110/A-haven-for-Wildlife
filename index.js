
const texts = {
    h1text: '',
    pmain: '',
    h3: '',
    h3t1: '',
    p1: '',
    h3t2: '',
    p2: '',
    h3t3: '',
    p3: '',
    h2t2: '',
    h3div: '',
    pdiv: '',
    h3leo: '',
    pleo: '',
    h3mar: '',
    pmar: '',
    h3coa: '',
    pcoa: '',
    pcoa2: '',
    h3can: '',
    pcan: '',
    pcan2: '',
    h3avi: '',
    pavi: '',
    pavi2: '',
};

fetch('index.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
       texts.h1text= data.h1text
       texts.pmain= data.pmain
       texts.h3= data.h3
       texts.h3t1= data.h3t1
       texts.p1= data.p1
       texts.h3t2= data.h3t2
       texts.p2= data.p2
       texts.h3t3= data.h3t3
       texts.p3= data.p3
       texts.h2t2= data.h2t2
       texts.h3div= data.h3div
       texts.pdiv= data.pdiv
       texts.h3leo= data.h3leo
       texts.pleo= data.pleo
       texts.h3mar= data.h3mar
       texts.pmar= data.pmar
       texts.h3coa= data.h3coa
       texts.pcoa= data.pcoa
       texts.pcoa2= data.pcoa2
       texts.h3can= data.h3can
       texts.pcan= data.pcan
       texts.pcan2= data.pcan2
       texts.h3avi= data.h3avi
       texts.pavi= data.pavi
       texts.pavi2= data.pavi2
    })
    .catch(error => console.error('Error fetching data=', error));

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