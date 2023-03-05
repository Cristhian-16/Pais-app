import '../css/Item-Pais.css'

export const ItemPais = ({ cca3, capital, img, poblacion, region, idioma }) => {
    return (
        <div className='div-item'>
            <img src={img} alt={cca3} width='100px' />
            <p>Capital : <strong>{capital}</strong></p>
            <p>Poblacion : <strong>{(poblacion / 1000000).toFixed(2)} M</strong></p>
            <p>Region : <strong>{region}</strong></p>
            <p>Idioma : <strong>{idioma}</strong></p>
        </div>
    )
}
