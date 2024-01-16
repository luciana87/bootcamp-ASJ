import java.util.Scanner;

public class MiClase {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
/*		
		System.out.println("Hola mundo!");
		byte miByte = 12;
		int entero = 40;
		int entero2 = 3;
		double dec = 10.5;
		
		System.out.println(entero/entero2);
		
*/	
		
//		System.out.println("Byte: " + Byte.MAX_VALUE + " " + Byte.MIN_VALUE);
//		System.out.println("short: Min = " + Short.MIN_VALUE + " - Max = " + Short.MAX_VALUE);
//		System.out.println("int: Min =" + Integer.MIN_VALUE + " - Max= " + Integer.MAX_VALUE);
//		System.out.println("long: Min = " + Long.MIN_VALUE + " - Max = " + Long.MAX_VALUE);
//		System.out.println("float: Min = " + Float.MIN_VALUE + " - Max = " + Float.MAX_VALUE);
//		System.out.println("double: Min = " + Double.MIN_VALUE + " - Max = " + Double.MAX_VALUE);
//		System.out.println("char: Min = " + (int) Character.MIN_VALUE + " - Max = " + (int) Character.MAX_VALUE);

		//		ctrl + / ---> para comentar
/*		
		System.out.println( (int) miByte);
*/		
		//---------------------------------------------------
		
		//Dada una palabra ingresada por teclado por el usuario mostrar su equivalente en ascii letra por letra y agregar los espacios en blanco.
		
/*		System.out.print("Ingrese una palabra: ");
		String palabra = scanner.nextLine();
		char letra;

		System.out.print("Código ascii de la palabra '" + palabra + "' : ");
        for (int i = 0; i < palabra.length(); i++) {
          letra = palabra.charAt(i);

            System.out.print((int) letra);

            if (i < palabra.length() - 1) {
                System.out.print(" ");
            }
       }
*/ 
//--------------------------------------------------------------------------------------
		
//Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se determine si el triángulo es válido o no.
/*		
	    System.out.print("Ingrese el primer ángulo: ");
	    int angulo1 = scanner.nextInt();
	
	    System.out.print("Ingrese el segundo ángulo: ");
	    int angulo2 = scanner.nextInt();
	
	    System.out.print("Ingrese el tercer ángulo: ");
	    int angulo3 = scanner.nextInt();
	
	
	    if (esTrianguloValido(angulo1, angulo2, angulo3)) {
	        System.out.println("Los ángulos ingresados forman un triángulo válido.");
	    } else {
	        System.out.println("Los ángulos ingresados no forman un triángulo válido.");
	    }
	    
	    
*/	  
		
		//--------------------------------------------------------------------------------------------
		
// Crear un programa que determine si un string introducido por un usuario empieza con un número o con una letra.
/*		
        System.out.print("Ingrese un string: ");
        String input = scanner.nextLine();

        if (comienzaConNumero(input)) {
            System.out.println("El string comienza con un número.");
        } else {
            System.out.println("El string comienza con una letra.");
        }
*/
		
//--------------------------------------------------------------------------------------------
		
		
//Realizar la suma de todos los números pares entre N y M donde N y M los ingresa un usuario.
/*		
		System.out.print("Ingrese el valor de N: ");
        int n = scanner.nextInt();

        System.out.print("Ingrese el valor de M: ");
        int m = scanner.nextInt();


        if (n <= m) {
            int sumaPares = 0;
            for (int i = n; i <= m; i++) {
                if (i % 2 == 0) {
                    sumaPares += i;
                }
            }

            System.out.println("La suma de los números pares entre " + n + " y " + m + " es: " + sumaPares);
        } else {
            System.out.println("N debe ser menor o igual a M. Intente nuevamente.");
        }
*/        
      //--------------------------------------------------------------------------------------------  
		
//Crear un programa que determine si un número es perfecto o no, (se dice que un número es perfecto si el número es igual a 
//la suma de sus divisores positivos, excluido él mismo., Ejemplos 6 = 1 + 2 + 3)		
		
/*		System.out.print("Ingrese un número: ");
        int numero = scanner.nextInt();


        if (esNumeroPerfecto(numero)) {
            System.out.println(numero + " es un número perfecto.");
        } else {
            System.out.println(numero + " no es un número perfecto.");
        }
*/        
//--------------------------------------------------------------------------------------------
//Cuadrado de *:
		
      System.out.println("Ingrese un numero"); 
      int numero = scanner.nextInt();
		  
	  for (int i = 0; i < numero; i++) { 
		  int cantidadAsteriscos = (i % 2 == 0) ? numero : numero - 1; 
		  for (int k = 0; k < cantidadAsteriscos; k++) { 
			  if(cantidadAsteriscos < numero && k == 0) { 
				  System.out.print("  * "); 
				  } else System.out.print(" * "); } 
		  System.out.println(); 
		  }
        
	}

    private static boolean esTrianguloValido(int angulo1, int angulo2, int angulo3) {
        return (angulo1 + angulo2 + angulo3) == 180;	    		
	 }
    
    private static boolean comienzaConNumero(String str) {
        char primerCaracter = str.charAt(0);
        return primerCaracter >= '0' && primerCaracter <= '9';
    }
    
    private static boolean esNumeroPerfecto(int numero) {
        if (numero <= 0) {
            return false; // Los números negativos y cero no son perfectos
        }

        int sumaDivisores = 0;
        for (int i = 1; i <= numero / 2; i++) {
            if (numero % i == 0) {
                sumaDivisores += i;
            }
        }

        return sumaDivisores == numero;
    }
}
