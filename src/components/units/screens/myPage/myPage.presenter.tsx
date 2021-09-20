import React from 'react';
import {
  Container,
  ListItemButton,
  ListItemTitle,
  ListItemWrapper,
  Title,
  TitleWrapper,
  UserImage,
  UserInfoEdit,
  UserInfoLeftWrapper,
  UserInfoRightWrapper,
  UserInfoWrapper,
  UserName,
  Wrapper,
} from './myPage.style';
import Icon from 'react-native-vector-icons/Ionicons';
const MyPageUI = (props: any) => {
  console.log(props.data)
  return (
    <>
      <Container>
        <Wrapper>
          <TitleWrapper>
            <Title>더보기</Title>
          </TitleWrapper>

          <UserInfoWrapper>
            <UserInfoLeftWrapper>
              {/* <UserImage source={{uri:}}/> */}
                {/* <Icon size={60} color={'#bdbdbd'} name="person-circle-sharp" /> */}
              
              <UserName>{props.data?.fetchUserLoggedIn.name}</UserName>
            </UserInfoLeftWrapper>
            <UserInfoRightWrapper onPress={props.onPressLogout}>
              <UserInfoEdit>로그아웃</UserInfoEdit>
            </UserInfoRightWrapper>
          </UserInfoWrapper>

          <ListItemWrapper>
            <ListItemTitle>공지사항</ListItemTitle>
            <ListItemButton>
              <Icon
                size={30}
                color={'#bdbdbd'}
                name="md-chevron-forward-sharp"
              />
            </ListItemButton>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItemTitle>이벤트</ListItemTitle>
            <ListItemButton>
              <Icon
                size={30}
                color={'#bdbdbd'}
                name="md-chevron-forward-sharp"
              />
            </ListItemButton>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItemTitle>Q&A</ListItemTitle>
            <ListItemButton>
              <Icon
                size={30}
                color={'#bdbdbd'}
                name="md-chevron-forward-sharp"
              />
            </ListItemButton>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItemTitle>내가 받은 리뷰</ListItemTitle>
            <ListItemButton>
              <Icon
                size={30}
                color={'#bdbdbd'}
                name="md-chevron-forward-sharp"
              />
            </ListItemButton>
          </ListItemWrapper>
          <ListItemWrapper>
            <ListItemTitle>나의 활동기록</ListItemTitle>
            <ListItemButton>
              <Icon
                size={30}
                color={'#bdbdbd'}
                name="md-chevron-forward-sharp"
              />
            </ListItemButton>
          </ListItemWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
export default MyPageUI;
