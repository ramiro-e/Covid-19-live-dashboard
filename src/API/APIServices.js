import getCountryISO2 from 'country-iso-3-to-2'

export const APIServices = {

  fetchMetrics: async () => {
    console.log('globalMetrics fetching data')
    const response = await fetch('https://covid.ourworldindata.org/data/owid-covid-data.json');
    const rawData = await response.json();
    const rawMetricsKeyArray = Object.keys(rawData);

    if(response.status !== 200) {
      return {
          error: true,
          message: rawData.message
      }    
    }

    // filtrando datos globales
    const globalMetrics = rawData.OWID_WRL.data.pop()
    console.log('globalMetrics fetching data success')

    // filtrando datos de cada pais y creando un array de objetos con el atributo country y value
    const propertyArray = ["total_cases", "total_cases_per_million", "new_cases", "new_cases_smoothed", "new_cases_per_million", "new_cases_smoothed_per_million",  "total_deaths", "new_deaths", "new_deaths_smoothed", "new_deaths_per_million", "new_deaths_smoothed_per_million", "total_vaccinations", "total_vaccinations_per_hundred", "new_vaccinations", "new_vaccinations_smoothed", "new_vaccinations_smoothed_per_million", "people_vaccinated", "people_vaccinated_per_hundred", "people_fully_vaccinated", "people_fully_vaccinated_per_hundred"  ] 
    let currentPropertyCountryMetrics = {}
    let propertyNameCamelCase = ""
    let allCountryMetrics = {}

    

    // for(let property of propertyArray){
    //   currentPropertyCountryMetrics = getCountryPropertyObjectArray(property)
    //   propertyNameCamelCase = snakeToCamel(property)
    //   allCountryMetrics[propertyNameCamelCase] = currentPropertyCountryMetrics
    // }

    console.log(allCountryMetrics)

    // const snakeToCamel = str =>
    //   str.toLowerCase().replace(/([-_][a-z])/g, group =>
    //     group
    //       .toUpperCase()
    //       .replace('-', '')
    //       .replace('_', '')
    //   );

    
    
    // propertyArray.forEach(async (property) => {
    //   // console.log("propertyArray.forEach")
    //   // console.log(property)
    //   // let currentPropertyCountryMetrics = getCountryPropertyObjectArray(property)
    //   // allCountryMetrics[property] = currentPropertyCountryMetrics
    //   // console.log(currentPropertyCountryMetrics)
    // })
    
    const countryMetrics = getCountryPropertyObjectArray("total_cases_per_million")

    function getCountryPropertyObjectArray (property){
      console.log("getCountryPropertyObjectArray")
      console.log(property)
      console.log(rawData)
      const countryPropertyObjectArray = []
      rawMetricsKeyArray.forEach(async (key, index) => {
        if (typeof(getCountryISO2(key)) != 'undefined' && typeof(rawData[key].data.pop()[property]) != 'undefined'){
          countryPropertyObjectArray.push({country: getCountryISO2(key), value: parseInt(rawData[key].data.pop()[property].toFixed(0))})
        }
      })
      return countryPropertyObjectArray
    }

    // function sortObjectByValues () {
    //   const toBeSorted = getCountryPropertyObjectArray("total_cases_per_million")
      
    // }


    return { globalMetrics, countryMetrics };
  }
}