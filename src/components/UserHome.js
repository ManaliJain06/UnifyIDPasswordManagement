/**
 * Created by ManaliJain on 9/30/17.
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userMenu} from '../Actions/index';
import SharedLogin from './SharedLogin';
import SharedWithMe from './SharedWithMe';
import '../unify.css';
import All from './All';

// import * as API from '../Api/UserLogin';

class UserHome extends Component {
    constructor(props){
        super(props);
        // this.state ={
        //     "isUpdated" : false
        // }
    }

    render() {
        let switchDecision = <All/>;
        if(this.props.userMenuSelection.menuSelection === 'all'){
            switchDecision = <All/>;
        }
        if(this.props.userMenuSelection.menuSelection === 'sharedlogin'){
            switchDecision = <SharedLogin/>;
        }
        if(this.props.userMenuSelection.menuSelection === 'sharedwithMe'){
            switchDecision = <SharedWithMe/>;
        }


        return (
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-3 maestro-nav__container_sidebar">
                        <div className="image-wrapper-logo"> UnifyID</div>
                        <ul className="list">
                            <li onClick = {() => this.props.userMenu('all')}>
                                <div className="maestro-nav__product-wrapper">
                                    <span className="ue-effect-container">
                                        <a href="#" className="maestro-nav__product">
                                     All</a>
                                    </span>
                                </div>
                            </li>
                            <li  onClick = {() => this.props.userMenu('sharedlogin')}>
                                <div className="maestro-nav__product-wrapper">
                                    <span className="ue-effect-container">
                                        <a href="#" className="maestro-nav__product">
                                     Shared Login</a>
                                    </span>
                                </div>
                            </li>
                            <li onClick = {() => this.props.userMenu('sharedwithMe')}>
                                <div className="maestro-nav__product-wrapper">
                                    <span className="ue-effect-container">
                                        <a href="#" className="maestro-nav__product">
                                     Shared With Me</a>
                                    </span>
                                </div>
                            </li>

                        </ul>
                    </div>

                    <div className="col-lg-10">
                        <header className="maestro-header page-header__shadow">
                            <div className="mc-vertically-fixed page-header">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <h3>{this.props.userMenuSelection.menuSelection[0].toUpperCase() +
                                        this.props.userMenuSelection.menuSelection.substring(1)}</h3>
                                    </div>

                                </div>
                            </div>
                        </header>

                        {switchDecision}

                    </div>

                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return{
        userMenuSelection: state.userMenu,
        // loginDataProp : state.loginData
    };

}

function mapDispatchToProps(dispatch) {
    return {
        userMenu: (data) => dispatch(userMenu(data)),
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(UserHome);

