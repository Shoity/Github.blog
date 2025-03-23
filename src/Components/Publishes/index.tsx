import {
	ArticleCard,
	GridContainer,
	SearchBar,
	SearchBarTitle,
	SectionContainer,
	Title,
} from "./styles"

export function Publishes() {
	return (
		<SectionContainer>
			<SearchBarTitle>
				<h2>Publicações</h2>
				<p> 6 publicações</p>
			</SearchBarTitle>
			<SearchBar type='text' placeholder='Buscar conteúdo' />
			<GridContainer>
				<ArticleCard>
					<Title>
						<h2>JS data types and data structures asdsa</h2>
						<span> Há 1 dia </span>
					</Title>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quos.
					</p>
				</ArticleCard>
				<ArticleCard>
					<Title>
						<h2>JS data types and data structures</h2>
						<span> Há 1 dia </span>
					</Title>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quos.
					</p>
				</ArticleCard>
				<ArticleCard>
					<Title>
						<h2>JS data types and data structures</h2>
						<span> Há 1 dia </span>
					</Title>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quos.
					</p>
				</ArticleCard>
				<ArticleCard>
					<Title>
						<h2>JS data types and data structures</h2>
						<span> Há 1 dia </span>
					</Title>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quos.
					</p>
				</ArticleCard>
				<ArticleCard>
					<Title>
						<h2>JS data types and data structures</h2>
						<span> Há 1 dia </span>
					</Title>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
						quos.
					</p>
				</ArticleCard>
			</GridContainer>
		</SectionContainer>
	)
}
