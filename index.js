// Add your code here
function submitData(name, email){
   
    const userObj = {
        name: name,
        email: email
    }

    const requestFunction = {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        } ,
        body: JSON.stringify(userObj)
    }

return fetch('http://localhost:3000/users',requestFunction)
.then(response => response.json())
.then(data => {
    const userId = data.id;
    const element = document.createElement('p');
    element.innerHTML = `New User ID: ${userId}`;
    document.querySelector('body').appendChild(element);
    return data;
})
.catch(error =>{
    const errorMessage = error.message;
    const element2 = document.createElement('p');
    element2.innerHTML = `${error.message}`;
    document.querySelector('body').appendChild(element2);
    console.log('Error:', error.message);

})
}