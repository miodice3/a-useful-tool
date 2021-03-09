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

    render(){
        return(
            <div>
                <form>
                    <input type="text" onChange={this.onChange} value={this.state.comment}/>
                </form>
                {this.state.comment}
            </div>
            )
    }
}

export default CommentInput