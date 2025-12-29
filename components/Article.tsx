"use client"

import { useRouter } from "next/navigation"
import { StaticImageData } from "next/image"
import Image from "next/image"

type Props = {
  href?: string
  title?: string
  description?: string
  image?: StaticImageData
  horizontal: boolean
}

export default function Article({
  href,
  title,
  description,
  image,
  horizontal,
}: Props) {
  const router = useRouter()

  return (
    <div
      className={horizontal ? "article" : "article article-vertical"}
      onClick={() => href && router.push(href)}
    >
      <div className="article__info">
        <h1 className="article__info--title">{title}</h1>
        {description &&
          <span className="article__info--description">{description}</span>
        }
      </div>

      {image &&
        <Image
          src={image}
          alt="Image"
          className={horizontal ? "article__image" : "article__image article__image-vertical"}
        />
      }
    </div>
  )
}