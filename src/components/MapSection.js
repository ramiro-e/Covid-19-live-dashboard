import React from 'react';
import WorldMap from 'react-svg-worldmap';


function MapSection(metrics) {
  const data = metrics.metrics

  return (
    <React.Fragment>
      <div className="col-12 col-md-6">	
        <div className="card">
          <WorldMap color="red" valueSuffix="muertes" size="xl" data={data}/>
        </div> 
      </div>
    </React.Fragment>

  );
}

export default MapSection;