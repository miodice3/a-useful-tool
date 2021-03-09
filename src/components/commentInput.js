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
                    <input type="text" onChange={this.onChange} value={this.state.comment}/><br/>
                    <input type="submit" value="Submit Comment"/>
                </form>
            </div>
            )
    }
}

export default CommentInput