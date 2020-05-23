import styled from 'styled-components';
import { YELLOW, DARK_GRAY, WHITE } from '../../constants/AppColours';

const ButtonStyle = styled.button`
  color: ${DARK_GRAY};
  background: ${WHITE};
  padding: 16px;
  border: 5px solid ${DARK_GRAY};
  transition: all 0.4s ease 0s;
  font-size: 16px;

  &:hover {
    color: ${WHITE};
    background: ${YELLOW};
    border-color: ${YELLOW};
    transition: all 0.4s ease 0s;
  }
`;

export default ButtonStyle;