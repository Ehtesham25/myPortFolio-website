import Link from "next/link";
import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, There <br />
          Wellcome to My Portfolio
        </SectionTitle>
        <SectionText>
          Hello, I am a professional MERN Stack Developer for 1+ years in the
          field of development, my activities are always creative, of course, I
          direct it according to the project and the achievement of mutual
          success.
        </SectionText>
        <Button onClick={props.handleClick}>
          <Link href="mailto:ehteshamulhaqkhan25@gmail.com" passHref>
            <p style={{ color: "white" }}>Contact Me </p>
          </Link>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
