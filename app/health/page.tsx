import { healthArticlesData } from "@/data/articles"

import PageName from "@/components/PageName"
import ArticleSection from "@/components/ArticleSection"
import ColumnArticle from "@/components/ColumnArticle"

export default function Health() {
  const columnArticles = healthArticlesData.map((article: any, index: number) => {
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
    <div className="health">
      <PageName name="Health" />

      <ArticleSection
        article1={healthArticlesData[0]}
        article2={healthArticlesData[1]}
        article3={healthArticlesData[2]}
        article4={healthArticlesData[3]}
      />

      {columnArticles}
    </div>
  )
}