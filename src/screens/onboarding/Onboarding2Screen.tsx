import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { OnboardingStackParamList } from '../../navigation/types';
import { Screen } from '../../components/layout';
import { Button, Spacer, Typography } from '../../components/primitives';
import { theme } from '../../theme';

type Props = NativeStackScreenProps<OnboardingStackParamList, 'Onboarding2'>;

const Onboarding2Screen: React.FC<Props> = ({ navigation }) => {
	return (
		<Screen>
			<View style={styles.container}>
				<Typography variant="h2" weight="bold">
					Get plant care guides
				</Typography>
				<Spacer size="lg" />
				<Button title="Continue" onPress={() => navigation.navigate('Paywall')} />
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

export default Onboarding2Screen;


