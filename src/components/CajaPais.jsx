
import { usePais } from "../hook/usePais"
import { ItemPais } from "./ItemPais"
import '../css/Article-Pais.css'

export const CajaPais = ({ pais }) => {

    const { country } = usePais(pais);

    return (
        <article className="caja">
            <h1>{pais.toUpperCase()}</h1>
            {
                country.map(ps => (
                    <ItemPais
                        key={ps.ccn3}
                        {...ps}
                    />
                ))
            }
        </article>
    )
}
