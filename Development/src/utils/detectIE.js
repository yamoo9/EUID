/**
 * @function detectIE
 * @summary  IE 브라우저 버전 감지, IE가 아닌 브라우저 감지
 * @returns  {Number|Boolean} IE 버전 또는 IE가 아닌 브라우저의 경우, false 값 반환
 */
const detectIE = () => {
  const UA = window.navigator.userAgent;

  // IE 10
  // UA = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)'

  // IE 11
  // UA = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'

  const msie = UA.indexOf('MSIE ');

  if (msie > 0) {
    return parseInt(UA.substring(msie + 5, UA.indexOf('.', msie)), 10);
  }

  const trident = UA.indexOf('Trident/');

  if (trident > 0) {
    const rv = UA.indexOf('rv:');
    return parseInt(UA.substring(rv + 3, UA.indexOf('.', rv)), 10);
  }

  return false;
};

export default detectIE;
