import { Platform } from 'react-native';

export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

const systemFont = Platform.select({
	ios: 'System',
	android: 'sans-serif',
	default: 'System',
});

export const typography = {
	fontFamily: systemFont as string,
	// Sizes follow a consistent scale; update to match Figma during polish
	sizes: {
		h1: 34,
		h2: 28,
		title: 22,
		subtitle: 18,
		body: 16,
		caption: 13,
	},
	lineHeights: {
		h1: 41,
		h2: 34,
		title: 28,
		subtitle: 24,
		body: 22,
		caption: 18,
	},
	weights: {
		regular: Platform.select({ ios: '400', android: '400', default: '400' })!,
		medium: Platform.select({ ios: '500', android: '500', default: '500' })!,
		semibold: Platform.select({ ios: '600', android: '600', default: '600' })!,
		bold: Platform.select({ ios: '700', android: '700', default: '700' })!,
	},
} as const;

export type Typography = typeof typography;


