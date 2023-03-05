
export const getPais = async (country) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`)
    const data = await res.json();


    const dataPais = data.map(pais => ({
        ccn3: Number(pais.ccn3),
        cca3: pais.cca3,
        capital: pais.capital,
        img: pais.flags.png,
        poblacion: Math.trunc(pais.population),
        region: pais.subregion,
        idioma: pais.languages.spa,
    }))
    return dataPais
}