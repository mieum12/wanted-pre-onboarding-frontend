import { styled } from "styled-components";

export default function Home() {
  return (
    <HomeWrapper>
      <h3>Home page</h3>
      <p>wanted-pre-onboarding-frontend</p>
      <p>최지원</p>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  text-align: center;
`;
