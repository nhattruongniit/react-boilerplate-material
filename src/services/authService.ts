class AuthService {
  handleAuthentication = () => {
    const acccessToken = this.getAccessToken();

    if (!acccessToken || !this.isValidToken(acccessToken)) return;

    this.setSession(acccessToken);
  };

  loginWithAuth0 = async (username: string) => {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';
    this.setSession(accessToken);
    return {
      user: username,
    };
  };

  loginWithToken = async () => {
    return {
      user: 'tonynguyen',
    };
  };

  setSession = (accessToken: string | null) => {
    if (!accessToken) {
      localStorage.removeItem('accessToken');
      return;
    }
    localStorage.setItem('accessToken', accessToken);
  };

  logOut = () => {
    this.setSession(null);
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
