
const texts = {
    h1: '',
    pmain: '',
    h3udaw: '',
    pudaw: '',
    h3hort: '',
    phort: '',
    h3kum: '',
    pkum: '',
    h1thre: '',
    pthre: '',
    thre1: '',
    pthre1: '',
    cons1: '',
    mech1: '',
    h1hab: '',
    phab: '',
    cons2: '',
    mech2: ''
};

fetch('leopard.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        texts.h1= data.h1
        texts.pmain= data.pmain
        texts.h3udaw= data.h3udaw
        texts.pudaw= data.pudaw
        texts.h3hort= data.h3hort
        texts.phort= data.phort
        texts.h3kum= data.h3kum
        texts.pkum= data.pkum
        texts.h1thre= data.h1thre
        texts.pthre= data.pthre
        texts.thre1= data.thre1
        texts.pthre1= data.pthre1
        texts.cons1= data.cons1
        texts.mech1= data.mech1
        texts.h1hab= data.h1hab
        texts.phab= data.phab
        texts.cons2= data.cons2
        texts.mech2= data.mech2
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