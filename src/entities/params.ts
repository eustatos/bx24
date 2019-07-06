import IAuth from './auth';

class Params {
  public DOMAIN?: string;
  public PROTOCOL?: number;
  public APP_SID?: string;
  public PATH?: string;
  public LANG?: string;
  public AUTH_ID?: string;
  public REFRESH_ID?: string | null;
  public MEMBER_ID?: string | null;
  public PLACEMENT?: string | null;
  public IS_ADMIN?: boolean;
  public AUTH_EXPIRES?: string;
  public USER_OPTIONS?: object | null;
  public APP_OPTIONS?: object | null;
  public PLACEMENT_OPTIONS?: object | null;
  private _authExpires?: number;

  public setAuthExpires(value: string): void {
    const currentTime: number = Date.now();
    this._authExpires = currentTime + parseInt(value, 10) * 1000;
  }

  public getAuthExpires(): number | undefined {
    return this._authExpires;
  }

  public getAuth(): IAuth {
    return {
      ACCESS_TOKEN: this.AUTH_ID,
      DOMAIN: this.DOMAIN,
      EXPIRES_IN: this._authExpires,
      MEMBER_ID: this.MEMBER_ID,
      REFRESH_TOKEN: this.REFRESH_ID,
    };
  }

}

export default Params;
