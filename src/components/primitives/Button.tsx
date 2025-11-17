import React from 'react';
import {
	GestureResponderEvent,
	StyleSheet,
	TouchableOpacity,
	ViewStyle,
} from 'react-native';
import { theme } from '../../theme';
import { Typography } from './Typography';

export type ButtonVariant = 'primary' | 'outline';

export interface ButtonProps {
	title: string;
	onPress?: (event: GestureResponderEvent) => void;
	disabled?: boolean;
	variant?: ButtonVariant;
	style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
	title,
	onPress,
	disabled = false,
	variant = 'primary',
	style,
}) => {
	const isOutline = variant === 'outline';
	return (
		<TouchableOpacity
			activeOpacity={0.8}
			disabled={disabled}
			onPress={onPress}
			style={[
				styles.base,
				isOutline ? styles.outline : styles.primary,
				disabled && styles.disabled,
				style,
			]}
		>
			<Typography
				variant="subtitle"
				weight="semibold"
				color={isOutline ? theme.colors.primaryColor : theme.colors.textPrimary}
			>
				{title}
			</Typography>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	base: {
		height: 52,
		borderRadius: theme.borderRadiusMedium,
		alignItems: 'center',
		justifyContent: 'center',
		paddingHorizontal: theme.SPACING.lg,
	},
	primary: {
		backgroundColor: theme.colors.primaryColor,
	},
	outline: {
		backgroundColor: 'transparent',
		borderWidth: 2,
		borderColor: theme.colors.primaryColor,
	},
	disabled: {
		opacity: 0.5,
	},
});

export default Button;


