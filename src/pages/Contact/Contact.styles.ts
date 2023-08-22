import styled from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: end;
  background-color: rgba(255, 255, 255, 0.5);
  position: relative;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: 7em;

  @media screen and (max-width: 600px) {
    margin: 0;
  }
`;
export const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 60px;
  z-index: 20;

  & > a > svg {
    fill: #aa0000;
    height: 50px;
    opacity: 0.8;
    width: 50px;
    transition: ease 0.5s;
    filter: drop-shadow(1px 1px 1px #ff5959) drop-shadow(1px 0px 1px #ff5959);

    &:hover {
      scale: 1.2;
      opacity: 1;
    }
  }

  @media screen and (max-width: 600px) {
  }
`;

export const ContactLink = styled.a`
  color: #ff4b4b;
  text-decoration: none;
  font-weight: 500;


  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 600px) {
    color: #ff3c3c;
    text-shadow: none;
    font-weight: 500;
  }
`;
