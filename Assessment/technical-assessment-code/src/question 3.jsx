import React, {Component} from 'react'

class Componentt extends Component {

    handleChange= ()=> {
      alert('this is a stateless component being clicked')
    }

    render () {
    return (

        <div >
            <h1> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Comm</h1>
            <p> dolorem distinctio perspiciatis voluptate? Cupiditate, mollitia expedita dicta fugit, inve</p>
            <button onClick={this.handleChange}> click for alert </button>
        </div>
)

    }


}

export default Componentt 