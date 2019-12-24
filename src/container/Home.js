import React, { Component } from 'react'
import { connect } from "react-redux"
import "./Home.css"


class Home extends Component {


    render() {
        console.log(this.props)
        let itemList = this.props.items.items.map(item => {
            return (
                <div className="col-md-4 " key={item.id}>
                    <div className="card text-center shadow-lg p-3 mb-5 bg-white rounded ">
                        <img className="card-img" src={item.img} alt={item.title} />
                       
                        <div className="card-body">
                        <div className="card-title font-weight-bold" >{item.title}</div>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p>
                                <button className="btn btn-primary">AddToCart</button>
                        </div>
                    </div>
                </div>

            )
        })
        return (
            <div className="container">
                <div className="row">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapStateToDispatch = (dispatch) => {
    return {
        addItem: () => dispatch()
    }
}
export default connect(mapStateToProps)(Home)
