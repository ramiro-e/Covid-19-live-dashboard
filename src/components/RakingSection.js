import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';


function RankingSection() {
  return (
    <React.Fragment>
      <div className="col-6 col-md-4 col-lg-3 col-xl-2 mb-2" data-top-by="total">
        <div className="row mb-1">
          <div className="col-12 text-muted small">
            <span className="pl-1">Top cases</span>
          </div>
        </div>

        <div className="card mb-2">
          <div className="row">
            <div className="col-2">
              <img className="top-flag" width="32" height="32"></img>
            </div>
            <div className="col-5 d-none d-md-block">
              <span className="top-country text-muted small">{rank.country}</span>
            </div>
            <div className="col-5 pl-4 pl-sm-3">
              <span className="top-number text-small">{rank.number}</span>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="row">
            <div className="col-2">
              <img className="top-flag" width="32" height="32"></img>
            </div>
            <div className="col-5 d-none d-md-block">
              <span className="top-country text-muted small"></span>
            </div>
            <div className="col-5 pl-4 pl-sm-3">
              <span className="top-number text-small"></span>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="row">
            <div className="col-2">
              <img className="top-flag" width="32" height="32"></img>
            </div>
            <div className="col-5 d-none d-md-block">
              <span className="top-country text-muted small"></span>
            </div>
            <div className="col-5 pl-4 pl-sm-3">
              <span className="top-number text-small"></span>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="row">
            <div className="col-2">
              <img className="top-flag" width="32" height="32"></img>
            </div>
            <div className="col-5 d-none d-md-block">
              <span className="top-country text-muted small"></span>
            </div>
            <div className="col-5 pl-4 pl-sm-3">
              <span className="top-number text-small"></span>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="row">
            <div className="col-2">
              <img className="top-flag" width="32" height="32"></img>
            </div>
            <div className="col-5 d-none d-md-block">
              <span className="top-country text-muted small"></span>
            </div>
            <div className="col-5 pl-4 pl-sm-3">
              <span className="top-number text-small"></span>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="row">
            <div className="col-2">
              <img className="top-flag" width="32" height="32"></img>
            </div>
            <div className="col-5 d-none d-md-block">
              <span className="top-country text-muted small"></span>
            </div>
            <div className="col-5 pl-4 pl-sm-3">
              <span className="top-number text-small"></span>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="row">
            <div className="col-2">
              <img className="top-flag" width="32" height="32"></img>
            </div>
            <div className="col-5 d-none d-md-block">
              <span className="top-country text-muted small"></span>
            </div>
            <div className="col-5 pl-4 pl-sm-3">
              <span className="top-number text-small"></span>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="row">
            <div className="col-2">
              <img className="top-flag" width="32" height="32"></img>
            </div>
            <div className="col-5 d-none d-md-block">
              <span className="top-country text-muted small"></span>
            </div>
            <div className="col-5 pl-4 pl-sm-3">
              <span className="top-number text-small"></span>
            </div>
          </div>
        </div>

        <div className="card mb-2">
          <div className="row">
            <div className="col-2">
              <img className="top-flag" width="32" height="32"></img>
            </div>
            <div className="col-5 d-none d-md-block">
              <span className="top-country text-muted small"></span>
            </div>
            <div className="col-5 pl-4 pl-sm-3">
              <span className="top-number text-small"></span>
            </div>
          </div>
        </div>
        
      </div>
    </React.Fragment>
  );
}

export default RankingSection;
