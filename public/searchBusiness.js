const businessR = async (event) => {
    event.preventDefault();
    const businessSearch = document.querySelector('#searchBusiness').value.trim();
    if (businessSearch) {
      // const response = await fetch(`/api/search`, {
      //   method: 'POST',
      //   body: JSON.stringify({ businessSearch }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
  
      // if (response.ok) {
        document.location.replace('api/search/businessSearch');
      } else {
        alert('Failed to create search');
      }
    }
  document
    .querySelector('#searchBusinessButton')
    .addEventListener('click', businessR);
  
