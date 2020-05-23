import styled from 'styled-components';
import { GRAY, WHITE, YELLOW } from '../../constants/AppColours';

const height = '20px';

const Form = styled.form`
  input[type=text] {
    padding: ${height} 24px;

    background-color: transparent;
    transition: transform 250ms ease-in-out;

    font-size: 16px;
    line-height: ${height};

    color: ${WHITE};
    background-color: transparent;
    background-repeat: no-repeat;
    background-size: ${height} ${height};
    background-position: 100% center;
    border: 1px solid ${GRAY};
    transition: all 250ms ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;

    &::placeholder {
      color: color(${GRAY} a(0.8));
      letter-spacing: 1.5px;
      text-align: center;
    }

    &:hover,
    &:focus {
      padding: ${height} 0;
      outline: 0;
      border: 1px solid transparent;
      border-bottom: 1px solid ${YELLOW};
      border-radius: 0;
      background-position: 100% center;
    }
  }
`;

export default Form;