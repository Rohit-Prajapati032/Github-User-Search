const URL = "https://api.github.com/users/";

async function getData(){
    const btn = document.querySelector('#btn');
    const error = document.querySelector(".error-msg");
    const massege = document.querySelector(".massege");
    const username = document.querySelector("#input").value;
    const response = await fetch(`${URL+ username}`);
    // console.log(response);
    massege.innerHTML = '';
    error.innerHTML = '';
    if (!username) {
        massege.style.display = 'none';
        error.innerHTML = 'Please enter a username.';
        return;
    }
    else
    
    if(response.ok){
    const data = await response.json();
    // console.log(data);
    // console.log(data.login);
    // console.log(data.id);
    // console.log(username);
    // massege.innerHTML = [data.following];
    // console.log(massege);
    massege.innerHTML = `
            <div class="card d-flex align-items-center justify-content-center my-1 py-4 mx-auto">
    <img src=${data.avatar_url}  alt = "logo has been not loaded">
    <p> ${data.login}</p>
    <p>Public repositry :${data.public_repos}</p>
    <p>Follwers : ${data.followers}</p>
    <p>Folowing :${data.following
    }</p>
   <button class = "btn-profile"><a href = ${data.html_url} target="_blank">View Profile</a></button>
    <div>
    `;
    // console.log(massege);
    massege.style.display = 'inline';
    }
    else{
        error.innerHTML = 'User not found please enter a valid name';
        massege.style.display = 'none';
    }
    


}
btn.addEventListener('click',getData);