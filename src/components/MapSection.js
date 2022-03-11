import React from 'react';
import WorldMap from 'react-svg-worldmap';


function MapSection({metrics, denomination, countryHistoryLength}) {

  let allDenominations = {
    new_cases:"Nuevos casos",
    new_cases_per_million:"Nuevos casos por cada millon de habitantes",
    new_cases_smoothed:"Nuevos casos en promedio",
    new_cases_smoothed_per_million:"Nuevos casos en promedio por cada millon de habitantes",
    new_deaths:"Nuevas muertes",
    new_deaths_per_million:"Nuevas muertes por cada millon de habitantes",
    new_deaths_smoothed:"Nuevas muertes en promedio",
    new_deaths_smoothed_per_million:"Nuevas muertes en promedio por cada millon de habitantes",
    new_vaccinations:"Nuevas vacunaciones",
    new_vaccinations_smoothed:"Nuevas vacunaciones en promedio",
    new_vaccinations_smoothed_per_hundred:"Nuevas vacunaciones en promedio por cada 100 habitantes",
    people_fully_vaccinated:"Personas totalmente vacunadas",
    people_fully_vaccinated_per_hundred:"Personas totalmente vacunadas por cada 100 habitantes",
    people_vaccinated:"Personas vacunadas",
    people_vaccinated_per_hundred:"Personas vacunadas por cada 100 habitantes",
    total_boosters:"Boosters",
    total_boosters_per_hundred:"Boosters por cada 100 habitantes",
    total_cases:"Casos",
    total_cases_per_million:"Casos por cada millon de habitantes",
    total_deaths:"Muertes",
    total_deaths_per_million:"Muertes por cada millon de habitantes",
    total_vaccinations:"Vacunas aplicadas",
    total_vaccinations_per_hundred:"Vacunas aplicadas por cada 100 habitantes",
  }


  return (
    <React.Fragment>
      <div className="col-12 col-md-8">	
        <div className="card">
          <WorldMap color="#4285F4" valueSuffix={allDenominations[denomination]} size="xl" type="marker" data={metrics}/>
          <input className="mx-3 my-2" type="range" min={0} max={countryHistoryLength} defaultValue={countryHistoryLength}></input>
        </div> 
      </div>
    </React.Fragment>

  );
}

export default MapSection;