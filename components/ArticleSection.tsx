import type { TypeArticle } from "@/types"

import Article from "./Article"
import BigArticle from "./BigArticle"

type Props = {
  article1: TypeArticle
  article2: TypeArticle
  article3?: TypeArticle
  article4?: TypeArticle
}

export default function ArticleSection({
  article1,
  article2,
  article3,
  article4,
}: Props) {
  return (
    <div className="articleSection">
      <BigArticle
        href={`/${article1.category.toLowerCase()}/${article1.id}`}
        title={article1.title}
        description={article1.description}
        image={article1.image}
      />

      <div className="articleSection__articlesContainer">
        <Article
          href={`/${article2.category.toLowerCase()}/${article2.id}`}
          title={article2.title}
          image={article2.image}
          horizontal={true}
        />
        {article3 && (
          <Article
            href={`/${article3.category.toLowerCase()}/${article3.id}`}
            title={article3?.title}
            image={article3?.image}
            horizontal={true}
          />
        )}
        {article4 && (
          <Article
            href={`/${article4.category.toLowerCase()}/${article4.id}`}
            title={article4.title}
            image={article4.image}
            horizontal={true}
          />
        )}
      </div>
    </div>
  )
}