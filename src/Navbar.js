import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Netflix from "./assets/netflix.png";
import netflixMob from "./assets/netflixMob.png";

export default function Navbar() {
  const [black, setBlack] = useState(false);
  //const [isNavOPen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = () => {
    setBlack(window.pageYOffset > 5);
  };

  return (
    <div className={`navbar_main ${black && "navbar_scroll"}`}>
      <div className="netflix_logo">
        <img src={Netflix} alt="neflix_logo" height="60px"></img>
        <div className="wrapper">
          <div className="dropdown">Browse</div>
          <div className="dropdown_container">
            <div>Home</div>
            <div>TV Shows</div>
            <div>Movies</div>
            <div>New & Popular</div>
            <div>My List</div>
          </div>
        </div>

        <div className="nav_left">
          <div className="nav_option">Home</div>
          <div className="nav_option">TV Shows</div>
          <div className="nav_option">Movies</div>
          <div className="nav_option">New & Popular</div>
          <div className="nav_option">My List</div>
        </div>
        <div className="nav_right">
          {/* <i className="fa fa-search"></i> */}
          <div className="nav_option">KIDS</div>
          <div className="nav_option">DVD</div>
        </div>
      </div>
    </div>

    // <div className="navbar_main">
    //     <div className="netflix_logo">
    //     <img src="https://thewhitonline.com/wp-content/uploads/2020/09/netflix-logo.png" alt="neflix_logo" height="60px"></img>
    //     <div className="nav_right">UNLIMITED TV SHOWS & MOVIES
    //         <button className="btn_join_now">JOIN NOW</button>
    //         <button className="btn_sign">SIGN IN</button>

    //     </div>
    //     </div>
    // </div>

    // <Navbar dark expand="md">
    //     <div className="container">
    //       <NavbarBrand className="mr-auto" href="/">
    //         <img src="/" height="" width="" alt="Flixia" />
    //       </NavbarBrand>
    //        <NavbarToggler onClick={()=>setIsNavOPen(!isNavavOp)}/>
    //      <Collapse isOpen={isNavOpen} navbar>
    //       <Nav navbar>
    //         <NavItem>
    //           <NavLink to="/home">
    //             <span className="fa fa-home fa-lg"></span>Home</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink to="/about">
    //             <span className="fa fa-info fa-lg"></span>About Us</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink to="/menu">
    //             <span className="fa fa-list fa-lg"></span>Menu</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink to="/contactus">
    //             <span className="fa fa-address-card fa-lg"></span>Contact Us</NavLink>
    //         </NavItem>
    //       </Nav>
    //      </Collapse>
    //     </div>
    //   </Navbar>
  );
}
