const baseURL = "http://localhost:3001"
const logInURL = `${baseURL}/log-in`
const validateURL = `${baseURL}/validate`
const createUserURL = `${baseURL}/users`
const createPlaylistURL = `${baseURL}/playlists`


const post = (url, data) => {
  const configObject = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }
  return fetch(url, configObject)
}



const get = (url, token) => {
  return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url)
}


const validate = token => {
  return get(validateURL, token).then(response => response.json())
}


const logIn = data => {
  return post(logInURL, data).then(response => response.json())
  
}

const signUp = data => {
    return post(createUserURL, data).then(response => response.json())
}

const createPlaylist = (data) => {
  return post(createPlaylistURL, data).then(response => response.json())
}


const findUser = (userName) => {
  return fetch(createUserURL).then(response => response.json()).then(users => users.filter(user => user.username === userName))
  
}



export default { logIn, validate, signUp, createPlaylist, findUser }