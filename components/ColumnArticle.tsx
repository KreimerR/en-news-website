"use client"

import { useRouter } from "next/navigation"
import { StaticImageData } from "next/image"
import Image from "next/image"

type Props = {
  href?: string
  title: string
  description: string
  image: StaticImageData
  date: string
  author: string
}

export default function ColumnArticle({
  href,
  title,
  description,
  image,
  date,
  author,
}: Props) {
  const router = useRouter()

  return (
    <div
      className="columnArticle"
      onClick={() => href && router.push(href)}
    >
      <div className="columnArticle__info">
        <h1 className="columnArticle__info--title">{title}</h1>
        <span className="columnArticle__info--description">{description}</span>

        <div className="columnArticle__info--info">
          <span className="columnArticle__info--info--date">{date}</span>
          <span className="columnArticle__info--info--author">By {author}</span>
        </div>
      </div>

      <Image
        src={image}
        alt="Image"
        className="columnArticle__image"
      />
    </div>
  )
}