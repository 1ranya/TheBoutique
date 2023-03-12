import styled from "styled-components";
import { flexRow } from "../App.style";

export const ContainerGallery = styled.div`
padding: 0px 40px;
`;

export const Title = styled.h2`
margin: 0;
`;

export const Subtitle = styled.h3`
${flexRow}
align-items: end;
gap: 5px;
font-weight: normal;

color: azure;
&:hover{
    cursor: pointer;
}
`;