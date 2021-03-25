const { delete } = require("../../controllers");

const destory = async(event) =>{
    event.preventDefault();

    const project = document.querySelector('#project_name').Value.trim();
    const fund = document.querySelector('#needed_funding').value.trim();
    const description = document.querySelector('#description').value.trim();

    const response = await fetch('/api/projects/',{
        method:'DELETE',
        body: JSON.stringify({project,fund,description}),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok){
        document.location.replace('/');
    }else{
        alert('Fail to create project');
    }
}


document.querySelector('#create').addEventListener('click', destory);