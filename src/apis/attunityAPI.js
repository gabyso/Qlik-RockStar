import axios from 'axios';

const attunity = axios.create({
  baseURL: 'http://localhost:3000'
});

export const getArtists = async () => {
  const response = await attunity.get('/artists')
  .then(res => {
    return res.data;
  })
  .catch(err => {
    return { error: err.toJSON().message }
  });
  
  return response;
}