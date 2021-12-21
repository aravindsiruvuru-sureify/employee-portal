import styled from "styled-components";

import colors from "../colors";

export const fontRobotoNormal = styled.span`
  font-family: "Roboto";
  font-weight: normal;
`;

export const fontH2Roboto = styled.h2`
  font-family: "Roboto";
`;

export const fontH3Roboto = styled.h3`
  font-family: "Roboto";
`;

export const fontH1Roboto = styled.h1`
  font-family: "Roboto";
`;

export const fontParaRoboto = styled.p`
  font-family: "Roboto";
`;

export const font14BlackRobotoNormal = styled(fontRobotoNormal)`
  font-size: 14px;
  color: ${colors.black};
`;

export const fontLatoNormal = styled.span`
  font-family: "Lato", sans-serif;
  font-weight: 400;
`;

export const fontRobotoMedium = styled(fontRobotoNormal)`
  font-weight: 500;
`;

export const font30BlackLatoNormal = styled(fontLatoNormal)`
  font-size: 30px;
  color: ${colors.primary};
`;

export const Font25PrimaryRobotoMedium = styled(fontRobotoMedium)`
  font-size: 25px;
  color: ${colors.primary};
`;

export const Font18PrimaryRobotoMedium = styled(fontRobotoMedium)`
  font-size: 18px;
  color: ${colors.primary};
`;

export const Font14PrimaryRobotoMedium = styled(fontRobotoMedium)`
  font-size: 14px;
  color: ${colors.primary};
`;

export const Font18PrimaryLightRobotoMedium = styled(Font18PrimaryRobotoMedium)`
  color: rgba(24, 59, 86, 0.6);
`;

export const font20PrimaryRobotoBold = styled(fontRobotoNormal)`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const fontH2PrimaryRoboto = styled(fontH2Roboto)`
  color: ${colors.primary};
`;

export const fontH3PrimaryRoboto = styled(fontH3Roboto)`
  color: ${colors.primary};
`;

export const fontH2LightPrimaryRoboto = styled(fontH2Roboto)`
  color: rgba(24, 59, 86, 0.7);
`;

export const font12PrimaryRoboto = styled(fontRobotoNormal)`
  font-size: 12px;
  color: ${colors.primary};
`;

export const fontH1PrimaryRoboto = styled(fontH1Roboto)`
  color: ${colors.primary};
`;

export const font16Roboto400 = styled(fontRobotoNormal)`
  font-size: 16px;
  font-weight: 400;
`;

export const font16PrimaryRoboto400 = styled(fontRobotoNormal)`
  font-size: 16px;
  font-weight: 400;
  color: ${colors.primary};
`;
export const font14PrimaryRoboto400 = styled(fontRobotoNormal)`
  font-size: 14px;
  font-weight: 400;
  color: ${colors.primary};
`;

export const font16PrimaryParaRoboto = styled(fontParaRoboto)`
  font-size: 16px;
  color: ${colors.primary};
`;

export const font14PrimaryParaRoboto = styled(fontParaRoboto)`
  font-size: 14px;
  color: ${colors.primary};
`;

export const font16PrimaryRobotoMedium = styled(fontRobotoMedium)`
  font-size: 16px;
  color: ${colors.primary};
`;

export const font16PrimaryRobotoBold = styled(fontRobotoMedium)`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const font16PrimaryLightRoboto = styled(fontRobotoNormal)`
  font-size: 16px;
  color: black;
`;

export const font22PrimaryRobotoBold = styled(fontRobotoNormal)`
  font-size: 22px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const font20PrimaryRobotoMedium = styled(fontRobotoNormal)`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.primary};
`;

export const font22PrimaryRobotoMedium = styled(fontRobotoNormal)`
  font-size: 22px;
  font-weight: 500;
  color: ${colors.primary};
`;

export const font18PrimaryLightRoboto = styled(fontRobotoNormal)`
  font-size: 18px;
  color: rgba(24, 59, 86, 0.53);
`;

export const font15Primary70RobotoNormal = styled(fontRobotoNormal)`
  font-size: 15px;
  color: rgba(24, 59, 86, 0.7);
`;
