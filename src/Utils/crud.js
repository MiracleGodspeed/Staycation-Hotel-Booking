import { isLoggedIn } from "./auth"

export const BASE_URL = "http://potng.com:3001"



const lStorage = JSON.parse(localStorage.getItem("staycation_user"));

const setUser = (user) => {
  window.localStorage.setItem("staycation_user", JSON.stringify(user))
}

export const handleLogin = (endpoint, data, auth, callback) => {
  var requestOptions = {
    crossDomain: true,
    method: "POST",
    mode:'cors',
    headers: {
      'Authorization': 'Basic ' + btoa(auth.email + ':' + auth.password),
      'Content-Type': 'application/json'
    },
    redirect: "follow",
    body: JSON.stringify(data),
  }

  fetch(BASE_URL + endpoint, requestOptions)
    .then(response => {
      return response.json()
    })
    .then(jsondata => {
      setUser(jsondata)
      callback(jsondata)
      window.location.replace('/UserProfile')
    })
    .catch(error => console.log("An error Occured: " + error))
}

var myHeaders = () => {
  let newAuth = "";
  const fetchHeader = new Headers();
  fetchHeader.append("Accept", "application/json")
  fetchHeader.append("Content-Type", "application/json")
  // if(lStorage != null){
  //   newAuth = 'Bearer '.concat(lStorage.data.token);
  //   fetchHeader.append("Authorization", newAuth)
  // }
  fetchHeader.append('Access-Control-Allow-Origin', '*');
  fetchHeader.append('sv-token', lStorage.data.token);

  return fetchHeader
}

var LoginHeaders = () => {
  const fetchHeader = new Headers()
  fetchHeader.append("Accept", "application/json")
  fetchHeader.append("Content-Type", "application/json")
  fetchHeader.append("Authorization", "Basic")
  fetchHeader.append('Access-Control-Allow-Origin', '*');

  return fetchHeader
}


export const fetchDataWithoutToken = (endpoint, callback) => {
  var requestOptions = {
    method: "GET",
    headers: LoginHeaders,
    redirect: "follow",
    credentials: "include",
  }
  
  fetch(BASE_URL + endpoint, requestOptions)
    .then(response => {
      return response.json()
    })
    .then(jsondata => {
      callback(jsondata)
    })
    .catch(error => console.log("An error Ocuured: " + error))
}




export const fetchData = (endpoint, callback) => {  
  var requestOptions = {
    method: "GET",
    headers: myHeaders(),
    redirect: "follow",
    credentials: "include",
  }
  

  fetch(BASE_URL + endpoint, requestOptions)
    .then(response => {
      return response.json()
    })
    .then(jsondata => {
      callback(jsondata)
    })
    .catch(error => console.log("An error Ocuured: " + error))
}


export const postData = (endpoint, data, callback) => {
  var requestOptions = {
    method: "POST",
    headers: myHeaders(),
    redirect: "follow",
    body: JSON.stringify(data),
  }

  fetch(BASE_URL + endpoint, requestOptions)
    .then(response => {
      return response.json()
    })
    .then(jsondata => {
      callback(jsondata)
    })
    .catch(error => alert("An error Occured: " + error))
}


export const editData = (endpoint, data, callback) => {
  var requestOptions = {
    method: "PUT",
    headers: {
      "sv-token": lStorage.data.token,
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${lStorage.data.token}`,
    },
    redirect: "follow",
    body: JSON.stringify(data),
  }

  fetch(BASE_URL + endpoint, requestOptions)
    .then(response => {
      return response.json()
    })
    .then(jsondata => {
      callback(jsondata)
    })
    .catch(error => console.log("An error Ocuured: " + error))
}

export const deleteData = (endpoint, callback) => {
  var requestOptions = {
    method: "DELETE",
    headers: myHeaders(),
    redirect: "follow",
  }

  fetch(BASE_URL + endpoint, requestOptions)
    .then(response => {
      return response.json()
    })
    .then(jsondata => {
      callback(true)
    })
    .catch(error => console.log("An error Ocuured: " + error))
}



