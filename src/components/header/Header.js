import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { SiFacebook } from "react-icons/si";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "#0073B2",
            marginBottom: "35px",
          }}
        >
          <DiCssdeck size="3rem" />
          <NavLink>
            <strong style={{color:'grey'}}>EhtishaM Ul HaQ</strong>
          </NavLink>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link passHref href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link passHref href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link passHref href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link passHref href="#contact">
          <NavLink>Contact</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons color="#24292E" href="https://google.com">
        <AiFillGithub size="2.7rem" />
      </SocialIcons>
      <SocialIcons color="#0073B2" href="https://google.com">
        <AiFillLinkedin size="2.7rem" />
      </SocialIcons>
      <SocialIcons color="#1877F2" href="https://google.com">
        <SiFacebook size="2.7rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
