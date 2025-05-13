// Change text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
  const contentParagraph = document.querySelector('#content p');
  contentParagraph.textContent = 'The content has been updated!';
});

// Modify CSS styles via JavaScript
document.getElementById('toggleStyleButton').addEventListener('click', function() {
  const contentSection = document.getElementById('content');
  contentSection.classList.toggle('styled'); // Toggle the 'styled' class
});

// Add a new element when button is clicked
document.getElementById('addElementButton').addEventListener('click', function() {
  const newElementContainer = document.getElementById('newElementContainer');
  const newDiv = document.createElement('div');
  newDiv.id = 'newElement';
  newDiv.textContent = 'This is a newly added element!';
  newElementContainer.appendChild(newDiv);
});

// Remove the last added element
document.getElementById('removeElementButton').addEventListener('click', function() {
  const newElementContainer = document.getElementById('newElementContainer');
  const lastElement = newElementContainer.querySelector('div:last-child');
  if (lastElement) {
    newElementContainer.removeChild(lastElement);
  }
});
