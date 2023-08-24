function Ejercicio1() {
  let a = Number(prompt("Ingrese cateto a"));
  console.log(a);
  let b = Number(prompt("Ingrese cateto b"));

  let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  alert("La hipotenusa es: " + c);
}

function Ejercicio2() {
  let top_base = Number(prompt("Ingrese la base superior"));
  let bottom_base = Number(prompt("Ingrese la base inferior"));
  let height = Number(prompt("Ingrese la altura"));
  let area = ((top_base + bottom_base) / 2) * height;
  alert("El area del trapecio es: " + area);
}

function Ejercicio3() {
  let base_salary = Number(prompt("Ingrese el sueldo base del vendedor:"));
  let sale1 = Number(prompt("Ingrese el monto de la venta 1:"));
  let sale2 = Number(prompt("Ingrese el monto de la venta 2:"));
  let sale3 = Number(prompt("Ingrese el monto de la venta 3:"));

  let commission = (sale1 + sale2 + sale3) * 0.1;
  let total_salary = base_salary + commission;

  alert("La comision es: $" + commission);
  alert("El salario total es: $" + total_salary);
}

function Ejercicio4() {
  let hours = Number(
    prompt("Ingrese las horas que estuvo en el estacionamiento")
  );
  let total = hours * 1;
  alert("El total a pagar es: $" + total);
}

function Ejercicio5() {
  let megabytes = Number(prompt("Ingrese la cantidad de MegaBytes"));
  let gigabytes = megabytes / 1024;
  alert("La cantidad de Gigabytes es: " + gigabytes);
}

function Ejercicio6() {
  let total = 0;
  for (let i = 1; i <= 10; i++) {
    let score = Number(prompt("Ingrese la calificacion del alumno " + i));
    total += score;
  }
  let average = total / 10;
  alert("El promedio de calificaciones es: " + average);
}

function Ejercicio7() {
  let total = 1;
  for (let i = 1; i <= 4; i++) {
    let number = Number(prompt("Ingrese el numero " + i));
    total = total * number;
  }
  alert("El producto de los numeros es: " + total);
}

function Ejercicio8() {
  let a = Number(prompt("Ingrese el primer numero"));
  let b = Number(prompt("Ingrese el segundo numero"));
  let c = Number(prompt("Ingrese el tercer numero"));
  let highest = Math.max(a, b, c);
  alert("El numero mas alto es: " + highest);
}

function Ejercicio9() {
  let month = Number(prompt("Ingrese el numero del mes"));
  switch (month) {
    case 1:
      alert("Enero");
      break;
    case 2:
      alert("Febrero");
      break;
    case 3:
      alert("Marzo");
      break;
    case 4:
      alert("Abril");
      break;
    case 5:
      alert("Mayo");
      break;
    case 6:
      alert("Junio");
      break;
    case 7:
      alert("Julio");
      break;
    case 8:
      alert("Agosto");
      break;
    case 9:
      alert("Septiembre");
      break;
    case 10:
      alert("Octubre");
      break;
    case 11:
      alert("Noviembre");
      break;
    case 12:
      alert("Diciembre");
      break;
    default:
      alert("Numero invalido");
      break;
  }
}

function Ejercicio10() {
  let age = Number(prompt("Ingrese su edad"));
  if (age >= 0 && age <= 12) {
    alert("Niño");
  } else if (age > 12 && age < 18) {
    alert("Adolescente");
  } else if (age >= 18 && age < 60) {
    alert("Adulto");
  } else if (age >= 60 && age <= 110) {
    alert("Tercera edad");
  } else {
    alert("Edad invalida");
  }
}

function Ejercicio11() {
  let score = Number(prompt("Ingrese la calificacion"));
  if (score >= 0 && score <= 5.9) {
    alert("E");
  } else if (score >= 6 && score <= 6.9) {
    alert("D");
  } else if (score >= 7 && score <= 7.9) {
    alert("C");
  } else if (score >= 8 && score <= 8.9) {
    alert("B");
  } else if (score >= 9 && score <= 10) {
    alert("A");
  } else {
    alert("Calificacion invalida");
  }
}

function Ejercicio12() {
  let price = Number(prompt("Ingrese el precio del libro"));
  let copies = Number(prompt("Ingrese el numero de copias"));
  let total = price * copies;
  if (copies > 3 && copies <= 5) {
    total = total * 0.03;
  } else if (copies > 5 && copies <= 10) {
    total = total * 0.05;
  } else if (copies > 10) {
    total = total * 0.1;
  }
  alert("El total a pagar es: " + total);
}

function Ejercicio13() {
  let amount = Number(prompt("Ingrese el monto de la compra"));
  let discount = 0;
  if (amount >= 500.01 && amount <= 1000) {
    discount = 0.05;
  } else if (amount >= 1000.01 && amount <= 7000) {
    discount = 0.11;
  } else if (amount >= 7000.01 && amount <= 15000) {
    discount = 0.18;
  } else if (amount >= 15000.01) {
    discount = 0.25;
  }
  let total = amount - amount * discount;
  alert("El total a pagar es: " + total);
}

function Ejercicio14() {
  let angle = Number(prompt("Ingrese el angulo"));
  if (angle >= 0 && angle < 90) {
    alert("El Angulo es Agudo");
  } else if (angle == 90) {
    alert("El Angulo es Recto");
  } else if (angle > 90 && angle < 180) {
    alert("El Angulo es Obtuso");
  } else if (angle == 180) {
    alert("El Angulo es Llano");
  } else {
    alert("Angulo invalido");
  }
}

function Ejercicio15() {
  let hours = Number(prompt("Ingrese las horas que trabajo"));
  let pay = Number(prompt("Ingrese cuanto le pagan por hora"));
  let total = hours * pay;
  if (hours > 40) {
    total = total - total * 0.0945;
  } else if (hours < 40) {
    total = total - total * 0.15;
  }
  alert("El total a pagar es: " + total);
}

function Ejercicio16() {
  let total = 0;
  for (let i = 1; i <= 10; i++) {
    let score = Number(prompt("Ingrese la calificacion del alumno " + i));
    total += score;
  }
  let average = total / 10;
  alert("El promedio de calificaciones es: " + average);
}

function Ejercicio17() {
  let number = Number(prompt("Ingrese el numero"));
  let total = 1;
  for (let i = 1; i <= number; i++) {
    total = total * i;
  }
  alert("El factorial del numero es: " + total);
}

function Ejercicio18() {
  let numbers = [];
  for (let i = 1; i <= 20; i++) {
    let number = Number(prompt("Ingrese el numero " + i));
    numbers.push(number);
  }
  let highest = Math.max(...numbers);
  let lowest = Math.min(...numbers);
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  let average = total / numbers.length;
  alert(
    "El numero mas alto es: " +
      highest +
      "\nEl numero mas bajo es: " +
      lowest +
      "\nEl promedio es: " +
      average +
      "\nLos numeros son: " +
      numbers
  );
}

function Ejercicio19() {
  let numbers = [];
  for (let i = 1; i <= 10; i++) {
    let number = Number(prompt("Ingrese el numero " + i));
    numbers.push(number);
  }
  let total = 0;
  total = numbers.reduce((accumulator, current) => accumulator + current);
  alert("La suma de los numeros es: " + total);
}

function Ejercicio20() {
  let numbers = [];
  let i = 0;
  while (i < 5) {
    let number = Number(prompt("Ingrese el numero " + (i + 1)));
    if (number % 2 == 0) {
      numbers.push(number);
      i++;
    }
  }
  alert("Los numeros son: " + numbers);
}
