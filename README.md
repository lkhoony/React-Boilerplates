# React-Boilerplate

React Project를 위한 Boilerplate

---
# webpack-basic

webpack을 사용한 프로젝트 개발 및 빌드를 위한 boilerplate

- webpack bundling
- 개발 및 배포 환경 분리 (config directory)

## Features

- 개발 : webpack-dev-server, react-hot-loader
- 빌드 : webpack
- react, css, scss

## Getting Start

- 개발환경
- webpack.config.dev.js에서 port 수정 가능
```javascript
const port = process.env.PORT || 3000;
```
```yarn
yarn install
yarn start
```
Then open http://localhost:3000/ to see your app.

- 빌드
```yarn
yarn build
```

---
# redux-basic
redux 상태관리 라이브러리를 사용한 프로젝트 개발 및 빌드를 위한 boilerplate

- react-scripts 사용한 개발 및 빌드
- Container Components, Presentational Components 분리
```
├── src
│   ├── actions
│   │   └── counterAction.js
│   ├── container
│   │   └── ConunterContainer.js
│   │   └── index.js
│   ├── presentational
│   │   └── Conunter.js
│   │   └── index.js
│   ├── reducers
│   │   └── conunterReducer.js
│   │   └── index.js
│   ├── index.js
│   └── App.js
└── 
```
## Features
- 개발 및 빌드 : react-scripts
- react, react-redux, redux-actions

## Getting Start

- 개발환경

```yarn
yarn install
yarn react-scripts start
```

- 빌드
```yarn
yarn build
```

---
# react-electron-basic

react, electron을 사용한 desktop app 프로젝트를 위한 boilerplate

## Features

- React : react, react-router-dom
- Electron : electron, eletron-builder
- 개발 및 빌드 : webpack, webpack-dev-server, react-hot-loader
- etc : concurrently, wait-on, cross-env

## Getting Start

- 개발환경
- package.json에서 개발 port 수정 가능 (react-start, electron-start 모두 수정 필요)

```json
{
  "scripts": {
    "react-start": "cross-env PORT=3000 BROWSER=none webpack-dev-server --config configs/webpack.config.dev.js --hot",
    "electron-start": "wait-on http://localhost:3000 && cross-env MODE=dev electron ."
  }
}
```
```yarn
yarn install
yarn start
```


- 빌드
- release 디렉토리에 실행 및 설치 파일 생성
```yarn
yarn build-osx // for mac
yarn build-linux32" // for linux32",
yarn build-linux64" // for linux64",
yarn build-win32" : // for win32",
yarn build-win64" : // for win64"
```

