
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Modal from 'react-modal';
import {shareState} from '../Actions/index';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        width                 : '50%',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
class OwnCred extends Component{

    constructor(props) {
        super(props);
        this.state = {
            "modalShareLink" : false,
            "username": ""
        }
        this.openModalShareLink = this.openModalShareLink.bind(this);
        this.closeModalShareLink = this.closeModalShareLink.bind(this);
    }

    afterOpenModal() {

    }
    openModalShareLink() {
        this.setState({modalShareLink: true});
    }

    closeModalShareLink() {
        this.setState({modalShareLink: false});
    }

    handleShare = () =>{
        var cred = this.props.cred;
        var payload=[{
            "website":cred.website,
            "username":cred.username,
            "password_id":cred.password_id,
            "borrower_user_id": this.state.username
        }]
        console.log(payload);
        var state = this.props.shareState(payload);
        console.log("after share state is", state);
    }
    render() {
        const cred =  this.props.cred;
        if(cred !== ''){

                return(
                        <ul className="starred-list">
                            <div className ="row">
                                <li className="starred-item">
                                    <div className="starred-item__content col-sm-7">
                                        <div className="starred-item__title">{cred.website}</div>
                                        <div className="starred-item__title">{cred.username}</div>
                                        <input type="password" value={cred.password_id} readOnly />

                                    </div>
                                    <div className="starred-item__content col-sm-2">
                                        <div className="star" onClick={this.openModalShareLink}><u>Share</u></div>
                                    </div>
                                        <Modal isOpen={this.state.modalShareLink} onAfterOpen={this.afterOpenModal} onRequestClose={this.closeModalShareLink}
                                               style={customStyles} contentLabel="Example Modal">

                                            <h2>Share Password</h2>

                                            <div className="alert alert-info" role="alert"><b><u>Enter Username to share the password</u></b></div>
                                            <form>
                                                <input type="text" className="form-control" placeholder="Username"
                                                       value={this.state.username}
                                                       onChange={(event) => {
                                                           this.setState({...this.state,username: event.target.value});
                                                       }}required/>
                                                <br/>
                                                <div className ="row">
                                                    <div className ="col-sm-8"></div>
                                                    <div className ="col-sm-2"><button className ="btn btn-info" onClick={this.closeModalShareLink}>close</button></div>
                                                    <div className ="col-sm-2"><button className ="btn btn-info" onClick={this.handleShare}>Share</button></div>
                                                </div>
                                            </form>
                                        </Modal>
                                </li>
                            </div>
                        </ul>
                );
            }

        else {
            return(
                <ul className="starred-list">
                    <li className="starred-item">
                        <div className="starred-item__content">

                        </div>
                    </li>
                </ul>
            );
        }

    }
}
function mapStateToProps(state) {
    console.log("state App", state)
    return{
        // loginDataProp : state.loginData
    };
}

function mapDispatchToProps(dispatch) {
    return {
        shareState: (data) => dispatch(shareState(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(OwnCred);