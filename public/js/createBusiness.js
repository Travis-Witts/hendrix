const createBusiness = async (event) => {
    event.preventDefault();
    console.log("hello")
    const name = document.querySelector('#newBusinessName').value.trim();
    const category = document.querySelector('#category').value;
    const description = document.querySelector('#newBusinessDescription').value.trim();
    console.log(name + category + description)
    const response = await fetch('/api/business', {
        method: 'POST',
        body: JSON.stringify({ name, category, description }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/business/manageBusiness');
    } else {
        alert('Fail to create business');
    }
}

document.querySelector('#newBusinessForm').addEventListener('submit', createBusiness);