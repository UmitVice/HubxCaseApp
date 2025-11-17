import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/types';
import { Screen } from '../../components/layout';
import { Button, Spacer, Typography } from '../../components/primitives';
import { theme } from '../../theme';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'GetStarted'>;

const GetStartedScreen: React.FC<Props> = ({ navigation }) => {
	return (
		<Screen>
			<View style={styles.container}>
				<Typography variant="h1" weight="bold">
					Welcome to PlantApp
				</Typography>
				<Spacer size="lg" />
				<Button title="Get Started" onPress={() => navigation.navigate('Onboarding1')} />
			</View>
		</Screen>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: theme.SPACING.lg,
	},
});

export default GetStartedScreen;


