
const texts = {
    h1main: '',
    loc: '',
    history: '',
    phistory: '',
    climate: '',
    pclimate: '',
    map: ''
};

fetch('wilpattu.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        texts.h1main = data.h1main
        texts.pmain = data.pmain
        texts.loc = data.loc
        texts.history = data.history
        texts.phistory = data.phistory
        texts.climate = data.climate
        texts.pclimate = data.pclimate
        texts.map = data.map
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