const createReview = async(event) =>{
    event.preventDefault();

    const title = document.querySelector('#reviewTitle').Value;
    const comment = document.querySelector('#comment').value;
    const star = document.getElementsByTagName('input');
    let starRating;
    for (i = 0; i < star.length; i++) {
        if (star[i].type = "radio") {
            if (star[i].checked) {
                console.log(i);
                starRating = star[i].id;
            }
        }
    }

    const response = await fetch('/api/users/',{
        method:'POST',
        body: JSON.stringify({title,starRating,comment}),
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok){
        document.location.replace('/');
    }else{
        alert('Fail to create review');
    }
}

document.querySelector('form').addEventListener('submit', createReview);