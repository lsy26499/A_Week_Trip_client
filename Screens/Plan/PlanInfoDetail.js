import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';
import ViewPager from '@react-native-community/viewpager';

import { Entypo } from '@expo/vector-icons';
import { Card } from 'native-base';

import PlanRegionCard from '../../Component/Plan/PlanRegionCard';

const PlanInfoDetail = ({ navigation, route }) => {
    const {
        params: { date, day },
    } = route;

    const index = Number(day.split('')[4]) - 1;

    const [regions, setRegions] = useState([{ region: '', toDos: [''] }]);

    const addRegionCard = () => {
        setRegions((prevState) => [...prevState, { region: '', toDos: [''] }]);
    };

    const deleteRegionCard = (idx) => {
        setRegions((prevState) => [
            ...prevState.slice(0, idx),
            ...prevState.slice(idx + 1),
        ]);
        navigation.navigate('PlanInfoDetail');
    };

    const setRegionPlan = (idx, region, toDos) => {
        setRegions((prevState) => [
            ...prevState.slice(0, idx),
            { region, toDos: [...toDos] },
            ...prevState.slice(idx + 1),
        ]);
    };

    const showToast = () => {
        if (Platform.OS === 'android') {
            ToastAndroid.show(
                '지역 카드가 추가되었습니다.',
                ToastAndroid.BOTTOM,
                ToastAndroid.LONG
            );
        }
    };

    return (
        <View style={styles.container}>
            <ViewPager style={styles.slider}>
                {regions.map((regionInfo, idx) => (
                    <PlanRegionCard
                        key={idx}
                        index={idx}
                        regionInfo={regionInfo}
                        deleteRegionCard={deleteRegionCard}
                        setRegionPlan={setRegionPlan}
                    />
                ))}
                <View style={styles.card}>
                    <TouchableOpacity
                        onPress={() => {
                            addRegionCard();
                            showToast();
                        }}
                    >
                        <Entypo name='plus' size={100} color='black' />
                    </TouchableOpacity>
                </View>
            </ViewPager>
            <TouchableOpacity
                style={styles.saveBtn}
                onPress={() => {
                    if (Platform.OS === 'android') {
                        ToastAndroid.show(
                            `${day}의 계획이 저장되었습니다.`,
                            ToastAndroid.BOTTOM,
                            ToastAndroid.LONG
                        );
                    }
                    navigation.navigate('PlanInfo', {
                        dailyPlan: {
                            [day]: {
                                date: date,
                                tasks: [...regions],
                            },
                        },
                        index,
                    });
                }}
            >
                <Text style={styles.btnTitle}>저장</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    slider: {
        flex: 0.95,
        marginTop: 20,
        marginBottom: 60,
        marginHorizontal: 20,
        alignSelf: 'stretch',
    },
    saveBtn: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#0066FF',
        width: '100%',
        height: 50,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
    },
    card: {
        flex: 0.95,
        backgroundColor: '#f1f2f6',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PlanInfoDetail;
