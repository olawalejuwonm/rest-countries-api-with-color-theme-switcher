let mainData = [];
const Hresp = document.getElementById("result");

fetch("https://restcountries.eu/rest/v2/all")
    .then((resp) => {
        return resp.json()
    })
    .then((resp) => {
        // console.log(resp)
        mainData.push(resp);
        resp.map((res, indx) => {

            if (indx < 8) {
                // console.log(res)
                const temp = `<div class="card shadow mb-5" style="height:25rem" >
                <img src="${res.flag}" class="card-img-top" alt="${res.name}" >
                <div class="card-body mt-md-5">
                <p class="card-title font-weight-bolder ">${res.name}</p>
                <p class="font-weight-light p-0 m-0">Population: <span class="card-text ">${res.population}</span></p>
                <p class="font-weight-light p-0 m-0">Region: <span class="card-text ">${res.region}</span></p>
                <p class="font-weight-light p-0 m-0">Capital: <span class="card-text ">${res.capital}</span></p>
                </div>
              </div>`
                const wDiv = document.createElement("div");
                wDiv.setAttribute("class", "col-12 col-md-3");
                wDiv.innerHTML = temp
                Hresp.appendChild(wDiv)

            }
        })
    }).catch((err) => {
        alert(err)
    })

const SearchF = (event) => {
    let SearchData = [];
    const SearchWord = event.target.value.toLowerCase();
    mainData.map((datas) => {
        // console.log(mainData.length)
        datas.map((data) => {
            // if (indx == 1) {
            //     console.log(data)
            // }
            if ((data.name.toLowerCase()).includes(SearchWord)) {
                SearchData.push(data)
            }
        })

    })
    Hresp.innerHTML = ""
    SearchData.map((res) => {
        const temp = `<div class="card shadow mb-5" style="height:25rem" >
                <img src="${res.flag}" class="card-img-top" alt="${res.name}" >
                <div class="card-body mt-md-5">
                <p class="card-title font-weight-bolder ">${res.name}</p>
                <p class="font-weight-light p-0 m-0">Population: <span class="card-text ">${res.population}</span></p>
                <p class="font-weight-light p-0 m-0">Region: <span class="card-text ">${res.region}</span></p>
                <p class="font-weight-light p-0 m-0">Capital: <span class="card-text ">${res.capital}</span></p>
                </div>
              </div>`
        const wDiv = document.createElement("div");
        wDiv.setAttribute("class", "col-12 col-md-3");
        wDiv.innerHTML = temp
        Hresp.appendChild(wDiv)


    })

    console.log(SearchData.length)

}

const FilAfrica = () => {
    const Countries = [];
    mainData.map((datas) => {
        datas.map((data) => {
            if ((data.region.toLowerCase()) === "africa") {
                Countries.push(data)
            }
        })
    });
    Hresp.innerHTML = ""
    Countries.map((res) => {
        const temp = `<div class="card shadow mb-5" style="height:25rem" >
                <img src="${res.flag}" class="card-img-top" alt="${res.name}" >
                <div class="card-body mt-md-5">
                <p class="card-title font-weight-bolder ">${res.name}</p>
                <p class="font-weight-light p-0 m-0">Population: <span class="card-text ">${res.population}</span></p>
                <p class="font-weight-light p-0 m-0">Region: <span class="card-text ">${res.region}</span></p>
                <p class="font-weight-light p-0 m-0">Capital: <span class="card-text ">${res.capital}</span></p>
                </div>
              </div>`
        const wDiv = document.createElement("div");
        wDiv.setAttribute("class", "col-12 col-md-3");
        wDiv.innerHTML = temp
        Hresp.appendChild(wDiv)
    });
}

const FilAmerica = () => {
    let Countries = [];
    mainData.map((datas) => {
        datas.map((data) => {
            if ((data.region.toLowerCase()) === "america") {
                Countries.push(data)
            }
        })
    });
    Hresp.innerHTML = ""
    Countries.map((res) => {
        const temp = `<div class="card shadow mb-5" style="height:25rem" >
                <img src="${res.flag}" class="card-img-top" alt="${res.name}" >
                <div class="card-body mt-md-5">
                <p class="card-title font-weight-bolder ">${res.name}</p>
                <p class="font-weight-light p-0 m-0">Population: <span class="card-text ">${res.population}</span></p>
                <p class="font-weight-light p-0 m-0">Region: <span class="card-text ">${res.region}</span></p>
                <p class="font-weight-light p-0 m-0">Capital: <span class="card-text ">${res.capital}</span></p>
                </div>
              </div>`
        const wDiv = document.createElement("div");
        wDiv.setAttribute("class", "col-12 col-md-3");
        wDiv.innerHTML = temp
        Hresp.appendChild(wDiv)
    });
}

const FilEurope = () => {
    let Countries = [];
    mainData.map((datas) => {
        datas.map((data) => {
            if ((data.region.toLowerCase()) === "europe") {
                Countries.push(data)
            }
        })
    });
    Hresp.innerHTML = ""
    Countries.map((res) => {
        const temp = `<div class="card shadow mb-5" style="height:25rem" >
                <img src="${res.flag}" class="card-img-top" alt="${res.name}" >
                <div class="card-body mt-md-5">
                <p class="card-title font-weight-bolder ">${res.name}</p>
                <p class="font-weight-light p-0 m-0">Population: <span class="card-text ">${res.population}</span></p>
                <p class="font-weight-light p-0 m-0">Region: <span class="card-text ">${res.region}</span></p>
                <p class="font-weight-light p-0 m-0">Capital: <span class="card-text ">${res.capital}</span></p>
                </div>
              </div>`
        const wDiv = document.createElement("div");
        wDiv.setAttribute("class", "col-12 col-md-3");
        wDiv.innerHTML = temp
        Hresp.appendChild(wDiv)
    });
}

const FilOceania = () => {
    let Countries = [];
    mainData.map((datas) => {
        datas.map((data) => {
            if ((data.region.toLowerCase()) === "oceania") {
                Countries.push(data)
            }
        })
    });
    Hresp.innerHTML = ""
    Countries.map((res) => {
        const temp = `<div class="card shadow mb-5" style="height:25rem" >
                <img src="${res.flag}" class="card-img-top" alt="${res.name}" >
                <div class="card-body mt-md-5">
                <p class="card-title font-weight-bolder ">${res.name}</p>
                <p class="font-weight-light p-0 m-0">Population: <span class="card-text ">${res.population}</span></p>
                <p class="font-weight-light p-0 m-0">Region: <span class="card-text ">${res.region}</span></p>
                <p class="font-weight-light p-0 m-0">Capital: <span class="card-text ">${res.capital}</span></p>
                </div>
              </div>`
        const wDiv = document.createElement("div");
        wDiv.setAttribute("class", "col-12 col-md-3");
        wDiv.innerHTML = temp
        Hresp.appendChild(wDiv)
    });
}



// const gggh = "mic"

// console.log(gggh.includes("mi"))
// console.log(gggh.toLowerCase())