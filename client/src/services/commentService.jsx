const baseUrl = 'http://localhost:3030/jsonstore';

export const createComment = async(comment,token) => {
    const response = await fetch(`${baseUrl}/comments`, {
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "X-Authorization": token,
        },
        body: JSON.stringify({...comment})
    })

    const result = await response.json();
    console.log(result);
    return result;
}