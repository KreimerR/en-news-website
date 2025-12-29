type Props = {
  name: string
}

export default function PageName({ name }: Props) {
  return (
    <div className="pageName">
      <span className="pageName__route">The News Website / <span className="pageName__route--name">{name}</span></span>

      <h1 className="pageName__name">{name}</h1>
    </div>
  )
}