const baseUrl = 'http://localhost:3030/users';


export const register = async (name,email,password) => {
    
    // const headers = authCheck();
    try{
    
        const authData = localStorage.getItem('auth');
    let auth = '';
    if(authData) {
        auth = JSON.parse(authData);
    }

    let headers = {};
    if(auth.accessToken) {
        return headers['X-Authorization'] = auth.accessToken;
    }
    
    
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            ...headers,
            "Content-type": "application/json"
        },
        body: JSON.stringify({name,email,password})
    });

    if(response.ok) {
        const token = await response.json();
        console.log('TOKEN', token)
        return token;
    }

    if(response.status === 409) {
        alert('This user is already exist!');
        return;
    }
    } catch(error) {
        console.log(error)
    }
    

}



export const login = async (email,password) => {
    
    // const headers = authCheck();
    try{
    
        const authData = localStorage.getItem('auth');
    let auth = '';
    if(authData) {
        auth = JSON.parse(authData);
    }

    let headers = {};
    if(auth.accessToken) {
        return headers['X-Authorization'] = auth.accessToken;
    }
    
    
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            ...headers,
            "Content-type": "application/json"
        },
        body: JSON.stringify({email,password})
    });

    if(response.ok) {
        const token = await response.json();
        console.log('TOKEN', token)
        return token;
    }
    } catch(error) {
        console.log(error)
    }
    

}







export const logout = async(accessToken) => {
    try {
        const response = await fetch(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });
        return response;
    } catch(error) {
        console.log(error)
    }
}