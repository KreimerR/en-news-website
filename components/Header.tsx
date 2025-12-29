"use client"

import { useState } from "react"

import Link from "next/link"

import Menu from "./Menu"

export default function Header() {
  const [menu, setMenu] = useState<boolean>(false)

  return (
    <>

      <div className="header">
        <h1 className="header__logo">
          <Link href="/"><span className="header__logo--red">The </span>News Website</Link>
        </h1>

        <ul className="header__ul">
          <li className="header__ul--security">
            <Link href="/security">Security</Link>
          </li>

          <li className="header__ul--politics">
            <Link href="/politics">Politics</Link>
          </li>

          <li className="header__ul--health">
            <Link href="/health">Health</Link>
          </li>

          <li className="header__ul--sport">
            <Link href="/sport">Sport</Link>
          </li>
        </ul>

        <div className="header__menu" onClick={() => setMenu((prev: boolean) => !prev)}>
          {menu ? (
            <i className="fa-solid fa-xmark header__menu--icon" />
          ) : (
            <i className="fa-solid fa-bars header__menu--icon" />
          )}
        </div>

        <div
          className={menu ?
            "header__black header__black-active" :
            "header__black"
          }
          onClick={() => menu && setMenu(false)}
        />
      </div>

      <Menu menu={menu} setMenu={setMenu} />
    </>
  )
}