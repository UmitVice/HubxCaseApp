import React from 'react';
import { Text as RNText, StyleSheet, TextProps as RNTextProps } from 'react-native';
import { theme } from '../../theme';

export type TypographyVariant = 'h1' | 'h2' | 'title' | 'subtitle' | 'body' | 'caption';

export interface TypographyProps extends RNTextProps {
	variant?: TypographyVariant;
	color?: string;
	weight?: 'regular' | 'medium' | 'semibold' | 'bold';
	allowFontScaling?: boolean;
	children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
	variant = 'body',
	color = theme.colors.textPrimary,
	weight = 'regular',
	allowFontScaling = false,
	style,
	children,
	...rest
}) => {
	const size = theme.typography.sizes[variant];
	const lineHeight = theme.typography.lineHeights[variant];

	return (
		<RNText
			allowFontScaling={allowFontScaling}
			style={[
				styles.base,
				{
					color,
					fontSize: size,
					lineHeight,
					fontWeight: theme.typography.weights[weight] as any,
				},
				style,
			]}
			{...rest}
		>
			{children}
		</RNText>
	);
};

const styles = StyleSheet.create({
	base: {
		fontFamily: theme.typography.fontFamily,
	},
});

export default Typography;


