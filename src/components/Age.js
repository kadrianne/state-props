import React from 'react'

export default class Age extends React.Component{

    // constructor(props){
    //     super()
    //     this.props = props
    // }
    
    render(){
        console.log(this.props.age)
        return (
            <h2> I am {this.props.age} years old.</h2>
        )
    }
}