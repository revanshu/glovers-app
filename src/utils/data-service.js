export function getUsers(){
    return fetch('https://crud-challenge.herokuapp.com/glovers', {
            headers: {
                'interview-id': 'spain-india'
            }
    });
}

export function addUser(name){
    const bodyParam = {
        name
    }
    return fetch('https://crud-challenge.herokuapp.com/glovers', {
        method: 'POST',
        body: JSON.stringify(bodyParam),
        headers: {
            'Content-Type': 'application/json',
            'interview-id': 'spain-india'
        }
    })
}

export function deleteUser(id){
    return fetch(`https://crud-challenge.herokuapp.com/glovers/${id}`, {
            method: 'DELETE',
            headers: {
                'interview-id': 'spain-india'
            }
        })
}

export function transformUserData(users){
    return Object.values(users);
}