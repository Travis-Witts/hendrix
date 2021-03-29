
const destroy = async(event) =>{
    event.preventDefault();


    const title = document.querySelector('#reviewTitle').Value.trim();
    // const rating = document.querySelector('#psw').value.trim();
    const comment = document.querySelector('#comment').value.trim();

    const response = await fetch('/api/projects/',{
        method:'DELETE',
        body: JSON.stringify({title,rating,comment}),

        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok){
        document.location.replace('/');
    }else{
        alert('Fail to delete review');
    }
}


document.querySelector('#delete').addEventListener('click', destory);

