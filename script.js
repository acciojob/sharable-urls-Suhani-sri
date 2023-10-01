// Get form and URL elements by their IDs
const urlForm = document.getElementById('urlForm');
const urlElement = document.getElementById('url');

// Add an event listener to the form for submission
urlForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from actually submitting

  // Get the values from the input fields
  const name = document.getElementById('name').value;
  const year = document.getElementById('year').value;

  // Create the query string
  let queryString;
	if(name!=='' && year!==''){
		queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
	}
	else if(name!==''){
		queryString  = `?name=${encodeURIComponent(name)}`;
	}
	else if(year!==''){
		queryString  = `?year=${encodeURIComponent(year)}`;
	}

  // Update the h3 element with the new URL
  urlElement.textContent = `https://localhost:8080/${queryString}`;
});
