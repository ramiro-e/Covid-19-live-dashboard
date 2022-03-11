import React from 'react'
import StatSectionCard from './StatSectionCard';


function StatSection ({globalMetrics, countryMetrics, states:{selectedMetric, officialOrAveraged, totalOrPercapita}, methods:{setSelectedMetric, setOfficialOrAveraged, setTotalOrPercapita, getPerCapitaType}}) {
  function handleSelectedMetric(newSelectedMetric){
    if (countryMetrics[newSelectedMetric + officialOrAveraged + getPerCapitaType(newSelectedMetric, countryMetrics)]) {
      setSelectedMetric(newSelectedMetric)
    }
  }
  
  function handleOfficialOrAveraged(newOfficialOrAveraged){
    if (countryMetrics[selectedMetric + newOfficialOrAveraged + totalOrPercapita]) {
      setOfficialOrAveraged(newOfficialOrAveraged)
    }
  }

  function handleTotalOrPercapita(newTotalOrPercapita){
    if (countryMetrics[selectedMetric + officialOrAveraged + newTotalOrPercapita]) {
      setTotalOrPercapita(newTotalOrPercapita)
    }
  }

  function perMillionOrPerHundred(){
    if(countryMetrics[selectedMetric + officialOrAveraged + '_per_million']){
      return '_per_million'
    }
    if(countryMetrics[selectedMetric + officialOrAveraged + '_per_hundred']){
      return '_per_hundred'
    }
    return ''
  }
  

  return (
    <React.Fragment>
      <div className="col-md-4">
        <div>
          <div className="border rounded mb-2">
            <button className={`w-50 border-0 py-2 shadow-none rounded-0 rounded-start ${ countryMetrics[selectedMetric + '' + perMillionOrPerHundred()] ? officialOrAveraged === '' ? 'bg-primary text-white' : 'bg-white' : 'bg-light text-secondary'}`} onClick={()=>{handleOfficialOrAveraged('')}}>Oficial</button>
            <button className={`w-50 border-0 py-2 shadow-none rounded-0 rounded-end ${ countryMetrics[selectedMetric + '_smoothed' + perMillionOrPerHundred()] ? officialOrAveraged === '_smoothed' ? 'bg-primary text-white' : 'bg-white' : 'bg-light text-secondary'}`} onClick={()=>{handleOfficialOrAveraged('_smoothed')}}>Promedio</button>
          </div>
          <div className="border rounded mb-2">
            <button className={`w-50 border-0 py-2 shadow-none rounded-0 rounded-start ${ countryMetrics[selectedMetric + officialOrAveraged + ''] ? totalOrPercapita === '' ? 'bg-primary text-white' : 'bg-white' : 'bg-light text-secondary'}`} onClick={()=>{handleTotalOrPercapita('')}}>Total</button>
            <button className={`w-50 border-0 py-2 shadow-none rounded-0 rounded-end ${ countryMetrics[selectedMetric + officialOrAveraged + perMillionOrPerHundred()] ? totalOrPercapita === '_per_hundred' || totalOrPercapita === '_per_million' ? 'bg-primary text-white' : 'bg-white' : 'bg-light text-secondary'}`} onClick={()=>{handleTotalOrPercapita(perMillionOrPerHundred())}}>Per capita</button>
          </div>
        </div>
        <div className="row">
          <StatSectionCard  icon="faSkull" title="Total de casos" number={globalMetrics['total_cases'+ officialOrAveraged + getPerCapitaType('total_cases', globalMetrics)]}                                         countryMetricsExists={countryMetrics['total_cases' + officialOrAveraged + getPerCapitaType('total_cases', countryMetrics)] ? true : false} handleSelectedMetric={handleSelectedMetric} selectedMetric={selectedMetric} metric='total_cases' />
          <StatSectionCard  icon="faSkull" title="Nuevos casos" number={globalMetrics['new_cases'+ officialOrAveraged + getPerCapitaType('new_cases', globalMetrics)]}                                               countryMetricsExists={countryMetrics['new_cases' + officialOrAveraged + getPerCapitaType('new_cases', countryMetrics)] ? true : false} handleSelectedMetric={handleSelectedMetric} selectedMetric={selectedMetric} metric='new_cases' />
          <StatSectionCard  icon="faSkull" title="Total de muertes" number={globalMetrics['total_deaths'+ officialOrAveraged + getPerCapitaType('total_deaths', globalMetrics)]}                                     countryMetricsExists={countryMetrics['total_deaths' + officialOrAveraged + getPerCapitaType('total_deaths', countryMetrics)] ? true : false} handleSelectedMetric={handleSelectedMetric} selectedMetric={selectedMetric} metric='total_deaths' />
          <StatSectionCard  icon="faSkull" title="Nuevas Muertes" number={globalMetrics['new_deaths'+ officialOrAveraged + getPerCapitaType('new_deaths', globalMetrics)]}                                           countryMetricsExists={countryMetrics['new_deaths' + officialOrAveraged + getPerCapitaType('new_deaths', countryMetrics)] ? true : false} handleSelectedMetric={handleSelectedMetric} selectedMetric={selectedMetric} metric='new_deaths' />
          <StatSectionCard  icon="faSkull" title="Total de vacunaciones" number={globalMetrics['total_vaccinations'+ officialOrAveraged + getPerCapitaType('total_vaccinations', globalMetrics)]}                    countryMetricsExists={countryMetrics['total_vaccinations' + officialOrAveraged + getPerCapitaType('total_vaccinations', countryMetrics)] ? true : false} handleSelectedMetric={handleSelectedMetric} selectedMetric={selectedMetric} metric='total_vaccinations' />
          <StatSectionCard  icon="faSkull" title="Nuevas vacunaciones" number={globalMetrics['new_vaccinations'+ officialOrAveraged + getPerCapitaType('new_vaccinations', globalMetrics)]}                          countryMetricsExists={countryMetrics['new_vaccinations' + officialOrAveraged + getPerCapitaType('new_vaccinations', countryMetrics)] ? true : false} handleSelectedMetric={handleSelectedMetric} selectedMetric={selectedMetric} metric='new_vaccinations' />
          <StatSectionCard  icon="faSkull" title="Personas vacunadas" number={globalMetrics['people_vaccinated'+ officialOrAveraged + getPerCapitaType('people_vaccinated', globalMetrics)]}                         countryMetricsExists={countryMetrics['people_vaccinated' + officialOrAveraged + getPerCapitaType('people_vaccinated', countryMetrics)] ? true : false} handleSelectedMetric={handleSelectedMetric} selectedMetric={selectedMetric} metric='people_vaccinated' />
          <StatSectionCard  icon="faSkull" title="Personas totalmente vacunadas" number={globalMetrics['people_fully_vaccinated'+ officialOrAveraged + getPerCapitaType('people_fully_vaccinated', globalMetrics)]}  countryMetricsExists={countryMetrics['people_fully_vaccinated' + officialOrAveraged + getPerCapitaType('people_fully_vaccinated', countryMetrics)] ? true : false} handleSelectedMetric={handleSelectedMetric} selectedMetric={selectedMetric} metric='people_fully_vaccinated' />
        </div>{/* /coronavirus _cases */}
                        
      </div>
    </React.Fragment>
    
  );

  
}

export default StatSection;
