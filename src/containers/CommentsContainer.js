import React, { PureComponent } from 'react';
import CommentInput from '../components/commentInput'
import ExistingCommentsContainer from '../containers/ExistingCommentsContainer'
import { connect } from 'react-redux';
import createCommentAPI from '../actions/createCommentAPI'

class CommentsContainer extends PureComponent {

    renderExistingComments = () =>{
        if (this.props.selector === "Comment" && this.props.fedID_number){
            return <ExistingCommentsContainer 
            fedID_number={this.props.fedID_number}
            selector={this.props.selector}
            />
        }
    }

    renderCommentInput = () => {
        if (this.props.selector === "Comment" && this.props.fedID_number){
                    return <CommentInput
                    createCommentAPI={this.props.createCommentAPI}
                    selector={this.props.selector}
                    fedID_number={this.props.fedID_number}/>
                }
    }

    render(){

        return(
            <div>
                {this.renderCommentInput()}
                {this.renderExistingComments()}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        createCommentAPI: (fedID_number, selector, event) => dispatch(createCommentAPI(fedID_number, selector, event))
    }  
}

export default connect(null, mapDispatchToProps)(CommentsContainer)

// createCommentAPI = (comment)=>{
//     this.props.createCommentAPI(this.props.fedID_number, this.props.selector, comment)
// }

// renderCommentsContainer = ()=>{
//     // debugger
//     // if (this.props.comments){
//     //     return <CommentsContainer />
//     // }
//     debugger
//     return <CommentsContainer fedID_number={this.props.fedID_number} retrieveCommentsAPI={this.props.retrieveCommentsAPI}/>
// }

// renderCommentInput = ()=>{
//     if (this.props.selector === "Comment" && this.props.fedID_number){
//         return <CommentInput
//         createCommentAPI={this.props.createCommentAPI}
//         selector={this.props.selector}
//         fedID_number={this.props.fedID_number}/>
//     }
// }