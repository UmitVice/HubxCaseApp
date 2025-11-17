import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Screen } from '../../components/layout';
import { Button, Spacer, Typography } from '../../components/primitives';
import { theme } from '../../theme';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { completeOnboarding } from '../../store/slices/onboardingSlice';
import { useNavigation } from '@react-navigation/native';

const PaywallScreen: React.FC = () => {
	const dispatch = useAppDispatch();
	const navigation = useNavigation();

	const handleClose = async () => {
		await dispatch(completeOnboarding()).unwrap();
		// RootNavigator will switch to Home automatically
	};

	return (
		<Screen>
			<View style={styles.container}>
				<Typography variant="h2" weight="bold">
					PlantApp Premium
				</Typography>
				<Spacer size="lg" />
				<Button title="Try free for 3 days" />
				<Spacer size="md" />
				<Button variant="outline" title="Close" onPress={handleClose} />
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

export default PaywallScreen;


