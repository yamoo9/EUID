# PointerEvent

[PointerEvent](https://www.w3.org/TR/pointerevents2/#pointerevent-interface) 인터페이스는 접점 지오메트리(Geometry, 기하학), 이벤트를 생성한 장치 유형(예: `mouse`, `touch`, `pen` 등) 그리고 터치 스크린에 가해진 압력의 양(예: 펜 압력 등) 등과 같은 포인터에 의해 생성된 DOM 이벤트 상태를 나타냅니다.

포인터(Pointer)는 사용자의 입력 장치(마우스, 펜 또는 터치 스크린 접점 등)의 하드웨어 적인 표현입니다. 포인터는 터치 스크린과 같은 접촉 표면의 특정 좌표(또는 좌표 집합)를 대상(Target)으로 합니다.

포인터의 접점 테스트(Hit Test)는 브라우저가 포인터 이벤트의 대상 요소(Target Element)를 결정하는 데 사용하는 프로세스입니다. 일반적으로 이는 포인터의 위치(position)와 문서에 있는 요소의 시각적 레이아웃(Visual Layout)을 고려하여 결정됩니다.

## 브라우저 호환성(Browser compatibility)

- Chrome
- Edge
- IE 11+
- Safari
- Opera

## 생성자(Contstructor)

[PointerEvent()](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent/PointerEvent) 생성자는 새로운 [PointerEvent](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent) 객체 인스턴스를 생성합니다.

### 포인터 이벤트 생성

포인터 이벤트를 생성할 때 전달할 수 인자 중 첫 번째 인자는 이벤트 타입을 설정하며 필수 전달인자 입니다.

```js
// event = new PointerEvent(type, PointerEventInit);
const moveEvent = new PointerEvent('pointermove');
```

두 번째 전달인자는 옵션(선택사항)입니다. 작성 방법은 다음과 같습니다.

```js
const downEvent = new PointEvent('pointerdown', {
  pointerId: 1,
  bubbles: true,
  cancelable: true,
  pointerType: 'touch',
  width: 100,
  height: 100,
  isPrimary: true,
});
```

## 속성(Properties)

포인터 이벤트 인터페이스의 모든 속성은 '읽기전용(readonly)' 입니다.

속성 | 설명
--- | ---
`pointerType` | 이벤트를 발생시킨 장치 유형(`mouse`, `pen`, `touch` 등)
`pointerId` | 이벤트를 발생시키는 포인터의 고유 식별자(ID)
`width` | 포인터 접촉 지오메트리의 너비(width)
`height` | 포인터 접촉 지오메트리의 높이(height)
`pressure` | 0 ~ 1 범위의 포인터 압력 값(하드웨어가 감지할 수 있는 최소/최대 압력)
`tangentialPressure` | -1 ~ 1 범위의 포인터 입력의 접선 압력. (0은 컨트롤의 중립 위치)
`tiltX` | Y - Z 평면과 포인터(예: 펜) 축과 Y축을 모두 포함하는 평면 사이의 평면 각도
`tiltY` | X - Z 평면과 포인터(예: 펜) 축과 X축을 모두 포함하는 평면 사이의 평면 각도
`twist` | 포인터의 주축을 중심으로 시계 방향으로 회전(예: 펜) 각도 (0~359)
`isPrimary` | 포인터가 이 포인터 유형의 기본 포인터를 나타내는지 여부


## 메서드(Methods)

메서드 | 설명
--- | ---
`getCoalescedEvents()` | PointerEvent에 전달 된 `pointermove` 이벤트에 병합 된 모든 인스턴스의 시퀀스를 반환합니다.


## 이벤트 타입(Event Types)

PointerEvent 인터페이스는 [MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent)와 [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)를 상속하며, 여러 이벤트 유형을 제공합니다. 어떤 이벤트가 발생했는지 확인하려면 이벤트 [`type`](https://developer.mozilla.org/en-US/docs/Web/API/Event/type) 속성을 통해 확인할 수 있습니다.

> <b>참고</b><br>
> 일반적으로 포인터 및 마우스 이벤트가 모두 전송됩니다. 포인터 이벤트를 사용하는 경우 `event.preventDefault()`를 호출하여 마우스 이벤트 또한 전송되지 않도록 해야 합니다.

이벤트 타입 | 설명
--- | ---
`pointerover` | 포인터가 대상 요소의 접촉 테스트 경계 안으로 이동할 때 이벤트 발생
`pointerenter` | `pointerover` 이벤트와 유사하나, `bubble`이 없다는 점이 다름
`pointerdown` | 포인터가 활성화(장치와 접촉) 되면 이벤트 발생
`pointermove` | 포인터가 좌표를 변경할 때 이벤트 발생
`pointerup` | 포인터가 비활성화 상태가 되면 이벤트 발생
`pointercancel` | 포인터가 이벤트를 더 이상 생성할 수 없을 경우, 이벤트 발생 (예: 장치 비활성화)
`pointerout` | 포인터가 대상 요소의 접촉 테스트 경계 밖으로 이동할 때 이벤트 발생
`pointerleave` | `pointerout` 이벤트와 유사
`gopointercapture` | 대상 요소가 포인터 캡처를 수신할 때 이벤트 발생
`lostpointercapture` | 포인터에 대한 포인터 캡처가 해제된 후 이벤트 발생

## 글로벌 이벤트 핸들러(GlobalEventHandlers)

- [`onpointerover`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerover)
- [`onpointerenter`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter)
- [`onpointeredown`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointeredown)
- [`onpointeremove`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointeremove)
- [`onpointereup`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointereup)
- [`onpointerecancel`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerecancel)
- [`onpointerout`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerout)
- [`onpointerleave`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerleave)