import type { TypeArticle } from "@/types"
import Article from "./Article"

type Props = {
  articles: TypeArticle[]
}

export default function RowArticles({ articles }: Props) {
  return (
    <div className="rowArticles">
      {articles.map((article: TypeArticle) => (
        <Article
          key={article.id}
          href={`/${article.category.toLowerCase()}/${article.id}`}
          title={article.title}
          image={article.image}
          horizontal={false}
        />
      ))}
    </div>
  )
}