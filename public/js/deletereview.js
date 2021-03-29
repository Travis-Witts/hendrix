const destroy = async(event) =>{
    event.preventDefault();
    const review_id = event.target.id;
    const business_id = event.target.getAttribute('key');

    const response = await fetch(`/api/review/${review_id}`,{
        method:'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace(`/business/${business_id}`);
}


document.querySelector('.deleteReview').addEventListener('click', destroy);