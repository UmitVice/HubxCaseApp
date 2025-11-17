import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/types';
import { Screen } from '../../components/layout';
import { Button, Spacer, Typography } from '../../components/primitives';
import { theme } from '../../theme';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'Onboarding1'>;

const Onboarding1Screen: React.FC<Props> = ({ navigation }) => {
	return (
		<Screen>
			<View style={styles.container}>
				<Typography variant="h2" weight="bold">
					Take a photo to identify the plant
				</Typography>
				<Spacer size="lg" />
				<Button title="Continue" onPress={() => navigation.navigate('Onboarding2')} />
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

export default Onboarding1Screen;


