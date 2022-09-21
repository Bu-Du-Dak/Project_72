import styled from 'styled-components/native';
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.ScrollView`
  padding: 30px;
`;
export const TitleWrapper = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 80px;
`;
export const Title = styled.Text`
  font-size: 18px;
`;
export const AddImageButton = styled.TouchableOpacity`
  width: 300px;
  height: 200px;
  justify-content: center;
  align-items: center;
  border: 1px solid #aaa;
  border-radius: 20px;
`;
export const ButtonWrapper = styled.View`
  padding-top: 120px;
  position: relative;
  bottom: 10px;
`;
export const SubmitButton = styled.TouchableOpacity`
  margin: 30px;
  height: 55px;
  background-color: #26eba6;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
