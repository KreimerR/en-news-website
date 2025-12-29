import { securityArticlesData, politicsArticlesData, healthArticlesData, sportArticlesData } from "@/data/articles"

import ArticleSection from "@/components/ArticleSection"
import RowArticles from "@/components/RowArticles"

export default function Home() {
  return (
    <div className="home">
      <ArticleSection
        article1={securityArticlesData[0]}
        article2={securityArticlesData[1]}
        article3={securityArticlesData[2]}
        article4={securityArticlesData[3]}
      />

      <ArticleSection
        article1={politicsArticlesData[0]}
        article2={politicsArticlesData[1]}
        article3={politicsArticlesData[2]}
        article4={politicsArticlesData[3]}
      />

      <RowArticles
        articles={[
          securityArticlesData[4],
          politicsArticlesData[4],
          healthArticlesData[4],
          sportArticlesData[4],
        ]}
      />

      <ArticleSection
        article1={healthArticlesData[0]}
        article2={healthArticlesData[1]}
        article3={healthArticlesData[2]}
        article4={healthArticlesData[3]}
      />

      <ArticleSection
        article1={sportArticlesData[0]}
        article2={sportArticlesData[1]}
        article3={sportArticlesData[2]}
        article4={sportArticlesData[3]}
      />
    </div>
  )
}