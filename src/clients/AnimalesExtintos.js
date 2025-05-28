import axios from "axios";

const consultarAnimalesExtintos = async () => {
    const respuesta =  axios.get('https://extinct-api.herokuapp.com/api/v1/animal/').then(respuesta => respuesta.data);
    console.log();
    return respuesta;
}

export const consultarAnimalesExtintosFachada = async () =>{
    return await consultarAnimalesExtintos();
}   