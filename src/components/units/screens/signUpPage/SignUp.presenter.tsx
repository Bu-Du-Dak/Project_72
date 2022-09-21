import React from 'react';
import {Controller} from 'react-hook-form';
import {
  Wrapper,
  LogoWrapper,
  LogoImg,
  UserInput,
  LoginButtonWrapper,
  LoginButton,
} from './SignUp.style';

const SignUpPageUI = (props: any) => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoImg source={require('../../../../imgs/logo.png')} />
      </LogoWrapper>
      <Controller
        control={props.control}
        name="name"
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(text: any) => onChange(text)}
            value={value}
            placeholder="이름을 입력해주세요"
          />
        )}
      />
      <Controller
        control={props.control}
        name="email"
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(text: any) => onChange(text)}
            value={value}
            placeholder="이메일을 입력해주세요"
          />
        )}
      />
      <Controller
        control={props.control}
        name="password"
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(text: any) => onChange(text)}
            value={value}
            placeholder="비밀번호를 입력해주세요"
            secureTextEntry={true} // 비밀번호 입력
          />
        )}
      />
      <Controller
        control={props.control}
        name="password"
        rules={{required: true}}
        render={({field: {onChange, onBlur, value}}) => (
          <UserInput
            onBlur={onBlur}
            onChangeText={(text: any) => onChange(text)}
            value={value}
            placeholder="비밀번호를 입력해주세요"
            secureTextEntry={true} // 비밀번호 입력
          />
        )}
      />
      <LoginButtonWrapper onPress={props.handleSubmit(props.JoinUser)}>
        <LoginButton onPressIn={() => props.navigation.navigate('login')}>
          {'회원가입'}
        </LoginButton>
      </LoginButtonWrapper>
    </Wrapper>
  );
};

export default SignUpPageUI;
