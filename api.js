
// function fetchDataFromApi() {
//     fetch('https://countriesnow.space/api/v0.1/countries/currency')
//     .then(res => res.json())
//     .then(data => console.log(data));
//     }
    
//     console.log(fetchDataFromApi());
//     console.log('Finished fetching data');
    

    async function fetchDataFromApi() {
     const res = await fetch('https://countriesnow.space/api/v0.1/countries/currency');
      const json = await res.json();
      console.log(json)
      }
    //   We also need to wait for the result of calling the fetchDataFromApi function:
    async function init(){
        await fetchDataFromApi();
        console.log('Finished fetching data');
    }
     init();
      