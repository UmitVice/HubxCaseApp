import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import {
	selectHasCompletedOnboarding,
	selectOnboardingHydrated,
} from '../store/selectors';
import { hydrateOnboarding } from '../store/slices/onboardingSlice';
import { OnboardingStackParamList, HomeStackParamList } from './types';
import GetStartedScreen from '../screens/onboarding/GetStartedScreen';
import Onboarding1Screen from '../screens/onboarding/Onboarding1Screen';
import Onboarding2Screen from '../screens/onboarding/Onboarding2Screen';
import PaywallScreen from '../screens/paywall/PaywallScreen';
import HomeScreen from '../screens/home/HomeScreen';
import { Screen } from '../components/layout';
import { Typography } from '../components/primitives';

const OnboardingStack = createNativeStackNavigator<OnboardingStackParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

function LoadingScreen() {
	return (
		<Screen>
			<Typography>Loading…</Typography>
		</Screen>
	);
}

function OnboardingNavigator() {
	return (
		<OnboardingStack.Navigator screenOptions={{ headerShown: false }}>
			<OnboardingStack.Screen name="GetStarted" component={GetStartedScreen} />
			<OnboardingStack.Screen name="Onboarding1" component={Onboarding1Screen} />
			<OnboardingStack.Screen name="Onboarding2" component={Onboarding2Screen} />
			<OnboardingStack.Screen name="Paywall" component={PaywallScreen} />
		</OnboardingStack.Navigator>
	);
}

function HomeNavigator() {
	return (
		<HomeStack.Navigator screenOptions={{ headerShown: false }}>
			<HomeStack.Screen name="Home" component={HomeScreen} />
		</HomeStack.Navigator>
	);
}

export default function RootNavigator() {
	const dispatch = useAppDispatch();
	const hydrated = useAppSelector(selectOnboardingHydrated);
	const completed = useAppSelector(selectHasCompletedOnboarding);

	useEffect(() => {
		dispatch(hydrateOnboarding());
	}, [dispatch]);

	return (
		<NavigationContainer>
			{!hydrated ? <LoadingScreen /> : completed ? <HomeNavigator /> : <OnboardingNavigator />}
		</NavigationContainer>
	);
}


