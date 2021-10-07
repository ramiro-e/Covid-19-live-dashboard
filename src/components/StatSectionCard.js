import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers, faUserPlus ,faChild, faSkull} from '@fortawesome/free-solid-svg-icons'


function StatSectionCard (props) {
     
    return(
        <React.Fragment>

            <div className="col-12 pb-3">
                <div className="card w-100">					
                    
                    <div className="p-2 d-flex justify-content-between">
                    <div className="p-block text-muted">
                        <span><FontAwesomeIcon icon={props.icon} /></span>
                        <span className="">{props.title}</span>
                    </div>
                    <div className="p-block case-number">{props.number}</div>
                    </div>

                </div>
            </div>

        </React.Fragment>
    );
}

export default StatSectionCard;