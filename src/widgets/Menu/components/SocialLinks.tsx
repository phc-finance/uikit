import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";

const Container = styled(Flex)`
  margin-left: 24px;
  margin-right: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    margin-left: 0;
    margin-right: 24px;
  }
`;

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const SocialLinks: React.FC = () => (
  <Container>
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      const iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
      const mr = index < socials.length - 1 ? "24px" : 0;
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
          <Icon {...iconProps} />
        </Link>
      );
    })}
  </Container>
);

export default React.memo(SocialLinks, () => true);
