import auth0, { Auth0Error, Auth0DecodedHash } from 'auth0-js';

// configs
import { PATH_NAME } from 'configs';

// helpers
import { parseJwt } from 'helpers';

// types
import { IUser } from 'models/IUser';

interface IAuth0DecodedHash extends Auth0DecodedHash {
  idToken: string;
  expiresIn: number;
}

class AuthService {
  auth0: any = null;

  constructor() {
    this.auth0 = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN,
      clientID: process.env.REACT_APP_AUTH0_CLIENTID,
      redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
      responseType: 'token id_token',
      scope: 'openid profile email',
    });
  }

  handleAuthentication = () => {
    this.auth0.parseHash((err: Auth0Error, authResult: IAuth0DecodedHash) => {
      if (err) {
        window.location.replace(PATH_NAME.LOGIN);
        return;
      }

      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);

        const userRole = authResult.idTokenPayload.role;

        if (userRole && userRole === 'GUEST') {
          localStorage.removeItem(process.env.REACT_APP_KEY_TOKEN);
          localStorage.removeItem(process.env.REACT_APP_KEY_EXPIRED_DATE);
          window.location.replace(PATH_NAME.ERROR_403);
          return;
        }
        window.location.replace(PATH_NAME.ROOT);
      }
    });
  };

  login() {
    this.auth0.authorize();
  }

  setSession = (authResult: IAuth0DecodedHash) => {
    const expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
    localStorage.setItem(process.env.REACT_APP_KEY_TOKEN, authResult.idToken);
    localStorage.setItem(process.env.REACT_APP_KEY_EXPIRED_DATE, expiresAt);
  };

  logOut = () => {
    this.auth0.logout({
      returnTo: window.location.origin,
    });
    localStorage.clear();
  };

  getUser = () => {
    const user: IUser | null = parseJwt(this.getAccessToken());
    return user;
  };

  getAccessToken = () => localStorage.getItem(process.env.REACT_APP_KEY_TOKEN);

  isAuthenticated = () => {
    const expiresAt = Number(localStorage.getItem(process.env.REACT_APP_KEY_EXPIRED_DATE));
    return new Date().getTime() < expiresAt;
  };
}

const authService = new AuthService();

export default authService;
