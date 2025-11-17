import React from 'react';
import { View } from 'react-native';
import { theme } from '../../theme';

export interface SpacerProps {
	size?: keyof typeof theme.SPACING | number;
	horizontal?: boolean;
}

export const Spacer: React.FC<SpacerProps> = ({ size = 'md', horizontal = false }) => {
	const value = typeof size === 'number' ? size : theme.SPACING[size];
	return <View style={horizontal ? { width: value } : { height: value }} />;
};

export default Spacer;


