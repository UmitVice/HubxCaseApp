import React, { useCallback, useEffect } from 'react';
import { FlatList, Linking, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Screen } from '../../components/layout';
import { Card, ImageAuto, Spacer, Typography } from '../../components/primitives';
import { theme } from '../../theme';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
	selectCategories,
	selectQuestions,
} from '../../store/selectors';
import { loadCategories } from '../../store/slices/categoriesSlice';
import { loadQuestions } from '../../store/slices/questionsSlice';

const HomeScreen: React.FC = () => {
	const dispatch = useAppDispatch();
	const categories = useAppSelector(selectCategories);
	const questions = useAppSelector(selectQuestions);

	useEffect(() => {
		dispatch(loadCategories());
		dispatch(loadQuestions());
	}, [dispatch]);

	const keyExtractor = useCallback((item: { id: number }) => String(item.id), []);

	const renderCategoryItem = useCallback(
		({ item }: { item: { id: number; imageUrl: string; title: string } }) => (
			<CategoryItem title={item.title} imageUrl={item.imageUrl} />
		),
		[],
	);

	const renderArticleItem = useCallback(
		({ item }: { item: { id: number; imageUri: string; title: string; subtitle: string; uri: string } }) => (
			<ArticleItem
				imageUri={item.imageUri}
				title={item.title}
				subtitle={item.subtitle}
				uri={item.uri}
			/>
		),
		[],
	);

	return (
		<Screen>
			<View style={styles.container}>
				<Typography variant="h1" weight="bold">
					Good Afternoon!
				</Typography>
				<Spacer size="md" />
				<TextInput
					placeholder="Search for plants"
					placeholderTextColor={theme.colors.textSecondary}
					style={styles.search}
				/>
				<Spacer size="lg" />
				<Typography variant="title" weight="semibold">
					Categories
				</Typography>
				<Spacer size="sm" />
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					data={categories}
					keyExtractor={keyExtractor}
					ItemSeparatorComponent={() => <Spacer horizontal size="md" />}
					renderItem={renderCategoryItem}
				/>
				<Spacer size="lg" />
				<Typography variant="title" weight="semibold">
					Articles
				</Typography>
				<Spacer size="sm" />
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					data={questions}
					keyExtractor={keyExtractor}
					ItemSeparatorComponent={() => <Spacer horizontal size="md" />}
					renderItem={renderArticleItem}
				/>
			</View>
		</Screen>
	);
};

const CategoryItem = React.memo(function CategoryItem(props: { title: string; imageUrl: string }) {
	return (
		<Card style={styles.categoryCard}>
			<ImageAuto source={{ uri: props.imageUrl }} width={64} height={64} />
			<Spacer size="sm" />
			<Typography>{props.title}</Typography>
		</Card>
	);
});

const ArticleItem = React.memo(function ArticleItem(props: {
	imageUri: string;
	title: string;
	subtitle: string;
	uri: string;
}) {
	const onPress = useCallback(() => {
		Linking.openURL(props.uri);
	}, [props.uri]);
	return (
		<TouchableOpacity onPress={onPress}>
			<Card style={styles.articleCard}>
				<ImageAuto source={{ uri: props.imageUri }} width={240} height={140} />
				<Spacer size="sm" />
				<Typography weight="semibold">{props.title}</Typography>
				<Typography color={theme.colors.textSecondary}>{props.subtitle}</Typography>
			</Card>
		</TouchableOpacity>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: theme.SPACING.lg,
	},
	search: {
		height: 44,
		borderRadius: 12,
		borderWidth: 1,
		borderColor: theme.colors.border,
		paddingHorizontal: theme.SPACING.md,
		color: theme.colors.textPrimary,
	},
	categoryCard: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 120,
	},
	articleCard: {
		width: 260,
	},
});

export default HomeScreen;


