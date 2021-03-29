const destroy = async(event) =>{
    event.preventDefault();

    const reviewId = event.target.id;
    console.log(reviewId)

    const response = await fetch('/api/review/',{
        method:'DELETE',
        body: JSON.stringify({reviewId}),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok){
        document.location.replace('/');
    }else{
        alert('Failed to delete Review');
    }
}


document.querySelector('.deleteReview').addEventListener('click', destroy);