import styled from 'styled-components';
import { BLACK, WHITE } from '../../constants/AppColours';

const AppStyle = styled.div`
  background-color: ${BLACK};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${WHITE};
`;

export default AppStyle;