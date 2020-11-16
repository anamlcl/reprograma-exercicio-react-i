const Titulo = (props) => {

    const titulo = props.text
    const tituloMaiusculo = titulo.toUpperCase()
    
    return <h1>{tituloMaiusculo}</h1>
}

export default Titulo