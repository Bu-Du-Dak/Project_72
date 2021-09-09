import React from 'react';
import {Switch} from 'react-native';
import {
  AddImageButton,
  AddImageText,
  AddImageWrapper,
  BoardContents,
  ButtonText,
  ButtonTitle,
  ButtonWrapper,
  Container,
  SubmitButton,
  Title,
  TitleWrapper,
  Wrapper,
} from './boardWrite.style';
import Icon from 'react-native-vector-icons/Ionicons';
const BoardWriteUI = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>게시글 작성</Title>
          </TitleWrapper>
          <ButtonWrapper>
            <ButtonTitle>산책친구 찾기</ButtonTitle>
            <Switch
              trackColor={{false: '#767577', true: '#26eba6'}}
              value={true}
            />
          </ButtonWrapper>
          <BoardContents multiline placeholder="내용을 입력하세요" />
          <AddImageWrapper>
            <AddImageText>사진 첨부하기</AddImageText>
            <AddImageButton>
              <Icon size={40} color={'#fff'} name="ios-add" />
            </AddImageButton>
          </AddImageWrapper>
          <SubmitButton>
            <Icon color={'#fff'} size={20} name="brush" />
            <ButtonText>글 등록하기</ButtonText>
          </SubmitButton>
        </Wrapper>
      </Container>
    </>
  );
};
export default BoardWriteUI;
