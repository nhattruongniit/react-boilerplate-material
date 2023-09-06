import httpRequest from './httpRequest';

class AuthService {
  handleAuthentication = () => {
    const accessToken = this.getAccessToken();
    if (!accessToken || !this.isValidToken(accessToken)) return;
    this.setSession('accessToken', accessToken);
  };

  loginWithAuth0 = async (username: string, roleUser: string) => {
    const data = await httpRequest.post('/api/user/login', {
      data: {
        email: 'tony@gmail.com',
        password: '123456',
      },
    });
    this.setSession('accessToken', data.data.data.access_token);
    this.setSession('refreshToken', data.data.data.refresh_token);
    const userStringify = JSON.stringify({ username, roleUser });
    this.setSession('user', userStringify);
    return {
      user: username,
      role: roleUser,
    };
  };

  loginWithToken = async () => {
    return {
      user: 'tonynguyen',
    };
  };

  setSession = (key: string, accessToken: string) => {
    localStorage.setItem(key, accessToken);
  };

  logOut = () => {
    localStorage.clear();
  };

  getUser = () => {
    const user = localStorage.getItem('user') || '';
    return user;
  };

  getAccessToken = () => localStorage.getItem('accessToken');

  isAuthenticated = () => !!this.getAccessToken();

  isValidToken = (accessToken: string | null) => {
    const expireTime = 1606275140.897;
    if (!accessToken) return false;

    const currentTime = Date.now() / 1000;

    return expireTime < currentTime;
  };
}

const authService = new AuthService();

export default authService;
