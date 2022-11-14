import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    url: BASE_URL,
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': '39c07118f1mshc4974f68170340ep1eca6fjsn54c33f7b597e',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


  export const FetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  };