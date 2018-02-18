
import React, {Component} from 'react';
import {userState} from '../Actions/index';
import ShareCred from './ShareCred';
import {connect} from 'react-redux';

class All extends Component{
    constructor(props) {
        super(props);
        let userState = this.props.userDataProp;
        console.log(userState);
        this.state = {
            "share_cred" : userState.shared_with_others,
        }
    }

    render() {
        var shareCred ='';
        if(this.state.share_cred === '' || this.state.share_cred === undefined){
            shareCred = <ShareCred key='' cred=''/>;
        } else {
            shareCred =  this.state.share_cred.map((item, index) => {
                return (
                    <ShareCred
                        key={index}
                        cred={item}
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
                                                <div>Shared Credentials</div>
                                            </div>
                                        </div>
                                    </h2>
                                </div>
                            </li>
                            {shareCred}
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