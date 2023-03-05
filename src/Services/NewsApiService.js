
const BASE_URL = 'https://newsapi.org/v2';
export async function getTopHeadlines(){
    try{
       const response =  await fetch(`${BASE_URL}/top-headlines?country=in&apiKey=c4d90d066af943dea19ff614e623410b`);
       const data = await response.json();
       return data;
    }catch(error){
        console.log(error);
    }
}

export async function getAllNews(topic){
    try{
        const response =  await fetch(`${BASE_URL}/everything?q=${topic}&apiKey=c4d90d066af943dea19ff614e623410b`);
        const data = await response.json();
        return data;
     }catch(error){
         console.log(error);
     }

}