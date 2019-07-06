import Params from '../entities/params';

/**
 * 
 * @param windowName 
 * @param params 
 */
function parseWindowName(windowName: string, params: Params): void {
  const q = windowName.split('|');
  params.DOMAIN = q[0].replace(/\:(80|443)$/, '');
  params.PROTOCOL = parseInt(q[1], 10) || 0;
  params.APP_SID = q[2];
}

export default parseWindowName;
