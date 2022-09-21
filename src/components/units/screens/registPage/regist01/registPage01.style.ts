import styled from 'styled-components/native';
export const Container = styled.View`
  flex: 1;
`;
export const Wrapper = styled.ScrollView`
  padding: 30px;
`;
export const TitleWrapper = styled.View`
  margin-bottom: 100px;
  padding: 30px;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.Text`
  font-size: 18px;
`;
export const InputWrapper = styled.View`
  padding: 30px;
  margin-bottom: 120px;
`;
export const NameInput = styled.TextInput`
  border-bottom-width: 1.5px;
  border-bottom-color: #e0e0e0;
`;
export const ButtonWrapper = styled.View`
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
