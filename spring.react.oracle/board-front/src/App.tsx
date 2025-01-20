import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./views/Main";
import Authentication from "./views/Authentication";
import Search from "./views/Search";
import User from "./views/User";
import BoardWrite from "./views/Board/Write";
import BoardUpdate from "./views/Board/Update";
import BoardDetail from "./views/Board/Detail";

function App() {
  return (
    
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/search' element={<Search />} />
        <Route path='/user' element={<User />} />
        <Route path='/board'>
          <Route path='write' element={<BoardWrite/>}/>
          <Route path='update/:boardNumber' element={<BoardUpdate/>}/>
          <Route path=':boardNumber' element={<BoardDetail/>}/>
        </Route>
      </Routes>
  
  );
}

export default App;
