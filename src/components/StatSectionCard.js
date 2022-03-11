import React from 'react'

function StatSectionCard ({icon, title, number, countryMetricsExists ,handleSelectedMetric, metric, selectedMetric}) {

    function onClickHandler (){
        handleSelectedMetric(metric)
    }

    return(
        <React.Fragment>

            <div className="pb-2">
                <button className={`card w-100 rounded-3 ${countryMetricsExists ? selectedMetric === metric ? 'alert-primary' : '' : 'bg-light text-secondary'}`} onClick={onClickHandler} >					
                    
                    <div className="p-2  w-100  d-flex justify-content-between">
                        <div className="p-block">
                            <span className="">{title}</span>
                        </div>
                        <div className="p-block case-number">{number}</div>
                    </div>

                </button>
            </div>

        </React.Fragment>
    );
}
StatSectionCard.defautlProps = {
    number: "cargando..."
}

export default StatSectionCard;
