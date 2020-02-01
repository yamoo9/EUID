# ![React CheatSheet 2020](./ReactCheatShehtCover.jpg)

React를 마스터 하는 데 필요한 개념과 기술에 대한 치트 시트 입니다.
이 치트 시트의 목표는 React 전문 개발자로서 지식과 활용 패턴을 명확하고 간결하게 제시하는 것입니다.
각 부분은 의미있는 설명과 실질적인 예를 보여줌으로써 많은 도움이 되길 기대합니다.

<br>

> <b>잠깐! 🤔</b><br><br>이 치트 시트는 <b>함수 컴포넌트 중심으로 기술</b>되어 있습니다. 2018년 출시된 React 훅(Hooks)으로 인해 함수 컴포넌트 만으로도 React 앱을 만들 수 있게 되었기 때문입니다. 하지만 클래스 컴포넌트 사용이 익숙하다면 꼭 React 훅을 사용할 필요는 없습니다.

> <b>코드를 즉시 가져다 쓰길 원한다면?</b><br>
> [React Cheatsheet](https://devhints.io/react)를 참고하세요. 😎

<br>

## 목차

1. __핵심 개념 (Core Concepts)__
    - [1-1. React 요소와 JSX](#1-1-react-요소element--jsx)
    - [1-2. 컴포넌트와 props](#1-2-react-컴포넌트component--전달-속성props)
    - [1-3. 리스트와 Key](#1-3-리스트list--키key)
    - [1-4. 이벤트와 이벤트 핸들러](#1-4-이벤트events--이밴트-핸들러event-handler)
1. __React 훅 (Hooks)__
    - [2-1. 상태 & `useState()` 훅](#2-1-상태state--usestate-훅)
    - [2-2. 사이드 이펙트 & `useEffect()` 훅](#2-2-사이드-이펙트side-effect--useeffect-훅)
    - [2-3. 성능 & `useCallback()` 훅](#2-3-성능performance--usecallback-훅)
    - [2-4. 메모이제이션 & `useMemo()` 훅](#2-4-메모이제이션memoization--usememo-훅)
    - [2-5. 참조 & `useRef()` 훅](#2-5-참조refs--useref-훅)
1. __훅 고급 활용 (Advanced Hooks)__
    - [3-1. 컨텍스트 & useContext() 훅](#3-1-컨텍스트context--usecontext-훅)
    - [3-2. 리듀서 & useReducer() 훅](#3-2-리듀서reducers--usereducer-훅)
    - [3-3. 사용자 정의 훅 (Custom Hooks)](#3-3-사용자-정의-훅-custom-hooks)
    - [3-4. 훅 작성 규칙 (Rules)](#3-4-훅-작성-규칙-rules-of-hooks)

<br>

## 1. Core Concepts

### 1-1. React 요소(Element) & JS(X)

다음 코드는 React 요소를 작성하는 기본 구문입니다.

```jsx
// JSX를 사용하면 JavaScript에서 HTML을 작성할 수 있습니다.
// 웹 표준 HTML 요소(예: <div>, <span>, <h1> ~ <h6>, <form>, <input/> 등)를 사용할 수 있습니다.
<div>Hello React</div>
```

JSX는 React 요소를 표현하는 식(Expression) 입니다.

```jsx
// JSX는 표현 식(Expression)으로 변수에 할당 할 수 있습니다.
const greeting = <div>안녕! React</div>;

// 또는 조건에 따라 렌더링을 달리 할 수 있습니다.
const isNewToReact = true;

function sayGreeting() {
  if (isNewToReact) {
    return greeting;
  } else {
    return <div>React 멋짐!</div>
  }
}
```

JSX를 사용하면 표현 식을 중첩 할 수 있습니다.

```jsx
const year = 2020;

// 중괄호({}) 안에 JS 표현 식을 삽입 할 수 있습니다.
// ※ 객체를 삽입 하려고 하면 오류가 발생합니다.
const greeting = <div>안녕! React 치트 시트 {year}</div>;
```

JSX를 사용해 요소를 중첩 할 수 있습니다.

```jsx
// 여러 줄에 JSX를 작성하려면 괄호 ()로 묶습니다.
const greeting = (
  // '부모' 또는 '자식' 요소는 HTML에서와 마찬가지로
  // JSX 요소를 서로 연관하여 설명하는 방법입니다.

  // <div>는 부모 요소입니다.
  <div>
    {/* <h1>과 <p>는 자식 요소입니다. */}
    <h1>안녕!</h1>
    <p>React를 겪하게 환영해!</p>
  </div>
);
```

HTML과 JSX의 구문은 약간 다릅니다.

```jsx
// 내용을 포함하지 않는 HTML 요소는 <input> (HTML)이 아닌, <input /> (JSX)로 작성해야 합니다.
<input name="email" />

// 속성 이름은 유효한 JS 변수 이름 작성 규칙을 따라야 하며, camelCase 방식으로 작성합니다.
// 'class' (HTML) 대신, 'className'을 사용해야 합니다.
<button className="button is-save">저장</button>

// 내용을 포함하지 않는 React 요소는 닫는 태그(</ReactElement>)를 사용하지 않아도 됩니다.
<ReactElement/>
```

기본적으로 React 웹 앱은 3가지가 필요합니다.

- 앱을 렌더링 하기 위한 `ReactDOM.render()`
- React 요소(JSX 활용 권장)
- 앱을 마운트 할 DOM 요소

```jsx
// NPM을 사용할 경우, import 구문을 사용합니다.
import React from "react";
import ReactDOM from "react-dom";

// React 요소(JSX)
const greeting = <h1>안녕! React</h1>;

// ReactDOM.render(React 요소, 실제 DOM 요소 노드)
ReactDOM.render(greeting, document.getElementById("app"));
```

[↑ 목차 이동](#목차)

### 1-2. React 컴포넌트(Component) & 전달 속성(props)

React 컴포넌트를 작성하는 일반적인 구문입니다. (함수 또는 클래스 타입으로 구분)

```jsx
import React from "react";

// 컴포넌트 타입: 함수
function Header() {
  // 일반 JS 함수와 달리 함수 컴포넌트 이름의 첫 글자는 대문자로 작성합니다.
  return <h1>안녕! React</h1>;
}

// ES6 화살표 함수로 작성할 수도 있습니다.
const Header = () => <h1>안녕! React</h1>;



// 컴포넌트 타입: 클래스
class Header extends React.Component {
  // 클래스 컴포넌트는 함수 컴포넌트 보다 많은 상용구(boilerplate)를 사용합니다.
  // (extends 및 render 메서드 등)
  render() {
    return <h1>안녕! React</h1>;
  }
}
```

컴포넌트는 JSX 구문을 사용해 인스턴스(요소)를 생성합니다.

```jsx
// 함수 컴포넌트를 일반 JS 함수처럼 호출하지 않습니다.
// JSX를 사용해 함수의 결과를 반환(return) 합니다.
const Header = () => <h1>안녕! React</h1>;

// 그리고 커스텀 React 요소(JSX)로 사용합니다.
ReactDOM.render(<Header />, document.getElementById("app"));
// 렌더링: <h1>안녕! React</h1>
```

앱에서 컴포넌트를 재사용 할 수 있습니다.

```jsx
// '/' 경로(route)에서 표시되는 페이지 컴포넌트
function IndexPage() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

// '/about' 경로에서 표시되는 페이지 컴포넌트
function AboutPage() {
  return (
    <div>
      <Header />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
```

`props`를 사용해 데이터를 컴포넌트에 동적으로 전달할 수 있습니다.

```jsx
const username = "야무";

// props 라는 커스텀 '속성'을 추가 합니다.
ReactDOM.render(
  <Header username={username} />,
  document.getElementById("app")
);

// props는 모든 React 컴포넌트가 인자로 전달 받는 객체입니다.
function Header(props) {
  // 컴포넌트의 React 요소에 전달된 속성은
  // 컴포넌트 props 객체의 속성이 됩니다.
  return <h1>안녕! {props.username}</h1>;
}
```

전달 된 `props`를 직접 변경할 수 없습니다.

```jsx
// 컴포넌트는 이상적으로 순수한 함수 여야 합니다.
// 즉, 모든 입력에 대한 동일한 출력이 기대되어야 합니다.

// props로는 다음을 수행할 수 없습니다.
function Header(props) {
  // 컴포넌트는 전달 받은 props 객체를 변경할 수 없으며 읽을 수만 있습니다.
  // ※ 전달 받은 데이터를 수정하려면? state를 사용해야 합니다.
  props.username = "데레사"; // ❌
  return <h1>안녕 {props.username}</h1>;
}
```

`props.children`은 요소 또는 컴포넌트를 다른 컴포넌트에 `props`로 전달할 경우 유용합니다.

```jsx
// React 요소(또는 컴포넌트)를 props로 전달할 수 있습니다.
// props.children 이라는 특수한 속성으로 사용 됩니다.
function Layout(props) {
  return <div className="container">{props.children}</div>;
}

// props.children을 통해 동일한 컴포넌트(예: Layout 컴포넌트)를 
// 다른 컴포넌트(예: 페이지 컴포넌트) 간 공유할 수 있어 유용합니다.
function IndexPage() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Footer />
    </Layout>
  );
}

function AboutPage() {
  return (
    <Layout>
      <About />
      <Footer />
    </Layout>
  );
}
```

if문 대신 3항 연산 식 또는 논리 곱/합 연산자를 활용하여 컴포넌트를 조건 부로 화면에 렌더링 할 수 있습니다.

```jsx
// if 문을 사용해 조건 부로 렌더링을 처리할 수도 있지만
// 3항 연산자 식을 사용하면 JSX에서 손쉽게 조건 처리할 수 있습니다.
function Header() {
  const isAuth = checkAuth();
  return (
    <nav>
      <Logo />
      {/* isAuth 값이 true일 경우 AuthLinks 컴포넌트를 표시하고, 아닐 경우 Login 표시 */}
      {isAuth ? <AuthLinks /> : <Login />}
      {/* isAuth 값이 true인 경우 Greeting 컴포넌트 표시 */}
      {isAuth && <Greeting />}
    </nav>
  );
}
```

`<React.Fragment>`는 DOM에 불 필요한 요소를 추가하지 않고 여러 컴포넌트를 묶어 화면에 렌더링 하기 위한 특수 컴포넌트이며, 조건 부 렌더링에서도 활용 할 수 있습니다. 

```jsx
// 앞서 다룬 isAuth 조건 처리 구문을 개선할 수 있습니다.
function Header() {
  const isAuth = checkAuth();
  return (
    <nav>
      <Logo />
      {/* 2개 이상의 컴포넌트를 처리할 경우, <React.Fragment> 또는 <></>로 렌더링 처리해야 합니다. */}
      {isAuth ? (
        <>
          <AuthLinks />
          <Greeting />
        </>
      ) : <Login />}
    </nav>
  );
}
```

[↑ 목차 이동](#목차)

### 1-3. 리스트(List) & 키(Key)

`.map()`을 사용하면 데이터 집합(배열)을 순환(Loop) 하여 React 요소 집합을 만들 수 있습니다.

```jsx
const people = ['야무', '데레사', '지호'];
const peopleList = people.map(person => <p>{person}</p>);
```

`.map()`은 컴포넌트 또는 React 요소에도 사용됩니다.

```jsx
function App() {
  const people = ["야무", "데레사", "지아"];
  return (
    <ul>
      {/* {}를 사용해 반환 된 React 요소 집합을 보간 처리할 수 있습니다. */}
      {people.map(person => <Person name={person} />)}
    </ul>
  );
}

function Person({ name }) {
  // props에서 구조 분해 할당으로 'name' 속성을 추출하여 사용합니다.
  return <p>사용자 이름: {name}</p>;
}
```

순환 처리되는 각 React 요소는 특별한 `key` 속성이 필요합니다. React가 `.map()`으로 반복되는 각 요소를 추적 하려면 `key`가 필요하기 때문입니다. `key`가 없으면 데이터가 변경 될 때 요소를 업데이트 하는 방법을 파악하기가 어렵습니다. `key`는 각 요소를 명확히 구분할 수 있도록 고유 한 값을 사용해야 합니다.

```jsx
function App() {
  const people = ["야무", "데레사", "지호"];
  return (
    <ul>
      {/* 키(key)는 고유한 ID 값을 가져야 합니다. */}
      {people.map(person => <Person key={person} name={person} />)}
    </ul>
  );
}
```

```jsx
// 데이터 집합에 고유한 식별자인 ID가 포함되지 않은 경우,
// map()의 2번째 매개 변수를 사용하여 각 요소 인덱스를 가져와 사용할 수 있습니다.
function App() {
  const people = ["야무", "데레사", "야무"];
  return (
    <ul>
      {people.map((person, i) => <Person key={`${person}-{i}`} name={person} />)}
    </ul>
  );
}
```

[↑ 목차 이동](#목차)

### 1-4. 이벤트(Events) & 이밴트 핸들러(Event Handler)

React와 HTML 이벤트 처리는 다소 다릅니다.

```jsx
// 참고: 대부분 이벤트 핸들러 함수는 'handle' 접두사로 시작합니다.
function handleToggleTheme() {
  // 앱 테마를 변경하는 코드
}

// html에서 이벤트 속성 이름은 모두 소문자 입니다.
<button onclick="handleToggleTheme()">테마 변경</button>

// 하지만 JSX에서 이벤트 속성 이름은 camelCase로 표기합니다. 
// 그리고 중괄호({})를 사용해 함수 참조를 전달 설정합니다.
<button onClick={handleToggleTheme}>테마 변경</button>
```

알아야 할 가장 중요한 React 이벤트는 `onClick`과 `onChange` 입니다.

- `onClick`은 버튼 또는 링크 역할을 하는 JSX 요소의 클릭 이벤트를 처리합니다.
-  `onChange`는 사용자 입력이 필요한 키보드 이벤트를 처리합니다.

```jsx
function App() {
  function handleChange(event) {
    // onChange와 같은 이벤트에 이벤트 핸들러(함수)를 연결할 때 
    // 이벤트 데이터(객체)에 접근 할 수 있습니다.
    // event.target에서 입력한 텍스트 등을 가져올 수 있습니다.
    const inputText = event.target.value;
    const inputName = event.target.name;
  }

  function handleSubmit() {
    // 클릭 시, 특별한 경우가 아니면 이벤트 객체를 필요하지 않습니다.
  }

  return (
    <div className="form-control">
      <input name="userId" aria-label="사용자 ID" onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>전송</button>
    </div>
  );
}
```

[↑ 목차 이동](#목차)

## 2. React 훅(Hooks)

React 훅(Hooks)은 2018년 React에 추가된 새로운 기능으로 기존 클래스 컴포넌트에서만 되던 기능을 함수 컴포넌트에서도 사용할 수 있도록 만들어 줍니다.

### 2-1. 상태(State) & useState 훅

`useState` 훅은 함수 컴포넌트에 로컬 상태(state)를 제공합니다.

```jsx
import React from 'react';

// 상태 변수 생성
// 구문: const [상태 변수] = React.useState(기본값);
function App() {
  // 배열 변수를 사용하여 상태 변수를 선언합니다.
  const [framework] = React.useState('React');
  return <div>{framework}를 배웁니다.</div>;
}
```

React 패키지에서 별도로 `useState`를 추출하면  `React.useState` 대신 `useState`를 사용할 수 있습니다.

```jsx
import React, { useState } from "react";

function App() {
  const [framework] = useState("React");
  return <div>{framework}를 배웁니다.</div>;
}
```

`useState`는 또한 상태(state)를 업데이트 하는 Setter 함수를 제공합니다.

```jsx
function App() {
  // setter 함수는 항상 2번째로 구조화 된 값입니다.
  // setter 함수 이름 규칙은 'setStateVariable'입니다.
  const [framework, setFramework] = React.useState("React");
  return (
    <div>
      {/*setter 함수가 호출 될 때마다 상태가 업데이트 됩니다.*/}
      {/*앱 컴포넌트가 다시 렌더링 되어 새로운 상태를 표시합니다.*/}
      <button onClick={() => setFramework("Vue")}>
        사용 할 프레임워크를 Vue로 변경
      </button>
      <p>현재 배우고 있는 프레임워크는 {framework}입니다.</p>
    </div>
  );
}
```

`useState`는 단 하나의 함수 컴포넌트 안에서 여러 번 사용할 수도 있습니다.

```jsx
function App() {
  const [framework, setFramework] = React.useState("React");
  const [yearsExperience, setYearsExperience] = React.useState(0);

  return (
    <div>
      <button onClick={() => setFramework("Vue")}>
        사용 할 프레임워크를 Vue로 변경
      </button>
      <input
        type="number"
        value={yearsExperience}
        onChange={event => setYearsExperience(event.target.value)}
      />
      <p>현재 사용 중인 프레임워크는 {framework}입니다.</p>
      <p>{yearsExperience} 년간 사용 했습니다.</p>
    </div>
  );
}
```

`useState`는 원시(Primitive) 값 또는 객체(Object)를 값으로 하는 상태를 관리할 수 있습니다.

```jsx
function App() {
  // 원시 데이터 타입 외에도 객체 데이터 타입을 활용할 수 있습니다.
  const [developer, setDeveloper] = React.useState({
    framework: "",
    yearsExperience: 0
  });

  function handleChangeYearsExperience(event) {
    const years = event.target.value;
    // 전개 연산자를 사용하여 이전 상태 객체를 전달해야 합니다.
    setDeveloper({ ...developer, yearsExperience: years });
  }

  return (
    <div>
      {/* 이전 상태를 얻을 필요 없이, 전체 객체를 교체합니다. */}
      <button
        onClick={() =>
          setDeveloper({
            framework: "Vue",
            yearsExperience: 0
          })
        }
      >
        사용 할 프레임워크를 Vue로 변경
      </button>
      {/* 함수 참조를 전달 할 수도 있습니다. */}
      <input
        type="number"
        value={developer.yearsExperience}
        onChange={handleChangeYearsExperience}
      />
      <p>현재 사용 중인 프레임워크는 {developer.framework}입니다.</p>
      <p>{developer.yearsExperience} 년간 사용 했습니다.</p>
    </div>
  );
}
```

변경 될 상태가 이전 상태에 의존하는 경우, Setter 함수 안에서 이전 상태(prevState)를 제공하는 콜백 함수를 사용할 수 있습니다.

```jsx
function App() {
  const [developer, setDeveloper] = React.useState({
    framework: "",
    yearsExperience: 0,
    isEmployed: false
  });

  function handleToggleEmployment(event) {
    // 콜백 함수의 매개 변수 prevState를 통해 이전 상태 값을 가져올 수 있습니다.
    setDeveloper(prevState => {
      return { 
        ...prevState, 
        isEmployed: !prevState.isEmployed 
      }
    });
  }

  return (
    <button onClick={handleToggleEmployment}>고용 상태 전환</button>
  );
}
```

[↑ 목차 이동](#목차)

### 2-2. 사이드 이펙트(Side Effect) & useEffect 훅

`useEffect`를 사용하면 함수 컴포넌트에서 사이드 이펙트(Side Effect, 부작용)을 수행 할 수 있습니다.

- 사이드 이펙트란? 함수 영역 밖에서 일이 이루어 지는 것입니다.<br>예를 들어 API에서 데이터를 가져오거나, DOM 요소에 접근/조작 하는 것을 말합니다.
- 사이드 이펙트는 예측할 수 없으므로 React에서 관리되지 않으므로 부작용을 일으킬 소지가 있습니다.

`useEffect`는 다시 렌더링 될 때마다 실행되는 콜백 함수(Effect Function)를 허용합니다. 컴포넌트가 마운트(Mount) 되면 실행되며, `componentDidMount` 라이프 사이클 훅과 동일합니다.

```jsx
function App() {
  const [colorIndex, setColorIndex] = React.useState(0);
  const colors = ['blue', 'green', 'red', 'orange'];

  // 사이드 이펙트 코드(API 비동기 처리)
  // React가 아닌, 브라우저 API인 DOM을 사용해 접근, 조작합니다.
  // 상태가 업데이트 될 때마다, 앱이 다시 렌더링 되고 useEffect 콜백이 재 실행됩니다.
  React.useEffect(() => {
    document.body.style.backgroundColor = colors[colorIndex];
  });

  function handleChangeIndex() {
    const next = colorIndex > colors.length - 1 ? 0 : colorIndex + 1;
    setColorIndex(next);
  }

  return <button onClick={handleChangeIndex}>배경색 변경하기</button>;
}
```

컴포넌트가 업데이트 될 때마다 렌더링 과정에서 Effect 콜백 함수를 매번 재 실행하지 않으려면 2번째 인자 값으로 빈 배열(아이템이 없는)을 설정합니다.

```jsx
function App() {
  const [colorIndex, setColorIndex] = React.useState(0);
  const colors = ['blue', 'green', 'red', 'orange'];

  useEffect(
    () => {
      document.body.style.backgroundColor = colors[colorIndex];
    },
    // useEffect는 의존성 배열로 조건부 콜백 함수를 실행합니다.
    []
  );

  function handleChangeIndex() {
    const next = colorIndex > colors.length - 1 ? 0 : colorIndex + 1;
    setColorIndex(next);
  }

  // 버튼을 몇 번 클릭 하더라도 버튼이 작동하지 않습니다.
  // 의존성 배열에서 확인할 상태가 없기 때문에 최초 생성 과정(1회)에서만 실행됩니다.
  return <button onClick={handleChangeIndex}>배경색 변경하기</button>;
}
```

`useEffect`를 사용하면 의존성 배열로 조건부 효과를 수행 할 수 있습니다.
의존성 배열은 2번째 인자로 설정되며 배열 값 중 하나가 변경되면 Effect 콜백 함수가 다시 실행됩니다.

```jsx
function App() {
  const [colorIndex, setColorIndex] = React.useState(0);
  const colors = ['blue', 'green', 'red', 'orange'];

  useEffect(
    () => document.body.style.backgroundColor = colors[colorIndex], 
    // 의존성 배열 아이템으로 colorIndex를 추가하면,
    // colorIndex 값이 업데이트 될 때만 Effect 콜백 함수를 다시 실행합니다.
    [colorIndex]
  );

  function handleChangeIndex() {
    const next = colorIndex > colors.length - 1 ? 0 : colorIndex + 1;
    setColorIndex(next);
  }

  return <button onClick={handleChangeIndex}>배경색 변경하기</button>;
}
```

`useEffect`의 콜백 함수 안에서 함수를 반환하면 특정 Effect 구독을 취소(Unsubcribe) 할 수 있습니다.

```jsx
function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  React.useEffect(() => {
    // window 객체에 addEventListener()를 사용해 마우스 무브 이벤트 핸들러 연결
    // 구독(Subscribe)
    window.addEventListener("mousemove", event => {
      const { pageX, pageY } = event;
      // 마우스 포지션 정보 업데이트
      setMousePosition({ x: pageX, y: pageY });
    });
    
    // Effect 콜백 함수 안에서 함수를 반환하면
    // 컴포넌트가 언마운트(Unmount) 되었을 때, 마우스 무브 이벤트를 제거합니다.
    // 구독 취소(Unsubscribe)
    return () => {
      // ※ 이러한 과정이 필요한 이유는 연결 된 이벤트를 제거하지 않으면 오류가 발생하기 때문입니다.
      // 예: 참조 오류(RefererenceError)
      window.removeEventListener("mousemove", event => {
        const { pageX, pageY } = event;
        setMousePosition({ x: pageX, y: pageY });
      });
    };
  }, []);

  return (
    <div>
      <h1>마우스 위치 추적</h1>
      <p>
        X: {mousePosition.x}, Y: {mousePosition.y}
      </p>
    </div>
  );
}
```

#### useEffect를 사용한 데이터 페치(Fetch)

[Fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)를 사용하여 비동기 통신으로 데이터를 페치하는 것은 사이드 이펙트를 유발하므로 `useEffect` 훅 안에서 데이터 패치를 수행합니다. Fetch API는 기본적으로 [Promise](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)를 사용하므로 `then()` 메서드를 사용한 구문을 사용합니다.

```jsx
const endpoint = "https://api.github.com/users/yamoo9";

function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    // ES6 프로미스(Promise)를 활용한 콜백
    fetch(endpoint)
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);
}
```

만약 보다 간결한 처리를 위해 [비동기 함수(`async`/`await`)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/async_function) 구문을 사용할 경우 별도로 함수를 만들어 처리해야 합니다. Effect 콜백 함수는 비동기 처리할 수 없기 때문입니다.

```jsx
const endpoint = "https://api.github.com/users/yamoo9";

function App() {
  const [user, setUser] = React.useState(null);
  
  React.useEffect(() => getUser(), []);

  // ES8 비동기(Async) 함수를 활용한 콜백
  async function getUser() {
    const data = await (await fetch(endpoint)).json();
    setUser(data);
  }
}
```

[↑ 목차 이동](#목차)

### 2-3. 성능(Performance) & useCallback 훅

`useCallback`은 컴포넌트의 성능을 향상시키는 데 사용되는 훅입니다.
수시로 업데이트(렌더링) 되는 컴포넌트가 있을 경우, `useCallback` 훅은 컴포넌트를 렌더링 할 때 마다 컴포넌트 안의 콜백 함수를 다시 생성하지 않도록 만들어 줍니다. (성능 저하 방지 → 향상)

`useCallback` 훅은 의존성 배열에 등록된 아이템 중 하나가 변경 될 때만 다시 실행됩니다.

```jsx
function Timer() {
  // 함수 컴포넌트의 로컬 상태 및 Setter 함수
  const [time, setTime] = React.useState();
  const [count, setCount] = React.useState(0);

  // useEffect 훅은 의존성 배열 아이템(상태) 값이 변경될 때 마다
  // 컴포넌트를 다시 렌더링 합니다. (아래 코드는 0.3초 마다 업데이트)
  React.useEffect(
    () => {
      const currentTime = JSON.stringify(new Date(Date.now()));
      const timeout = setTimeout(() => setTime(currentTime), 300);
      return () => clearTimeout(timeout);
    }, 
    [time]
  );

  // useCallback으로 감싸지 않은 함수는 렌더링 될 때마다 다시 생성됩니다.
  // 아래 이벤트 핸들러는 버튼을 클릭할 때만 실행되면 되는 콜백 함수이므로 
  // 0.3초 마다 다시 생성되는 것은 비효율적 입니다. (성능 저하)
  // const handleIncreamentCount = () => {
  //   setCount(prevCount => prevCount + 1);
  // }

  // 그러므로 useCallback 훅을 사용해 콜백을 반환하여 
  // 렌더링 과정에서 불 필요하게 다시 생성되지 않도록 만들어야 합니다.
  const handleIncreamentCount = React.useCallback(
    () => setCount(prevCount => prevCount + 1),
    // 의존성 배열에 설정된 상태 또는 Setter 함수가 변경된 경우에만 재 실행됩니다.
    [setCount]
  );

  return (
    <div>
      <p>현재 시간: {time}</p>
      <p>카운트: {count}</p>
      <button
        onClick={handleIncreamentCount}
        aria-label="카운트 1 증가">
        +
      </button>
    </div>
  );
}
```

[↑ 목차 이동](#목차)

### 2-4. 메모이제이션(Memoization) & useMemo 훅

`useMemo` 훅은 `useCallback` 훅과 매우 유사하며 성능 향상을 위해 사용합니다. 차이점은 콜백 함수를 불 필요하게 생성하지 않도록 하기 위해 사용하는 `useCallback` 훅과 달리, 복잡하고 오래 걸리는 계산 결과를 저장할 때 사용합니다.

`useMemo` 훅을 사용하면 특정 입력에 대해 이미 계산된 값(오래 걸리는 계산 결과)을 '기억(Memoization)' 할 수 있습니다. (브라우저 [캐시(Cache)](https://developer.mozilla.org/ko/docs/Web/HTTP/Caching)를 떠올려 보세요.) `useMemo` 훅은 콜백 함수가 아니라, 계산 된 값을 반환합니다.

#### useCallback 훅과 useMemo 훅 비교

React 훅 | 목적 | 설명 | 반환 값
--- | --- | --- | ---
`useCallback` | 성능 향상 | 렌더링 시, 불 필요한 함수 재 생성 방지  | 콜백 함수
`useMemo` | 성능 향상 | 복잡하고 오래 걸리는 계산 처리 | 계산 된 값

<br>

```jsx
function App() {
  // 아래 'words' 배열에서 단어를 선택하는 로컬 상태
  const [wordIndex, setWordIndex] = useState(0);
  // 카운터 로컬 상태
  const [count, setCount] = useState(0);

  // 문자 수를 계산하는 데 사용 할 단어 집합(배열)
  const words = ['현재', '학습', '중인', '프레임워크는', 'react', '입니다.'];
  // 현재 단어 값을 할당하는 변수
  const word = words[wordIndex];

  // 매우 오랜 시간이 필요한 계산 시뮬레이션 함수
  function getLetterCount(word) {
    let i = 0;
    while (i < 1000000) i++;
    return word.length;
  }

  // useMemo 훅을 사용하지 않고 복잡 계산을 수행 한 경우
  // 컴포넌트 렌더링 시마다 매번 계산이 다시 수행되어야 합니다. (성능 저하)
  // const letterCount = getLetterCount(word);

  // useMemo 훅은 많은 컴퓨팅 리소스가 필요할 때 유용합니다. (캐싱 처리)
  // word 값이 바뀌지 않으면 복잡하고 오래 걸리는 계산을 다시 하지 않습니다.
  const letterCount = React.useMemo(
    () => getLetterCount(word), 
    [word]
  );

  // useMemo 훅을 사용하지 않으면?
  // 사용자에 의해 카운터 업데이트 함수가 실행 될 때 마다
  // word 값이 변경되지 않더라도 오랜 시간이 걸리는 함수가 실행 되어
  // 계산이 끝날 때까지 기다리는 문제가 발생합니다. (성능 저하)
  function handleChangeIndex() {
    const next = wordIndex + 1 === words.length ? 0 : wordIndex + 1;
    // word 업데이트 처리
    setWordIndex(next);
  }

  return (
    <div>
      <p>
        {word}는 {letterCount}개의 글자를 가집니다.
      </p>
      <button onClick={handleChangeIndex}>다음 단어</button>
      <p>카운터: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

[↑ 목차 이동](#목차)

### 2-5. 참조(Refs) & useRef 훅

참조(Reference)를 하는 `ref`는 모든 React 컴포넌트에서 사용할 수 있는 특수한 속성입니다.
`ref` 속성을 사용하면 컴포넌트가 마운트 될 때 요소 또는 컴포넌트에 대한 참조를 만들 수 있습니다.

함수 컴포넌트 안에서 `useRef` 훅을 사용하면 참조를 사용 할 수 있습니다. 컴포넌트의 가장 상위에 있는 `useRef`를 호출하고 반환 된 값을 참조하는 변수를 요소의 `ref` 속성 값으로 할당합니다.

참조를 만든 후에는 `current` 속성을 사용하여 요소의 속성을 수정 할 수 있습니다. 예를 들어 요소를 포커싱(Focusing) 하고 싶을 경우, `focus()` 메서드를 호출할 수 있습니다.

```jsx
function App() {
  const [query, setQuery] = React.useState('React 훅');
  
  // useRef에 기본값을 설정 할 수 있습니다.
  const searchInput = React.useRef(null);

  function handleClearSearch() {
    // 앱이 마운트 되면 현재 텍스트 입력을 참조합니다.
    // current 속성을 사용해 실제 DOM 요소 노드에 접근할 수 있습니다.
    const inputDomNode = searchInput.current;
    // 요소 노드의 값 변경
    inputDomNode.value = '';
    // 요소 노드 포커싱 처리
    inputDomNode.focus();
  }

  return (
    <form>
      <input
        type="text"
        {/* 요소 참조 설정 */}
        ref={searchInput}
        onChange={event => setQuery(event.target.value)} 
      />
      <button type="submit">검색</button>
      <button
        type="button"
        onClick={handleClearSearch}>
        검색어 지움
      </button>
    </form>
  );
}
```

[↑ 목차 이동](#목차)

## 3. 훅 고급 활용 (Advanced Hooks)

앞서 다룬 기본 적인 훅 사용 방법을 넘어 고급 활용 방법을 살펴봅니다.

### 3-1. 컨텍스트(Context) & useContext 훅

컨텍스트를 함수 컴포넌트에서 활용하는 방법을 알아보기에 앞서 컴포넌트 간에 데이터를 공유할 때 발생할 수 있는 문제에 대해 이야기 해봅니다.

#### 컴포넌트 간 데이터 공유 시 발생하는 문제

React 앱의 규모가 커지면 부모(상위) 컴포넌트에서 복잡하게 중첩 된 자식(또는 자손) 컴포넌트에 데이터를 전달하기 위해 `props`를 여러 단계를 거쳐 내려 보내야 합니다. (Top → Down 흐름)

```jsx
function App() {
  // user 데이터를 Header 컴포넌트로 전달하려 합니다.
  const [user] = React.useState({ name: "야무" });

  // 내부에 Header 컴포넌트가 없으므로 Main 컴포넌트에 user 데이터를 전달합니다.
  return <Main user={user} />;
}

// App
//  ⬇︎
// Main
// 
// Header

const Main = ({ user }) => (
  <>
    {/* 전달 받은 user 데이터를 Header 컴포넌트에 전달합니다. */}
    <Header user={user} />
    <div>메인 콘텐츠</div>
  </>
);

// App
// 
// Main
//  ⬇︎
// Header

const Header = ({ user }) => (
  {/* 전달 받은 user 데이터를 사용해 데이터 바인딩 합니다. */}
  <header>환영합니다. {user.name}!</header>
);
```

컨텍스트는 부모 컴포넌트에서 여러 단계로 중첩 된 자식 컴포넌트에 직접 `props`를 전달할 때 유용합니다.

```jsx
// React.createContext()를 사용해 새로운 컨텍스트를 생성합니다. 
// 필요한 경우 기본값을 설정합니다. (예: null, {} 등)
const UserContext = React.createContext();

function App() {
  // user 데이터를 Header 컴포넌트로 전달하려 합니다.
  const [user] = React.useState({ name: "야무" });

  return (
    {/* 부모 컴포넌트 렌더링 코드를 <컨텍스트.공급자> 코드로 감싼 후, 전달 할 {값}을 설정합니다. */}
    <UserContext.Provider value={user}>
      <Main />
    </UserContext.Provider>
  );
}

const Main = () => (
  <>
    <Header />
    <div>메인 콘텐츠</div>
  </>
);

// 더 이상! 불 필요하게 Main 컴포넌트를 거쳐 user 속성을 전달 받을 필요가 없습니다.
const Header = () => (
  {/* <컨텍스트.소비자>를 통해 user 데이터를 공급자로 부터 직접 전달 받아 사용할 수 있습니다. */}
  {/* 아래 사용 된 React 패턴은 Render Props 입니다. */}
  <UserContext.Consumer>
    {
      user => <header>환영합니다. {user.name}!</header>
    }
  </UserContext.Consumer>
);
```

그러나 앞서 다룬 예제는 다소 복잡해 보이는 렌더 프롭(Render Props) 패턴을 사용합니다.
보다 간결한 구문으로 코드를 작성하고자 한다면? `useContext` 훅을 사용해 컨텍스트를 사용할 수 있습니다. (클래스 컴포넌트의 `contextType`과 동일)

```jsx
const Header = () => {
  // 컨텍스트 객체를 useContext 훅에 전달하면 
  // user 변수에 공급자로부터 전달 받은 값을 할당 할 수 있습니다.
  const user = React.useContext(UserContext);
  // 그러면 복잡한 <컨텍스트.소비자> 코드를 사용하지 않아도 됩니다.
  return <header>Welcome, {user.name}!</header>;
};
```

[↑ 목차 이동](#목차)

### 3-2. 리듀서(Reducers) & useReducer 훅

리듀서는 이전 `state` 객체와 `action` 객체를 전달 받아 새로운 `state` 객체를 반환하는 단순하고 예측 가능한 순수(pure) 함수입니다. 예를 들면 다음과 같습니다.

```js
// reducer 함수가 앱의 사용자 상태(state)를 관리한다고 가정해봅시다.
function reducer(state, action) {

  // switch 문을 사용하여 조건(전달 받은 action.type)에 따라 state를 업데이트 합니다.
  switch (action.type) {
    // 전달 받은 action.type이 'LOGIN'일 경우, 코드 실행
    case 'LOGIN':
      // 전달 된 데이터(action.payload)를 사용해 state를 업데이트 합니다.
      return { 
        username: action.payload.username, 
        isAuth: true 
      };
    // 전달 받은 action.type이 'SIGNOUT'일 경우, 코드 실행
    case 'SIGNOUT':
      return { 
        username: '', 
        isAuth: false 
      };
    default:
      // 앞의 조건에 해당되지 않는 경우, 이전 state를 반환
      return state;
  }
}
```

리듀서는 널리 사용되는 상태 관리 라이브러리 [Redux](https://redux.js.org/)에서 사용되는 상태 관리를 위한 강력한 패턴을 말합니다.

앞서 살펴 본 `useState` 훅은 함수 컴포넌트의 로컬 상태(local state)를 관리하기 위한 목적으로 사용하는 반면, 특정 컴포넌트가 아닌 앱 전체 상태(global state)를 관리하기 위해 `useReducer` 훅을 사용할 수 있습니다.

`useReducer`를 `useContext`와 함께 사용하면 데이터를 스토어에서 관리하고, 데이터를 필요로 하는 컴포넌트에 직접 전달 할 수 있습니다. 즉, `useReducer` + `useContext` 훅을 사용하면 앱의 전체 상태 관리 시스템으로 활용할 수 있습니다. (Redux 라이브러리 대체)

```jsx
// 초기 상태(데이터)
const initialState = { username: '', isAuth: false };

// 리듀서 함수
function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return { 
        username: action.payload.username, 
        isAuth: true 
      };
    case 'SIGNOUT':
      return initialState;
    default:
      return state;
  }
}

function App() {
  // useReducer 훅은 리듀서 함수, 초기 상태를 전달 받습니다.
  // state는 현재 상태 값을 참조하고 있습니다.
  const [state, dispatch] = useReducer(reducer, initialState);

  // dispatch 함수는 action 객체를 전달 받아 리듀서 함수를 호출 실행합니다.
  // ※ action 객체는 { type, payload } 형태를 가집니다. (payload는 옵션)
  function handleLogin() {
    dispatch({ type: 'LOGIN', payload: { username: 'Ted' } });
  }

  function handleSignout() {
    dispatch({ type: 'SIGNOUT' });
  }

  return (
    <>
      사용자 이름: {state.username}, 로그인 상태: {state.isAuth}
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleSignout}>로그 아웃</button>
    </>
  );
}
```

[↑ 목차 이동](#목차)

### 3-3. 사용자 정의 훅 (Custom Hooks)

필요한 경우 사용자가 직접 훅을 제작해 사용할 수 있습니다. 함수 컴포넌트의 React 훅은 
클래스 컴포넌트의 HOC(고차 컴포넌트) 또는 렌더 프롭(Render Props)와 같은 고급 패턴 보다 이해하기 쉽습니다.

아래 코드는 사이드 이펙트를 유발하는 비동기 처리를 위해 재사용 할 목적으로 만든 사용자 정의 훅입니다.

```jsx
// 비동기 통신을 통해 API 데이터를 가져와 페치(Fetch)하는 사용자 정의 훅입니다.
// ※ endpoint는 API URL을 전달 받는 매개 변수입니다.
function useAPI(endpoint) {
  const [value, setValue] = React.useState([]);

  // 의존성 상태가 없으므로 1회만 실행 됨
  React.useEffect(() => getData(), []);

  // 비동기 함수 getData
  async function getData() {
    const response = await fetch(endpoint);
    const data = await response.json();
    // 비동기 통신이 완료 되면, 상태 업데이트
    setValue(data);
  };

  // 변경된 상태 값 반환
  return value;
};
```

정의 된 사용자 정의 훅 `useAPI`를 사용해 반복적이고 복잡한 과정을 간단하게 처리할 수 있습니다.


```jsx
function App() {
  // 사용자 정의 훅 useAPI 사용
  // endpoint 매개변수 값으로 API URL 전달
  const users = useAPI('https://jsonplaceholder.typicode.com/users');

  return (
    <ul>
      {
        users.map(user => <li key={user.id}>{user.username}</li>
      }
    </ul>
  );
}
```

[↑ 목차 이동](#목차)

### 3-4. 훅 작성 규칙 (Rules of Hooks)

⚠️ Hooks 작성 또는 사용 시, 준수해야 할 규칙은 다음과 같습니다.

- <b>[규칙 1]</b><br>훅은 조건문, 반복문, 중첩 함수 안에서는 사용할 수 없습니다.
- <b>[규칙 2]</b><br>훅은 함수 컴포넌트 안에서만 사용할 수 있습니다. (일반 JS 함수, 클래스 컴포넌트 ❌)

```jsx
function checkAuth() {
  // 규칙2 위반!
  // 훅은 일반 JS 함수에서 사용 할 수 없으며 
  // 오직 함수 컴포넌트 안에서만 사용 할 수 있습니다.
  React.useEffect(() => getUser(), []);
}

function App() {
  // 함수 컴포넌트 안에서 올바르게 사용 된 훅입니다.
  const [user, setUser] = React.useState(null);

  // 규칙1 위반!
  // 조건 또는 반복 문 안에서는 훅을 사용 할 수 없습니다.
  if (!user) {
    React.useEffect(() => setUser({ isAuth: false }), []);
  }

  checkAuth();

  // 규칙1 위반! 
  // 중첩 함수 안에서 훅을 사용 할 수 없습니다.
  return <button onClick={() => React.useMemo(() => doStuff(), [])}>앱</button>;
}
```

[↑ 목차 이동](#목차)