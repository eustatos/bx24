interface IAuth {
  APP_OPTIONS: string[];
  AUTH_EXPIRES: string;
  AUTH_ID: string;
  DOMAIN: string;
  FIRST_RUN: boolean;
  INSTALL: boolean;
  IS_ADMIN: boolean;
  LANG: string;
  MEMBER_ID: string;
  PATH: string;
  PLACEMENT: string;
  PLACEMENT_OPTIONS: string[];
  PROTOCOL: number;
  REFRESH_ID: string;
  USER_OPTIONS: string[];
}

export default IAuth;
