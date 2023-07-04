import { UserContextProvider } from './components/Context';
import { User } from './components/User';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiNavbar } from './components/MuiNavbar';
import { MuiAvatar } from './components/MuiAvatar';
import SimpleBottomNavigation from './components/SimpleBottomNavigation';
import MuiTable from './components/MuiTable';
import { BookStore } from './components/BookStore';
import { Store1 } from './components/Store1';
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import Input from './components/Login';
import { Comic } from './components/Comic';
import { FrontPage } from './components/FrontPage';
import { Mystery } from './components/Mystery';
import {Horror} from './components/Horror';
import MainContainer from './components/MainContainer';
import store from './redux/Store';
import { EndPage } from './components/EndPage';
import CartDesign from './components/CartDesign';


function App() {

  const PersonName={
    firstname:'shruti',
    lastname:'kumra',
  }

  const NameList=[
    {
      firstname:'shruti',
      lastname:'kumra',
    },
    {
      firstname:'shiffali',
      lastname:'jaryal',
    },
    {
      firstname:'mansi',
      lastname:'dhingra',
    },
    {
      firstname:'anshu',
      lastname:'sareen',
    }
  ]
  return (
    <div className="App">
      {/* <Greet name='Shruti' age={20} isLoggedIn={false} />
      <Person name={PersonName}/>
      <Customer name="shruti" title="CSE" />
      <Users userid={1}/> */}
     {/* <Form setData={null} setPrint={false} Name={''} />
      <Input user={{
        email: '',
        password: ''
      }} /> */}
        {/* <Customers name="shruti" title="web dev" /> */}
        {/* <User/>
        <Counter/> */}
        {/* <User/>
        <UserContextProvider children={undefined}/> */}
        {/* <Counter/> */}
        {/* <MuiTypography/> */}
        {/* <MuiTextField/> */}
        {/* <MuiSelect/> */}
        {/* <MuiGrid/> */}
        {/* <MuiCard/> */}
        {/* <MuiNavbar/> */}
        {/* <MuiBreadcrumbs/> */}
        {/* <MuiDrawer/> */}
        {/* <SimpleBottomNavigation/>
        <MuiAvatar/>
        <MuiTable/> */}
        {/* <BookStore/>
        <Input user={{
          name:'',
          email:'',
          password:'',
          contact:''
,
        }}/> */}

           <Routes>
           <Route path='/' element={<FrontPage/>}/>
           <Route path='/Main' element={<MainContainer/>}>
           <Route path='/Main/BookStore' element={<BookStore/>}/>
           <Route path='/Main/Comic' element={<Comic/>}/>
           <Route path='/Main/Mystery' element={<Mystery/>}/>
           <Route path='/Main/Horror' element={<Horror/>}/>
          
           </Route>
           <Route path='/Main/EndPage' element={<EndPage/>}/>
           </Routes>
         
          
{/* 
          <CartDesign/> */}
     
    </div>
  );
}

export default App;
