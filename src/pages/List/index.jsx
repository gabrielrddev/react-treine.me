import React from 'react';
import {TodoList} from '../../components/TodoList/index.jsx';
import { Header } from '../../components/Header/index.jsx';
import  {Footer}  from '../../components/Footer/index.jsx';

export function List() {
  return (
    <>
    <Header/>
    <div className="List">
      <TodoList />
    </div>
   <Footer/>
    </>
  );
}

