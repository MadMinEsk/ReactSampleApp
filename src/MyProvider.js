import React, { Component } from 'react'
import MyContext from './MyContext';

export default class MyProvider extends Component {
    constructor() {
        super();
        this.state = {
            cars: {
                car001: { name: 'Honda', price: 100 },
                car002: { name: 'BMW', price: 150 },
                car003: { name: 'Mercedes', price: 200 }
            },
            digitals: [
                { id: 1, name: 'apple', price: 1000 },
                 { id: 2, name: 'samsung', price: 800 },
                  { id: 3, name: 'asus', price: 1500, }
            ]
        }
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    cars: this.state.cars,
                    digitals: this.state.digitals,
                    incrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price + 1;
                        this.setState({
                            cars
                        });
                    },
                    decrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price - 1;
                        this.setState({
                            cars
                        });
                    },
                    removeItem: id => {
                        const temp = this.state.digitals.filter(q => q.id != id);
                        this.setState({
                            digitals:temp
                        });
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}