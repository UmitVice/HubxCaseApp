import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { theme } from '../../theme';

export interface IconButtonProps {
	onPress?: () => void;
	disabled?: boolean;
	size?: number;
	background?: 'transparent' | 'filled';
	style?: ViewStyle;
	children?: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
	onPress,
	disabled = false,
	size = 40,
	background = 'transparent',
	style,
	children,
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			disabled={disabled}
			activeOpacity={0.8}
			style={[
				styles.base,
				{
					width: size,
					height: size,
					borderRadius: size / 2,
				},
				background === 'filled' && styles.filled,
				style,
			]}
		>
			<View pointerEvents="none">{children}</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	base: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	filled: {
		backgroundColor: theme.colors.surface,
	},
});

export default IconButton;


