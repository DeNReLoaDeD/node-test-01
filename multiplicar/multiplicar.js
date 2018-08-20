const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    if (!Number(base)) {
        reject("No es un numero");
        return;
    }

    let data = '';

    for (let i = 1; i <= 10; i++) {
        if (base * i > limite) {
            break;
        }
        data += base + " * " + i + " = " + base * i + "\n";
    }
    console.log(data.green);
}

let crearArchivo = (base) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject("No es un numero");
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {
            data += base + " * " + i + " = " + base * i + "\n";
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablas/tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}