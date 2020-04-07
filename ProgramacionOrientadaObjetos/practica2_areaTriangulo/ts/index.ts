import {Triangulo} from './Triangulo.class';

eventListener();

function eventListener(){


    document.getElementById('btnCalcular')!.addEventListener('click', calcularArea);
}

function calcularArea(){

    const altura:number =  Number((<HTMLInputElement>document.getElementById('altura')).value);
    const base:number =  Number((<HTMLInputElement>document.getElementById('base')).value);

    
    const triangulo = new Triangulo(base, altura);

    console.log(triangulo.area);
}