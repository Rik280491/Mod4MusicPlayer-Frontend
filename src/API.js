const baseURL = "http://localhost:3000"
const logInURL = `${baseURL}/log-in`
const validateURL = `${baseURL}/validate`
const createUserURL = `${baseURL}/users`

// Make a post request to a given URL with a given data object as the body and return the Promise
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

// Make a get request to a given URL and return the Promise. If a token has been provided, include it as a header called Authorization
const get = (url, token) => {
  return token ? fetch(url, { headers: { AUTHORIZATION: token } }) : fetch(url)
}

// Use the get function to make a request to the validate route and parse the response into JSON
const validate = token => {
  return get(validateURL, token).then(response => response.json())
}

// Use the post function to make a request to the validate route and parse the response into JSON
const LogIn = data => {
  return post(logInURL, data).then(response => response.json())
  
}

const SignUp = data => {
    return post(createUserURL, data).then(response => response.json())
}



export default { LogIn, validate, SignUp }