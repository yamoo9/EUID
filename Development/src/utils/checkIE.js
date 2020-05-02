import detectIE from './detectIE';

export default function checkIE() {
  const html = document.documentElement;
  const preHtmlClasses = html.getAttribute('class') || '';
  const isIEVersion = detectIE();

  // IE 11 이하 브라우저일 경우 'old-ie' 클래스 속성 추가
  if (isIEVersion !== false && isIEVersion <= 11) {
    html.setAttribute('class', `${preHtmlClasses} old-ie`.trim());
  }
}
