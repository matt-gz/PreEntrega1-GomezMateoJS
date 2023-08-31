function juegoGranja() {
    const opciones = ["Maiz", "Trigo", "Zanahoria", "Pera"];

    const nombreDeGranjero = prompt("Hola granjero! Antes de empezar a cultivar necesito tu nombre");
    alert("Hola " + nombreDeGranjero + "! Bienvenido a VillaFarmeo, en esta experiencia vas a encarnar a un granjero local!");

    alert("Vas a empezar con un total de $100 para poder plantar, estos son los precios:\n1)Maiz = $10\n2)Trigo = $20\n3)Zanahoria = $30\n4)Pera = $40");

    let dinero = 100;
    do {
        let cultivo = Number(prompt(nombreDeGranjero + " elige una de estas opciones para realizar tu primer cultivo! Elige según el número\n1)Maiz\n2)Trigo\n3)Zanahoria\n4)Pera"));

        if (dinero - cultivo < 0) {
            alert("Ya no tienes presupuesto");
            continue;
        }

        if (cultivo >= 1 && cultivo <= 4) {
            let costo = [0, 10, 20, 30, 40][cultivo];
            alert("Elegiste " + opciones[cultivo - 1] + " que cuesta " + costo + "! Lo descontaremos de tu presupuesto");
            dinero -= costo;
            alert("Este es tu dinero ahora: " + dinero);
        } else {
            alert("Opción inválida. Elige un número entre 1 y 4.");
        }

    } while (dinero > 0);

    alert("¡Tu presupuesto se ha agotado! Gracias por jugar.");
}


juegoGranja();


