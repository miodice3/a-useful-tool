import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import retrieveCommentsAPI from '../actions/retrieveCommentsAPI'

class ExistingCommentsContainer extends PureComponent {

    componentDidMount(){
        this.props.retrieveCommentsAPI(this.props.fedID_number, this.props.selector)
    }

    render(){
        return(
            <div>
                existing comments container
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
    comments: state.vehicles[existingProps.selector] ? state.vehicles[existingProps.selector].comments : null
})

export default connect(mapStateToProps, mapDispatchToProps)(ExistingCommentsContainer)