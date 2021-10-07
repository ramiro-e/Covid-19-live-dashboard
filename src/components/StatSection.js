import React from 'react'

import StatSectionCard from './StatSectionCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUsers, faUserPlus ,faChild, faSkull} from '@fortawesome/free-solid-svg-icons'


function StatSection (metrics) {

  const data =  metrics.metrics


  const newCases = data.new_cases
  const newCasesPerMillion = data.new_cases_per_million
  const newCasesSmoothed = data.new_cases_smoothed
  const newCasesSmoothedPerMillion = data.new_cases_smoothed_per_million
  const newDeaths = data.new_deaths
  const newDeathsPerMillion = data.new_deaths_per_million
  const newDeathsSmoothed = data.new_deaths_smoothed
  const newDeathsSmoothedPerMillion = data.new_deaths_smoothed_per_million
  const newVaccinations = data.new_vaccinations
  const newVaccinationsSmoothed = data.new_vaccinations_smoothed
  const newVaccinationsSmoothedPerMillion = data.new_vaccinations_smoothed_per_million
  const peopleFullyVaccinated = data.people_fully_vaccinated
  const peopleFullyVaccinatedPerHundred = data.people_fully_vaccinated_per_hundred
  const peopleVaccinated = data.people_vaccinated
  const peopleVaccinatedPerHundred = data.people_vaccinated_per_hundred
  const totalBoosters = data.total_boosters
  const totalBoostersPerHundred = data.total_boosters_per_hundred
  const totalCases = data.total_cases
  const totalCasesPerMillion = data.total_cases_per_million
  const totalDeaths = data.total_deaths
  const totalDeathsPerMillion = data.total_deaths_per_million
  const totalVaccinations = data.total_vaccinations
  const totalVaccinationsPerHundred = data.total_vaccinations_per_hundred

  
  return (
    <React.Fragment>
      <div className="col-12 col-md-3">		
        {/* coronavirus cases */}
        <div className="row">
          <StatSectionCard icon="faSkull" title="Total de casos" number={totalCases} />
          <StatSectionCard icon="faSkull" title="Nuevos casos" number={newCases} />
          <StatSectionCard icon="faSkull" title="Total de muertes" number={totalDeaths} />
          <StatSectionCard icon="faSkull" title="Nuevas Muertes" number={newDeaths} />
          <StatSectionCard icon="faSkull" title="Total de vacunaciones" number={totalVaccinations} />
          <StatSectionCard icon="faSkull" title="Nuevas vacunaciones" number={newVaccinations} />
          <StatSectionCard icon="faSkull" title="Personas totalmente vacunadas" number={peopleFullyVaccinated} />
          <StatSectionCard icon="faSkull" title="Personas vacunadas" number={peopleVaccinated} />
        </div>{/* /coronavirus cases */}
                        
      </div>
    </React.Fragment>
    
  );

  
}

export default StatSection;
