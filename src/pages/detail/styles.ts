import styled from 'styled-components/native';


export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.backgroundColor};
  justify-content: space-between;
`;

export const HeaderBook = styled.View`
  height: 253px;
  width: 164px;
  flex-direction: row;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 24px;
`;

export const HeaderTitle = styled.View`
`; 


export const ContainerImagemBook = styled.View`
  height: 253px;
  width: 164px;
  margin-right: 16px;
  border: 2px solid;
  elevation: 10;
`;

export const ImagemBook = styled.Image`
  height: 250px;
  width: 160px;
`;

export const Title = styled.Text`
  font-size:16px;
  font-weight:bold;
  color: ${({theme}) => theme.colors.primary};
`;

export const Author = styled.Text`
  margin-bottom: 16px;
  margin-top: 8px;
  font-size: 14px;
  color: ${({theme}) => theme.colors.secundary};
`
export const ContainerStar = styled.View`
  flex-direction: row;
  height: 15px;
  width: 100px;
  align-items: center;
  margin-bottom: 22px;

  `;
export const Star = styled.Image`
  height: 10px;
  width: 10px;
  `;

export const Rating = styled.Text`
  font-size: 12px;
  margin-left: 8px;

`;

export const ContainerCategory = styled.View`
  border: 1px solid ${({theme}) => theme.colors.Border};
  margin-bottom: 5px;
  align-items: center;
  border-radius: 4px;
`;

export const TextCategory = styled.Text`
  color:${({theme}) => theme.colors.gray3};
`;



 export const ContainerTextAbout = styled.View`
  margin-bottom:16px;
  margin-left: 16px;
  margin-top:32px;
  `;
 export const TextAbout = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size:18px;
  font-weight: bold;

  
  `;
 export const ContainerDescription = styled.View`
  margin-left: 16px;
  margin-right: 16px;
  `;
 export const TextDescription = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size:14px;
  `;

export const ContainerButton = styled.View`
width:370px;
height:40px;
border-radius: 4px;
align-self: center;
margin-bottom: 20px
`;
