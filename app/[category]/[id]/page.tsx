import type { TypeArticle } from "@/types"

import Image from "next/image"

import Article from "@/components/Article"

import { articlesData } from "@/data/articles"

type Props = {
  params: {
    category: string
    id: string
  }
}

export default async function FullArticle({ params }: Props) {
  const { category, id } = await params

  const article = articlesData.find((a: TypeArticle) =>
    a.id === Number(id) &&
    a.category.toLowerCase() === category.toLowerCase()
  )

  if (!article) return <p>Article not found</p>

  const content = article.content.map((content: any, index: number) => {
    if (content.type === "paragraph") {
      return (
        <p key={index} className="fullArticle__info--text--paragraph">{content.content}</p>
      )
    } else if (content.type === "media") {
      return (
        <div key={index} className="fullArticle__info--text--imageContainer">
          <Image
            src={content.content}
            alt="Image"
            className="fullArticle__info--text--imageContainer--image"
          />

          {content.mediaDescription && (
            <span key={index} className="fullArticle__info--text--imageContainer--description">{content.mediaDescription}</span>
          )}
        </div>
      )
    } else if (content.type === "heading") {
      return (
        <h2 key={index} className="fullArticle__info--text--heading">{content.content}</h2>
      )
    }
  })

  const relatedArticles = articlesData.filter((a: TypeArticle) => (
    a.category.toLowerCase() === category.toLowerCase()
  )).map((a: TypeArticle) => (
    <Article
      key={a.id}
      href={`/${category}/${a.id}`}
      title={a.title}
      image={a.image}
      horizontal={false}
    />
  ))

  return (
    <div className="fullArticle">
      <span className="fullArticle__route">The News Website / <span className="fullArticle__route--category">{article.category}</span></span>
      <h1 className="fullArticle__title">{article.title}</h1>
      <span className="fullArticle__description">{article.description}</span>

      <div className="fullArticle__imageContainer">
        <Image
          src={article.image}
          alt="Image"
          className="fullArticle__imageContainer--image"
        />

        <span className="fullArticle__imageContainer--description">{article.imageDescription}</span>
      </div>

      <div className="fullArticle__info">
        <div className="fullArticle__info--text">
          <div className="fullArticle__info--text--details">
            <span className="fullArticle__info--text--details--author">{article.author}</span>
            <span className="fullArticle__info--text--details--date">{article.date}</span>
          </div>

          {content}
        </div>

        <div className="fullArticle__info--relatedArticles">
          <span className="fullArticle__info--relatedArticles--text">Related Articles</span>
          {relatedArticles[0]}
          {relatedArticles[1]}
          {relatedArticles[2]}
          {relatedArticles[3]}
        </div>
      </div>
    </div>
  )
}