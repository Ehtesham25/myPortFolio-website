import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  FooterWrapper,
  LinkList,
  SocialContainer,
  SocialIconsContainer,
  ExternalLinks,
  UtilityList,
} from "./FooterStyles";
import { SectionTitle } from "../../styles/GlobalComponents";

const Footer = () => {
  return (
    <>
      <SectionTitle style={{ paddingLeft: "100px",paddingTop:'30px' }}>Contact Me</SectionTitle>
      <FooterWrapper>
        <LinkList>
          <UtilityList>
            <ExternalLinks href="tel:314-343-3432">Phone Number</ExternalLinks>
          </UtilityList>
          <UtilityList>
            <ExternalLinks href="mailto:contact@jsmastery.com">
              EmaiL
            </ExternalLinks>
          </UtilityList>
        </LinkList>
        <SocialIconsContainer>
          <SocialContainer>
            <SocialIcons href="https://google.com">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://google.com">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://google.com">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </>
  );
};

export default Footer;
