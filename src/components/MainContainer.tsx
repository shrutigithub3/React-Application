import {NavBar} from './NavBar';
import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
function MainContainer(){
    return(
        <>
        <NavBar/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default MainContainer;