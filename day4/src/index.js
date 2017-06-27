import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import reducers from './modules';

//Provider 는 react-redux 라이브러리에 내장되어있는, 리액트 앱에 store 를 손쉽게 연동 할 수 있도록 도와주는 컴포넌트입니다.
//이 컴포넌트를 불러온다음에, 연동 할 컴포넌트를 감싸준다음에 Provider 컴포넌트의 props로 store 값을 설정해주면 됩니다.
// Redux 관련 불러오기
import { createStore } from 'redux'
import { Provider } from 'react-redux';

// 스토어 생성
// Store 는 리덕스에서 가장 핵심적인 인스턴스입니다. 
// 이 안에 현재 상태를 내장하고있고, 구독(subscribe)중인 함수들이 상태가 업데이트 될 때 마다 다시 실행되게 해주죠.
//Store를 만드는건 생각보다 간단합니다.
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// App 컴포넌트가 store 에 연동되었습니다.
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
