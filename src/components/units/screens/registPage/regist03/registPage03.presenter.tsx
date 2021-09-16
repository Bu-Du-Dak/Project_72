import React from 'react';
import {
  ButtonText,
  ButtonWrapper,
  Container,
  SubmitButton,
  AddImageButton,
  Title,
  TitleWrapper,
  Wrapper,
} from './registPage03.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useContext} from 'react';
import {GlobalContext} from '../../../../../../App';

const Regist03UI = (props: any) => {
  const {userInfo} = useContext(GlobalContext);
  console.log('user', userInfo);
  console.log('last', props.petInfo);
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>대표 사진을 등록해주세요</Title>
          </TitleWrapper>
          <AddImageButton>
            <Icon size={60} color={'#aaa'} name="md-add-sharp" />
          </AddImageButton>
          <ButtonWrapper>
            <SubmitButton
              onPress={() => {
                props.onUpdatePetInfo();
              }}>
              <ButtonText>다 음</ButtonText>
            </SubmitButton>
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
export default Regist03UI;
