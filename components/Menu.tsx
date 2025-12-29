import Link from "next/link"
import { SetStateAction } from "react"

export default function Menu({ menu, setMenu }: { menu: boolean, setMenu: React.Dispatch<SetStateAction<boolean>> }) {
  return (
    <div className={menu ? "menu menu-active" : "menu"}>
      <ul className="menu__ul">
        <li className="menu__ul--security">
          <Link href="/security" onClick={() => setMenu(false)}>Security</Link>
        </li>

        <li className="menu__ul--politics">
          <Link href="/politics" onClick={() => setMenu(false)}>Politics</Link>
        </li>

        <li className="menu__ul--health">
          <Link href="/health" onClick={() => setMenu(false)}>Health</Link>
        </li>

        <li className="menu__ul--sport">
          <Link href="/sport" onClick={() => setMenu(false)}>Sport</Link>
        </li>
      </ul>
    </div>
  )
}