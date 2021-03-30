const destroy = async(event) =>{
    event.preventDefault();
    const business_id = event.target.id;

    const response = await fetch(`/api/business/${business_id}`,{
        method:'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    document.location.replace(`/`);
}


document.querySelector('.deleteBusiness').addEventListener('click', destroy);