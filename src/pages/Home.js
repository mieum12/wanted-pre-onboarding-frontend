import { styled } from "styled-components";
// import Lottie from "lottie-react";
// import homeAnimation from "../asset/home.json";

export default function Home() {
  return (
    <HomeWrapper>
      <h3>Home page</h3>
      <p>wanted-pre-onboarding-frontend</p>
      <p>최지원</p>
      {/* 로티 설치 에러 */}
      {/* <Lottie animationData={homeAnimation} loop={true} /> */}
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  text-align: center;
`;
