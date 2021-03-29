const createReview = async(event) =>{
    event.preventDefault();
    const businessId = event.target.id;
    const comment = document.querySelector('#review').value;
    const star = document.getElementsByName('rate');
    let starRating;
    for (i = 0; i < 5; i++) {
        if (star[i].type = "radio") {
            if (star[i].checked) {
                console.log(i);
                starRating = star[i].id;
            }
        }
    }
    console.log(starRating)

    const response = await fetch(`/api/review/${businessId}`,{
        method:'POST',
        body: JSON.stringify({comment,starRating}),
        headers: { 'Content-Type': 'application/json'},
    });

    if (response.ok){
        document.location.replace('/');
    }else{
        alert('Fail to create review');
    }
}

document.querySelector('.formSub').addEventListener('submit', createReview);