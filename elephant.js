
const texts = {
    h1main: '',
    pmain: '',
    h2sig: '',
    psig: '',
    h2tou: '',
    ptou: '',
    h2hab: '',
    phab: ''
};

fetch('elephant.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
    texts.h1main= data.h1main
    texts.pmain= data.pmain
    texts.h2sig= data.h2sig
    texts.psig= data.psig
    texts.h2tou= data.h2tou
    texts.ptou=data.ptou;
    texts.h2hab= data.h2hab;
    texts.phab=data.phab;
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