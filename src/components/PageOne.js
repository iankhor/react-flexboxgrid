import React, { Component } from 'react'
import App from './App'
import { Link } from 'react-router-dom'
import JSONDebugger from '../utils/JSONDebugger'

// example JSON data
const exampleJSONData = {
    data1: 'data1',
    data2: 'data2',
    data3: 123
}

class PageOne extends Component {
    render(){
        return(
            <App> 


                { /* 2 row 2 columns 3 columns */ }
                <div className="row">
                    <div className="col-xs-4">
                        <div className="box color-white border">Non responsive Column 1</div>
                    </div>

                    <div className="col-xs-4">
                        <div className="box color-white border">Non responsive Column 2</div>
                    </div>

                    <div className="col-xs-4">
                        <div className="box color-white border">Non responsive Column 3</div>
                    </div>
                </div>

                <br />

                <div className="row">
                    <div className="col-xs-6">
                        <div className="box color-pink border">Non responsive Column 1</div>
                    </div>

                    <div className="col-xs-6">
                        <div className="box color-pink border">Non responsive Column 2</div>
                    </div>
                </div>

                <br />


                { /* Responsive 3 column */ }
                <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-4 col-lg-4">
                        <div className="box color-white border">Responsive Column 1</div>
                    </div>
                    <div className="col-xs-12 col-sm-8 col-md-4 col-lg-4">
                        <div className="box color-white border">Responsive Column 2</div>
                    </div>

                    <div className="col-xs-12 col-sm-8 col-md-4 col-lg-4">
                        <div className="box color-white border">Responsive Column 3</div>
                    </div>
                </div>
                
                <br />
                
                { /* Responsive 2 column */ }
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="box color-pink border">Responsive Column 1</div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="box color-pink border">Responsive Column 2</div>
                    </div>
                </div>

            </App> 
        )
    }
}

export default PageOne

