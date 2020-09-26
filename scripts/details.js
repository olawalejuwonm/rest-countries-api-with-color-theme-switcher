const conD = document.getElementById("cond");
let SavedData = ""
const SearchParams = document.location.search.split('');
SearchParams.map((param) => {
    if (param !== "?") {
        SavedData = SavedData + param
    }
})
fetch(`https://restcountries.eu/rest/v2/name/${SavedData}?fullText=true`)
    .then((resp) => {
        return resp.json()
    })
    .then((response) => {
        // console.log(response)
        // console.log(`https://restcountries.eu/rest/v2/name/${SavedData}?fullText=true`)
        const res = response[0];
        let langs = [];
        res.languages.map((lang) => {
            langs.push(lang.name);
        })
        const temp = `
        <div class="col-12 col-md-5">
        <img class="img-fluid shadow" src="${res.flag}" alt="${res.name}" />
    </div>
    <div class="col-12 col-md-6 ml-md-5">
        <div class="row">
            <div class="col-md-6">
                <div class="h2 mt-5 mb-4 font-weight-bolder mt-md-2">${res.name}</div>
                <p class="text-dark font-weight-bold">Native Name: <span
                        class="font-weight-light">${res.nativeName}</span></p>
                <p class="text-dark font-weight-bold">Population: <span
                        class="font-weight-light">${res.population}</span></p>
                <p class="text-dark font-weight-bold">Region: <span
                        class="font-weight-light">${res.region}</span></p>
                <p class="text-dark font-weight-bold">Sub Region: <span
                        class="font-weight-light">${res.subregion}</span></p>
                <p class="text-dark font-weight-bold mb-5">Capital: <span
                        class="font-weight-light">${res.capital}</span></p>
            </div>

            <div class="col-md-6 mt-md-5 ">
                <div class="w-100 mt-3 d-none d-md-block"></div>
                <p class="text-dark font-weight-bold">Top Level Domain: <span
                        class="font-weight-light">${res.topLevelDomain[0]}</span></p>
                <p class="text-dark font-weight-bold">Currencies: <span
                        class="font-weight-light">${res.currencies[0].name}</span></p>
                <p class="text-dark font-weight-bold mb-5">Languages: <span
                        class="font-weight-light">${langs.toString()}</span></p>
            </div>
            <div class="row">
                <p class="h6 ml-3 ml-md-4 mt-md-1">Border Countries:</p>
                <div class="w-100 mb-1 d-md-none"></div>
                <div class="card shadow col-3  ml-3 mr-3  col-md-auto">${res.borders[0] ? res.borders[0] :
                    "None"}</div>
                <div class="card shadow col-3 mr-3  col-md-auto">${res.borders[1] ? res.borders[1] : "None"}
                </div>
                <div class="card shadow col-3 mr-3  col-md-auto">${res.borders[2] ? res.borders[2] : "None"}
                </div>
            </div>
        </div>
    </div>
        `
        const wDiv = document.createElement("div");
        wDiv.setAttribute("class", "d-block d-md-flex");
        wDiv.innerHTML = temp;
        document.getElementById("load").classList.add("d-none")
        conD.appendChild(wDiv);
    })

    const ToggleColor = () => {
        // alert("toggle")
        document.body.classList.add("bg-secondary");
    }