"use client"

import { useRouter } from "next/navigation"
import { StaticImageData } from "next/image"
import Image from "next/image"

type Props = {
  href?: string
  title?: string
  description?: string
  image?: StaticImageData
}

export default function BigArticle({
  href,
  title,
  description,
  image,
}: Props) {
  const router = useRouter()

  return (
    <div
      className="bigArticle"
      onClick={() => href && router.push(href)}
    >
      <div className="bigArticle__info">
        <h1 className="bigArticle__info--title">{title}</h1>
        {description &&
          <span className="bigArticle__info--description">{description}</span>
        }
      </div>

      {image &&
        <Image
          src={image}
          alt="Image"
          className="bigArticle__image"
        />
      }
    </div>
  )
}