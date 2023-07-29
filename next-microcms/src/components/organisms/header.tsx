import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";
const Header: FC = () => {
  return (
    <Headerwrap>
      <div>Logo</div>
      <ul>
        <li>
          <Link href={""}>HOME</Link>
        </li>
        <li>
          <Link href={"/about"}>ABOUT</Link>
        </li>
      </ul>
    </Headerwrap>
  );
};

const Headerwrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.08);

  ul {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export default Header;
