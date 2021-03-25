const businessR = async (event) => {
    event.preventDefault();
    const businessSearch = document.querySelector('#searchBusiness').value.trim();
    if (businessSearch) {
        document.location.replace(`/business/search/${businessSearch}`);
      } else {
        alert('Failed to create search');
      }
    }
  document
    .querySelector('#searchBusinessButton')
    .addEventListener('click', businessR);
  
