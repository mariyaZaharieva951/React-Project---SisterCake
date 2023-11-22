const baseUrl = 'http://localhost:3030/data/comments';

export const createComment = async(comment,token) => {
    const response = await fetch(baseUrl, {
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
    
export const getAllComments = async () => {
    try {
        const response = await fetch(baseUrl)
        const result = await response.json();
    
        return result;
    } catch(err) {
        console.log(err)
    }
    
}

export const getOneComment = async (commentId) => {
   try{
    const response = await fetch(`${baseUrl}/${commentId}`)
    const result = await response.json();

    return result;

    } catch(err) {
        console.log(err)
    }

}