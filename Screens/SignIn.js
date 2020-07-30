import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import KaKaoButton from '../Component/Auth/KaKaoButton';
import GoogleButton from '../Component/Auth/GoogleButton';

const SignIn = ({ isLogin, setIsLogin }) => {
    return (
        <View style={styles.container}>
            <KaKaoButton />
            <Button color='skyblue' style={styles.naver} title='네이버' />
            <GoogleButton />
            <Button
                color='magenta'
                style={styles.noneLogin}
                title='비로그인으로 둘러보기'
                onPress={(e) => {
                    setIsLogin(true);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    google: {},
    kakao: {},
    naver: {},
    noneLogin: {},
});

export default SignIn;
