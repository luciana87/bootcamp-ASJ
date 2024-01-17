package practicaPOO4;

public class ejercicio4 {

	public static void main(String[] args) {
		
		Persona persona1 = new Persona("33113777");
		persona1.setNombre("José");
		persona1.setEdad(44);
		persona1.setPeso(40);
		persona1.setAltura(1.79);
		
		Persona persona2 = new Persona("Emanuel", 39, 'M');
		Persona persona3 = new Persona("Valentino", 10, 'M', 40, 1.35);
		Persona persona4 = new Persona("María", 20, 'P', 80, 1.30);
		

		
		persona1.calcularIMC();
		persona2.calcularIMC();
		persona3.calcularIMC();
		persona4.calcularIMC();
		
		System.out.println("\n");
		
		if (persona1.esMayorDeEdad()) {
			System.out.println(persona1.getNombre() + ", es mayor de edad.");
		} else {
			System.out.println(persona1.getNombre() + ", es menor de edad.");
		}
		
		if (persona2.esMayorDeEdad()) {
			System.out.println(persona2.getNombre() + ", es mayor de edad.");
		} else {
			System.out.println(persona2.getNombre() + ", es menor de edad.");
		}
		
		if (persona3.esMayorDeEdad()) {
			System.out.println(persona3.getNombre() + ", es mayor de edad.");
		} else {
			System.out.println(persona3.getNombre() + ", es menor de edad.");
		}
		
		
		System.out.println("\n");
		
		System.out.println(persona1.toString());
		System.out.println(persona2.toString());
		System.out.println(persona3.toString());
		System.out.println(persona4.toString());	
		
		System.out.println("\n");
		
		persona4.comprobarSexo(); //Modifica el sexo que era P y lo define como H.
		System.out.println(persona4.toString());

	}

}
