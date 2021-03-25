const createUser = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();


    if (name && email && password) {
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create user');
        }
    }
};


document.querySelector('.registerbtn').addEventListener('click', createUser);