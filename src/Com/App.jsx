import React from 'react'
import Index from './Index'
import Product from './Product'
import Header from './Header'
import Shop from './Shop'


class App extends React.Component {

        render() {
            return ( <div>
                <Header></Header>
                <Shop></Shop>
            </div>)
            }
        }

        export default App;