import React, { Component } from 'react'
import { connect } from "react-redux"
import "./Home.css"
import * as actions from "../../store/actions/index"


class Home extends Component {
    clickHandler=(id)=>{
        this.props.onAddItem(id)
    }

    render() {
       
        let itemList = this.props.items.items.map(item => {
            return (
                <div className="col-md-4 " key={item.id}>
                    <div className="card text-center shadow-lg p-3 mb-5 bg-white rounded ">
                        <img className="card-img" src={item.img} alt={item.title} />
                        <div className="card-body">
                        <div className="card-title font-weight-bold" >{item.title}</div>
                                <p>{item.desc}</p>
                                <p><b>Price: {item.price}$</b></p>
                                <button className="btn btn-primary"onClick={()=>this.clickHandler(item.id)}>AddToCart</button>
                            
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
console.log(state)
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (id) => dispatch(actions.addItem(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)
