// import { Fragment } from "react";
//===Use Context===
import { Fragment,useContext } from "react";
import { UserContext } from "../../contexts/user.context";
//======

import { Outlet,Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';

const Navigation = ()=>{
  //===Use Context===
  //=== authentication listener ===
    //const { currentUser,setCurrentUser } = useContext(UserContext);
    // console.log(currentUser);
    const { currentUser} = useContext(UserContext);
  //============
  //=================
  //=== authentication listener ===
    // const signOutHandler = async()=>{
    //   const response = await signOutUser();
    //   // console.log(response);
    //   setCurrentUser(null);
    // }
  //===============
    return(
      <Fragment>
        <div className="navigation">
          <Link className="logo-container" to="/">
           <CrwnLogo className="logo"/>
          </Link>
          
          <div className="nav-links-container">
            <Link className="nav-link" to="/shop">
              SHOP
            </Link>
            {/*<Link className="nav-link" to="/sign-in">
           {/* ====v1====
            <Link className="nav-link" to="/auth">
             SING IN
            </Link>
              ===========
          */}
            {/* ===Use Context====*/}
              {/*=== authentication listener ===*/}
            {/*<span className="nav-link" onClick={signOutHandler}>*/}
              {/*==============*/}
            {
              currentUser ?(
                <span className="nav-link" onClick={signOutUser}>
                SIGN OUT</span>):
              (
                <Link className="nav-link" to="/auth">SIGN IN</Link>
              )
            }
            {/* ===========*/}
          </div>
        </div>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation;
  