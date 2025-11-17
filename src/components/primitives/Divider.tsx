import React from 'react';
import { View, ViewStyle } from 'react-native';
import { theme } from '../../theme';

export interface DividerProps {
	style?: ViewStyle;
}

export const Divider: React.FC<DividerProps> = ({ style }) => {
	return <View style={[{ height: 1, backgroundColor: theme.colors.border }, style]} />;
};

export default Divider;


