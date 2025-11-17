import { colors } from './colors';
import { SPACING } from './spacing';
import { typography } from './typography';

export const borderRadiusMedium = 16;

export const theme = {
	colors,
	SPACING,
	typography,
	borderRadiusMedium,
} as const;

export type AppTheme = typeof theme;


