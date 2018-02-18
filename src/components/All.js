

import React, {Component} from 'react';
import {userState} from '../Actions/index';
import OwnCred from './OwnCred';
import {connect} from 'react-redux';

class All extends Component{
    constructor(props) {
        super(props);
        let userState = this.props.userDataProp;
        console.log(userState);
        this.state = {
            "user_cred" : userState.own_credentials,
        }
    }

    render() {
        var ownCred ='';
        if(this.state.user_cred === '' || this.state.user_cred === undefined){
            ownCred = <OwnCred key='' cred=''/>;
        } else {
            ownCred =  this.state.user_cred.map((item, index) => {
                return (
                    <OwnCred
                        key={index}
                        cred={item}
                        // callHome={this.myCallbackForHome}
                    />
                );
            })
        }
        return(
            <div className="row">
                <div className ="col-lg-9">
                    <main className="home-access" role="main">
                        <ul className="home-access-sections">
                            <li className="home-access-section"></li>

                            <li className="home-access-section">
                                <div className="starred">
                                    <h2 className="home-access-section__header">
                                        <div className="home-access-section__title">
                                            <div className="home-access-section__title-text">
                                                <div>My Credentials</div>
                                            </div>
                                        </div>
                                    </h2>
                                </div>
                            </li>
                            {ownCred}
                        </ul>
                    </main>

                </div>

            </div>

        );
    }
}
function mapStateToProps(state) {
    return{
        userDataProp : state.userState,
    };
}

function mapDispatchToProps(dispatch) {
    // return bindActionCreators({loginState:loginState},dispatch)
    return {
        userState: (data) => dispatch(userState(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(All);