import React, { PureComponent } from 'react';

class Comment extends PureComponent {

    render(){
        // debugger
        return(
            <>
                {this.props.comment.comment}
            </>
            )
    }
}

export default Comment