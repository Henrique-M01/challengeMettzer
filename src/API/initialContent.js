import axios from 'axios';

const API_KEY = 'bea6UfHjdMwNlQiyW0Ycos4R13BDPZ85';

async function initialContent(wordQuery = 'all', page, pageSize = 10) {

  const BASE_URL = `https://core.ac.uk:443/api-v2/search/
                    ${wordQuery}?page=${page}&pageSize=
                    ${pageSize}&apiKey=${API_KEY}`;

  const result = await axios.get(BASE_URL);

  return result.data;
};

export default initialContent;
