import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers, faUserPlus ,faChild, faSkull} from '@fortawesome/free-solid-svg-icons'


function StatSection (globalMetrics) {

  const metrics = globalMetrics.metrics

  const casesTotal = metrics.TotalConfirmed
  const newCases = metrics.NewConfirmed
  const casesDeceased = metrics.TotalDeaths
  const newDeath = metrics.NewDeaths
  const casesRecovered = (metrics.TotalConfirmed - metrics.TotalDeaths)
  const survivalRate = (100 - (metrics.TotalConfirmed/(metrics.TotalConfirmed - metrics.TotalDeaths))).toFixed(2)

  return (
    <React.Fragment>
      <div className="col-12 col-md-4">		
        {/* coronavirus cases */}
        <div className="row">
          {/* cases total */}
          <div className="col-12 pb-3">
            <div className="card">					
                
              <div className="px-xl-4 p-2 d-flex justify-content-between">
                <div className="p-block text-muted">
                  <span><FontAwesomeIcon icon={faUsers} /></span>
                  <span className="px-2">Total de casos</span>
                  <span className="badge case-badge badge-pill float-right">⇧</span>
                </div>
                <div className="p-block case-number">{casesTotal}</div>
              </div>

            </div>
          </div>{/* /cases total */}

          {/* new cases */}
          <div className="col-12 pb-3">
            <div className="card">					
                
              <div className="px-xl-4 p-2 d-flex justify-content-between">
                <div className="p-block text-muted">
                  <span><FontAwesomeIcon icon={faUserPlus} /></span>
                  <span className="px-2">Nuevos casos</span>
                  <span className="badge case-badge badge-pill float-right">⇧</span>
                </div>
                <div className="p-block case-number">{newCases}</div>
              </div>

            </div>
          </div>{/* /new cases */}

          {/* cases deceased */}
          <div className="col-12 pb-3">
            <div className="card">					
                
              <div className="px-xl-4 p-2 d-flex justify-content-between">
                <div className="p-block text-muted">
                  <span><FontAwesomeIcon icon={faSkull} /></span>
                  <span className="px-2">Total de muertes</span>
                  <span className="badge case-badge badge-pill float-right">⇧</span>
                </div>
                <div className="p-block case-number">{casesDeceased}</div>
              </div>

            </div>
          </div>{/* /cases deceased */}

          {/* new death */}
          <div className="col-12 pb-3">
            <div className="card">					
                
              <div className="px-xl-4 p-2 d-flex justify-content-between">
                <div className="p-block text-muted">
                  <span><FontAwesomeIcon icon={faSkull} /></span>
                  <span className="px-2">Nuevos Muertos</span>
                  <span className="badge case-badge badge-pill float-right">⇧</span>
                </div>
                <div className="p-block case-number">{newDeath}</div>
              </div>

            </div>
          </div>{/* /new deaths */}

          {/* cases recovered */}
          <div className="col-12 pb-3">
            <div className="card">					
                
              <div className="px-xl-4 p-2 d-flex justify-content-between">
                <div className="p-block text-muted">
                  <span><FontAwesomeIcon icon={faChild} /></span>
                  <span className="px-2">Recuperados</span>
                  <span className="badge case-badge badge-pill float-right">⇧</span>
                </div>
                <div className="p-block case-number">{casesRecovered} </div>
              </div>

            </div>
          </div>{/* /cases recovered */}

          {/* survival rate */}
          <div className="col-12 pb-3">
            <div className="card">					
                
              <div className="px-xl-4 p-2 d-flex justify-content-between">
                <div className="p-block text-muted">
                  <span><FontAwesomeIcon icon={faUserPlus} /></span>
                  <span className="px-2">Tasa de Supervivencia</span>
                  <span className="badge case-badge badge-pill float-right">⇧</span>
                </div>
                <div className="p-block case-number">% {survivalRate}</div>
              </div>

            </div>
          </div>{/* /survival rate */}

                
        </div>{/* /coronavirus cases */}
                        
      </div>
    </React.Fragment>
    
  );

  
}

export default StatSection;
