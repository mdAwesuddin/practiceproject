import React,{useState,useEffect} from 'react'
import axios from 'axios';


const useApi = (term,key) => {
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    async function getstoredata(){
  
        const options = {
          method: 'GET',
          url: 'https://amazon-merchant-data.p.rapidapi.com/search-products',
          params: {
            term: term,
            country: 'in'
          },
          headers: {
            // df9d83cbe0msh28ba752816a8b03p17b92ejsnaeceb234359f first account
            // d92ec6baaamsh3060543ce3e52c3p1022fdjsnc91a3bb2d62d
            // 6ff3a01115msh469772fd6fbffccp18ecb6jsncccaa1ed420b
            // fd5e4ce304msh38bf08aba245313p1acbddjsne0605b488ec9
            'X-RapidAPI-Key': key,
          'X-RapidAPI-Host': 'amazon-merchant-data.p.rapidapi.com'
          }
        };
       
        try {
          const response = await axios.request(options);
          setPost(response.data.content.offers);
          setIsLoading(false)
          console.log(response.data.content.offers);
          console.log(post);
        } catch (error) {
          console.error(error);
          setIsLoading(false)
        }
      }
      useEffect(()=>{
        if(post.length==0){
      getstoredata(term,key);}
      },[])
  return [post,isLoading]
}

export default useApi