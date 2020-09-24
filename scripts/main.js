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
                const temp = `<div class="card shadow mb-5"    >
                <img src="${res.flag}" class="card-img-top" alt="${res.name}" style="height:10rem">
                <div class="card-body mt-md-4 text-wrap">
                <p class="card-title font-weight-bolder">${res.name}</p>
                <p class="font-weight-light p-0 m-0">Population: <span class="card-text ">${res.population}</span></p>
                <p class="font-weight-light p-0 m-0">Region: <span class="card-text ">${res.region}</span></p>
                <p class="font-weight-light p-0 m-0">Capital: <span class="card-text ">${res.capital}</span></p>
                <button class="btn btn-info offset-4 offset-md-3" data="${res.name}" onclick="ClickCountry(event)">Details</button>
                </div>
              </div>`
                const wDiv = document.createElement("div");
                wDiv.setAttribute("class", "col-12 col-md-3");
                wDiv.innerHTML = temp;
                Hresp.appendChild(wDiv)

            }
        })
    }).catch((err) => {
        Hresp.innerText = err;
        // alert(err);
    });



const SearchF = (event) => {
    // event.stopPropagation();
    // alert(event.cancelable);
    // event.preventDefault();
    if (event.keyCode == 13) {
        // console.log("enter pressed")
        event.preventDefault();
        return null;
    }
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
        const temp = `<div class="card shadow mb-5"    >
                <img src="${res.flag}" class="card-img-top" alt="${res.name}" style="height:10rem">
                <div class="card-body mt-md-4 text-wrap">
                <p class="card-title font-weight-bolder">${res.name}</p>
                <p class="font-weight-light p-0 m-0">Population: <span class="card-text ">${res.population}</span></p>
                <p class="font-weight-light p-0 m-0">Region: <span class="card-text ">${res.region}</span></p>
                <p class="font-weight-light p-0 m-0">Capital: <span class="card-text ">${res.capital}</span></p>
                <button class="btn btn-info offset-4 offset-md-3" data="${res.name}" onclick="ClickCountry(event)">Details</button>
                </div>
              </div>`
        const wDiv = document.createElement("div");
        wDiv.setAttribute("class", "col-12 col-md-3");
        wDiv.innerHTML = temp
        Hresp.appendChild(wDiv)


    })

    // console.log(SearchData.length)

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
        const temp = `<div class="card shadow mb-5"    >
                <img src="${res.flag}" class="card-img-top" alt="${res.name}" style="height:10rem">
                <div class="card-body mt-md-4 text-wrap">
                <p class="card-title font-weight-bolder">${res.name}</p>
                <p class="font-weight-light p-0 m-0">Population: <span class="card-text ">${res.population}</span></p>
                <p class="font-weight-light p-0 m-0">Region: <span class="card-text ">${res.region}</span></p>
                <p class="font-weight-light p-0 m-0">Capital: <span class="card-text ">${res.capital}</span></p>
                <button class="btn btn-info offset-4 offset-md-3" data="${res.name}" onclick="ClickCountry(event)">Details</button>
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
            if ((data.region.toLowerCase()) === "americas") {
                Countries.push(data)
            }
        })
    });
    Hresp.innerHTML = ""
    Countries.map((res) => {
        const temp = `<div class="card shadow mb-5"    >
                <img src="${res.flag}" class="card-img-top" alt="${res.name}" style="height:10rem">
                <div class="card-body mt-md-4 text-wrap">
                <p class="card-title font-weight-bolder">${res.name}</p>
                <p class="font-weight-light p-0 m-0">Population: <span class="card-text ">${res.population}</span></p>
                <p class="font-weight-light p-0 m-0">Region: <span class="card-text ">${res.region}</span></p>
                <p class="font-weight-light p-0 m-0">Capital: <span class="card-text ">${res.capital}</span></p>
                <button class="btn btn-info offset-4 offset-md-3" data="${res.name}" onclick="ClickCountry(event)">Details</button>
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
        const temp = `<div class="card shadow mb-5"    >
                <img src="${res.flag}" class="card-img-top" alt="${res.name}" style="height:10rem">
                <div class="card-body mt-md-4 text-wrap">
                <p class="card-title font-weight-bolder">${res.name}</p>
                <p class="font-weight-light p-0 m-0">Population: <span class="card-text ">${res.population}</span></p>
                <p class="font-weight-light p-0 m-0">Region: <span class="card-text ">${res.region}</span></p>
                <p class="font-weight-light p-0 m-0">Capital: <span class="card-text ">${res.capital}</span></p>
                <button class="btn btn-info offset-4 offset-md-3" data="${res.name}" onclick="ClickCountry(event)">Details</button>
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
        const temp = `<div class="card shadow mb-5"    >
                <img src="${res.flag}" class="card-img-top" alt="${res.name}" style="height:10rem">
                <div class="card-body mt-md-4 text-wrap">
                <p class="card-title font-weight-bolder">${res.name}</p>
                <p class="font-weight-light p-0 m-0">Population: <span class="card-text ">${res.population}</span></p>
                <p class="font-weight-light p-0 m-0">Region: <span class="card-text ">${res.region}</span></p>
                <p class="font-weight-light p-0 m-0">Capital: <span class="card-text ">${res.capital}</span></p>
                <button class="btn btn-info offset-4 offset-md-3" data="${res.name}" onclick="ClickCountry(event)">Details</button>
                </div>
              </div>`
        const wDiv = document.createElement("div");
        wDiv.setAttribute("class", "col-12 col-md-3");
        wDiv.innerHTML = temp
        Hresp.appendChild(wDiv)
    });
}

const FilAsia = () => {
    let Countries = [];
    mainData.map((datas) => {
        datas.map((data) => {
            if ((data.region.toLowerCase()) === "asia") {
                Countries.push(data)
            }
        })
    });
    Hresp.innerHTML = ""
    Countries.map((res) => {
        const temp = `<div class="card shadow mb-5"    >
                <img src="${res.flag}" class="card-img-top" alt="${res.name}" style="height:10rem">
                <div class="card-body mt-md-4 text-wrap">
                <p class="card-title font-weight-bolder">${res.name}</p>
                <p class="font-weight-light p-0 m-0">Population: <span class="card-text ">${res.population}</span></p>
                <p class="font-weight-light p-0 m-0">Region: <span class="card-text ">${res.region}</span></p>
                <p class="font-weight-light p-0 m-0">Capital: <span class="card-text ">${res.capital}</span></p>
                <button class="btn btn-info offset-4 offset-md-3" data="${res.name}" onclick="ClickCountry(event)">Details</button>
                </div>
              </div>`
        const wDiv = document.createElement("div");
        wDiv.setAttribute("class", "col-12 col-md-3");
        wDiv.innerHTML = temp;
        Hresp.appendChild(wDiv);
    });   
}

const ClickCountry = (event) => {
    // console.log(Object.keys(event.target)
    console.log(event.target.getAttribute("data"))
}

// const gggh = "mic"

// console.log(gggh.includes("mi"))
// console.log(gggh.toLowerCase())