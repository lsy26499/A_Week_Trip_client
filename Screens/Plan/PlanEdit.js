import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import { Card } from 'native-base';
import { useIsFocused } from '@react-navigation/native';

import { fullPlan } from '../../FakeData/planData';

const PlanEdit = ({ route, navigation }) => {
    const [plans, setPlans] = useState([...fullPlan]);
    const [fullDates, setFullDates] = useState([
        ...fullPlan.map((plan, idx) => {
            return {
                date: plan[`day0${idx + 1}`]['date'],
                day: `day0${idx + 1}`,
            };
        }),
    ]);

    const showToast = () => {
        ToastAndroid.show(
            '계획이 업데이트되었습니다.',
            ToastAndroid.CENTER,
            ToastAndroid.LONG
        );
    };

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            if (route.params) {
                const {
                    params: { dailyPlan, index },
                } = route;
                setPlans((prevState) => [
                    ...prevState.slice(0, index),
                    dailyPlan,
                    ...prevState.slice(index + 1),
                ]);
            }
        }
    }, [isFocused]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => {
                const index = Number(item.day.split('')[4]);
                console.log(plans[index - 1][`day0${index}`]['tasks']);
                navigation.navigate('PlanEditDetail', {
                    day: item.day,
                    date: item.date,
                    tasksInfo: plans[index - 1][`day0${index}`]['tasks'],
                });
            }}
        >
            <Card style={styles.card}>
                <Text style={styles.day}>{item.day}</Text>
                <Text>{item.date}</Text>
            </Card>
        </TouchableOpacity>
    );

    return (
        <>
            <FlatList
                data={fullDates}
                renderItem={renderItem}
                keyExtractor={(item) => item.day}
                style={styles.container}
            />
            <TouchableOpacity
                style={styles.saveBtn}
                onPress={() => {
                    // TODO: plans를 axios post 요청
                    // TODO: Main 가자마자 플랜 axios로 불러오고 isPlan === true 바꿔주기
                    showToast();
                }}
            >
                <Text style={styles.btnTitle}>모든 계획 저장하기</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    card: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    saveBtn: {
        backgroundColor: 'blue',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitle: {
        color: 'white',
    },
});

export default PlanEdit;