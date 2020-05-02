# Touch Action

`touch-action` CSS 속성은 터치 스크린 사용자가 요소의 영역을 조작 할 수 있는 방법을 설정합니다(예: 브라우저에 내장된 기능을 확대/축소).

```css
.touch-element {

  /* 키워드 값 */
  touch-action: auto; /* 기본 값 */
  touch-action: none;
  touch-action: pan-x;
  touch-action: pan-left;
  touch-action: pan-right;
  touch-action: pan-y;
  touch-action: pan-up;
  touch-action: pan-down;
  touch-action: pinch-zoom;
  touch-action: manipulation;

  /* 글로벌(전역) 값 */
  touch-action: inherit;
  touch-action: initial;
  touch-action: unset;

}
```

## 설정 가능한 요소

다음을 제외 한 모든 요소에 적용 가능.

- 인라인 요소
- 테이블 행
- 테이블 행 그룹
- 테이블 열
- 테이블 열 그룹

## 상속 여부

상속 되지 않음.

## 속성 설명

기본적으로 패닝(상,하,좌,우 이동 또는 스크롤링) 및 핀칭(Pinching, 꼬집기) 제스처는 브라우저에서만 처리됩니다. [Pointer_events](https://papago.naver.net/apis/site/proxy?data=%5EvsH54IJkRrlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyLv9OHRxiHT9coaEypy9yqzIhqUZ)를 사용하는 애플리케이션은 브라우저가 터치 제스처를 처리하기 시작할 때 [pointercancel](https://papago.naver.net/apis/site/proxy?data=qjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9KMJViEKMyoaEmY3OinJ50MKWwLJ5wMJjvsKOQrlW1pzjvBvWbqUE) 이벤트를 전달 받습니다.

브라우저에서 처리해야 할 제스처를 명시적으로 지정 함으로써 애플리케이션은 [pointermove](https://papago.naver.net/apis/site/proxy?data=ivWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyLv9QH1ZiI2IvY0I2MJ50pl9jo2yhqTIloJ92MFW9JmV0rlW1pzjvB), [pointerup](https://papago.naver.net/apis/site/proxy?data=4JViEKMyoaEmY3OinJ50MKW1pPW9rlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9KM) 이벤트를 감지에 따른 동작을 제공할 수 있습니다.
 [Touch_events](https://papago.naver.net/apis/site/proxy?data=Qv9OHRxiIT91L2usMKMyoaEmVa1XrlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyL)를 사용하는 애플리케이션은 [preventDefault()](https://papago.naver.net/apis/site/proxy?data=rDvsGO2ZQ5wrlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyLv9OHRxiEKMyoaDipUWyqzIhqREyMzS1oU)를 호출하여 제스처의 브라우저 기본 처리를 사용하지 않도록 설정하지만, 이벤트 리스너가 호출되기 전 브라우저가 애플리케이션의 `touch-action` 설정이 있는지 확인합니다.

제스처가 시작되면 브라우저가 `touch-action` 속성 값, 터치한 요소와 그 부모(예: 스크롤 요소를 처음 포함하는 경우)와 교차합니다. 요컨대 `touch-action`은 일반적으로 사용자 동작이 있는 최상위 요소에만 적용되며, 포함된 요소(자식 또는 자손)에 명시적으로 설정할 필요가 없습니다.

> 제스처가 시작되면 `touch-action`은 현재 제스처에 영향을 미치지 않습니다.

## 문법

`touch-action`은 다음과 같이 설정합니다.

- [auto](https://papago.naver.net/apis/site/proxy?data=%5BVa1jrlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyLv9QH1ZiqT91L2tgLJA0nJ9h#auto), [none](https://papago.naver.net/apis/site/proxy?data=%5BVa1jrlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyLv9QH1ZiqT91L2tgLJA0nJ9h#none), [manipulation](https://papago.naver.net/apis/site/proxy?data=%5BVa1jrlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyLv9QH1ZiqT91L2tgLJA0nJ9h#manipulation) 키워드 중 하나를 사용하거나,
- [pan-x](https://papago.naver.net/apis/site/proxy?data=%5BVa1jrlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyLv9QH1ZiqT91L2tgLJA0nJ9h#pan-x), [pan-left](https://papago.naver.net/apis/site/proxy?data=%5BVa1jrlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyLv9QH1ZiqT91L2tgLJA0nJ9h#pan-keywords), [pan-right](https://papago.naver.net/apis/site/proxy?data=%5BVa1jrlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyLv9QH1ZiqT91L2tgLJA0nJ9h#pan-keywords) 키워드 중 하나, 또는 [pan-y](https://papago.naver.net/apis/site/proxy?data=%5BVa1jrlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyLv9QH1ZiqT91L2tgLJA0nJ9h#pan-y), [pan-up](https://papago.naver.net/apis/site/proxy?data=%5BVa1jrlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyLv9QH1ZiqT91L2tgLJA0nJ9h#pan-keywords), [pan-down](https://papago.naver.net/apis/site/proxy?data=%5BVa1jrlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyLv9QH1ZiqT91L2tgLJA0nJ9h#pan-keywords) 키워드 중 하나<br>그리고 선택적으로 [pinch-zoom](https://papago.naver.net/apis/site/proxy?data=%5BVa1jrlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyLv9QH1ZiqT91L2tgLJA0nJ9h#pinch-zoom) 키워드를 추가

### 값

#### `auto`

모든 상,하,좌,우 이동(panning) 및 확대/축소(zooming) 제스처의 브라우저 처리를 활성화 합니다.

#### `none`

모든 상,하,좌,우 이동(panning) 및 확대/축소(zooming) 제스처의 브라우저 처리를 비활성화 합니다.

#### `pan-x`

한 손가락 수평 패닝(좌,우) 제스처만 활성화 합니다. (`pan-y`, `pan-up`, `pan-down` 또는 `pinch-zoom`과 조합 가능)

#### `pan-x`

한 손가락 수평 패닝(좌,우) 제스처만 활성화 합니다. (`pan-y`, `pan-up`, `pan-down` 또는 `pinch-zoom`과 조합 가능)

#### `pan-y`

한 손가락 수직 패닝(상,하) 제스처만 활성화 합니다. (`pan-x`, `pan-left`, `pan-right` 또는 `pinch-zoom`과 조합 가능)

#### `manipulation`

패닝, 핀치 줌 제스처를 활성화 하지만, 더블 탭과 같은 비 표준 제스처는 비활성화 됩니다. 더블 탭을 사용하지 않도록 설정하면 사용자가 화면을 누를 때 클릭 이벤트 생성을 지연시킬 필요가 없습니다. 이것은 `pan-x pan-y pinch-zoom`을 간추린 별칭(alias) 입니다.

#### `pan-left`,`pan-right`,`pan-up`,`pan-down`

지정된 방향으로 스크롤 하는 것을 시작하는 한 손가락 제스처를 활성화 합니다. 스크롤이 시작된 후에도 방향이 바뀔 수 있습니다. 참고로 "위로" 스크롤(`pan-up`) 함은 사용자가 화면 표면에서 손가락을 아래로 끌고 있음을 의미하며, 마찬가지로 "왼쪽으로" 스크롤(`pan-left`)도 사용자가 손가락을 오른쪽으로 끌고 있음을 의미합니다. 보다 단순한 표현이 있는 경우를 제외하고는 여러 방향을 조합할 수 있습니다. (예: "`pan-left pan-right`"는 `pan-x`가 더 간단하므로 유효하지 않지만, "`pan-left pan-down`"은 유효)


#### `pinch-zoom`

페이지의 여러 손가락 패닝, 확대/축소 제스처를 활성화 합니다. (모든 `pan-*` 값과 조합 가능)

## 구문

```css
auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation
```

## 예

가장 일반적인 사용 방법은 맵(map)이나 게임 표면(game surface)과 같은 자체적인 드래깅(dragging) 및 확대/축소(zooming) 동작을 제공하는 요소(및 해당 하위 항목)에서 모든 제스처를 사용하지 않도록 설정하는 것입니다.

```html
<div id="map"></div>
```

```css
#map {
  height: 400px;
  width: 400px;
  background: blue;
  touch-action: none;
}
```

## 접근성 이슈

`touch-action: none` 설정은 브라우저 확대/축소 제스처를 작동하지 않도록 합니다.
이 설정으로 인해 저시력 사용자가 페이지 콘텐츠를 확대/축소 하여 읽고 이해하는데 방해가 될 수 있음에 주의하여야 합니다.

- [WCAG, 가이드라인 1.4 설명 이해 ← MDN](https://papago.naver.net/apis/site/proxy?data=tozqsI0AOEl9DMKWwMJy2LJWfMFAUqJyxMJkcozIsZF40K01un2IsnKEsMJSmnJIlK2Mipy91p2Ilp190o19mMJIsLJ5xK2uyLKWsL29hqTIhqS9cozAfqJEcozqsp2IjLKWuqTyhM19zo3WyM3WiqJ5xK2Mlo21sLzSwn2qlo3IhMPW9rlW1pzjvBvWbqUEjpmbiY2EyqzIfo3Oypv5go3ccoTkuYz9lMl9yov1IHl9xo2AmY1qyLv9OL2Ayp3AcLzyfnKE5Y1IhMTIlp3EuozEc)
- [성공기준 1.4.4 이해하기 ← WCAG 2.0 이해](https://papago.naver.net/apis/site/proxy?data=bsGV0qSMvrlW1pzjvBvWbqUEjpmbiY3q3ql53Zl5ipzpiISViIH5REIWGIRSBERyBEl1KD0SUZwNiqzymqJSfYJS1MTyiYJAioaElLKA0YKAwLJkyYzu0oJjv)

## 브라우저 호환성

- Chrome
- Edge
- IE 11
- Firefox
- Safari


