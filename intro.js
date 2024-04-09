
const texts = {
    h1: '',
    pmain: '',
    h1udaw: '',
    pudaw: '',
    locudaw: '',
    h1sinhar: '',
    psinhar: '',
    locsinhar: '',
    h1kum: '',
    pkum: '',
    lockum: '',
    table: ''
};

fetch('intro.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        texts.h1 = data.h1;
        texts.pmain = data.pmain;
        texts.h1udaw = data.h1udaw;
        texts.pudaw = data.pudaw;
        texts.locudaw = data.locudaw;
        texts.h1sinhar = data.h1sinhar;
        texts.psinhar = data.psinhar;
        texts.locsinhar = data.locsinhar;
        texts.h1kum = data.h1kum;
        texts.pkum = data.pkum;
        texts.lockum = data.lockum;
        texts.table = data.table;
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