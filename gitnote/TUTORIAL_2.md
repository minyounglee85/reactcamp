# 프로젝트 만들기 - 주소록
오늘 만들 프로젝트는 주소록 입니다.
미리보기: https://contactapp.vlpt.us/

## 1. 준비작업

### 프로젝트 생성

create-react-app 으로 프로젝트를 생성합니다.


```bash
$ create-react-app contact
```


### 프로젝트 초기화

src 내부의 필요없는 파일들을 제거합니다:

- App.css 제거
- logo.svg 제거
- App.test.js 제거


App.js 파일의 내용도 비워줍니다.

**src/App.js**

```javascript
import React, { Component } from 'react';
class App extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}
export default App;
```

index.css 도 다음과같이 수정해줍니다.
(배경 색상을 설정하고, box-sizing 을 [border-box](https://www.w3schools.com/cssref/css3_pr_box-sizing.asp) 로 설정함 - border vi padding 크기를 엘리먼트의 크기에 포함시킴)

**src/index.css**
```css
body {
  margin: 0;
  padding: 0;
  background: #f1f3f5;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
}
```

### 의존 모듈 설치

프로젝트에서 필요한 의존 모듈들을 설치합니다

```bash
$ yarn add open-color prop-types react-icons react-onclickoutside react-transition-group shortid styled-components
```

- [open-color](https://yeun.github.io/open-color/): 매우 유용한 색상 관련 라이브러리입니다.
- prop-types: 컴포넌트의 PropTypes 를 지정할때 필요합니다.
- [react-icons](https://www.npmjs.com/package/react-icons): 다양한 아이콘들을 SVG 형태로 불러와서 사용 할 수 있습니다. 필요한 아이콘만 불러오기 때문에 용량 걱정이 적습니다. (Material Design Icons, FontAwesome, Typicons, Github Octicons, Ionicons 의 모든 아이콘들을 골라서 사용 할 수 있습니다)
- react-onclickoutside: 모달 등을 띄웠을 때 바깥부분 클릭 시 특정 함수를 실행하게 해주는 라이브러리입니다. 
- react-transition-group: CSS를 사용해 애니메이션을 사용하는것을 도와줍니다.
- shortid: 고유 id 를 생성합니다
- [styled-components](https://github.com/styled-components/styled-components): 컴포넌트 자바스크립트 파일 내부에 CSS를 정의 할 수 있게 해주는 도구입니다. 컴포넌트의 스타일관리를 간소화해줍니다.

### src/components 디렉토리 생성

앞으로 컴포넌트는 이 디렉토리 내부에 만들거에요. 미리 생성해줍시다.

## 2. [기본 컴포넌트 만들기](https://github.com/vlpt-playground/react-contact-tagged/tree/02/src)

이번 섹션에서 만들 기본 컴포넌트는 Header 와 Container 입니다. 이 컴포넌트들은 보여주는 용도만 있고 특별한 기능은 없습니다. 

우리는 앞으로 styled-components 라는 라이브러리를 사용하여 컴포넌트를 스타일링할건데요, 기본 컴포넌트를 만들어가면서 간단한 사용법을 익혀볼게요.

> VSCode 익스텐션 중 **vscode-styled-components** 확장을 설치하면 코드 문법 하이라이팅이 지원됩니다. 언어는 JavaScript React 를 설정해야합니다 - VS Code 하단 우측의 언어를 선택한후 JavaScript React 선택, 그리고 **'.js' 에 대한 파일 연결 구성**에서 JavaScript React 를 설정하세요.


우리가 만들 첫 컴포넌트는 페이지의 상단에 띄울 Header 에요.

### Header 컴포넌트 만들기
components 디렉토리에 Header.js 파일을 만드세요.

#### **src/components/Header.js**
```javascript
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: 5rem;
	background: black;
`;

const Header = () => (
    <Wrapper>
        주소록
    </Wrapper>
);

export default Header;
```
`Wrapper` 라는 상수에 스타일링된 `div` 엘리먼트를 설정했습니다. 이 과정에서 익숙하지 않은(?) 문법이 사용됐는데요,
```javascript
myFunction`....`
```
위 문법은 ES6 의  [Tagged Template Literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals) 라는 문법입니다.

![Tagged Template Literals](http://i.imgur.com/yqOT6Ap.png)

backquote 사이에 `${자바스크립트 표현}` 을 사용하면 위와 같이 끊어서 함수의 인자로 전달해줍니다.

지금은 div 를 스타일링하는거니, `styled.div` 를 사용했지만 이 외에도 다른 엘리먼트들을 스타일링 할 수 있습니다. 예를들어 `styled.span`, `styled.input` 이런식으로 말이죠.

스타일링된 Wrapper 를 Header 컴포넌트를 생성하여 그 안에서 렌더링했습니다.

그 다음엔 이 Header 컴포넌트를 App.js 에서 불러오세요.

#### **src/App.js**
```javascript
import React, { Component } from 'react';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
}

export default App;
```

![styled-components 예제](http://i.imgur.com/4JaPnA1.png)

상단에 검정색 바가 보여진다면 성공입니다!

그럼 다시 Header.js 컴포넌트로 돌아갑시다. 추가적으로 스타일링을 해줄거에요.

좀 전에 우리가 [open-color](https://yeun.github.io/open-color/) 라이브러리를 설치했었죠? 그 라이브러리를 한번 사용해보겠습니다. 

굳이 라이브러리를 사용하지 않아도 사이트에 나오는 코드를 계속해서 복사 붙이기해도 되긴 하지만, 라이브러리를 불러오고나면 `oc.gray[5]` 이런식으로 변수를 불러와서 사용 할 수 있으니 매우 편해집니다. 

#### **src/components/Header.js**
```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    /* 레이아웃 */
	height: 4rem;
	background: ${oc.teal[6]};
    border-bottom: 1px solid ${oc.teal[8]};
`;

const Header = () => (
    <Wrapper>
        주소록
    </Wrapper>
);

export default Header;
```

간단하죠? 이렇게하면 우리 헤더 컴포넌트가 초록색이 청록색이 됩니다. 색상 종류는 [open-color](https://yeun.github.io/open-color/) 페이지에서 참조할수있으며 청록색 말고 여러분이 좋아하는 색상을 사용해도 되겠습니다.

색상의 숫자가 올라갈수록 색상이 더 진해지는 구조로 만들어졌습니다. 따라서 색상팔레트를 키고 조금 더 어두운 색상 조금 더 밝은 색상 을 찾는 수고를 덜수 있죠. 아래 테두리 색상을 조금 어두운 청록색으로 설정했습니다.

![청록색 헤더](http://i.imgur.com/vnkJHXr.png)

이제 폰트도 설정하고 가운데로 정렬시키겠습니다.

#### **src/components/Header.js**
```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    /* 레이아웃 */
	height: 4rem;
	background: ${oc.teal[6]};
    border-bottom: 1px solid ${oc.teal[8]};
    /* 폰트 설정 */
    color: white;
    font-weight: 500;
    font-size: 1.5rem;
    /* 가운데로 정렬 */
    display: flex;
    align-items: center; /* 세로 정렬 */
    justify-content: center; /* 가로 정렬 */
`;

const Header = () => (
    <Wrapper>
        주소록
    </Wrapper>
);

export default Header;
```

![](http://i.imgur.com/4u5YwXn.png)

헤더가 완성됐군요! 가운데로 정렬하면서 `display: flex` 가 사용되었는데요. 
flex 가 익숙하지 않은 분들도 일단 코드 보면서 따라하시다보면 편해질거에요.

### Container 컴포넌트 만들기
자 이제는 헤더 컴포넌트 하단에 보여줄 Container 컴포넌트를 만들겠습니다.
이 컴포넌트는 페이지의 내용을 페이지 가운데에 정렬시켜주고, 또 브라우저의 너비가 모바일 기기 크기로 줄어들면 크기에 따라 자동으로 사이즈를 조정해줍니다.

#### 코드스니펫 만들기

그 전에! 우리가 rcc, rsc 이렇게 코드 스니펫 기능을 통해 컴포넌트를 빠르게 만들었던것처럼,

styled-component 전용 코드 스니펫을 만들겠습니다.

VS Code 상단 메뉴의 Code (윈도우에선 파일) - 기본설정 - 사용자 코드 조각 - JavaScript React 

```javascript
{
	"Styled Stateless Component": {
		"prefix": "rssc",
		"body": [
			"import React from 'react';",
			"import styled from 'styled-components';",
			"import oc from 'open-color';",
			"",
			"const Wrapper = styled.div`",
			"",
			"`;",
			"",
			"const ${1:ComponentName} = () => (",
			"    <Wrapper>",
			"",
			"    </Wrapper>",
			");",
			"",
			"export default ${1:ComponentName};"
		],
		"description": "Create Styled Stateless Component"
	}
}
```

이걸 입력하시고나면 이제 rssc 를 입력하여 styled-components 와 open-color 를 불러온 컴포넌트를 손쉽게 생성할수 있게 됩니다.

> VS Code 를 사용하지 않는다면 여러분의 에디터에 직접 넣으시거나 그때그때 직접 입력하셔도 상관없습니다.  
> 
>**꿀팁**: snippet-creator 익스텐션을 사용하면 스니펫을 쉽게 만들 수 있습니다.

#### **src/components/Container.js**

```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    width: 700px;
    margin: 0 auto; /* 가운데 정렬 */
    padding: 1rem;
    background: black; /* 테스트용 색상, 추후 지워짐 */
`;

const Container = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default Container;
```
이제 이 컴포넌트를 App.js 에서 렌더링하세요.

#### **src/App.js**
```javascript
import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';


class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container></Container>
            </div>
        );
    }
}

export default App;
```

![](http://i.imgur.com/VitBoVG.png)

가운데에 렌더링이 되었군요! 하지만 모바일 크기에서는 자동으로 조정이 안됩니다..
이 styled-components 에서 media 쿼리를 작성할땐 일반 CSS 에서 하는것과 동일하게 하시면 됩니다.

예를들어: 

```javascript
const Wrapper = styled.div`
    width: 700px;
    margin: 0 auto; /* 가운데 정렬 */
    padding: 1rem;
    background: black; /* 테스트용 색상, 추후 지워짐 */

    /* 모바일 크기 */
    @media (max-width: 768px) {
        width: 100%;
    }
`;
```
위와같이 말이죠.

우리가 만들 프로젝트에서는 모바일 대응이 이뤄지는곳 많지 않기 때문에 이렇게 끝내도 되긴 하지만, 실제 프로젝트에서는 모바일 대응 할 곳이 많아집니다. 이 미디어쿼리를 모듈화 하는 방법을 한번 알아보겠습니다.

#### **src/lib/style-utils.js**
```javascript
import { css } from 'styled-components';

export const media = {
    mobile: (...args) => css`
        @media (max-width: 768px) {
            ${ css(...args) }
        }
    `
};
```

지금은 mobile 하나만 만들었지만, 나중에 실제 프로젝트에선 mobile, tablet, desktop, wideDesktop 등등을 만들어 사용하면 됩니다.

이렇게 파일을 만들고나면, 다음과 같이 모바일 대응을 할 수 있습니다:

#### **src/components/Container.js**
```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media } from '../lib/style-utils';

const Wrapper = styled.div`
    width: 700px;
    margin: 0 auto; /* 가운데 정렬 */
    padding: 1rem;
    background: black; /* 테스트용 색상, 추후 지워짐 */

    /* 모바일 크기 */
    ${media.mobile`
        width: 100%;    
    `}
`;

const Container = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);

export default Container;
```

![](http://i.imgur.com/tWn78hW.png)
자 이젠 모바일에서는 가로를 꽉 채웁니다.

우리가 만들 주소록 프로젝트의 메인 뷰는 두 종류인데요, 하나는 즐겨찾기고, 하나는 목록입니다. 리액트 앱의 상태에 따라 둘중에 하나를 보여줄건데요, 우리는 두개의 Container 를 리액트 앱 안에 만들어놓고 특정 조건에 따라 해당 Container 가 보여질지 말지 설정할겁니다.

Container 에 visible 이란 props 를 받게해서, visible 이 참이 아니라면 null 이 반환하게하세요.

그리고 아까 테스트용 검정 배경색도 지워주세요.

**src/components/Container.js**
```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media } from '../lib/style-utils';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    width: 700px;
    margin: 0 auto; /* 가운데 정렬 */
    padding: 1rem;

    /* 모바일 크기 */
    ${media.mobile`
        width: 100%;    
    `}
`;

// visible 이 false 면 null 반환
const Container = ({visible, children}) => visible ? (
    <Wrapper>
        {children}
    </Wrapper>
) : null;

// PropTypes 설정
Container.propTypes = {
    visible: PropTypes.bool
};

export default Container;
```


## 3. [ViewSelector 컴포넌트 만들기](https://github.com/vlpt-playground/react-contact-tagged/tree/03/src)
이번에 만들 ViewSelector 컴포넌트는 헤더 컴포넌트 하단의 즐겨찾기 / 목록 뷰를 선택하는 컴포넌트입니다.

![](http://i.imgur.com/APvfqNB.gif)

선택을 하면 하단의 핑크색 바가 왔다갔다 하지요? 

생각보다 구현하기 쉽습니다. 자바스크립트 없이 CSS 만으로 구현할수있어요.

### 기본 디자인
#### **src/components/ViewSelector.js**
```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
    height: 4rem;
    background: white;
    width: 100%;
    display: flex;

    /* 하단 핑크색 바 위치 설정을 위해 설정 
       bottom, left 값 설정할때 이 Wrapper 에 의존 */
    position: relative;
`;

const StyledItem = styled.div`
    /* 레이아웃 */
    height: 100%;

    /* 형제 엘리먼트들과 동일한 사이즈로 설정 */
    flex: 1; 

    /* 가운데 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* 색상 */
    color: ${oc.gray[6]};

    /* 기타 */
    font-size: 1.5rem;
    cursor: pointer;

    /* 마우스가 위에 있을 때 */
    &:hover {
        background: ${oc.gray[0]};
    }
`;

const Bar = styled.div`
    /* 레이아웃 */
    position: absolute;
    bottom: 0px;
    height: 3px;
    width: 50%;

    /* 색상 */
    background: ${oc.pink[6]};
`;

// 추후 아이템 컴포넌트에 기능을 달아줄것이기에 컴포넌트 추가생성
const Item = ({children}) => (
    <StyledItem>
        {children}
    </StyledItem>
);

const ViewSelector = () => (
    <Wrapper>
        <Item>즐겨찾기</Item>
        <Item>리스트</Item>
        <Bar/>
    </Wrapper>
);

export default ViewSelector;
```

Item 컴포넌트의 경우엔 우리가 잠시 후 특정 기능을 달아줄것이기 때문에 따로 만들었습니다. 

### App 에서 ViewSelector 불러와서 렌더링
#### **src/App.js**
```javascript
import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelector from './components/ViewSelector';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ViewSelector/>
                <Container>
                </Container>
            </div>
        );
    }
}

export default App;
```
현재 이런 모양이 되었죠?

![](http://i.imgur.com/W6qqF6W.png)

디자인만 했기 때문에 아직 아무 기능이 없습니다.

### 아이콘 보여주기
기능을 붙여주기전에, 저기 텍스트가 들어가는 자리에 아이콘을 넣어주겠습니다.

우리는 [react-icons](https://www.npmjs.com/package/react-icons) 를 사용할건데요, 이 라이브러리의 최대 장점은 필요한것만 골라서 불러올수있다는것입니다.

예를들어, FontAwesome 같은 아이콘패키지를 사용하면, 아이콘들을 폰트형태로 전부 불러와서 사용하기때문에 불필요한 아이콘도 불러와져서 트래픽 낭비가 될 수 있는데,

이 react-icons 는 FontAwesome 을 포함한 5종류의 아이콘 패키지들의 아이콘들을 전부 사용할수있으며 그 중에 필요한것만 SVG로 불러와서 사용 할 수 있게됩니다.

설치는 섹션 1에서 이미 했으니까 바로 사용해봅시다.

우리가 필요한 아이콘들은 별 아이콘과 여러 사람들 아이콘인데요,  https://gorangajic.github.io/react-icons/md.html에서 필요한 아이콘 이름을 찾아서 불러 오면됩니다.

- react-icons/lib/md/star
- react-icons/lib/md/people

import 로 불러와서, 컴포넌트 사용하듯이 하면 되겠습니다. 사이즈 및 색상 는 부모 엘리먼트의 font-size 에 따라 결정됩니다.

#### **src/components/ViewSelector.js**
```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import StarIcon from 'react-icons/lib/md/star';
import PeopleIcon from 'react-icons/lib/md/people';

(...)

const ViewSelector = () => (
    <Wrapper>
        <Item><StarIcon/></Item>
        <Item><PeopleIcon/></Item>
        <Bar/>
    </Wrapper>
);

export default ViewSelector;
```

> (...) 표시는 생략을 의미합니다.

![](http://i.imgur.com/qeU2Mgv.png)

깔끔하죠? 

### App 상태 정의 및 업데이트
리액트 앱에서 즐겨찾기를 보여줄지, 리스트를 보여줄지 정하는 state 를 정의하고 이를 업데이트하는 로직을 작성하겠습니다.

1. state 정의
2. handleSelectView 메소드 작성
3. ViewSelector 에 메소드와 view 값 전달
4. handleSelectView 와 state.view 레퍼런스 준비
5. view 값에 따라 다른 Container 렌더링

#### **src/App.js**

```javascript
import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelector from './components/ViewSelector';

class App extends Component {
    /* --- #1 --- */
    state = {
        view: 'favorite'
    }

    // view 선택 메소드 정의
    /* --- #2 --- */
    handleSelectView = (view) => this.setState({view})

    render() {
        // 레퍼런스 준비
        /* --- #3 --- */
        const { handleSelectView } = this;
        const { view } = this.state;

        return (
            <div>
                <Header/>
                {/* --- #4 --- */}
                <ViewSelector onSelect={handleSelectView} selected={view}/>
                
                {/* view 값에 따라 다른 컨테이너를 보여준다 */}
                {/* --- #5 --- */}
                <Container visible={view==='favorite'}>즐겨찾기</Container>
                <Container visible={view==='list'}>리스트</Container>
            </div>
        );
    }
}

export default App;
```

### ViewSelector 내부 props 설정하기

#### props / propTypes 정의
ViewSelector 컴포넌트, 그리고 그 내부의 컴포넌트들의 props 와 propTypes 를 설정하겠습니다.

1. PropTypes 불러오기
2. StyledItem 에 active propTypes (bool) 설정
2. Bar 에 right propTypes (bool) 설정
3. Item 에 selected, name, onSelect props 추가 및 propTypes 설정
4. ViewSelector 에 selected, onSelect props 추가 및 propTypes 설정

#### **src/components/ViewSelector.js**
```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import StarIcon from 'react-icons/lib/md/star';
import PeopleIcon from 'react-icons/lib/md/people';
/* --- #1 --- */
import PropTypes from 'prop-types';


const Wrapper = styled.div`
    height: 4rem;
    background: white;
    width: 100%;
    display: flex;

    /* 하단 핑크색 바 위치 설정을 위해 설정 
       bottom, left 값 설정할때 이 Wrapper 에 의존 */
    position: relative;    
`;

const StyledItem = styled.div`
    /* 레이아웃 */
    height: 100%;

    /* 형제 엘리먼트들과 동일한 사이즈로 설정 */
    flex: 1; 

    /* 가운데 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* 색상 */
    color: ${oc.gray[6]};

    /* 기타 */
    font-size: 1.5rem;
    cursor: pointer;

    /* 마우스가 위에 있을 때 */
    &:hover {
        background: ${oc.gray[0]};
    }
`;

/* --- #2 --- */
StyledItem.propTypes = {
    active: PropTypes.bool
}

const Bar = styled.div`
    /* 레이아웃 */
    position: absolute;
    bottom: 0px;
    height: 3px;
    width: 50%;

    /* 색상 */
    background: ${oc.pink[6]};
`;

/* --- #3 --- */
Bar.propTypes = {
    right: PropTypes.bool
}

/* --- #4 --- */
const Item = ({children, selected, name, onSelect}) => (
    <StyledItem>
        {children}
    </StyledItem>
);

Item.propTypes = {
    selected: PropTypes.string,
    name: PropTypes.string,
    onSelect: PropTypes.func
};

/* --- #5 --- */
const ViewSelector = ({selected, onSelect}) => (
    <Wrapper>
        <Item><StarIcon/></Item>
        <Item><PeopleIcon/></Item>
        <Bar/>
    </Wrapper>
);

ViewSelector.propTypes = {
    selected: PropTypes.string,
    onSelect: PropTypes.func
}


export default ViewSelector;
```

#### StyledItem, Bar 에 props 에 따른 변화
styled-components 의 멋진 점은, 컴포넌트에 전달하는 props 에 따라 다른 스타일을 설정 할 수 있다는 점입니다.

StyledItem 의 active 값이 참이라면, 색상을 검정색으로 설정하게 해볼게요.

#### **src/components/ViewSelectors.js - StyledItem **
```javascript
const StyledItem = styled.div`
    /* 레이아웃 */
    height: 100%;

    /* 형제 엘리먼트들과 동일한 사이즈로 설정 */
    flex: 1; 

    /* 가운데 정렬 */
    display: flex;
    align-items: center;
    justify-content: center;
    
    /* 색상 */
    /* active 값에 따라 다른 색상을 보여줌 */
    color: ${ props => props.active ? oc.gray[9] : oc.gray[6] }; 

    /* 기타 */
    font-size: 1.5rem;
    cursor: pointer;

    /* 마우스가 위에 있을 때 */
    &:hover {
        background: ${oc.gray[0]};
    }
`;
```

마찬가지로, Bar 컴포넌트도 right 값에 따라서 위치를 다르게 설정하겠습니다.
추가적으로, 애니메이션 효과를 위한 transition 프로퍼티도 설정하겠습니다.

#### **src/components/ViewSelector.js - Bar**
```javascript
const Bar = styled.div`
    /* 레이아웃 */
    position: absolute;
    bottom: 0px;
    height: 3px;
    width: 50%;

    /* 색상 */
    background: ${oc.pink[6]};

    /* 애니메이션 */
    transition: ease-in .25s;

    /* right 값에 따라 우측으로 이동 */
    transform: ${props => props.right ? 'translateX(100%)' : 'none'};
`;
```

#### ViewSelector 의 props 를 하위 컴포넌트에 전달

이젠 ViewSelector 가 실제로 작동하게 하기 위해서, 하위 컴포넌트들에 props 를 전달해주겠습니다.

1. ViewSelector 에서 전달받은 selected 와 onSelect 프로퍼티를 Item 컴포넌트에 전달하세요
2. 각 Item 에 name 을 favorite, list 로 설정하세요
3. Bar 컴포넌트의 right 값을 `selected === list` 로 설정하세요.


#### **src/components/ViewSelector.js - ViewSelector **
```javascript
const ViewSelector = ({selected, onSelect}) => (
    <Wrapper>
        <Item 
            selected={selected}
            name="favorite" 
            onSelect={onSelect}>
            <StarIcon/>
        </Item>
        <Item 
	    selected={selected} 
	    name="list" 
	    onSelect={onSelect}>
	    <PeopleIcon/>
        </Item>
        <Bar right={selected==='list'}/>
    </Wrapper>
);
```

#### **src/components/ViewSelector.js - Item **
```javascript
const Item = ({children, selected, name, onSelect}) => (
    <StyledItem onClick={() => onSelect(name)} active={selected===name}>
        {children}
    </StyledItem>
);
```

여기까지 마무리하시면 ViewSelector 컴포넌트가 완성됩니다!

![](http://i.imgur.com/wu4QCn8.gif)

[ViewSelector 전체 코드 보기](https://gist.github.com/velopert/062010081757f04f377f86c1572ef5de)

## 4. [FloatingButton 컴포넌트 만들기](https://github.com/vlpt-playground/react-contact-tagged/tree/04/src)

이번에 만들 컴포넌트는 우측 하단에 떠있는 버튼 입니다.

![](http://i.imgur.com/xuF2mfv.gif)

이 컴포넌트는 만드는과정에서 크게 설명할 건 없습니다. 그냥 스타일링만 하시면 됩니다.

#### **src/components/FloatingButton.js**
```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import AddIcon from 'react-icons/lib/md/add';

const Wrapper = styled.div`
    /* 레이아웃 */
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;

    /* 색상 */
    background: white;
    border: 3px solid ${oc.pink[6]};
    color: ${oc.pink[6]};

    /* 기타 */
    border-radius: 2rem;
    font-size: 2rem;
    cursor: pointer;

    /* 중앙정렬 */
    display: flex;
    align-items: center;
    justify-content: center;

    /* 애니메이션 */
    transition: all .15s;

    /* 마우스가 위에 있을 때 */
    &:hover {
        /* 위로 조금 움직이고 색바꿈 */
        transform: translateY(-0.5rem); 
        color: white;
        background: ${oc.pink[6]}; 
    }

    /* 클릭될때 */
    &:active {
        /* 색 좀 더 어둡게 */
        background: ${oc.pink[7]};
    }
`;

const FloatingButton = ({onClick}) => (
    <Wrapper onClick={onClick}>
        <AddIcon/>
    </Wrapper>
);

FloatingButton.propTypes = {
    onClick: PropTypes.func
}

export default FloatingButton;
```

완성했다면 이 컴포넌트를 App.js 에서 보여주세요.

#### **src/App.js**
```javascript
import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelector from './components/ViewSelector';
import FloatingButton from './components/FloatingButton';

class App extends Component {

    (...)

    render() {
        // 레퍼런스 준비
        const { handleSelectView } = this;
        const { view } = this.state;

        return (
            <div>
                <Header/>
                <ViewSelector onSelect={handleSelectView} selected={view}/>
                
                {/* view 값에 따라 다른 컨테이너를 보여준다 */}
                <Container visible={view==='favorite'}>즐겨찾기</Container>
                <Container visible={view==='list'}>리스트</Container>

                <FloatingButton/>
            </div>
        );
    }
}



export default App;
```


이 버튼의 역할은 클릭했을때 모달을 띄우는건데요, 이제 그 모달을 만들어보겠습니다:

## 5. [모달 만들기](https://github.com/vlpt-playground/react-contact-tagged/tree/05/src)
우리 프로젝트에서는 모달이 두가지 용도로 사용됩니다. 첫째는 주소록을 추가할때이고 둘째는 수정할때입니다. 서로 생김새가 비슷하므로, 우리는 하나의 컴포넌트를 만들어서 각 상황에 재사용하겠습니다.

![](http://i.imgur.com/GidVpHd.gif)

모달은 취소를 눌렀을때 꺼지지만, 그 바깥을 눌렀을때도 꺼집니다. 

컴포넌트의 외부를 클릭했을때 특정 메소드를 실행하려면, document.body 에 직접 이벤트 리스너를 등록해서 관리해줘야되지만, 구현 시간을 단축하기위해 우리는 라이브러리를 사용하겠습니다. [react-onclickoutside](https://www.npmjs.com/package/react-onclickoutside) 라는 라이브러리인데요. 이를 의존하는 라이브러리들도 정말 많고, 업데이트도 잘 되고 있으므로 완성도도 높고, 설치해서 사용하기에 아주 적당한 라이브러리입니다.

### App 에서 모달 상태 정의 및 업데이트

우선, 모달을 위한 상태를 App 에 정의하고 이를 업데이트하는 로직을 작성하겠습니다.

1. state 수정
2. modalHandler 작성

#### **src/App.js**
```javascript
import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelector from './components/ViewSelector';
import FloatingButton from './components/FloatingButton';

class App extends Component {

    state = {
        view: 'favorite',
        modal: {
            visible: false,
            mode: null // create 혹은 modify
        }
    }

    // view 선택 메소드 정의
    handleSelectView = (view) => this.setState({view})

    // 모달 관련 메소드들
    modalHandler = {
        show: (mode, payload) => {
            this.setState({
                modal: {
                    mode,
                    visible: true,
                    ...payload // payload 안의 값을 풀어서 여기에 넣음
                }
            })
        },
        hide: () => {
            this.setState({
                modal: {
                    ...this.state.modal, // 기존 값들을 복사해서 안에 넣음
                    visible: false
                }
            })
        },
        // 추후 구현될 메소드들
        change: null,
        action: {
            create: null,
            modify: null,
            remove: null
        }
    }

    render() {
        (...)
    }
}

export default App;
```

modal 에는 mode 라는 속성이 있는데, 이 속성에 따라서 수정을할지 추가를 할지 정합니다.
그리고 이번에는 modalHandler 안에 여러 메소드를 만들어서, 메소드들로 이루어진 객체를 만들었죠?

꼭 이렇게 할 필요는 없습니다.

이렇게 한 이유는, 만약에 기존에 했던것처럼 `handle...` 이런식으로 네이밍을 한다면,

handleModalShow, handleModalHide, handleModalChangeInput, handleModalCreateContact ... 이런식으로 엄청 많이 생겨나기 때문에

모달이랑 관련된 메소드들을 하나의 객체로 묶은것입니다. 

이전부터 강조하던거지만 리액트에서는 무조건 따라야 할 구조가 있는건 아니기 때문에 여러분들이 가장 맘에드는 방식을 택하시면 되겠습니다 :)

modalHandler.show 에서는 mode와 payload 값을 받는데요, 여기서 payload 는 객체형태의 값입니다. 
주소록 추가 모달에서는 비어있는 이름, 주소록 그리고 랜덤 색상을 전달해줄거구요,
주소록 수정 모달에서는 선택한 주소록의 정보를 전달할겁니다.  

하단에 action 부분은 나중에 특정 버튼이 눌려졌을때 실행할 메소드들인데 이 부분은 추후 구현하겠습니다.

### 랜덤 색상 생성 함수 만들기

새 주소록을 추가 할 때, 해당 주소록을 위한 랜덤 색상을 만들어줄건데요, 이 부분은 open-color 를 사용해서 색상을 생성하도록 하겠습니다.

App.js 의 상단에 다음 코드를 넣어주세요.

#### **src/App.js 상단**

```
import oc from 'open-color';

function generateRandomColor() {
    const colors = [
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange'
    ];

    // 0 부터 12까지 랜덤 숫자
    const random = Math.floor(Math.random() * 13);

    return oc[colors[random]][6];
}
```

### FloatingButton 이 클릭될때 실행 할 메소드 만들기

이제 FloatingButton 이 클릭 될 때 실행 할 메소드를 정의하고 FloatingButton 에 전달해주겠습니다.

#### **src/App.js**

```javascript
(...)

class App extends Component {

    (...)
    // FloatingButton 클릭
    handleFloatingButtonClick = () => {
        // 현재 view 가 list 가 아니면 list 로 설정
        const { view } = this.state;
        if(view !== 'list') 
            this.setState({view: 'list'});
        
        // Contact 추가 모달 띄우기
        this.modalHandler.show(
            'create',
            {
                name: '',
                phone: '',
                color: generateRandomColor()
            }
        );
    }

    render() {
        // 레퍼런스 준비
        const { 
            handleSelectView,
            handleFloatingButtonClick
        } = this;
        const { view } = this.state;

        return (
            <div>
                <Header/>
                <ViewSelector onSelect={handleSelectView} selected={view}/>
                
                {/* view 값에 따라 다른 컨테이너를 보여준다 */}
                <Container visible={view==='favorite'}>즐겨찾기</Container>
                <Container visible={view==='list'}>리스트</Container>

                <FloatingButton onClick={handleFloatingButtonClick}/>
            </div>
        );
    }
}



export default App;
```

지금으로선, 아직 모달을 안만들었기 때문에 방금 만든 메소드가 제대로 작동하는지 확인하려면 버튼을 눌러보고 React DevTool 을 참고해보세요.

![](http://i.imgur.com/gHDHUZ0.png)

> 스크린샷에 있는 개발자도구의 콘솔오류는 강의를 준비하는 시점에서 styled-components 에서 발생하는 propTypes 관련 deprecated warning 입니다. 

메소드가 문제 없이 작동하는군요.


자 이제 모달 컴포넌트를 만들어볼차례입니다.

모달컴포넌트는 세가지 파일로 분리할건데요,

1. Modal.js 이 파일은 모달을 보여주고, 숨기고, 애니메이션을 실행하는 부분을 담당합니다. 
2. ContactModal.js 이 파일은 위 Modal.js 를 사용하여 모달을 생성하고 그 안에 필요한 뷰 (인풋, 버튼 등등) 을 넣습니다.
3. Dimmed.js 이 파일은 화면을 어둡게 해줍니다.

우리 프로젝트의 경우에는 모달이 하나밖에 없으니까 굳이 이렇게 파일을 분리할필요 없지만,
실무에서는 모달을 만들게된다면 여러종류를 만들게 될 수도 있습니다.

그럴때, 모달으로서의 기능을 담당하는 Modal.js 컴포넌트 하나를 기반으로 여러 종류의 컴포넌트를 생성할수있다면, 생산성이 더욱 늘어나겠죠?  모달을 하나하나 만들때마다 특정상황에 숨기고 애니메이션 관리하고 한다면 중복되는 코드도 늘어날테고, 귀찮기도 할테니까요.


### Modal.js 작성

onClickOutside 라이브러리를 적용할 땐 이를 불러와서 컴포넌트를 내보낼때 `onClickoutside()` 으로 감싸주시면 됩니다. 그렇게 감싸주시면, 컴포넌트 외부를 클릭하게 될 때, handleClickOutside 메소드를 실행하게됩니다.

이 컴포넌트에는 StyledComponent 가 2개가있는데요,  Wrapper 는 화면의 정 중앙에 컴포넌트를 위치 시키고 ModalBox 는 Wrapper 내부에 흰 박스를 생성해줍니다. 

이렇게 분리를 한 이유는 추후 애니메이션을 적용 할 때 trasnform 을 사용할건데, 화면 정중앙에 위치시키는 과정에서 transform 이 이미 사용되기때문입니다. 

그리고, 모달의 기본 너비는 400px 이며, 나중에 사용 할 때 props 값으로 설정 할 수 있게 설정 되었고
모바일 사이즈에서는 양쪽에 1rem 의 여백을 두고 꽉 채우게 설정했습니다. 

컴포넌트 외부를 클릭하면 실행되는 handleClickOutside 의 메소드에서는 props 로 전달받은 onHide 를 실행하게합니다.

Esc 키가 눌려졌을때도 모달이 종료되게 하기 위해서, handleKeyUp 리스너를 준비하고, componentDidUpdate 에서 visible 값이 바뀔대 이 리스너를 등록하고 제거합니다.

렌더링을 하게 될 때, visible 값에 따라서 ModalBox 을 보여주거나, 숨깁니다.


#### **src/components/Modal.js**
```javascript
import React, { Component } from 'react';
import styled from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import {media} from '../lib/style-utils';
import PropTypes from 'prop-types';

// 모달 위치 및 사이즈 설정
const Wrapper = styled.div`
    /* 레이아웃 */
    position: fixed;
    /* 화면 가운대로 정렬 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* 레이어 */
    z-index: 10;

    /* 너비 (기본값 400px) */
    width: ${ props => props.width };

    /* 모바일일땐 양옆 여백 1rem 에 꽉 채우기 */
    ${media.mobile`
        width: calc(100% - 2rem);
    `}
`;

Wrapper.propTypes = {
    width: PropTypes.string
};

// 모달 틀
const ModalBox = styled.div`
    background: white;
    border: 1px solid rgba(0,0,0,0.3);
`

class Modal extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        onHide: PropTypes.func,
        width: PropTypes.string
    }

    static defaultProps = {
        width: '400px'
    }

    // 컴포넌트 외부를 클릭하면 실행되는 메소드 
    handleClickOutside = (e) => {
        const { visible, onHide } = this.props;

        if(!visible) return null; // 이미 visible 이 false 라면 아무것도 안함
        onHide();
    }

    // Esc 키가 클릭되면 onHide 를 실행한다
    handleKeyUp = (e) => {
        const { onHide } = this.props
        if (e.keyCode === 27) {
            onHide();
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        // visible 값이 변할 때:
        if(prevProps.visible !== this.props.visible) {
            
            if(this.props.visible) {
            // 방금 보여졌다면
                // body 에 keyUp 이벤트 등록해서 Esc 키를 감지한다.
                document.body.addEventListener('keyup', this.handleKeyPress);
            } else { 
            // 방금 사라졌다면
                document.body.removeEventListener('keyup', this.handleKeyPress);
            }
        }
    }
    

    render() {
        // 레퍼런스 생성
        const {visible, children, width} = this.props;

        return (
            <div>
                <Wrapper width={width}>
                    {
                        /* visible 이 참일때만 ModalBox 보여줌 */
                        visible && (<ModalBox>{children}</ModalBox>)
                    }
                </Wrapper>
            </div>
        );
    }
}

// onClickoutside 라이브러리 적용
export default onClickOutside(Modal);
```

이제 ContactModal 을 만들어서 위 컴포넌트를 사용하겠습니다.
모달이 잘 작동하는지 확인을 먼저 해볼게요:

#### **src/components/ContactModal.js**
```javascript
import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Modal from './Modal';
import PropTypes from 'prop-types';


class ContactModal extends Component {

    static propTypes = { 
        visible: PropTypes.bool, 
        // 모달의 모드
        mode: PropTypes.oneOf(['create', 'modify']), 
        // 모달에 들어갈 데이터 값
        name: PropTypes.string, 
        phone: PropTypes.string, 
        color: PropTypes.string, 
        onHide: PropTypes.func, 
        onAction: PropTypes.func, // 추가 혹은 수정
        onRemove: PropTypes.func // 나중에 구현할 삭제
    }

    render() {
        const { 
            visible,
            onHide
        } = this.props;

        return (
            <Modal visible={visible} onHide={onHide}>
                하이
            </Modal>
        );
    }
}

export default ContactModal;
```

그리고 이 컴포넌트를 App.js 에서 불러온다음에 사용해봅시다.

#### **src/App.js**
```javascript
(...)
import ContactModal from './components/ContactModal';

class App extends Component {

    (...)

    render() {
        // 레퍼런스 준비
        const { 
            handleSelectView,
            handleFloatingButtonClick,
            modalHandler
        } = this;

        const { 
            view,
            modal
        } = this.state;

        return (
            <div>
                <Header/>
                <ViewSelector onSelect={handleSelectView} selected={view}/>
                
                {/* view 값에 따라 다른 컨테이너를 보여준다 */}
                <Container visible={view==='favorite'}>즐겨찾기</Container>
                <Container visible={view==='list'}>리스트</Container>
                
                <ContactModal {...modal} onHide={modalHandler.hide}/>
                <FloatingButton onClick={handleFloatingButtonClick}/>
            </div>
        );
    }
}

export default App;
```

`<ContactModal {...modal} onHide={modalHandler.hide}/>`

여기서 `{...modal}` 의 의미는 modal 객체 내부의 모든 값을 ContactModal 의 props 로 설정한다는 의미입니다.

현재 modal 상태 안에는 color, mode, name, phone, visible 값이 있으니 다음과 같이 변환되겠죠:

알고 있으면 유용한 팁입니다!

```javascript
<ContactModal 
	color={modal.color} 
	mode={modal.mode} 
	name={modal.name} 
	phone={modal.phone} 
	visible={modal.visible} 
	onHide={modalHandler.hide}
/>
```

자, 여기까지 했으면 다음과같이 '하이' 모달을 껐다 킬수있습니다.

![](http://i.imgur.com/jKc9jP8.gif)

아직은 좀 초라하죠? 

이제 뒤에 어두운 배경을 깔아주고, 애니메이션도 설정을 해보겠습니다.

### Dimmed.js 배경화면 어둡게하기

배경화면을 어둡게하는 	Dimmed 컴포넌트를 만들겠습니다.
visible 값을 전달받아서 이 값에 따라 보여주거나 숨깁니다.

#### **src/components/Dimmed.js**
```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';


const Black = styled.div`
    /* 레이아웃 - 화면 꽉 채움 */
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    
    /* 레이어 */
    z-index: 5;

    /* 색상 */
    background: rgba(0,0,0,0.3);
`;


const Dimmed = ({visible}) => (
    <div>
        {visible && <Black/>}
    </div>
);

Dimmed.propTypes = {
    visible: PropTypes.bool
};

export default Dimmed;
```

 
이제 이 컴포넌트를 App.js 에서 렌더링하세요.
visible 값은 modal.visible 으로 설정하면 됩니다.

#### **src/App.js**

[상단]

```javascript
import Dimmed from './components/Dimmed';
```

[render 함수]

```javascript
    render() {
        // 레퍼런스 준비
        const { 
            handleSelectView,
            handleFloatingButtonClick,
            modalHandler
        } = this;

        const { 
            view,
            modal
        } = this.state;

        return (
            <div>
                <Header/>
                <ViewSelector onSelect={handleSelectView} selected={view}/>
                
                {/* view 값에 따라 다른 컨테이너를 보여준다 */}
                <Container visible={view==='favorite'}>즐겨찾기</Container>
                <Container visible={view==='list'}>리스트</Container>
                
                <ContactModal {...modal} onHide={modalHandler.hide}/>
                <Dimmed visible={modal.visible}/>
                <FloatingButton onClick={handleFloatingButtonClick}/>
            </div>
        );
    }
}

export default App;
```

![](http://i.imgur.com/y7cAwpo.png)

완료했다면 모달을 열어보세요. 뒷  배경이 어두워졌나요?

[App 전체코드](https://gist.github.com/velopert/77a2c3fa35562627652c0dbd9b74ced4)

### 애니메이션 설정하기
우리는 CSS 를 이용하여 애니메이션 효과를 줄 건데요, 애니메이션 효과를 주는 원리는, 특정 상태에 따라 className 을 설정하고 몇초 뒤 제거하는것입니다.  컴포넌트의 state 를 사용해서 직접 구현 할 수 도 있지만, 컴포넌트가 나타나고 사라질때 주는 간단한 애니메이션의 경우 `CSSTransitionGroup` 라는 리액트 애드온을 사용하면 더욱 간편하게 구현 할 수 있습니다.

이 라이브러리에 대한 설명은 [여기](https://facebook.github.io/react/docs/animation.html) 서 볼 수 있습니다.

정석적인 방법으로는, 

다음과같이 css 를 준비하고,
```css
.example-enter {
  opacity: 0.01;
}

.example-enter.example-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}

.example-leave {
  opacity: 1;
}

.example-leave.example-leave-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
``` 

다음과같이 컴포넌트의 자식으로 넣어주는건데요. 이렇게하면 컴포넌트가 나타나고 사라질때 준비한 CSS 클래스를 적용한답니다.
```javascript
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {items}
        </CSSTransitionGroup>
```
위 예제에서는 애니메이션 시작할때와 끝날때 (active) 스타일을 따로따로 지정했지만, 우리는 CSS 의 keyframe 을 이용하여 각 애니메이션 당 하나의 클래스를 준비하도록 하겠습니다 (keyframe 을 사용하면 더 편리하고, 시작과 끝 뿐만아니라 그 중간에서도 변화를 줄 수 있습니다)

일반 CSS 를 사용한다면, 다음과 같이 keyframe 을 선언하면 되지만: 
```css
@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-100vh);
  }
  75% {
      opacity: 1;
      transform: translateY(25px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  25% {
      opacity: 1;
      transform: translateY(25px);
  }
  100% {
    opacity: 0;
    transform: translateY(-100vh);
  }
}
``` 
우리는 styled-components 를 사용하기 때문에 위 코드를 모듈화해서 lib/styled-utils 안에 집어 넣겠습니다:

#### **lib/style-utils.js**
```
import { css, keyframes } from 'styled-components';

export const media = {
    mobile: (...args) => css`
        @media (max-width: 768px) {
            ${ css(...args) }
        }
    `
};

export const transitions = {
    slideDown: keyframes`
        0% {
            opacity: 0;
            transform: translateY(-100vh);
        }
        75% {
            opacity: 1;
            transform: translateY(25px);
        }
        100% {
            transform: translateY(0px);
        }
    `,
    slideUp: keyframes`
        0% {
            transform: translateY(0px);
            opacity: 1;
        }
        25% {
            opacity: 1;
            transform: translateY(25px);
        }
        100% {
            opacity: 0;
            transform: translateY(-100vh);
        }
    `
}
```

그 다음, Modal.js 를 열어서 상단에 CSSTransitionGroup 을 불러오고, style-utils 에서 transition 을 불러오세요

#### **src/components/Modal.js**

[상단]

```javascript
import {media, transitions} from '../lib/style-utils';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
```

그리고 Wrapper 내부에 .modal-enter 와 .modal-leave 클래스를 만드세요.

[Wrapper]

```javascript
const Wrapper = styled.div`
    (...)
	
	/* 애니메이션 */
	
    .modal-enter {
        animation: ${transitions.slideDown} .5s ease-in-out;
        animation-fill-mode: forwards;
    }

    .modal-leave {
        animation: ${transitions.slideUp} .5s ease-in-out;
        animation-fill-mode: forwards;
    }
`;
```

마지막으로, Modal 컴포넌트의 render 함수에서, 다음과 같이 ModalBox 를 CSSTransitionGroup 으로 감싸시면 애니메이션이 적용됩니다.

[render 함수]

```javascript
    render() {
        // 레퍼런스 생성
        const {visible, children, width} = this.props;

        return (
            <div>
                <Wrapper width={width}>
                    <CSSTransitionGroup
                        transitionName="modal"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        {
                            /* visible 이 참일때만 ModalBox 보여줌 */
                            visible && (<ModalBox>{children}</ModalBox>)
                        }
                    </CSSTransitionGroup>
                </Wrapper>
            </div>
        );
    }
```

![](http://i.imgur.com/DmoDx4T.gif)

애니메이션이 잘 적용됐는지 확인해보세요.
[모달 전체코드](https://gist.github.com/velopert/bcba02831bf2343e401a458d184e3df1)


## 6. [ContactModal 완성하기](https://github.com/vlpt-playground/react-contact-tagged/tree/06/src)

자, 이제 우리는 모달을 끄고 키는 기능을 제대로 완성하였으니 이 내부를 채워보겠습니다.
내부는 다음과 같이 생겼는데요:

![](http://i.imgur.com/b7RZnW3.png)

여기서 동그란 유저이미지는 주소록 목록을 보여줄때도 재사용될것이므로 컴포넌트를 따로 분리할거구요, 
하단의 Input 또한 나중에 검색할때 재사용할것이므로 따로 분리시키겠습니다.

최 하단의 버튼들은 이 모달내부에서만 사용되므로 모달안에 종속시키겠습니다. 

### 틀 만들기
일단 기본적인 틀을 준비해보도록 하죠. 

유저이미지를 담을 ThumbnailWrapper, 
인풋들을 담을 Form,
버튼들을 담을 ButtonsWrapper 를 만들겠습니다.

#### **src/components/ContactModal.js**
```javascript
import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Modal from './Modal';
import PropTypes from 'prop-types';

const ThumbnailWrapper = styled.div`
    /* 레이아웃 */
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: flex;
    justify-content: center;

    /* 색상 */
    background: white;
`;

const Form = styled.div`
    /* 레이아웃 */
    padding: 1rem;

    /* 색상 */
    background: ${oc.gray[0]};
`;

const ButtonsWrapper = styled.div`
    /* 레이아웃 */
    display: flex;
`;


class ContactModal extends Component {
    static propTypes = { 
        visible: PropTypes.bool, 
        // 모달의 모드
        mode: PropTypes.oneOf(['create', 'modify']), 
        // 모달에 들어갈 데이터 값
        name: PropTypes.string, 
        phone: PropTypes.string, 
        color: PropTypes.string, 
        onHide: PropTypes.func, 
        onAction: PropTypes.func, // 추가 혹은 수정
        onRemove: PropTypes.func // 나중에 구현할 삭제
    }

    render() {
        const { 
            visible,
            onHide
        } = this.props;

        return (
            <Modal visible={visible} onHide={onHide}>
                <ThumbnailWrapper></ThumbnailWrapper>
                <Form></Form>
                <ButtonsWrapper>안녕하세요 버튼들</ButtonsWrapper>
            </Modal>
        );
    }
}

export default ContactModal;
```

### Thumbnail 컴포넌트 (유저이미지) 만들기

이 컴포넌트의 색상과 크기는 유동적입니다.
각 유저마다 색상이 다르고,
리스트에서 보여줄때와, 모달에서 보여줄 때 크기가 다르기때문이죠.

size 와 color 를 props 로 받아와서 이 값을 유동적으로 반영하는 컴포넌트를 만들어보세요:

#### **src/components/Thumbnail.js**
```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Person from 'react-icons/lib/md/person';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    /* 레이아웃 */
    width: ${props => props.size };
    height: ${props => props.size };
    display: flex;
    align-items: center;
    justify-content: center;

    /* 기타 */
    border-radius: calc(${props => props.size} * 0.5); /* 동그라미가 되려면 이 값이 사이즈의 1/2 이상이어야 함 */
    font-size: calc(${props => props.size} * 0.75);

    /* 색상 */
    background: ${props => props.color};
    color: white;
`;

Wrapper.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
};

const Thumbnail = ({size, color}) => (
    <Wrapper size={size} color={color}>
        <Person/>
    </Wrapper>
);

Thumbnail.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
};


Thumbnail.defaultProps = {
    size: '4rem',
    color: '#000'
};

export default Thumbnail;
```

이 컴포넌트를 완성했다면, 모달에서 보여줍시다!

1) Thumbnail.js 컴포넌트를 불러오세요
2) mode, name, phone, color 값 레퍼런스를 만드세요 (이 값은 이전에 modal 을 띄울때 App 에서 전달하도록 했었죠?)
3) Thumbnail 컴포넌트의 props 에 size="8rem" color={color} 을 전달해서 렌더링하세요.

#### **src/components/ContactModal.js**

**[상단]**
```javascript
import Thumbnail from './Thumbnail';
```

&nbsp;


**[render 함수]**

```javascript
    render() {
        const { 
            visible,
            mode,
            name,
            phone,
            color,
            onHide
        } = this.props;

        return (
            <Modal visible={visible} onHide={onHide}>
                <ThumbnailWrapper>
                    <Thumbnail size="8rem" color={color}/>
                </ThumbnailWrapper>
                <Form></Form>
                <ButtonsWrapper>안녕하세요 버튼들</ButtonsWrapper>
            </Modal>
        );
    }
```

여기까지 하셨다면, 모달에 썸네일이 나타날것입니다!

![](http://i.imgur.com/1dJdAIs.png)

### Input 컴포넌트 만들기

텍스트를 입력하는 Input 컴포넌트를 만들겠습니다.

이 컴포넌트를 만들 때, 따로 추가해야할 기능이나, 내부에 추가적으로 렌더링할 엘리먼트는 없으므로 스타일드 컴포넌트를 만들어서 바로 내보내겠습니다.

주의: 이번엔 styled.div 가 아닌 styled.input 이에요.

#### **src/components/Input.js**
```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Input = styled.input`
    /* 레이아웃 */
    width: 100%;
    padding: 0.5rem;

    /* 색상 */
    border: 1px solid ${oc.gray[2]};

    /* 기타 */
    font-size: 1.5rem;
    line-height: 2rem;
    transition: all .25s;

    /* 입력중일때 */
    &:focus {
        outline: none;
        border: 1px solid ${oc.pink[3]};
        color: ${oc.pink[6]};
    }

    /* 컴포넌트 사이 간격 */
    & + & {
        margin-top: 1rem;
    }
`;

Input.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export default Input;
```

이제 이 컴포넌트를 모달에서 불러와볼까요?

#### **src/components/Modal.js**

**[상단]**
```javascript
import Input from './Input';
```

&nbsp;


**[render 함수]**
```javascript
    render() {
        const { 
            visible,
            mode,
            name,
            phone,
            color,
            onHide
        } = this.props;

        return (
            <Modal visible={visible} onHide={onHide}>
                <ThumbnailWrapper>
                    <Thumbnail size="8rem" color={color}/>
                </ThumbnailWrapper>
                <Form>
                    <Input 
                        name="name"
                        placeholder="이름"
                    />
                    <Input 
                        name="phone"
                        placeholder="전화번호"
                    />
                </Form>
                <ButtonsWrapper>안녕하세요 버튼들</ButtonsWrapper>
            </Modal>
        );
    }
```

Input 에 value 와 onChange 프로퍼티는 추후 설정 하겠습니다.

우선 렌더링이 잘 되는지 확인해보세요.

![](http://i.imgur.com/5EqTwOZ.png)

### ContactModal 내부 버튼 만들기
마지막으로, 버튼을 디자인하겠습니다.
버튼은 ContactModal 에만 사용되므로 이 안에 종속시키겠습니다.

>리액트 프로젝트를 만들 때, 내부의 컴포넌트를 분리할지 말지는 여러분들의 자유입니다.
>보통은, 한 컴포넌트 내부에서만 사용 되는 경우엔 그 안에 만드는게 편합니다.
>전체적인 코드가 너무 길어진다거나 해당 컴포넌트의 복잡도가 올라간다면 따로 분리시키는것도 좋습니다.

#### **ContactModal.js**

우선, 버튼을 만들어보겠습니다. 우리가 만들 버튼은, color 를 프로퍼티로 받아서 이 값에 따라 배경색을 조정합니다.
우리는 open-color 를 사용하기 때문에, props 값으로 굳이 #fffff 이런식의 HEX 형태의 색상을 제공하지 않고
teal, gray, red, blue 이런 값을 전달해서 인식하고 이 값에 따라 hover / active 때의 색상도 자연스럽게 설정해보겠습니다.

**[Button]**
```javascript
const Button = styled.div`
    /* 레이아웃 */
    padding-top: 1rem;
    padding-bottom: 1rem;
    flex: 1;
    display: inline-block;
    
    /* 기타 */
    cursor: pointer;
    text-align: center;
    font-weight: 500;
    font-size: 1.2rem;
    transition: all .3s;

    /* 색상 */
    color: white;
    background: ${props => oc[props.color][7]};

    /* 마우스가 위에 있을 때 */
    &:hover {
        background: ${props => oc[props.color][6]};
    }

    /* 클릭 될 때 */
    &:active {
        background: ${props => oc[props.color][8]};
    }
`;

Button.propType = {
    color: PropTypes.string
};
```

&nbsp;

**[render 함수]**

이제 이 버튼을 render 함수에서 렌더링 해줄건데요, mode 값에 따라 '추가' 를 보여주거나 '수정' 을 보여줍니다.

```javascript
    render() {
        const { 
            visible,
            mode,
            name,
            phone,
            color,
            onHide
        } = this.props;

        return (
            <Modal visible={visible} onHide={onHide}>
                <ThumbnailWrapper>
                    <Thumbnail size="8rem" color={color}/>
                </ThumbnailWrapper>
                <Form>
                    <Input 
                        name="name"
                        placeholder="이름"
                    />
                    <Input 
                        name="phone"
                        placeholder="전화번호"
                    />
                </Form>
                <ButtonsWrapper>
                    <Button color="teal">
	                    { mode === 'create' ? '추가' : '수정'}
                    </Button>
                    <Button color="gray">
	                    취소
                    </Button>
                </ButtonsWrapper>
            </Modal>
        );
    }
```



![](http://i.imgur.com/L3PMOk0.png) 

모달의 디자인이 완성되었습니다! 이제 기능을 달아줄 차례인데요. 우선, Input 에 App 의 state 를 연동해주겠습니다.

### Input 상태 연동하기 
이전에 null 로 설정만 해놨던, modalHandler.change 를 구현해봅시다.

이 메소드의 역할은, input 의 name 과 변할 값 value 를 받아와서 state 에 적용합니다

#### **src/App.js** 
**[modalHandler - change]**
```
        change: ({name, value}) => {
            this.setState({
                modal: {
                    ...this.state.modal, 
                    [name]: value // 인자로 전달받은 name 의 값을 value 로 설정
                }
            })
        },
```

&nbsp;

**[render - ContactModal 렌더링]**

그리고 위 메소드를 render 함수에서 ContactModal 에 onChange 프로퍼티로 전달하세요
```
                <ContactModal 
                    {...modal} 
                    onHide={modalHandler.hide}
                    onChange={modalHandler.change}
                />
```

state 내부의 name, phone 값은 상단의 ...modal 에서 전달되어서 따로 넣어주지 않아도 됩니다.

[App 전체코드](https://gist.github.com/velopert/444fd4cdee4411efa7e74e981c40c11a)

그 다음엔, ContactModal 에서 handleChange 메소드를 만들고 방금 전달받은 onChange 프로퍼티를 사용하게하세요. 그리고, handleChange 를 Input 에 전달해주고, value 값도 설정하세요.

#### **src/components/ContactModal.js**

**[handleChange 메소드]**
```
    handleChange = (e) => {
        const { onChange } = this.props;
        onChange({
            name: e.target.name,
            value: e.target.value
        });
    }
```
&nbsp;

**[render]**

각 input 에 handleChange 와 value 값을 전달하겠습니다.

```
    render() {
        const { handleChange } = this;
        const { 
            visible,
            mode,
            name,
            phone,
            color,
            onHide
        } = this.props;
        
        return (
            <Modal visible={visible} onHide={onHide}>
                <ThumbnailWrapper>
                    <Thumbnail size="8rem" color={color}/>
                </ThumbnailWrapper>
                <Form>
                    <Input 
                        name="name"
                        placeholder="이름"
                        value={name}
                        onChange={handleChange}
                    />
                    <Input 
                        name="phone"
                        placeholder="전화번호"
                        value={phone}
                        onChange={handleChange}
                    />
                </Form>
                <ButtonsWrapper>
                    <Button color="teal">
	                    { mode === 'create' ? '추가' : '수정'}
                    </Button>
                    <Button color="gray">취소</Button>
                </ButtonsWrapper>
            </Modal>
        );
    }
}
```

여기까지 완료하셨다면, 모달을 켜서 input 내용을 수정할때 오류가 뜨지 않는지 확인하세요.
React DevTool 에서도 state 가 잘 변하는지 확인하세요.

[ContactModal 전체코드](https://gist.github.com/velopert/f5593e647c882037dff40a3b3fc118f8)

![](http://i.imgur.com/h7ZTNRy.png)

### state 에 데이터 추가하기
드디어! 데이터를 state 에 추가할 차례입니다.

#### **src/App.js**

**[state]**
우선 App 컴포넌트의 state에 contacts 라는 값을 빈 배열로 설정하세요.
```
    state = {
        view: 'favorite',
        modal: {
            visible: false,
            mode: null // create 혹은 modify
        },
        contacts: []
    }
```



&nbsp;
**[상단]**
데이터를 추가하기전에, 고유 id 를 생성하는 shortid 를 불러오겠습니다 (저번 강의에서도 사용했엇죠?)
```
import shortid from 'shortid';
```



&nbsp;

**[modalHandler - action]**
이제 데이터 추가 함수 modalHandler.action.create를 완성하겠습니다.  
```
        action: {
            create: () => {
                // 고유 ID 생성
                const id = shortid.generate();

                // 레퍼런스 생성
                const { contacts, modal: { name, phone, color } } = this.state;

                // 데이터 생성
                const contact = {
                    id,
                    name,
                    phone,
                    color,
                    favorite: false // 즐겨찾기의 기본값은 false
                };

                this.setState({
                    // 기존 배열에있던것들을 집어넣고, contact 를 뒤에 추가한 새 배열로 설정
                    contacts: [...contacts, contact]
                });
                
                // 모달 닫기
                this.modalHandler.hide();
            },
            
            modify: null,
            remove: null
        }
```
&nbsp;

**[render - ContactModal 렌더링]**
이제 위 함수를 ContactModal 의 onAction 으로 전달하세요.
onAction 은 모달의 mode 에 따라 create 가 실행되거나 modify 가 실행됩니다.
```
                <ContactModal 
                    {...modal} 
                    onHide={modalHandler.hide}
                    onChange={modalHandler.change}
                    onAction={modalHandler.action[modal.mode]}
                />
```

[App.js 전체코드](https://gist.github.com/velopert/c10a2e6d65aa5930f16d45e7099c2590)

&nbsp;



#### **src/components/ContactModal.js**
방금 전달받은 onAction 을 추가 버튼에 onClick 이벤트로 설정하세요.
취소 버튼에는 onHide 를 설정하세요.

**[render]**
```
    render() {
        const { handleChange } = this;
        const { 
            visible,
            mode,
            name,
            phone,
            color,
            onHide,
            onAction
        } = this.props;
        

        return (
            <Modal visible={visible} onHide={onHide}>
                <ThumbnailWrapper>
                    <Thumbnail size="8rem" color={color}/>
                </ThumbnailWrapper>
                <Form>
                    <Input 
                        name="name"
                        placeholder="이름"
                        value={name}
                        onChange={handleChange}
                    />
                    <Input 
                        name="phone"
                        placeholder="전화번호"
                        value={phone}
                        onChange={handleChange}
                    />
                </Form>
                <ButtonsWrapper>
                    <Button color="teal"
                        onClick={onAction}>
                        { mode === 'create' ? '추가' : '수정'}
                    </Button>
                    <Button 
                        onClick={onHide}
                        color="gray">
                        취소
                    </Button>
                </ButtonsWrapper>
            </Modal>
        );
    }
```

여기까지 완성되었다면, 한번 데이터 추가를 시도해보세요.

![](http://i.imgur.com/QXDrba1.png)

위 이미지처럼 데이터를 추가하고나서 React DevTool에서 contacts 배열을 봤을때 저렇게 데이터가 추가된 상태라면 성공입니다.

추가 모달의 기능을 다 완성했습니다! 이제 이 모달은 추후 데이터를 수정할때 다시 좀 더 고치겠습니다.

## 7. [주소록 리스트 렌더링하기](https://github.com/vlpt-playground/react-contact-tagged/tree/07/src)

이제 데이터를 화면에 나타낼 차례입니다.

### 주소록 기본값 설정
테스트를 용이하게 하기 위해서 state 의 contacts 값에 기본값을 설정하세요:

#### **src/App.js**
**[state]**
```
state = {
        view: 'favorite',
        modal: {
            visible: false,
            mode: null // create 혹은 modify
        },
        contacts: [
            {
                "id": "SyKw5cyAl",
                "name": "김민준",
                "phone": "010-0000-0000",
                "color": "#40c057",
                "favorite": true
            },
            {
                "id": "r1s_9c10l",
                "name": "아벳",
                "phone": "010-0000-0001",
                "color": "#12b886",
                "favorite": true
            },
            {
                "id": "BJcFqc10l",
                "name": "베티",
                "phone": "010-0000-0002",
                "color": "#fd7e14",
                "favorite": false
            },
            {
                "id": "BJUcqqk0l",
                "name": "찰리",
                "phone": "010-0000-0003",
                "color": "#15aabf",
                "favorite": false
            },
            {
                "id": "rJHoq91Cl",
                "name": "데이비드",
                "phone": "010-0000-0004",
                "color": "#e64980",
                "favorite": false
            }
        ]
    }
```

### ContactList 컴포넌트 만들기
#### **src/components/ContactList.js**
자 이제 주소록 목록을 렌더링할 ContactList 컴포넌트를 만들겠습니다.
이 컴포넌트는 class 형태의 컴포넌트로 작성하세요. (나중에 최적화를 할 것이기 때문입니다)

#### 기본 틀 만들기
우선 리스트의 기본 틀만 만들어봅시다

```javascript
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class ContactList extends Component {

    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object),
        search: PropTypes.string, // 검색 키워드
        onToggleFavorite: PropTypes.func, // 즐겨찾기 토글
        onOpenModify: PropTypes.func // 수정 모달 띄우기
    }

    render() {
        const { contacts } = this.props
        const contactList = contacts.map(
            contact => <div key={contact.id}>{JSON.stringify(contact)}</div>
        );
        return (
            <div>
                {contactList}
            </div>
        );
    }
}

export default ContactList;
```
이 컴포넌트는 contacts 를 프로퍼티로 받아서 리스트로 렌더링해줍니다.
그외에 search, onToggleFavorite, onOpenModify 프로퍼티들은 나중에 다루도록 하겠습니다.

우선 이번에는 임시로 `<div>` 태그 안에 내용을 담아서 보여주도록 했습니다.


#### App 에서 불러와서 렌더링
자 이제 이 컴포넌트를 렌더링해봅시다.

#### **src/App.js**
**[상단]**
컴포넌트를 불러오세요
```
import ContactList from './components/ContactList';
```

**[state]**
당분간 리스트 화면을 주로 작업할것이니, view의 기본값을 list 로 잠깐 설정하겠습니다.

```
    state = {
        view: 'list',
        (...)
```

**[render]**
this.state 의 contacts 레퍼런스를 만들고, list 용 Container 내부에 ContactList 를 렌더링한다음에 해당 컴포넌트에 contacts 값을 설정하세요.

```javascript
    render() {
        // 레퍼런스 준비
        const { 
            handleSelectView,
            handleFloatingButtonClick,
            modalHandler
        } = this;

        const { 
            view,
            modal,
            contacts
        } = this.state;

        return (
            <div>
                <Header/>
                <ViewSelector onSelect={handleSelectView} selected={view}/>
                
                {/* view 값에 따라 다른 컨테이너를 보여준다 */}
                <Container visible={view==='favorite'}>즐겨찾기</Container>
                <Container visible={view==='list'}>
                    <ContactList contacts={contacts}/>
                </Container>
                
                <ContactModal 
                    {...modal} 
                    onHide={modalHandler.hide}
                    onChange={modalHandler.change}
                    onAction={modalHandler.action[modal.mode]}
                />
                <Dimmed visible={modal.visible}/>
                <FloatingButton onClick={handleFloatingButtonClick}/>
            </div>
        );
    }
```

화면을 확인해볼까요?

![](http://i.imgur.com/JYx7L2f.png)

우리의 데이터가 리스팅 되었습니다. 지금은 텍스트로 나오는걸 컴포넌트화 해봅시다.

### ContactItem 컴포넌트 만들기

각 주소록을 보여주는 ContactItem 을 만들겠습니다.
만들기전에 이 컴포넌트의 기능을 살펴보겠습니다.

![](http://i.imgur.com/lAXjWxe.gif)

마우스가 위에 있을땐 우측에 버튼들이 나타납니다. 첫번째 버튼은 즐겨찾기를 토글하는기능이고 두번째 버튼은 모달을 띄우는 버튼입니다.

우선 아이템들을 모두 제대로 리스팅 하고나서 위 기능들을 완성하도록 하겠습니다.

#### **src/components/ContactItem.js**
#### 기본 틀 만들기
먼저 틀을 준비해보겠습니다.
회색 박스를 만들고, 마우스가 올라가면 우측에서 액션버튼들을 담은 박스가 나타나도록 설정합니다.
그리고, Thumbnail 컴포넌트를 불러와서 좌측에 렌더링하고
Info 컴포넌트를 만들어서 나머지공간을 꽉 채우겠습니다.

```javascript
import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';

const Wrapper = styled.div`
    /* 레이아웃 */
    padding: 1rem;
    position: relative;
    overflow: hidden;
    display: flex;

    /* 색상 */
    background: ${oc.gray[0]};
    border: 1px solid ${oc.gray[2]};

    /* 애니메이션 */
    transition: all .25s;

    /* 사이 간격 */
    & + & {
        margin-top: 1rem;   
    }

    .actions {
        /* 레이아웃 */
        position: absolute;
        top: 0;
        right: -3rem; /* 기본적으로는 숨겨있음 */
        width: 3rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column; /* 세로로 나열 */

        /* 색상 */
        background: ${oc.gray[1]};
        border-left: 1px solid ${oc.gray[2]};
        opacity: 0; /* 기본적으론 투명함 */

        /* 애니메이션 */
        transition: all .4s;
    }

    /* 커서가 위에 있으면 */
    &:hover {
        border: 1px solid ${oc.gray[4]};
        background: white;

        /* actions 를 보여준다 */
        .actions {
            opacity: 1;
            right: 0rem;
        }
    }
`

const Info = styled.div`
    /* 레이아웃 */
    margin-left: 1rem;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column; 

    /* 나머지 공간 꽉 채워서 잘 나타나는지 테스트용 */
    background: black;
    
`

class ContactItem extends Component {

    static propTypes = {
        contact: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            phone: PropTypes.string,
            color: PropTypes.string,
            favorite: PropTypes.bool
        }),
        onToggleFavorite: PropTypes.func,
        onOpenModify: PropTypes.func
    }

    render() {
        return (
            <Wrapper>
                <Thumbnail/>
                <Info/>
                <div className="actions">Hi</div>
            </Wrapper>
        );
    }
}

export default ContactItem;
```

#### ContactItem 렌더링하기

#### **src/components/ContactList.js**

이제 위에서 만든 ContactItem 컴포넌트를 불러와서 컴포넌트를 mapping 하는 과정에서 div 대신 ContactItem 을 렌더링하도록 하세요. 


```javascript
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

class ContactList extends Component {

    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object),
        search: PropTypes.string, // 검색 키워드
        onToggleFavorite: PropTypes.func, // 즐겨찾기 토글
        onOpenModify: PropTypes.func // 수정 모달 띄우기
    }

    render() {
        const { contacts } = this.props;
        const contactList = contacts.map(
            contact => (
                <ContactItem 
                    key={contact.id} 
                    contact={contact}
                />
            )
        );
        return (
            <div>
                {contactList}
            </div>
        );
    }
}

export default ContactList;
```

잘 나타나는지 확인을 해보세요:

![](http://i.imgur.com/I2fLAVa.gif)

#### 연락처 정보 보여주기
#### **src/components/ContactItem.js**
자, 이제 연락처의 정보를 보여주게 설정해보겠습니다.

```javascript
(...)

const Info = styled.div`
    /* 레이아웃 */
    margin-left: 1rem;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column; 
`;

const Name = styled.div`
    font-size: 1.25rem;
    color: ${oc.gray[9]};
    font-weight: 500;
`;

const Phone = styled.div`
    color: ${oc.gray[6]}
    margin-top: 0.25rem;
`;


class ContactItem extends Component {

    static propTypes = {
        contact: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            phone: PropTypes.string,
            color: PropTypes.string,
            favorite: PropTypes.bool
        }),
        onToggleFavorite: PropTypes.func,
        onOpenModify: PropTypes.func
    }

    render() {
        // 레퍼런스 준비
        const {
            contact: { name, phone, favorite, id, color }
        } = this.props;

        return (
            <Wrapper>
                <Thumbnail color={color}/>
                <Info>
                    <Name>{name}</Name>
                    <Phone>{phone}</Phone>
                </Info>
                <div className="actions">Hi</div>
            </Wrapper>
        );
    }
}

export default ContactItem;
```
여기까지 하시면 주소록 정보가 예쁘게 렌더링이 됩니다. 뭔가 완성이 되어가는것 같죠?
![](http://i.imgur.com/RsLGcsh.png)
주소록을 직접 추가도 해보세요!

## [8. 주소록 수정 및 삭제하기](https://github.com/vlpt-playground/react-contact-tagged/tree/08/src)

주소록 수정을 할 때는 이전에 우리가 만들었던 ContactModal 을 재사용하겠습니다.
ContactItem 의 actions 부분에 동그란 버튼을 두개 만들고, 수정 버튼을 누르면 ContactModal 을 띄워보도록 하겠습니다.


### ContactItem actions 버튼들 만들기

#### **src/components/ContactItem.js**

##### 아이콘 불러오기

파일의 상단에 아이콘들을 불러오세요. 하나는 별 아이콘이고 하나는 수정 아이콘 입니다.

```javascript
import StarIcon from 'react-icons/lib/md/star';
import EditIcon from 'react-icons/lib/md/edit';
```

##### CircularButton 컴포넌트 스타일 생성
파일 내부에 CircularButton 컴포넌트 스타일을 만들어주세요.

즐겨찾기의 경우엔 favorite 클래스이름을 통해 명시해주고, 이 버튼은 커서가 위에 있을 때 노란색으로 변하게 해보겠습니다.
```javascript
import styled, { css } from 'styled-components';
// (...)
const CircleButton = styled.div`
    /* 레이아웃 */
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.25rem;

    /* 색상 */
    background: white;
    border: 1px solid ${oc.gray[4]};
    color: ${oc.gray[4]};

    /* 기타 */
    border-radius: 1rem;
    font-size: 1.15rem;

    /* 마우스 커서가 위에 있을 때*/
    &:hover {
        border: 1px solid ${oc.gray[7]};
        color: ${oc.gray[9]};
    }

    /* 즐겨찾기 - 노란색 */
    ${ props => props.favorite && css`
        &:active {
            border: 1px solid ${oc.yellow[6]};
            color: ${oc.yellow[6]};
        }
    `}
`;
```

![](http://i.imgur.com/GdhDP10.gif)

### 주소록 수정모달 띄우기

#### **src/App.js**

##### itemHandler 만들기
컴포넌트 내부에 itemHandler 를 선언하세요. 이 객체는 toggleFavorite 와 openModify 함수를 내장하고있습니다.
toggleFavorite 은 즐겨찾기로 지정하거나 취소하는 함수인데, 이는 추후 구현하겠습니다.

먼저 openModify 부터 작성할건데요, 이 함수 내부에서는, 주소록의 id를 불러와서 index 를 찾고, 해당 주소록의 index와 정보를 모달로 전달해줍니다.

여기서 index 를 처음부터 그냥 받아오지 않는 이유는 나중에 우리가 검색 기능을 구현하고, 가나다순으로 정렬도 할것이기 때문입니다.

```javascript
    itemHandler = {
        toggleFavorite: null,
        openModify: (id) => {
            const { contacts } = this.state;
            // id 로 index 조회
            const index = contacts.findIndex(contact => contact.id === id);
            const item = this.state.contacts[index];
            
            this.modalHandler.show(
                'modify',
                {
                    ...item,
                    index
                }
            );
        }
    }
```

##### ContactList 에 onOpenModify 전달
이제 이 함수를 ContactList 를 렌더링할때 props 로 설정하겠습니다.
```javascript
   render() {
        // 레퍼런스 준비
        const { 
            handleSelectView,
            handleFloatingButtonClick,
            modalHandler,
            itemHandler
        } = this;

        (...)
                    <ContactList 
                        contacts={contacts}
                        onOpenModify={itemHandler.openModify}
                    />
        (...)
    }
```
[App.js 전체코드](https://gist.github.com/velopert/7e3b7056cb4b7c90a44932e0beaf26c3)

#### **src/components/ContactList.js**

#### onOpenModify 를 ContactItem 으로 전달
이제 ContactList 에서 전달받은 함수를 ContactItem 으로 넘기겠습니다.

```javascript
    render() {
        const { contacts, onOpenModify } = this.props;
        const contactList = contacts.map(
            contact => (
                <ContactItem 
                    key={contact.id} 
                    contact={contact}
                    onOpenModify={onOpenModify}
                />
            )
        );
        return (
            <div>
                {contactList}
            </div>
        );
    }
```

#### **src/components/ContactItem.js**
##### onOpenModify 호출하기

이 함수를 이제 버튼이 클릭되면 호출하도록 해보겠습니다.
```javascript
    render() {
        // 레퍼런스 준비
        const {
            contact: { name, phone, favorite, id, color },
            onOpenModify
        } = this.props;

        return (
            <Wrapper>
                <Thumbnail color={color}/>
                <Info>
                    <Name>{name}</Name>
                    <Phone>{phone}</Phone>
                </Info>
                <div className="actions">
                    <CircleButton favorite>
                        <StarIcon/>
                    </CircleButton>
                    <CircleButton onClick={() => onOpenModify(id)}>
                        <EditIcon/>
                    </CircleButton>
                </div>
            </Wrapper>
        );
    }
```

### 주소록 수정 / 삭제 기능 구현하기
#### **src/App.js**
##### modalHandler 수정하기

데이터를 수정할때는 slice 를 사용해서 수정할 데이터의 전후 주소록들을 불러와서 넣고, 그 사이에는 수정된 값을 넣습니다.

삭제함수의 경우에는 modify 랑 거의 똑같은데 중간에 넣을 item 정보를 빼면 됩니다.

```javascript
    // 모달 관련 메소드들
    modalHandler = {
        (...)
        action: {
            create: () => {
                (...)
            },
            modify: () => {
                // 레퍼런스 준비
                const {
                    modal: { name, phone, index },
                    contacts
                } = this.state;

                const item = contacts[index];

                // 상태 변경
                this.setState({
                    contacts: [
                        ...contacts.slice(0, index), // 0 ~ index 전까지의 객체를 넣음
                        {
                            ...item, // 기존의 아이템 값에
                            name, // name 과
                            phone // phone 을 덮어 씌움
                        },
                        ...contacts.slice(index + 1, contacts.length) // 그 뒤에 객체들을 넣음
                    ]
                });

                // 모달 닫기
                this.modalHandler.hide();
            },
            remove: () => {
                // 레퍼런스 준비
                const {
                    modal: { index },
                    contacts
                } = this.state;

                // 상태 변경
                this.setState({
                    contacts: [
                        ...contacts.slice(0, index), // 0 ~ index 전까지의 객체를 넣음
                        ...contacts.slice(index + 1, contacts.length) // 그 뒤에 객체들을 넣음
                    ]
                });

                // 모달 닫기
                this.modalHandler.hide();
            }
        }
    }
```

##### ContactModal 에 onRemove 전달하기
modify 함수의 경우엔 onAction 으로 이미 전달이 되고있는 상태지만 (아까 `modalHandler.action[modal.mode]` 이렇게 전달했었죠?) onRemove 는 아직 전달이 안됐습니다.

따로 전달을 하겠습니다.

```javascript
                <ContactModal 
                    {...modal} 
                    onHide={modalHandler.hide}
                    onChange={modalHandler.change}
                    onAction={modalHandler.action[modal.mode]}
                    onRemove={modalHandler.action.remove}
                />
```

자, 이제 한번 수정을 시도해보세요. 

![](http://i.imgur.com/8mIdZw5.gif)

#### **src/components/ContactModal.js**
이제, 삭제 버튼을 만들고 삭제함수를 호출해보겠습니다.

##### 삭제 아이콘 불러오기
먼저 상단에 삭제 아이콘을 불러오세요.
```javascript
import RemoveIcon from 'react-icons/lib/md/remove-circle';
```

#### RemoveButton 스타일링
RemoveButton 컴포넌트를 ContactModal 내부에 스타일링하겠습니다. 이 버튼은 우측 상단에 위치하며, 기본색을 회색으로, 마우스가 올라가면 빨간색으로 변합니다.

그리고 visible 프로퍼티가 true 일때만 보여집니다.

```javascript
const RemoveButton = styled.div`
    /* 레이아웃 */
    position: absolute;
    right: 1rem;
    top: 1rem;

    /* 색상 */
    color: ${oc.gray[6]};

    /* 기타 */
    cursor: pointer;
    font-size: 2rem;

    /* 마우스 커서 위에 있을 때 */
    &:hover {
        color: ${oc.red[6]};
    }
    /* 마우스 커서 클릭 시 */
    &:active {
        color: ${oc.red[7]}
    }

    ${props => !props.visible && 'display: none;'}
`

RemoveButton.propTypes = {
    visible: PropTypes.bool
};
```

#### RemoveButton 렌더링하기
```javascript
    render() {
        const { handleChange } = this;
        const { 
            visible,
            mode,
            name,
            phone,
            color,
            onHide,
            onAction,
            onRemove
        } = this.props;
        

        return (
            <Modal visible={visible} onHide={onHide}>
                <ThumbnailWrapper>
                    <RemoveButton 
                        visible={mode==='modify'} 
                        onClick={onRemove}>
                            <RemoveIcon/>
                    </RemoveButton>
                    <Thumbnail size="8rem" color={color}/>
                </ThumbnailWrapper>
                
		        (...) 
```
[ContactModal.js 전체코드 보기](https://gist.github.com/velopert/167497b1741a2c3d42e0afeddab914f7)

이제 주소록 삭제가 잘 되나 테스팅 해봅시다.

![](http://i.imgur.com/JATAAML.gif)


## [9. 검색기능, 정렬기능 구현하기](https://github.com/vlpt-playground/react-contact-tagged/tree/09/src)

이제 검색기능을 구현해보겠습니다. 

검색기능을 구현할땐 Input 컴포넌트를 재사용할것이므로, 추가적으로 만들어야할 컴포넌트는 없습니다.

#### **src/App.js**

##### 상단에 Input 컴포넌트 불러오기
```javascript
import Input from './components/Input';
```

##### state 에 search 값 추가
App 의 초기 state 에 search 값을 추가하세요.

```javascript
    state = {
        view: 'list',
        modal: {
            visible: false,
            mode: null // create 혹은 modify
        },
        contacts: [
            (...)
        ],
        search: ''
    }
```


##### 검색 수정 함수 만들기
검색 인풋이 수정될때 실행 될 함수를 만들겠습니다.

```javascript
    // 검색창 수정
    handleSearchChange = (e) => {
        this.setState({
            search: e.target.value
        });
    }
```

##### Input 렌더링 및 상태설정
Input 에 onChange, value, placeholder 값을 설정하세요.
그리고 ContactList 에 검색인풋의 내용을 전달하세요.
주소록 필터링 / 정렬은 ContactList 에서 이뤄집니다.

```javascript
    render() {
        // 레퍼런스 준비
        const { 
            handleSelectView,
            handleFloatingButtonClick,
            modalHandler,
            itemHandler,
            handleSearchChange
        } = this;

        const { 
            view,
            modal,
            contacts,
            search
        } = this.state;

        return (
            <div>
                <Header/>
                <ViewSelector onSelect={handleSelectView} selected={view}/>
                
                {/* view 값에 따라 다른 컨테이너를 보여준다 */}
                <Container visible={view==='favorite'}>즐겨찾기</Container>
                <Container visible={view==='list'}>
                    <Input 
                        onChange={handleSearchChange} 
                        value={search} 
                        placeholder="검색"
                    />
                    <ContactList 
                        contacts={contacts}
                        onOpenModify={itemHandler.openModify}
                        search={search}
                    />
                    (...)
```



#### **src/components/ContactList.js**
##### margin-top 설정한 Wrapper 생성
우리가 Input 컴포넌트를 ContactList 바로 위에 만들었기 때문에 다음과 같이 두 컴포넌트가 붙어있을것입니다. 
ContactList 에 margin-top 을 설정하세요.
```javascript
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const Wrapper = styled.div`
    margin-top: 1rem;
`;

class ContactList extends Component {

    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object),
        search: PropTypes.string, // 검색 키워드
        onToggleFavorite: PropTypes.func, // 즐겨찾기 토글
        onOpenModify: PropTypes.func // 수정 모달 띄우기
    }

    render() {
        const { contacts, onOpenModify } = this.props;
        const contactList = contacts.map(
            contact => (
                <ContactItem 
                    key={contact.id} 
                    contact={contact}
                    onOpenModify={onOpenModify}
                />
            )
        );
        return (
            <Wrapper>
                {contactList}
            </Wrapper>
        );
    }
}

export default ContactList;
```

##### 필터링, 정렬 
이제 contactList 를 검색 키워드로 필터링하고, 그리고 가나다순으로 정렬해보겠습니다.
이 과정에서는 자바스크립트의 내장함수 [filter](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), [sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 가 사용됩니다.

기존 contactList 설정 부분을 다음과 같이 수정하세요
```javascript
        const contactList = contacts
                            .filter( // 키워드로 필터링
                                c => c.name.indexOf(search) !== -1
                            ).sort( // 가나다순으로 정렬
                                (a,b) => {
                                    if(a.name > b.name) return 1;
                                    if (a.name < b.name) return -1;
                                    return 0;
                                }
                            ).map( // 컴포넌트로 매핑
                                contact => (
                                    <ContactItem 
                                        key={contact.id} 
                                        contact={contact}
                                        onOpenModify={onOpenModify}
                                    />
                                )
                            );
```

![](http://i.imgur.com/aZHJBDq.png)
자 여기까지 오시면 필터링도 되고 정렬도 됩니다.

## [10. 즐겨찾기 기능 구현하기](https://github.com/vlpt-playground/react-contact-tagged/tree/10/src)
즐겨찾기 기능은 수정이랑 비슷해서 금방 구현 할 수 있습니다. 
토글하는것 까지는 함께 진행하고 마지막 즐겨찾기 목록을 띄우는건 일부코드만 제공하고 
나머지 리스트를 보여주는건 여러분에게 맡기겠습니다.


### 즐겨찾기 토글 함수 만들기
#### **src/App.js** 

##### itemHandler.toggleFavorite 완성
```javascript
    itemHandler = {
        toggleFavorite: (id) => {
            const { contacts } = this.state;
            // id 로 index 조회
            const index = contacts.findIndex(contact => contact.id === id);
            const item = this.state.contacts[index];

            this.setState({
                contacts: [
                    ...contacts.slice(0, index),
                    {
                        ...item,
                        favorite: !item.favorite // 기존의 값을 반대로 설정
                    },
                    ...contacts.slice(index + 1, contacts.length)
                ]
            });
        },
        (...)
```

이미 했던것들이라 익숙하지요?
이제 이 함수를 ContactList 로 전달하고 ContactList 에서 ContactItem 으로 전달하겠습니다.

##### ContatList 렌더링 수정
onToggleFavorite 값을 설정하세요
```javascript
                    <ContactList 
                        contacts={contacts}
                        onOpenModify={itemHandler.openModify}
                        onToggleFavorite={itemHandler.toggleFavorite}
                        search={search}
                    />
```


#### **src/components/ContactList.js**
##### ContactItem 렌더링 수정

onToggleFavorite 값을 전달하세요.
```javascript
    render() {
        const { contacts, onOpenModify, search, onToggleFavorite } = this.props;
                                
        const contactList = contacts
                            .filter( // 키워드로 필터링
                                c => c.name.indexOf(search) !== -1
                            ).sort( // 가나다순으로 정렬
                                (a,b) => {
                                    if(a.name > b.name) return 1;
                                    if (a.name < b.name) return -1;
                                    return 0;
                                }
                            ).map( // 컴포넌트로 매핑
                                contact => (
                                    <ContactItem 
                                        key={contact.id} 
                                        contact={contact}
                                        onOpenModify={onOpenModify}
                                        onToggleFavorite={onToggleFavorite}
                                    />
                                )
                            );

                            
        return (
            <Wrapper>
                {contactList}
            </Wrapper>
        );
    }
```


#### **src/components/ContactItem.js**

#### CircleButton 수정
즐겨찾기가 활성화 됐을땐 버튼이 노란색으로 보여지도록 해보겠습니다.

이 컴포넌트에 active 값이 true 라면 색상이 변하도록 코드를 작성하세요.

```javascript
const CircleButton = styled.div`
    (...)

    /* 즐겨찾기 - 노란색 */
    ${ props => props.favorite && css`
        /* active props 를 전달받으면 노란색으로 */
        ${props => props.active && css`
            border: 1px solid ${oc.yellow[6]};
            color: ${oc.yellow[6]};

            &:hover {
                color: ${oc.yellow[5]};
                border: 1px solid ${oc.yellow[5]};
            }
        `}

        &:active {
            border: 1px solid ${oc.yellow[6]};
            color: ${oc.yellow[6]};
        }
    `}
`;

CircleButton.propTypes = {
    active: PropTypes.bool
};
```

#### 즐겨찾기 버튼 상태 및 함수 전달

onToggleFavorite 를 CircleButton 의 onClick 이벤트로 설정하세요.
id 값을 인자로 포함해서 실행하도록 설정하셔야합니다.

그리고 active 값을 favorite 으로 설정하세요.

```javascript
    render() {
        // 레퍼런스 준비
        const {
            contact: { name, phone, favorite, id, color },
            onOpenModify,
            onToggleFavorite
        } = this.props;

        return (
            <Wrapper>
                <Thumbnail color={color}/>
                <Info>
                    <Name>{name}</Name>
                    <Phone>{phone}</Phone>
                </Info>
                <div className="actions">
                    <CircleButton 
	                    favorite
	                    active={favorite} 
	                    onClick={() => onToggleFavorite(id)}>
                        <StarIcon/>
                    </CircleButton>
                    <CircleButton onClick={() => onOpenModify(id)}>
                        <EditIcon/>
                    </CircleButton>
                </div>
            </Wrapper>
        );
    }
```

여기까지 오시면 다음과같이, 즐겨찾기를 토글할수있게됩니다.

![](http://i.imgur.com/uY7kF9m.gif)

## [11. 즐겨찾기 목록 렌더링하기](https://github.com/vlpt-playground/react-contact-tagged/tree/11/src)
자, 마지막까지 거의 오셨습니다.
이 부분은 다음과 같이 생겼는데요:
![](http://i.imgur.com/SEEpyQw.png)

즐겨찾기에 추가된 주소록들을 렌더링해주고, 특별한 인터랙션은 없습니다.

아까전에 개발의 편의를 위해 App.js 에서 view 값을 'list' 로 기본값으로 설정했던것 기억나시죠?
이 부분을 이제 다시 'favorite' 로 설정하세요.

#### **src/App.js**  
```javascript
    state = {
        view: 'favorite',
        (...)
```

### FavoriteList 컴포넌트와 FavoriteItem 컴포넌트 만들기

이제 view 의 상태가 favorite 일때 보여줄 FavoriteList 컴포넌트와 그 안의 FavoriteItem 컴포넌트를 만들어보겠습니다.

우선 먼저 틀부터 만들어보도록 하죠. 

#### **src/components/FavoriteList.js**
데이터 배열을 컴포넌트 배열로 매핑하기전에, 예제 데이터를 보여줘서 FavoriteItem 을 렌더링 하도록 하겠습니다.

```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import FavoriteItem from './FavoriteItem';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    /* 레이아웃 */
    position: relative; /* 자식 컴포넌트의 크기를 이 컴포넌트의 50% 로 설정하기 위함 */
    display: flex;
    flex-wrap: wrap; /* 공간이 부족하면 다음 줄에 보여줌 */
`;

const FavoriteList = ({contacts}) => {
    return (
        <Wrapper>
            <FavoriteItem contact={{
                "id": "SyKw5cyAl",
                "name": "김민준",
                "phone": "010-0000-0000",
                "color": "#40c057",
                "favorite": true
            }}/>
        </Wrapper>
    )
}

FavoriteList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
};

export default FavoriteList;
```
#### **src/components/FavoriteItem.js**
색상이랑 name, phone 값을 일단 보여주기만 하겠습니다.
```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
    /* 레이아웃 */
    width: 50%;
    padding: 0.5rem;
`;

const Box = styled.div`
    background: ${props => props.color};
`;


const FavoriteItem = ({contact: { color, name, phone }}) => (
    <Wrapper>
        <Box color={color}>
            {name} {phone}
        </Box>
    </Wrapper>
);

FavoriteItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        phone: PropTypes.string,
        color: PropTypes.string,
        favorite: PropTypes.bool
    })
};

export default FavoriteItem;
```
#### **src/App.js**
그 다음엔, FavoriteList 컴포넌트를 렌더링하겠습니다.

##### 상단에 FavoriteList.js 불러오기
```javascript
import FavoriteList from './components/FavoriteList';
```

##### Container 안에 FavoriteList.js 렌더링
FavoriteList 를 렌더링 할 때 contacts 값도 전달하세요.
```javascript
                {/* view 값에 따라 다른 컨테이너를 보여준다 */}
                <Container visible={view==='favorite'}>
                    <FavoriteList contacts={contacts}/>
                </Container>
                <Container visible={view==='list'}>
                    (...)
                </Container>
```

이제 화면을 보시면 다음과 같이 아까 설정했던 예제 데이터가 나옵니다.
![](http://i.imgur.com/8da7kZW.png)

#### **src/components/FavoriteList.js**

방금 전달받은 contacts 배열을 favorite 값이 true 인 객체들로 필터링해서 FavoriteItem 배열로 map 함수를 통해 변환하세요.

```javascript
const FavoriteList = ({contacts}) => {
    const favoriteList = contacts
                        .filter( // 즐겨찾기 필터링
                            contact => contact.favorite
                        ).map(
                            contact => (
                                <FavoriteItem 
                                    key={contact.id} 
                                    contact={contact}
                                />
                            )
                        );

    return (
        <Wrapper>
            {favoriteList}
        </Wrapper>
    );
};
```

#### **src/components/FavoriteItem.js**

이제 FavoriteItem 컴포넌트를 스타일링 하겠습니다.
```javascript
import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import PersonIcon from 'react-icons/lib/md/person';

const Wrapper = styled.div`
    /* 레이아웃 */
    width: 50%;
    padding: 0.5rem;
`;

const Box = styled.div`
    background: ${props => props.color};
`;

const ThumbnailContainer = styled.div`
    /* 레이아웃 */
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    

    /* 색상 */
    color: white;

    /* 기타 */
    font-size: 4rem;
`;

const Info = styled.div`
    background: rgba(0,0,0,0.1);
    color: white;
    text-align: center;
    padding: 1rem;
`;

const Name = styled.div`
    font-size: 1.25rem;
    font-weight: 500;
`;

const Phone = styled.div`
    font-weight: 300;
    font-size: 0.8rem;
    opacity: 0.8;
    margin-top: 0.25rem;
`;


const FavoriteItem = ({contact: { color, name, phone }}) => (
    <Wrapper>
        <Box color={color}>
            <ThumbnailContainer>
                <PersonIcon/>
            </ThumbnailContainer>
            <Info>
                <Name>{name}</Name>
                <Phone>{phone}</Phone>
            </Info>
        </Box>
    </Wrapper>
);

FavoriteItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        phone: PropTypes.string,
        color: PropTypes.string,
        favorite: PropTypes.bool
    })
};

export default FavoriteItem;
```

![](http://i.imgur.com/RqwgdjH.png)

주요 기능들이 모두 완성되었습니다!

## [마무리](https://github.com/vlpt-playground/react-contact-tagged/tree/finish/src)
자 거의 다 끝났습니다. 조금만 더 하면 끝납니다.

### 주소록에 애니메이션 추가
주소록이 화면에서 나타날때, 그리고 사라질때 애니메이션을 줘보도록 하겠습니다.

#### **src/style-utils.js**
transitions 객체 안에 stretchOut 과 shrinkIn 키프레임을 만드세요. scale 은 엘리먼트를 축소하거나 확대시킵니다.
```javascript
export const transitions = {
    (...)
    stretchOut: keyframes`
        0% {
            transform: scale(0,0);
        }
        100% {
            transform: scale(1,1);
        }
    `,
    shrinkIn: keyframes`
        0% {
            transform: scale(1, 1);
        }
        100% {
            transform: scale(0,0);
        }
    `
}
```

#### **src/components/ContactList.js** 
##### CSSTransitionGroup, style-utils - transitions 불러오기
```javascript
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { transitions } from '../lib/style-utils';
```

##### Wrapper 에 애니메이션 스타일 선언하기
```javascript
const Wrapper = styled.div`
    margin-top: 1rem;

    .contact-enter {
        animation: ${transitions.stretchOut} .15s linear;
        animation-fill-mode: forwards;
    }

    .contact-leave {
        animation: ${transitions.shrinkIn} .15s linear;
        animation-fill-mode: forwards;
    }

`;
```

##### { contactList } 를 CSSTransitionGroup 으로 감싸기
```javascript
        return (
            <Wrapper>
                <CSSTransitionGroup
                        transitionName="contact"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                {contactList}
                </CSSTransitionGroup>
            </Wrapper>
        );
```

여기까지 하시면 다음과 같이 애니메이션이 나타납니다.
![](http://i.imgur.com/XpdL7Ur.gif)



## Do It Yourself

지난 강의때 만들었던 [TodoList](https://github.com/vlpt-playground/react-todo-list) 를 참조해서 Contacts 정보를 로컬스토리지에 저장하고 불러와보세요.

## 마치면서
수고하셨습니다 ^^ 
다음주에는 이 프로젝트의 성능 모니터링 및 최적화 작업을 진행하고
Redux 를 배워보도록 하겠습니다.