import styled from "styled-components/native";
export const Container = styled.ScrollView``
export const Wrapper = styled.View``
export const UserWrapper = styled.View`
    flex-direction: row;
    padding: 15px 10px;
`
export const UserImage = styled.View`
    justify-content: center;
    align-items: center;
`
export const UserInfoWrapper = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const UserInfoLeftContents = styled.View``
export const UserInfoRightContents = styled.View`
    align-items: center;
    justify-content: center;
`
export const UserName = styled.Text`
    font-size: 18px;
`
export const CreatedAt = styled.Text`
    font-size: 14px;
    color: #4f4f4f;
`
export const MoreButton = styled.View`
    
    width: 50px;
    height: 30px;
    align-items: center;
    justify-content: center;
    /* background-color: gray; */
`
export const ImageWrapper = styled.View`
    height: 370px;
    background-color: gray;
`
export const BoardContentsWrapper = styled.View`
    padding: 15px 10px;
    border-bottom-width: 1px;
    border-bottom-color: #eaeaea;
`
export const BoardContentsText = styled.Text`
    font-size: 14px;
`
export const CommentsWrapper = styled.View`
    padding: 15px 10px;
    
    border-bottom-width: 1px;
    border-bottom-color: #eaeaea;
`
export const BoardComments = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const CommentsText = styled.Text`
    font-size: 12px;
    color: #828282;
`
export const LikeText = styled.Text`
    font-size: 12px;
    color: #828282;
`
export const NewCommentsWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
`
export const CommentsUserImage = styled.View`
    justify-content: center;
    align-items: center;
`
export const NewCommentsText = styled.Text`
    font-size: 12px;
    color: #828282;
`
export const WriteButton = styled.View`
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    border-radius: 65px;
    background-color: #26EBA6;
    position: absolute;
    bottom: 15px;
    right: 15px;
`