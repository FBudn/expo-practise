/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import { flexbox, borders, color, fontWeight } from "styled-system";

export const StyledView = styled.View`
  ${flexbox};
  ${borders};
  ${color};
  padding-left: 20;
`;
export const StyledText = styled.Text`
  ${fontWeight}
  ${color};
`;
