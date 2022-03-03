import React, { useState, useEffect } from 'react';

import MapSection from './MapSection';
import StatSection from './StatSection';

import { APIServices } from '../API/APIServices';

function Main() {

    const getMetrics = async () => {
        let {globalMetrics, countryMetrics, globalHistoryMetrics, countryHistoryMetrics} = await APIServices.fetchMetrics();
        setGlobalMetricsData(globalMetrics);
        setCountryMetricsData(countryMetrics);
        setGlobalHistoryMetricsData(globalHistoryMetrics)
        setCountryHistoryMetricsData(countryHistoryMetrics)
    }

    useEffect( ()=> {
        getMetrics();
    },[])


    return (
        <React.Fragment>
            <main className="bg-light min-vh-100 py-3 py-md-4">
                <section className="row mx-1 mx-md-4">
                    <StatSection metrics={globalMetrics} />
                    <MapSection metrics={countryMetrics}/>



                </section>
                <section className="">
                    
                    <div className="row">

                    </div>

                </section>
            </main>
        </React.Fragment>
    );
}

export default Main;
