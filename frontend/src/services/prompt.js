import axios from 'axios'

export const main = async (prompt, filters)=> {

console.log(prompt, filters);

const llmResponse = await axios.post('http://localhost:3001/', {prompt, filters});

return llmResponse.data;
}