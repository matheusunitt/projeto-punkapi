const options = {
  mode: 'cors',
  headers: {
    'Content-type': 'application/json',
    credentials: 'include',
  },
}

const BASE_URL = 'https://api.punkapi.com/v2';
const fetchData = (url, fetchOptions) => {
  const data = fetch(`${BASE_URL}/${url}`, fetchOptions)
    .then(response => response.json())
    .catch(err => { console.error('Failed to retrieve the desired information', err) });

  return data;
}

const get = url => {
  const optionsGet = {
    ...options,
    method: 'GET',
  }

  const data = fetchData(url, optionsGet);
  return data;
}

const post = payload => {
  const optionsPost = {
    ...options,
    method: 'POST',
    body: JSON.stringify(payload)
  }

  const data = fetchData('punk', optionsPost);
  return data;
}

export default { get, post }