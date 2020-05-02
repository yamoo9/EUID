/* 
  Promise 라이프 사이클 훅 (https://mzl.la/mdnPromise)
  ----------------------------------------------------------
  - 대기(pending) : 이행하거나 거부되지 않은 초기 상태.
  - 이행(fulfilled) : 연산이 성공적으로 완료됨.
  - 거부(rejected) : 연산이 실패함. 
*/

/** ------------------------------------------------------------------------
 * API (Firebase 리얼 타임 데이터베이스)
 */
const { REACT_APP_API: api } = process.env;

/** ------------------------------------------------------------------------
 * 액션 타입(상수)
 */
export const FETCH_EUID_PENDING = '이듬 / 데이터 패치 로딩 중...';
export const FETCH_EUID_FULFILLED = '이듬 / 데이터 패치 성공 :D';
export const FETCH_EUID_REJECTED = '이듬 / 데이터 패치 실패 :(';

/** ------------------------------------------------------------------------
 * 액션 크리에이터(생성) 함수
 */
export const fetchEuidDataAsync = (resource = '') => async (dispatch) => {
  // 팬딩(pending) 액션 전달
  dispatch({ type: FETCH_EUID_PENDING });
  try {
    // 비동기 통신 요청
    const response = await fetch(`${api}${resource}.json`);
    const json = await response.json();

    // 글로벌 내비게이션 데이터(navigationList) 일부 데이터 수정
    // 서브 메뉴를 가진 과정 링크의 자식들(children) 속성에 과정(배열) 할당
    json.navigationList.course.children = json.courses;

    // 통신 성공 시, 풀필드(fulfilled) 액션 전달
    dispatch({ type: FETCH_EUID_FULFILLED, json });
  } catch (error) {
    // 통신 실패 시, 리젝티트(rejected) 액션 전달
    dispatch({ type: FETCH_EUID_REJECTED, error });
  }
};
