import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const Wrapper = styled.nav`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  div {
    display: flex;
    gap: 10px;
  }
`;
const NavImage = styled(Image)`
  max-width: 100px;
  margin-bottom: 5px;
`;
const CustomLink = styled(Link)<{ $active: boolean }>`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => (props.$active ? "tomato" : "black")};
`;

export default function Navbar() {
  const route = useRouter();

  return (
    <Wrapper>
      <NavImage src="/vercel.svg" alt="" width={100} height={23} />
      <div>
        <CustomLink $active={route.pathname === "/"} href="/">
          Home
        </CustomLink>
        <CustomLink $active={route.pathname === "/about"} href="/about">
          About
        </CustomLink>
      </div>
    </Wrapper>
  );
}
