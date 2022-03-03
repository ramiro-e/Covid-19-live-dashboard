import getCountryISO from 'country-iso-3-to-2'

export const APIServices = {

  fetchMetrics: async () => {
    const response = await fetch('https://covid.ourworldindata.org/data/owid-covid-data.json');
    const rawData = await response.json();
    const rawMetricsKeyArray = Object.keys(rawData);


    if(response.status !== 200) {
      return {
          error: true,
          message: rawData.message
      }    
    }

    let countryHistoryMetrics = {}
    let globalHistoryMetrics = {}

    
    rawMetricsKeyArray.forEach(async (countryCode, index) => {
      let countryCovidHistoryArray = rawData[countryCode].data 

      countryCovidHistoryArray.forEach(async (currentDateData, index) => {
        let currentDate = currentDateData['date']
        if(!countryHistoryMetrics[currentDate]){
          countryHistoryMetrics[currentDate] = {}
        }
        if(!globalHistoryMetrics[currentDate]){
          globalHistoryMetrics[currentDate] = {}
        }
        delete currentDateData.date
        let currentDateKeys =  Object.keys(currentDateData)

        currentDateKeys.forEach(async (property, index) => {
          if(!countryHistoryMetrics[currentDate][property]){
            countryHistoryMetrics[currentDate][property] = []
          }

          if(currentDateData[property] && getCountryISO(countryCode) && !countryCode.includes('OWID')){
            countryHistoryMetrics[currentDate][property].push({country: getCountryISO(countryCode), value:currentDateData[property]})
            countryHistoryMetrics[currentDate]['date'] = currentDate
          }
          if(countryCode.includes('OWID_WRL')){
            globalHistoryMetrics[currentDate][property] = currentDateData[property]
            globalHistoryMetrics[currentDate]['date'] = currentDate
          }
        })


      })

    }) 

    let globalDateKeys = Object.keys(globalHistoryMetrics)
    let countryDateKeys = Object.keys(countryHistoryMetrics)

    console.log(globalDateKeys.reduce((a, b) => (a > b && globalHistoryMetrics[a].total_cases ? a : b)))

    let responseObject = {
      // globalMetrics: globalHistoryMetrics[globalDateKeys.reduce((a, b) => (a > b ? globalHistoryMetrics[a].total_cases ? a : b : b))], 
      // countryMetrics: countryHistoryMetrics[countryDateKeys.reduce((a, b) => (a > b ? countryHistoryMetrics[a].total_cases ? a : b : b))],
      globalMetrics: globalHistoryMetrics[globalDateKeys[900]], 
      countryMetrics: countryHistoryMetrics[countryDateKeys[900]], 
      globalHistoryMetrics,
      countryHistoryMetrics
    }


    return responseObject;
  }
}