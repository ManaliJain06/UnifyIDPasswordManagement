
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {shareState} from '../Actions/index';


class ShareCredMe extends Component{

    constructor(props) {
        super(props);

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
                                <div className="starred-item__title">{cred.lender_user_id}</div>
                            </div>
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


export default ShareCredMe;