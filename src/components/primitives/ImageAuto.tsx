import React, { useEffect, useMemo, useState } from 'react';
import { Image, ImageProps, ImageStyle, StyleSheet } from 'react-native';

export interface ImageAutoProps extends Omit<ImageProps, 'style'> {
	width?: number;
	height?: number;
	ratio?: number;
	style?: ImageStyle;
}

export const ImageAuto: React.FC<ImageAutoProps> = ({
	source,
	width,
	height,
	ratio,
	style,
	...rest
}) => {
	const [naturalRatio, setNaturalRatio] = useState<number | null>(ratio ?? null);

	useEffect(() => {
		if (ratio || typeof source === 'number') {
			return;
		}
		if (source && 'uri' in (source as any) && (source as any).uri) {
			const uri = (source as any).uri as string;
			Image.getSize(
				uri,
				(w, h) => setNaturalRatio(w / h),
				() => setNaturalRatio(1),
			);
		}
	}, [ratio, source]);

	const computedStyle = useMemo(() => {
		const styleObj: ImageStyle = {};
		const r = naturalRatio || 1;
		if (width && !height) {
			styleObj.width = width;
			styleObj.height = width / r;
		} else if (!width && height) {
			styleObj.height = height;
			styleObj.width = height * r;
		} else if (width && height) {
			styleObj.width = width;
			styleObj.height = height;
		}
		return styleObj;
	}, [width, height, naturalRatio]);

	return <Image source={source} style={[styles.base, computedStyle, style]} {...rest} />;
};

const styles = StyleSheet.create({
	base: {
		resizeMode: 'cover',
	},
});

export default ImageAuto;


