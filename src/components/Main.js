import React, { useState, useEffect } from 'react';

import MapSection from './MapSection';
import StatSection from './StatSection';

import { APIServices } from '../API/APIServices';

function Main() {
    const [globalMetrics, setGlobalMetrics] = useState([])
    const [countryMetrics, setCountryMetrics] = useState([])

    const getGlobalMetrics = async () => {
        const globalMetrics = await APIServices.globalMetrics();
        setGlobalMetrics(globalMetrics); 
    }
    const getCountryMetrics = async () => {
        const countryMetrics = await APIServices.countryMetrics();
        setCountryMetrics(countryMetrics); 
    }
    
    useEffect( ()=> {
        getGlobalMetrics();
        getCountryMetrics();
    },[])

    return (
        <React.Fragment>
            <main className="bg-light">
                <section className="row p-4">
                    <StatSection metrics={globalMetrics} />
                    <MapSection metrics={countryMetrics}/>

                </section>
                <section className="p-4">
                    
                    <div className="row">

                    </div>

                </section>
            </main>
        </React.Fragment>
    );
}

export default Main;
