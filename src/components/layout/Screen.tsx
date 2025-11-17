import React, { PropsWithChildren } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../theme';

export interface ScreenProps {
	backgroundColor?: string;
	contentContainerStyle?: ViewStyle;
	useSafeArea?: boolean;
}

export const Screen: React.FC<PropsWithChildren<ScreenProps>> = ({
	backgroundColor = theme.colors.backgroundColor,
	contentContainerStyle,
	useSafeArea = true,
	children,
}) => {
	if (useSafeArea) {
		return (
			<SafeAreaView style={[styles.container, { backgroundColor }]}>
				<View style={[styles.content, contentContainerStyle]}>{children}</View>
			</SafeAreaView>
		);
	}
	return (
		<View style={[styles.container, { backgroundColor }]}>
			<View style={[styles.content, contentContainerStyle]}>{children}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
	},
});

export default Screen;


