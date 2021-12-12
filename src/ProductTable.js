import React, { Component } from 'react'
import ProductRow from './ProductRow'

class ProductTable extends Component {
    constructor(props) {
        super(props)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleUpdate(id) {
        this.props.onUpdate(id)
    }

    handleDestroy(id) {
        this.props.onDestroy(id)
    }

    render () {
        let productsArray = this.props.products;
        let rows = []

        productsArray.forEach((product) => {
            if (product.product.name.indexOf(this.props.filterText) === -1) {
                return
            }
            rows.push (
                <ProductRow
                    product={product}
                    key={product.id}
                    onUpdate={this.handleUpdate}
                    onDestroy={this.handleDestroy}></ProductRow>
            )
        })

        return (
            <div>
                <table className="table table-striped table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Instock</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTable
