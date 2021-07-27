import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class Pricing extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        let price = <div></div>
        if (this.props.saleInfo?.listPrice?.amount) {
            price = <div className="container book-row">
                <h4>Prezzo: </h4>
                <span>€{this.props.saleInfo.listPrice.amount}</span>
            </div>
        } else {
            price = <div className="container">
                <h3>No price available</h3>
            </div>
        }
        return (
            <>
                {price}

                {this.props.saleInfo.buyLink && <div className="container">
                    <a href={this.props.saleInfo.buyLink} target="_blank" className="link clear-link" rel="noreferrer">
                        <span>Buy Now</span>
                    </a>
                </div>}
            </>
        )
    }
}

Pricing.propTypes = {
    saleInfo: propTypes.shape({
        listPrice: propTypes.shape({ amount: propTypes.number.isRequired }),
        buyLink: propTypes.string.isRequired
    })
}