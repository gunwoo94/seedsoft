
import React from 'react';
import './App.css';
import Footer from './layouts/Footer';

//         component: Application 컴포넌트          //
function App() {
//          render: Application 컴포넌트 렌더링        //
// description: 메인 화면 : '/' - Main //
// description: 로그인 + 회원가입 : '/auth' -Authentication //
// description: 유저 페이지 : '/user/:userEmail' - User
// description: 검색 화면 : '/search/:word' - Search //
// description: 게시물 상세보기 : '/board/detail/:boardNumber' - BoardDetail // 
// description: 게시물 작성하기 : '/board/write' - BoardWrite//
// description: 게시물 수정하기 : '/board/update/:boardNumber' - BoardUpdate//

return (
   <>
    <Footer/>
   </>
  );
}

export default App;
