import React from 'react';
import RankSectionCard from './RankSectionCard';

function RankSection() {
  return (
    <React.Fragment>
            <div className="card" style="width: 18rem;">
                <div className="card-header">
                  Featured
                </div>
                <ul className="list-group list-group-flush">
                  <RankSectionCard/>
                </ul>
              </div>
    </React.Fragment>
  );
}

export default RankSection;
