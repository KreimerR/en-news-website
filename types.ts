import { StaticImageData } from "next/image"

type TypeArticle = {
  id: number
  category: string
  title: string
  description?: string
  image?: StaticImageData
}

export type { TypeArticle }
