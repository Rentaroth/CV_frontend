import axios from "axios";

const URL = 'http://localhost:3010/'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjI2MTgzOTQsInVzZXJOYW1lIjoiTGl0aGl1cyIsImVNYWlsIjoicGVyc29uYUBtYWlsLmNvbSIsInBlcnNvbklkIjoxNjkwMjQ5MSwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY3ODI5MzQ1MCwiZXhwIjoxNjc4Mzc5ODUwfQ.2xuIYiUTXTDBWCzflVAOlqLQtrqk49XJ1TWXzTO55rg';

async function useQuery({ method, uri, body }) {
  const response = await axios({
    method,
    url: URL + uri,
    headers: {
      'Authorization': 'Bearer ' + token,
    },
    data: body,
  });
  return response;
}

export { useQuery };