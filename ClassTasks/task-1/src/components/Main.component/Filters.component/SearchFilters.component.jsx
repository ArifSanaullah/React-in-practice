import React from "react";
import style from "./SearchFilters.module.css";
import Filters from "./Filter.component/Filters.component";
import Meta from "./Meta.component/Meta.component";

export default class SearchFilters extends React.Component {
    render() {
        return <div className={style.searchFilters}>
            <Filters />
            <Meta />
        </div>
    }
}