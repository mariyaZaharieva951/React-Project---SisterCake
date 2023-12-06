const baseUrl = 'http://localhost:3030/data';


export const getAll = async () => {
   try{ 
    const response = await fetch(`${baseUrl}/cakes`);
    const result = await response.json();
    const data = Object.values(result);
    
    return data
} catch(err) {
    console.log(err)
}
}

export const getAllBirthdayCake = async () => {
    try{ 
     const response = await fetch(`${baseUrl}/birthdayCakes`);
     const result = await response.json();
     const data = Object.values(result);
     
     return data
 } catch(err) {
     console.log(err)
 }

    
}

export const getOneBdCake = async (cakeId) => {
    try{ 
     const response = await fetch(`${baseUrl}/birthdayCakes/${cakeId}`);
     
     const result = await response.json();
     return result
 } catch(err) {
     console.log(err)
 }
}

export const buyOneCake = async (cakeData, token) => {

    const response = await fetch(`${baseUrl}/purchase`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({...cakeData})
    })

    const result = await response.json();
    return result;
}

export const getAllBuys = async () => {
    
    const response = await fetch(`${baseUrl}/purchase`)
    const result = await response.json();
    
    return result;
}