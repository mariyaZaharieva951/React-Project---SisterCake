const baseUrl = 'http://localhost:3030/users';

        const authData = localStorage.getItem('auth');
        let auth = '';
        if(authData) {
            auth = JSON.parse(authData);
        }

        let headers = {};
        if(auth.accessToken) {
             headers['X-Authorization'] = auth.accessToken;
        }


export const register = async (name,email,password) => {
    
    try{
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            ...headers,
            "Content-type": "application/json"
        },
        body: JSON.stringify({name,email,password})
    });

    if(response.status === 204) {
        return {};
    }

    const result = await response.json();
    
    if(!response.ok) {
        
        if(response.status === 403) {
            localStorage.removeItem('auth')
        }

        throw result;
    }

        return result;

    } catch(error) {
        console.log(error)
        throw new Error(error.message)
    }

}



export const login = async (email,password) => {
    
    try{
    
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            ...headers,
            "Content-type": "application/json"
        },
        body: JSON.stringify({email,password})
    });
    
    if(response.status === 204) {
        return {};
    }

    const result = await response.json();
    
    if(!response.ok) {
        
        if(response.status === 403) {
            localStorage.removeItem('auth')
        }

        throw result;
    }

        return result;

    } catch(error) {
        console.log(error)
        throw new Error(error.message)
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