const baseUrl = 'http://localhost:3030/users';


export const register = async ({userData}) => {
    
    const headers = authCheck();
    
    const response = await fetch(`${baseUrl}/register`, {
        headers: {
            ...headers,
            "content-type": "application/json"
        },
        method: 'POST',
        body: JSON.stringify(userData)
    });

    if(response.ok) {
        const token = await response.json;

        return token;
    }

    if(response.status === 409) {
        alert('This user is already exist!');
        return;
    }
    

}




const authCheck = () => {
    const authData = localStorage.getItem('auth');
    let auth = '';
    if(authData) {
        auth = JSON.parse(authData);
    }

    let headers = {};
    if(auth.accessToken) {
        return headers['X-Authorization'] = auth.accessToken;
    }
}