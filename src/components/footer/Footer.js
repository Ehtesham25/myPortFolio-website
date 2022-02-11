import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";

import { SocialIcons } from "../header/HeaderStyles";
import {
  FooterWrapper,
  LinkList,
  SocialContainer,
  SocialIconsContainer,
  ExternalLinks,
  UtilityList,
} from "./FooterStyles";
import { Section, SectionTitle } from "../../styles/GlobalComponents";

const Footer = () => {
  return (
    <>
      <Section id="contact">
        <SectionTitle style={{ paddingTop: "30px" }}>Contact Me</SectionTitle>
        <FooterWrapper>
          <LinkList>
            <UtilityList>
              <ExternalLinks href="tel:314-343-3432">
                Phone Number
              </ExternalLinks>
            </UtilityList>
            <UtilityList>
              <ExternalLinks href="mailto:contact@jsmastery.com">
                EmaiL
              </ExternalLinks>
            </UtilityList>
          </LinkList>
          <SocialIconsContainer>
            <SocialContainer>
              <SocialIcons target="_blank" href="https://github.com/Ehtesham25">
                <AiFillGithub color="#24292E" size="3rem" />
              </SocialIcons>
              <SocialIcons
                href="https://www.linkedin.com/in/ehtisham-ul-haq-b92872161/"
                target="_blank"
              >
                <AiFillLinkedin color="#0073B2" size="3rem" />
              </SocialIcons>
              <SocialIcons
                target="_blank"
                href="https://www.facebook.com/ehtesham.ulhaq.503"
              >
                <SiFacebook color="#1877F2" size="3rem" />
              </SocialIcons>
            </SocialContainer>
          </SocialIconsContainer>
        </FooterWrapper>
      </Section>
    </>
  );
};

export default Footer;
