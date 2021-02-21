const fs = require('fs');
const color = require('colors')

const  crearArchivo =async( base= 5 , listar=false , hasta=10)=>{

    try {
      
    
        let salida=``;
        let consola=``;

        for (let i = 1; i <= hasta; i++) {
        
            salida+=`${base} x ${ i } = ${ base * i } \n`;
            consola+=`${base} x ${ i } = ${ base * i } \n`.rainbow;
        }
        if (listar){
            console.log(`========================================`.rainbow);
            console.log('Tabla del:', base );
            console.log(`========================================`.rainbow);
            console.log(consola);
        }


        fs.writeFileSync(`./salida/tabla-${ base }.txt`,salida);
        
        return `tabla-${ base }.txt`.underline.red;
    } catch (err) {
        console.log(err)
    }
    

}
 
module.exports={
   crearArchivo

}

