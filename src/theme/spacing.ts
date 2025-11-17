export const SPACING = {
	xxs: 4,
	xs: 6,
	sm: 8,
	md: 16,
	lg: 24,
	xl: 32,
	xxl: 40,
} as const;

export type SpacingKey = keyof typeof SPACING;


