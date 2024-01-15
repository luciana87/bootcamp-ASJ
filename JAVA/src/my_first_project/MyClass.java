package my_first_project;

import java.util.Scanner;


public class MyClass {
	public static void main(String[] args) {
		System.out.println("Hola mundo");
		/*
		//tipos de datos
		
		int edad = 10;
		char letra = 'L';
		//double num1 = 123.4;
		boolean estado = false;
		String nombre = "Luciana";
		float precio = 99.9f;
		
		//System.out.println(edad + " " + letra + " " + num1 + " " + estado + " " + nombre + " " +precio);
		
		if (edad > 18) {
			System.out.println("Es mayor de edad");
		} else {
			System.out.println("Es menor de edad");
		}
		
		*/
		Scanner scanner = new Scanner(System.in);
		/*
		System.out.println("Ingrese un número");
		int num1 = scanner.nextInt();
		System.out.println("Ingrese un nuevo número");
		int num2 = scanner.nextInt();
		System.out.println("Ingrese un último número");
		int num3 = scanner.nextInt();
		
		System.out.println("Primer nro ingresado: " + num1 + "\n Segundo nro ingresado: " + num2 + "\n Tercer nro ingresado: " + num3 );
		//scanner.close();

		System.out.println("Ingrese un numero entero");
		int numInt = scanner.nextInt();
		System.out.println("Ingrese un numero con decimales");
		double numDouble = scanner.nextDouble();
		System.out.println("Ingrese una oracion");
		scanner.nextLine();
		String phrase = scanner.nextLine();
		
		System.out.println("String : "+phrase+"\nDouble : "+numDouble+"\nInt : "+numInt);
		*/
//-----------------------------------------------------------------------------
		
		System.out.println("Ingrese un numero entero");
		int num = scanner.nextInt();
		
		if (esPositivo(num)) {
			if (num <= 100 && num >= 1) {
				if (num % 2 != 0 || esPar(num) && (num >= 6 && num <= 20)) {
					System.out.println("Weird");
				}
				else {
					System.out.println("Not Weird");
				}
			} else {
				System.out.println("Numero fuera de rango.");
			}
		} else {
			System.out.println("El valor ingresado no es válido.");
		}
				

		//------------------------------------------------------------------------------
		
		System.out.println("Ingrese un número entre 2 y 20");
		int nro = scanner.nextInt();
		if (nro >= 2 && nro <= 20) {
			for (int i = 0; i <= 10; i++) {
				System.out.println(nro + " x " + i + " = " +(nro * i));
			}
		} else {
			System.out.println("El número ingresado está fuera del rango indicado");
		}
		
		
		//------------------------------------------------------------------------------

		System.out.println("Ingrese el número de consultas");
		int q = scanner.nextInt();		
		for (int i = 0; i <q; i++) {
			
			System.out.println("Ingrese el primer numero para la serie");
			int a = scanner.nextInt();
			System.out.println("Ingrese el segundo numero para la serie");
			int b = scanner.nextInt();
			System.out.println("Ingrese el tercer numero para la serie");
			int n = scanner.nextInt();
			
			
			for (int j = 0; j < n; j++) {
				
				a+= Math.pow(2, i)*b;
				System.out.println(a + " ");
				
			}
			
			System.out.println();		
		}		
		
		
	}

	public static boolean esPar(int num) {
		boolean esPar = false;
		if (num % 2 == 0) {
			esPar = true;
		}
		return esPar;
	}
	
	public static boolean esPositivo(int num) {
		boolean esPositivo = false;
		if (num > 0) {
			esPositivo = true;
		}
		return esPositivo;
	}
	

}
