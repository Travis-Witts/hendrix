
const destroy = async(event) =>{
    event.preventDefault();

    const reviewId = event.target.id;
        

    const response = await fetch('/api/projects/',{
        method:'DELETE',
        body: JSON.stringify({reviewId}),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok){
        document.location.replace('/');
    }else{
        alert('Fail to create project');
    }
}


document.querySelector('.deleteReview').addEventListener('click', destroy);