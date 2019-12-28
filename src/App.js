import React, { Component } from 'react'
import MyProvider from './MyProvider'
import ProductList from './ProductList'


export default class App extends Component {
    render() {
        return (
            <>
                <MyProvider>
                    <div className="App">
                        <header className="App-header">
                            <h1 className="App-title">First git pull</h1>
                        </header>
                    </div>
                    <ProductList/>
                </MyProvider>
            </>
        )
    }
}
