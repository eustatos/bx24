interface IAuth {
  ACCESS_TOKEN?: string;
  REFRESH_TOKEN?: string | null;
  EXPIRES_IN?: number;
  DOMAIN?: string;
  MEMBER_ID?: string | null;
}

export default IAuth;
