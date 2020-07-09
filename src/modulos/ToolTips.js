
import Tips from "dynamics-tips/src/modulos/ToolTips"

(function(){


    const inicializar = () => {
       Tips.iniciar()
    }

    var ToolTips = {
        iniciar: () => {
            inicializar()
        },
        destroy: () => Tisp.destroy()
    }

    window.ToolTips = ToolTips;
})()

export default ToolTips;