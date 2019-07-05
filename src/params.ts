class Params {
  public DOMAIN: string;
  public PROTOCOL: number;
  public APP_SID: boolean | string;
  public PATH: string;
  public LANG: string;
  public AUTH_ID: string;
  public REFRESH_ID: string | null;
  public MEMBER_ID: string | null;
  public PLACEMENT: string | null;
  public IS_ADMIN: boolean;
  public AUTH_EXPIRES: number;
  public USER_OPTIONS: object | null;
  public APP_OPTIONS: object | null;
  public PLACEMENT_OPTIONS: object | null;

  constructor() {
	this.DOMAIN = '';
	this.PROTOCOL = 1;
	this.APP_SID = false;
	this.PATH = '';
	this.LANG = '';
	this.AUTH_ID = '';
	this.REFRESH_ID = null;
	this.MEMBER_ID = null;
	this.PLACEMENT = null;
	this.IS_ADMIN = false;
	this.AUTH_EXPIRES = 0;
	this.USER_OPTIONS = null;
	this.APP_OPTIONS = null;
	this.PLACEMENT_OPTIONS = null
  }
}

export default Params;
