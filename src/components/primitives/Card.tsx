import React, { PropsWithChildren } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { theme } from '../../theme';

export interface CardProps {
	style?: ViewStyle;
	elevated?: boolean;
	backgroundColor?: string;
	padding?: keyof typeof theme.SPACING | number;
}

export const Card: React.FC<PropsWithChildren<CardProps>> = ({
	style,
	elevated = true,
	backgroundColor = theme.colors.surface,
	padding = 'md',
	children,
}) => {
	const paddingValue = typeof padding === 'number' ? padding : theme.SPACING[padding];
	return (
		<View
			style={[
				styles.base,
				elevated && styles.elevated,
				{ backgroundColor, padding: paddingValue },
				style,
			]}
		>
			{children}
		</View>
	);
};

const styles = StyleSheet.create({
	base: {
		borderRadius: theme.borderRadiusMedium,
	},
	elevated: {
		shadowColor: '#000',
		shadowOpacity: 0.16,
		shadowRadius: 8,
		shadowOffset: { width: 0, height: 4 },
		elevation: 4,
	},
});

export default Card;


