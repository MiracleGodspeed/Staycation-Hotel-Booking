import { BASE_URL } from "./crud";
import { Redirect } from "react-router-dom";
import { Endpoint } from "./endpoints";



export const logout = () => {
  localStorage.removeItem("staycation_user");
  window.location.replace("/login");
};

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
      if(jsondata.status === "success"){
          setUser(jsondata)
      }
      callback(jsondata)
    })
    .catch(error => console.log("An error Occured: " + error))
}

export function validateToken() {
  let user = JSON.parse(localStorage.getItem("staycation_user"));
  if(user != null){
        let token = user.data.token;
        const requestOptions = {
          method: "GET",
          headers: {
            "sv-token": token,
          },
        };
      
        fetch(BASE_URL + Endpoint.Login, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            if (result.status === "error") {
                logout();
            }
          });
  }
  else if(user == null){
    logout();
  }

}
