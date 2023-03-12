import styled, { css } from "styled-components";
import { TEXT_COLOR, BG_COLOR } from "./constants";

export const flex = css`
display: flex;
`;

export const flexRow = css`
${flex}
flex-direction: row;
`; 

export const flexCol = css`
${flex}
flex-direction: column;
`; 

export const Container = styled.div`
color: ${TEXT_COLOR};
background-color: ${BG_COLOR};
`;

export const HeaderContainer = styled.div`

`;

export const LogoContainer = styled.img`
width: 100px;
height: 100px;
`;

export const ArtContainer = styled.div`
${flexCol}
width: calc(50% - 5px);
`;

export const ImageContainer = styled.img`
border-radius: 10px;
`;

export const Arts = styled.div`
${flexRow}
flex-wrap: wrap;
justify-content: space-between;

padding-top: 35px;
`;

export const ArtDescription = styled.div`
padding: 5px 0px 25px 0;
`; 