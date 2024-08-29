import { jwtDecode } from "jwt-decode";

export const getSessionToken = () =>{
    const sessionToken = sessionStorage.getItem('token');
      const data = sessionToken
      const decodedata = sessionToken?jwtDecode(sessionToken):null
      console.log(decodedata);
      
      let token = data || null
      return token
  }


  