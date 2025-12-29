import { politicsArticlesData } from "@/data/articles"

import PageName from "@/components/PageName"
import ArticleSection from "@/components/ArticleSection"
import ColumnArticle from "@/components/ColumnArticle"

export default function Politics() {
  const columnArticles = politicsArticlesData.map((article: any, index: number) => {
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
    <div className="politics">
      <PageName name="Politics" />

      <ArticleSection
        article1={politicsArticlesData[0]}
        article2={politicsArticlesData[1]}
        article3={politicsArticlesData[2]}
        article4={politicsArticlesData[3]}
      />

      {columnArticles}
    </div>
  )
}