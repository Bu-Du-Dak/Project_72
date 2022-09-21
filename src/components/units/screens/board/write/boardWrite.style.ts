import styled from 'styled-components/native';
export const Container = styled.View``;
export const Wrapper = styled.ScrollView``;
export const TitleWrapper = styled.View`
  padding: 30px;
  justify-content: center;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #eaeaea;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const ButtonWrapper = styled.View`
  padding: 10px 10px 10px 30px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`;
export const ButtonTitle = styled.Text``;
export const BoardContents = styled.TextInput`
  padding: 30px;
`;
export const AddImageWrapper = styled.View`
  margin-top: 70px;
  padding: 30px;
  align-items: flex-start;
`;
export const AddImageText = styled.Text`
  padding-bottom: 20px;
`;
export const AddImageButton = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background-color: gray;
  justify-content: center;
  align-items: center;
`;
export const SubmitButton = styled.TouchableOpacity`
  flex-direction: row;
  margin: 30px;
  height: 55px;
  background-color: #26eba6;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;
export const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;
