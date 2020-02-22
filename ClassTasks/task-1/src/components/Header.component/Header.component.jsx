import React from "react";
import style from "./Header.module.css";
import Logo from "./Header_logo.component/Logo.component";
import Search from "./Header_search.component/Search.component";
import Setting from "./Header_setting.component/Setting.component";

export default function Header() {
    return <header className={style.Header}>
        <Logo />
        <Search />
        <Setting />
    </header>
}
