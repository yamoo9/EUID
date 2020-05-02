// 비공개 키
const _loading = Symbol('loading');
const _json = Symbol('json');
const _error = Symbol('error');

/**
 * @class EuidApi
 * @summary API(Firebase 데이터베이스) 
 */
const EuidApi = class {
  /* 생성자 ------------------------------------------------------------ */
  constructor() {
    // 상태 (비공개)
    this[_loading] = false;
    this[_error] = false;
    this[_json] = null;
  }

  /* 클래스 멤버 -------------------------------------------------------- */
  static apiUrl = 'https://euid-blended-learning.firebaseio.com/euid';

  /* 인스턴스 멤버 ------------------------------------------------------- */
  // 초기화
  init(callbacks) {
    // Promise 반환
    // .then() 구문으로 연결 사용 가능
    return this._fetchData(null, callbacks);
  }
  // 데이터 패치
  async _fetchData(apiUrl, callbacks) {
    // 로딩 상태: true
    this[_loading] = true;

    // 로딩 콜백 함수 실행
    callbacks && callbacks.loading(this.state);

    try {
      // 비동기 통신
      const response = await fetch(
        `${EuidApi.apiUrl}${apiUrl ? `/${apiUrl}` : ''}.json`
      );
      const json = await response.json();
      // 응답 받은 데이터: json
      this[_json] = json;
      // 로딩 상태: false
      this[_loading] = false;
      // 성공 콜백 함수 실행
      callbacks && callbacks.success(this.state);
    } catch (error) {
      // 로딩 상태: false
      this[_loading] = false;
      // 오류 상태 매시지: error.message
      this[_error] = error.message;
      // 오류 콜백 함수 실행
      callbacks && callbacks.error(this.state);
    }

    // 상태(state) 반환
    return this.state;
  }

  getRwdSettings(callbacks) {
    return this._fetchData('RWD_CAROUSEL_SETTINGS', callbacks);
  }
  getCampaigns(callbacks) {
    return this._fetchData('campaigns', callbacks);
  }
  getCourses(callbacks) {
    return this._fetchData('courses', callbacks);
  }
  getFaqs(callbacks) {
    return this._fetchData('faqs', callbacks);
  }
  getNavigationList(callbacks) {
    return this._fetchData('navigationList', callbacks);
  }
  getReviews(callbacks) {
    return this._fetchData('reviews', callbacks);
  }
  getShowcases(callbacks) {
    return this._fetchData('showcases', callbacks);
  }
  getOpeningDay(callbacks) {
    return this._fetchData('openingDay', callbacks);
  }

  // 게터(GETTER) 함수
  // 상태(읽기 전용) 반환
  get state() {
    // 반환 값
    return {
      json: this[_json],
      loading: this[_loading],
      error: this[_error],
    };
  }
};

export default new EuidApi();
