export const colors = {
	primaryColor: '#34C759',
	backgroundColor: '#0B0F0E',
	surface: '#111615',
	textPrimary: '#FFFFFF',
	textSecondary: 'rgba(255,255,255,0.7)',
	border: 'rgba(255,255,255,0.12)',
	success: '#22C55E',
	warning: '#F59E0B',
	error: '#EF4444',
	overlay: 'rgba(0,0,0,0.4)',
} as const;

export type ColorName = keyof typeof colors;


