export const APIServices = {

    globalMetrics: async () => {
        console.log('fetching data')
        const response = await fetch('https://api.covid19api.com/summary');
        const data = await response.json();
        const globalMetrics = data.Global
        console.log('fetching data success')

        if(response.status !== 200) {
            return {
                error: true,
                message: data.message
            }    
        }

        console.log(globalMetrics)
        return globalMetrics;
    },
    countryMetrics: async () => {
        console.log('fetching data')
        const response = await fetch('https://api.covid19api.com/summary');
        const data = await response.json();
        const countryMetrics = data.Countries
        console.log('fetching data success')

        if(response.status !== 200) {
            return {
                error: true,
                message: data.message
            }    
        }

        console.log(countryMetrics)
        return countryMetrics;
    }
}