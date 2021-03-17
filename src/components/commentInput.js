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

    handleSubmit = event =>{
        event.preventDefault()
        this.props.createCommentAPI(this.props.fedID_number, this.props.selector, this.state.comment)
        this.setState({
            comment: ""
        })
    }

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