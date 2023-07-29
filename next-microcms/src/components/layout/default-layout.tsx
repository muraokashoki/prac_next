import Header from "../organisms/header";
import Footer from "../organisms/footer";
import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const DefaultLayout: FC<Props> = (props: Props) => {
  return (
    <>
      <Header></Header>
      <Main>{props.children}</Main>
      <Footer></Footer>
    </>
  );
};

const Main = styled.main``;

export default DefaultLayout;
