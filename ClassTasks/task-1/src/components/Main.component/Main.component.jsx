import React from "react";
import style from "./Main.module.css";
import SearchFilters from "./Filters.component/SearchFilters.component"
import SearchResults from "./Results.component/SearchResults.component"
// import Pagination from "./Pagination.component/Pagination.component";

export default function Main() {
    return <main className={style.Main}>
        <SearchFilters />
        <SearchResults />
        {/* <Pagination /> */}
    </main>
}