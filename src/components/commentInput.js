import React, { PureComponent } from 'react';

class CommentInput extends PureComponent {

    state = {
        comment: ""
    }

    onChange = (e) =>{
        this.setState({
            comment: e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        debugger
        // this.props.create
        
    }
    // need to remove events duplication from onSubmit
    render(){
        return(
            <div>
                <form onSubmit={event => this.handleSubmit(event)}>
                    <input type="text" onChange={this.onChange} value={this.state.comment}/><br/>
                    <input type="submit" value="Submit Comment"/>
                </form>
            </div>
            )
    }
}

export default CommentInput