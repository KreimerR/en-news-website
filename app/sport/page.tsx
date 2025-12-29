import { sportArticlesData } from "@/data/articles"

import PageName from "@/components/PageName"
import ArticleSection from "@/components/ArticleSection"
import ColumnArticle from "@/components/ColumnArticle"

export default function Sport() {
  const columnArticles = sportArticlesData.map((article: any, index: number) => {
    if (index > 3) {
      return (
        <ColumnArticle
          key={article.id}
          href={`/${article.category}/${article.id}`}
          title={article.title}
          description={article.description}
          image={article.image}
          date={article.date}
          author={article.author}
        />
      )
    }
  })

  return (
    <div className="sport">
      <PageName name="Sport" />

      <ArticleSection
        article1={sportArticlesData[0]}
        article2={sportArticlesData[1]}
        article3={sportArticlesData[2]}
        article4={sportArticlesData[3]}
      />

      {columnArticles}
    </div>
  )
}