import styled from 'styled-components/native'
export const Container = styled.ScrollView``
export const ItemImage = styled.View`
    height: 240px;
    background-color: gray;
`
export const Wrapper = styled.View`
    
`
export const UserWrapper = styled.View`
    flex-direction: row;
    padding: 15px 30px;
    border-bottom-width: 1px;
    border-bottom-color: #eaeaea;
`
export const UserImage = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: gray;
`
export const UserInfoWrapper = styled.View`
    flex:1;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 10px;
`
export const UserInfoLeftContents = styled.View`
    justify-content: space-around;
`
export const UserName = styled.Text`
    font-size: 18px;
`
export const UserAddress = styled.Text`
    font-size: 14px;
    color: #4f4f4f;
`
export const UserInfoRightContents = styled.View`
    flex-direction: row;
    align-items: center;
`
export const UserLikeCount = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #26EBA6;
`
export const UserLikeLogo = styled.View`
    width: 40px;
    height: 40px;
    background-color: gray;
`
export const ItemInfoWrapper = styled.View`
    padding: 30px;
`
export const ItemTitle = styled.Text`
    font-size: 18px;
    padding-bottom: 10px;
`
export const ItemCreatedAt = styled.Text`
    font-size: 12px;
    color: #4f4f4f;
    padding-bottom: 20px;
`
export const ItemContents = styled.Text`
    font-size: 14px;
`
export const ChatButton = styled.View`
    margin:30px;
    height: 55px;
    background-color: #26eba6;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`
export const ButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`