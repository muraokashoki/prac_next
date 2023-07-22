// import { FC } from 'react'
// import styled from 'styled-conponents'
// import Link from 'next/link'

// const Button: FC = =>{
//     return(
//         <Btn hlef={"/"}>TOPへ戻る</Btn>
//     )
// }

// const StyledBtn: styled(link)
// display: inline-flex;
// justify-content: center;

import { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

type Props = {
  label?: string;
  href: string;
};
const Button: FC<Props> = (props) => {
  return <StyledBtn href={props.href}>{props.label}</StyledBtn>;
};

const StyledBtn = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-content: center;
  width: 300px;
  height: 50px;
  background: #999;
  border-radius: 25px;
  color: #fff;
  align-items: center;
`;

export default Button;
