import React, { Component } from 'react'
import propTypes from "prop-types";
import {getCurrencySymbol, convertCurrency} from "../currency"

export default class Basket extends Component {
    render() {
        const { items, total } = this.props;
        const { currency } = this.context;
        return (
            <div>
                {items} items | {getCurrencySymbol(currency)}{convertCurrency(total, currency)}
                Basket
            </div>
        )
    }
}
Basket.contextType = {
    currency: propTypes.string
}
