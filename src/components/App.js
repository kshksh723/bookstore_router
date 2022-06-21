import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import GlobalStyles from './reset';

  const Title = styled.div`
    font-size: 45px;
  `
  const Navigation = styled.ul`
    border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: end;
  `
  const Btn = styled.li`
  margin: 0px 15px;
  `

  const aa = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: antiquewhite;
    color: black;
  `


  const Sidebar = styled.div`
  border: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: start;
    width: 150px; 
`

  const I = styled.li`
  margin-bottom: 50px;
  `

  

  function App() {
      return (
   <Fragment>   
     <GlobalStyles />
     <Title> 순대 서점 </Title>
     <header className="aa">
        <p>title</p>
      </header>
     <body>
       <center>
         <div>
           <input type="text" placeholder="제품명"/>
           <button> 검색 </button>
<div>
           <nav>
        <Navigation className="navigation" >
            <Btn className="btn"><a href="#">로그인</a></Btn>
            <Btn className="btn"><a href="#">장바구니</a></Btn>
            <Btn className="btn"><a href="#">마이페이지</a></Btn>
            <Btn className="btn"><a href="#">쪽지</a></Btn>
        </Navigation>
    </nav>
 </div> 
         </div>
       </center>
      
       <Sidebar className="navigation side">
        <ul>

            <I class="btn"><a href="#">공과대학</a></I>
            <I class="list">
                    <I><a href="#">- 컴퓨터공학과 </a></I>
                    <I><a href="#">- 화학공학과</a></I>
               
            </I>
            <I class="btn"><a href="#">생명산업과학대학</a></I>
            <I class="list">
                    <I><a href="#">- 식품영양학과</a></I>
                    <I><a href="#">- 식품공학과</a></I>
                </I>
        </ul>
    </Sidebar> 
    <div>
      
    </div>
     </body>
   </Fragment> 

      );
  }


export default App;
