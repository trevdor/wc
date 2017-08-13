import { 
  ACCESS_TOKEN_KEY,
  ID_TOKEN_KEY 
} from '../Constants';
import decode from 'jwt-decode';

export function getIdToken() {
  return localStorage.getItem(ID_TOKEN_KEY);
}

function getTokenExpirationDate(encodedToken) {
  const token = decode(encodedToken);
  if (!token.exp) { return null; }

  const date = new Date(0);
  date.setUTCSeconds(token.exp);

  return date;
}

export function isTokenExpired(token) {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
}

export function isLoggedIn() {
  const idToken = getIdToken();
  // console.log(`idToken: ${idToken}, expired: ${isTokenExpired(idToken)}`);
  // console.log(`isLoggedIn? ${idToken && !isTokenExpired(idToken)}`);
  return idToken && !isTokenExpired(idToken);
}
