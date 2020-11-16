import seriados from '../Services/dados'

const Lista = () => {

    return (

        <div>
            {seriados.map(seriado =>

                <div key={seriado.id}>
                    <h2>{seriado.nome}</h2>
                    <p>{seriado.sinopse}</p>
                    <img width={300} src={seriado.capa} alt='Capa da Série'/>
                </div>

            )}
        </div>

    )
}

export default Lista