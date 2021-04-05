import React, { useState } from "react";
import Link from "next/link";
import NProgress from "nprogress";
import "../node_modules/nprogress/nprogress.css";
import { signout, isAuth } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Router from "next/router";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar
        expand="md"
        style={{
          backgroundColor: "#0c3c60 !important",
          color: "white",
          padding: "10px",
        }}
      >
        <Link href="/">
          <NavLink
            className="font-weight-bold pointer "
            style={{ cursor: "pointer" }}
          >
            <h3>ProgramO9</h3>
          </NavLink>
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div>
            <Nav className="ml-auto" navbar>
              <>
                <NavItem>
                  <Link href="/blogs">
                    <NavLink style={{ cursor: "pointer" }}>Blogs</NavLink>
                  </Link>
                </NavItem>
              </>

              {!isAuth() && (
                <>
                  <NavItem>
                    <Link href="/signin">
                      <NavLink style={{ cursor: "pointer" }}>Signin</NavLink>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link href="/signup">
                      <NavLink style={{ cursor: "pointer" }}>Signup</NavLink>
                    </Link>
                  </NavItem>
                </>
              )}

              {isAuth() && isAuth().role === 0 && (
                <NavItem>
                  <Link href="/user">
                    <NavLink style={{ cursor: "pointer" }}>{`${
                      isAuth().name
                    }'s Dashboard`}</NavLink>
                  </Link>
                </NavItem>
              )}

              {isAuth() && isAuth().role === 1 && (
                <NavItem>
                  <Link href="/admin">
                    <NavLink style={{ cursor: "pointer" }}>{`${
                      isAuth().name
                    }'s Dashboard`}</NavLink>
                  </Link>
                </NavItem>
              )}

              {isAuth() && (
                <NavItem>
                  <NavLink
                    style={{ cursor: "pointer" }}
                    onClick={() => signout(() => Router.replace(`/signin`))}
                  >
                    Signout
                  </NavLink>
                </NavItem>
              )}

              <NavItem>
                <a href="/user/crud/blog" className="btn btn-primary ">
                  Write a blog
                </a>
              </NavItem>
            </Nav>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
