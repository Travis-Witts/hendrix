const createUser = async(event) =>{
    event.preventDefault();

    const title = document.querySelector('#reviewTitle').Value.trim();
    const rating = document.querySelector('#psw').value.trim();
    const comment = document.querySelector('#comment').value.trim();
  

    const response = await fetch('/api/users/',{
        method:'POST',
        body: JSON.stringify({title,password,comment}),
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok){
        document.location.replace('/');
    }else{
        alert('Fail to create review');
    }
}

document.querySelector('form').addEventListener('submit',(event)=>{
    console.log(event.target);
    console.log(event.currentTarget);
})

