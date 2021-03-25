const createUser = async(event) =>{
    event.preventDefault();

    const email = document.querySelector('#email').Value.trim();
    const password = document.querySelector('#psw').value.trim();
   value.trim();

    const response = await fetch('/api/users/',{
        method:'POST',
        body: JSON.stringify({email,password}),
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok){
        document.location.replace('/');
    }else{
        alert('Fail to create project');
    }
}


document.querySelector('.registerbtn').addEventListener('click', createUser);