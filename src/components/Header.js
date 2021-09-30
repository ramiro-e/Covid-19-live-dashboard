import React from 'react';

function Section() {
    return (
        <React.Fragment>
            <header>
                <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-dark">
                        <h1 className="display-5 d-none d-md-inline">Coronavirus Dashboard</h1>
                        <span><i className="fa fa-virus"></i> | COVID-19 Tracker</span>
                    <span className="pull-right"><i className="fa fa-adjust"></i></span>
                </nav>
            </header>
        </React.Fragment>

    );
}
export default Section;
