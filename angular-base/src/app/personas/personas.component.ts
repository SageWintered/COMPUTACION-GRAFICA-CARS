import { Component } from "@angular/core";

@Component({

    selector: "personas-app",
    templateUrl: './personas.component.html',
    styleUrl: './personas.component.css'


})

export class MiComponentePersona{
    public mensaje="mi mensaje";
    public otroMensaje = "segundo mensaje"

    //Esta es la lógica del componente
}