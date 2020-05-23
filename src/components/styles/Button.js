import styled from 'styled-components';
import { YELLOW, DARK_GRAY, WHITE } from '../../constants/AppColours';

const Button = styled.button`
  color: ${DARK_GRAY} !important;
  text-decoration: none;
  background: ${WHITE};
  padding: 20px;
  border: 5px solid ${DARK_GRAY} !important;
  display: inline-block;
  transition: all 0.4s ease 0s;
  font-size: 16px;

  &:hover {
    color: ${WHITE} !important;
    background: ${YELLOW};
    border-color: ${YELLOW} !important;
    transition: all 0.4s ease 0s;
  }
`;

export default Button;