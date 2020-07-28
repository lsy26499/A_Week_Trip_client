import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Plan from '../Screens/Plan/Plan';
import PlanInfo from '../Screens/Plan/PlanInfo';
import PlanInfoDetail from '../Screens/Plan/PlanInfoDetail';
import PlanEdit from '../Screens/Plan/PlanEdit';
import PlanEditDetail from '../Screens/Plan/PlanEditDetail';

const PlanStack = createStackNavigator();

const PlanStackNavigator = ({ navigation, route }) => {
    const isPlan = false;
    // 현재 계획이 있는 지를 나타내는 임시 변수 (추후 asyncStorage / axios로 가져와지는 데이터가 있는지로 판단 예정입니다)

    if (route.state) {
        if (route.state.index === 0) {
            navigation.setOptions({ tabBarVisible: true });
        } else {
            navigation.setOptions({ tabBarVisible: false });
        }
    }

    return (
        <PlanStack.Navigator
            initialRouteName={isPlan ? 'PlanEdit' : 'Plan'}
            screenOptions={({ route }) => {
                if (route.name === 'Plan' || route.name === 'PlanEdit') {
                    return {
                        headerShown: false,
                    };
                }
            }}
        >
            <PlanStack.Screen name='Plan' component={Plan} />
            <PlanStack.Screen name='PlanInfo' component={PlanInfo} />
            <PlanStack.Screen
                name='PlanInfoDetail'
                component={PlanInfoDetail}
            />
            <PlanStack.Screen name='PlanEdit' component={PlanEdit} />
            <PlanStack.Screen
                name='PlanEditDetail'
                component={PlanEditDetail}
            />
        </PlanStack.Navigator>
    );
};

export default PlanStackNavigator;