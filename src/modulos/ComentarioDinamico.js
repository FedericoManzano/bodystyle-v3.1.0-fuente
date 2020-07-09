import Comentarios from "dynamics-tips/src/modulos/ComentariosDinamicos"

(function(){
    const inicializar = () => {
        Comentarios.iniciar()
    }

    const ComentarioDinamico = {
        iniciar: () => inicializar(),
        destroy: () => Comentarios.destroy()
    }

    window.ComentarioDinamico = ComentarioDinamico
})()

export default ComentarioDinamico