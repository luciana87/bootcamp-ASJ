package practicaPOO4;

import java.util.Random;

public class Persona {
	//nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura. 
	private String nombre;
	private int edad;
	private String dni;
	private char sexo;
	private double peso;
	private double altura;
	

	public Persona(String dni) {
		this.dni = dni;
		this.sexo = 'H';
	}


	public Persona(String nombre, int edad, char sexo) {
		super();
		this.nombre = nombre;
		this.dni = generaDNI();
		this.edad = edad;
		this.sexo = this.comprobarSexo(sexo);
	}


	public Persona(String nombre, int edad, char sexo, double peso, double altura) {
		super();
		this.nombre = nombre;
		this.edad = edad;
		this.dni = generaDNI();
		this.sexo = this.comprobarSexo(sexo);
		this.peso = peso;
		this.altura = altura;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public int getEdad() {
		return edad;
	}


	public void setEdad(int edad) {
		this.edad = edad;
	}


	public String getDni() {
		return dni;
	}


	public void setDni(String dni) {
		this.dni = dni;
	}


	public char getSexo() {
		return sexo;
	}


	public void setSexo(char sexo) {
		this.sexo = sexo;
	}


	public double getPeso() {
		return peso;
	}


	public void setPeso(double peso) {
		this.peso = peso;
	}


	public double getAltura() {
		return altura;
	}


	public void setAltura(double altura) {
		this.altura = altura;
	}
	
	
	@Override
	public String toString() {
		return "Persona --> Nombre: " + nombre + ", edad: " + edad + " años" + ", dni: "
				+ dni + ", sexo: " + sexo + ", peso: " + peso + "kg"
				+ ", altura: " + altura + "m.";
	}


	public void calcularIMC () {
		if (altura != 0 || peso != 0) {
			
			double imc = peso / (altura * altura);

	        if (imc < 20) {
	        	System.out.println("La persona está por debajo de su peso ideal.");
	        } else if (imc >= 20 && imc <= 25) {
	        	System.out.println("La persona está en su peso ideal.");
	        } else {
	        	System.out.println("La persona tiene sobrepeso.");
	        }
		} else {
			System.out.println("Peso y altura no encontrados. No se pudo ejecutar el calculo.");
		}

    }	
	

	public boolean esMayorDeEdad() {
		return (edad >= 18);		
	}
	
	private char comprobarSexo (char sexo) {
		
		sexo = Character.toUpperCase(sexo);
		
		if (sexo != 'H' && sexo != 'F') {
           sexo = 'H';
        } 
		return sexo;
	}


	 private String generaDNI() {
	        Random random = new Random();
	        int dniAleatorio = random.nextInt(9000000);
	        return String.valueOf(dniAleatorio);
	    }
}
