import { securityArticlesData } from "@/data/articles"

import PageName from "@/components/PageName"
import ArticleSection from "@/components/ArticleSection"
import ColumnArticle from "@/components/ColumnArticle"

export default function Security() {
  const columnArticles = securityArticlesData.map((article: any, index: number) => {
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
    <div className="security">
      <PageName name="Security" />

      <ArticleSection
        article1={securityArticlesData[0]}
        article2={securityArticlesData[1]}
        article3={securityArticlesData[2]}
        article4={securityArticlesData[3]}
      />

      {columnArticles}
    </div>
  )
}