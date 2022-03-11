import React, { useState, useEffect } from 'react';

import MapSection from './MapSection';
import StatSection from './StatSection';

import { APIServices } from '../API/APIServices';

function Main() {
    const [globalMetricsData, setGlobalMetricsData] = useState({})
    const [countryMetricsData, setCountryMetricsData] = useState({})
    const [globalHistoryMetricsData, setGlobalHistoryMetricsData] = useState({})
    const [countryHistoryMetricsData, setCountryHistoryMetricsData] = useState({})

    const [selectedMetric, setSelectedMetric] = useState('total_cases')  
    const [officialOrAveraged, setOfficialOrAveraged] = useState('')
    const [totalOrPercapita, setTotalOrPercapita] = useState('')

    const [selectedMapData, setSelectedMapData] = useState([])

    
    const getMetrics = async () => {
        let {globalMetrics, countryMetrics, globalHistoryMetrics, countryHistoryMetrics} = await APIServices.fetchMetrics();
        setGlobalMetricsData(globalMetrics);
        setCountryMetricsData(countryMetrics);
        setGlobalHistoryMetricsData(globalHistoryMetrics)
        setCountryHistoryMetricsData(countryHistoryMetrics)
    }
    
    function setMapMetric(){
        if(countryMetricsData[selectedMetric + officialOrAveraged + getPerCapitaType(selectedMetric, countryMetricsData)]){
            setSelectedMapData(countryMetricsData[selectedMetric + officialOrAveraged + getPerCapitaType(selectedMetric, countryMetricsData)])
        }
    }

    function getPerCapitaType(metric, data){
        if(totalOrPercapita != ''){
          if(data[metric + officialOrAveraged + '_per_million']){
            return '_per_million'
          }
          if(data[metric + officialOrAveraged + '_per_hundred']){
            return '_per_hundred'
          }
        }
        return ''
    }
    

    useEffect( ()=> {
        getMetrics();
    },[])

    useEffect( ()=> {
        setMapMetric();
    },[countryMetricsData, selectedMetric, officialOrAveraged, totalOrPercapita])


    return (
        <React.Fragment>
            <main className="bg-light min-vh-100 py-3 py-md-4">
                <section className="row mx-1 mx-md-4">
                    <StatSection globalMetrics={globalMetricsData} countryMetrics={countryMetricsData} states={{selectedMetric, officialOrAveraged, totalOrPercapita}} methods={{setSelectedMetric, setOfficialOrAveraged, setTotalOrPercapita, getPerCapitaType}}  />
                    <MapSection metrics={selectedMapData} denomination={selectedMetric + officialOrAveraged + totalOrPercapita} countryHistoryLength={Object.keys(countryHistoryMetricsData).length - 1}/>


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
