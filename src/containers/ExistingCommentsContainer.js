import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import retrieveCommentsAPI from '../actions/retrieveCommentsAPI'
import Comment from '../components/comment'

class ExistingCommentsContainer extends PureComponent {

    componentDidMount(){
        this.props.retrieveCommentsAPI(this.props.fedID_number, this.props.selector)
    }

    loadingComments = () => {
        if (this.props.loading_comments === false) {
            return(
                <ul>
                    {this.props.comments.map((comment, index) => <li><Comment key={index} comment={comment}/></li>)}
                </ul>
                )
        } else {
            return "loading comments from backend"
        }
    }

    renderComments = () => {
        // debugger
        return(
        <ul>
            {this.props.comments.map((comment, index) => <li><Comment key={index} comment={comment}/></li>)}
        </ul>
        )
    }

    render(){
        return(
            <div>
                {/* {this.renderComments()} */}
                {this.loadingComments()}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return {
        retrieveCommentsAPI: (fedID_number, selector) => dispatch(retrieveCommentsAPI(fedID_number, selector))
    }  
}

const mapStateToProps = (state, existingProps) => ({
    ...existingProps,
    comments: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].comments : null,
    loading_comments: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].loading_comments : null
})

export default connect(mapStateToProps, mapDispatchToProps)(ExistingCommentsContainer)