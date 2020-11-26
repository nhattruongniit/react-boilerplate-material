import { IAppState } from './IAppState';
import { IAuthState } from './IAuthState';

type IRootState = {
  app: IAppState;
  auth: IAuthState;
};

export default IRootState;
