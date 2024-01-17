import java.util.Random;
import java.util.Scanner;

public class Funciones {
	

   private static Random random = new Random();
   private static Scanner scanner = new Scanner(System.in);

   public static void main(String[] args) {
		
		
/*Ejercicio 2 
Escribe un programa que lea 15 números por teclado y que los almacene en un array. 
Rota los elementos de ese array, es decir, el elemento de la posición 0 debe pasar a la posición 1, 
el de la 1 a la 2, etc. El número que se encuentra en la última posición debe pasar a la posición 0. 
Finalmente, muestra el contenido del array.*/		

		
/*		
        int[] numeros = new int[15];
        int [] numRotados = new int[15];


        leerNumeros(numeros, scanner);
        rotarArreglo(numeros,numRotados);
        System.out.println("\nResultado: \nArreglo original:");
        mostrarArreglo(numeros);
        System.out.println("\Arreglo rotado:");
        mostrarArreglo(numRotados);
*/        
//----------------------------------------------------------------------------------------------------------
      	 
/*Ejercicio 3 
Escribe un programa que genere 20 números enteros aleatorios entre 0 y 100 y que los almacene en un array. 
El programa debe ser capaz de pasar todos los números pares a las primeras posiciones del array (del 0 en adelante) 
y todos los números impares a las celdas restantes. Utiliza arrays auxiliares si es necesario.*/
		
/* 	 
	 int[] numeros = new int[20];
	 
	 cargarArreglo(numeros);
     System.out.println("\nArreglo original:");
	 mostrarArreglo(numeros);
	 int[] resultado = crearArregloOrdenado(numeros);
     System.out.println("\nArreglo resultante:");
	 mostrarArreglo(resultado);
	 
	 
	 
// OTRA FORMA uniendo dos arreglos usando arraycopy:
	 
	 System.out.println("\nOtro arreglo:");

	 
	 int[] arregloPares = new int[3];
	 arregloPares[0] = 4;
	 arregloPares[1] = 2;
	 arregloPares[2] = 10;
	 
	 int[] arregloImp = new int[2];
	 arregloImp[0] = 7;
	 arregloImp[1] = 13;

     int[] aux = new int[arregloPares.length + arregloImp.length];

     
     System.arraycopy(arregloPares, 0, aux, 0, arregloPares.length);
     System.arraycopy(arregloImp, 0, aux, arregloPares.length, arregloImp.length);
     System.arraycopy(arregloImp, 0, aux, arregloPares.length, arregloImp.length);
     
     mostrarArreglo(aux);
     
*/
//--------------------------------------------------------------------------
		
/*Ejercicio 4
Generar una matriz de 3×3 con números aleatorios sin repetirse.*/
/*		
	 int filas = 3;
	 int columnas = 3;
	 int[][] matriz = new int[filas][columnas];
	 
	 llenarMatriz(matriz,filas,columnas);
	 System.out.println("Matriz generada:");
	 mostrarMatriz(matriz, filas, columnas);
*/
//--------------------------------------------------------------------------
/*Ejercicio 5
Dada la matriz anterior, realizar la suma de una columna o fila aleatoria 
(preguntar al usuario que desea sumar, si una fila o una columna, y cual de ellas).
Extra: mostrar el resultado al final de la fila/columna correspondiente*/
/*		
	 boolean salir = false;
	 
	 while (!salir) {
         System.out.println("\nMenú:");
         System.out.println("1. Sumar una fila");
         System.out.println("2. Sumar una columna");
         System.out.println("3. Salir");
         
         System.out.print("Ingrese su elección (1, 2, 3): ");
         int opcion = scanner.nextInt();
         
         switch (opcion) {
         
         case 1:
        	 System.out.print("Seleccione la fila a sumar (0, 1, 2): ");
             int fila = scanner.nextInt();
             int sumaFila = sumarFila(matriz, fila);
             System.out.println("La suma de la fila " + fila + " es: " + sumaFila);
             break;
         case 2:
        	 System.out.print("Seleccione la columna a sumar (0, 1, 2): ");
             int columna = scanner.nextInt();
             int sumaColumna = sumarColumna(matriz, columna);
             System.out.println("La suma de la columna " + columna + " es: " + sumaColumna);
             break;
         case 3:
        	 System.out.println("¡Hasta la próxima!");
             salir = true;
             break;
         default:
             System.out.println("La opción ingresada no es válida. Intente nuevamente.");
         }
	 }
	 
	 
*/	 
	 
//--------------------------------------------------------------------------
	 /*Ejercicio 6
	 Dada la matriz anterior, realizar la suma de una columna o fila aleatoria 
	 (preguntar al usuario que desea sumar, si una fila o una columna, y cual de ellas).
	 Extra: mostrar el resultado al final de la fila/columna correspondiente*/
	 
	 
	 int filas = 4;
	 int columnas = 4;
	 

     int[][] matriz4 = new int[filas][columnas];
     boolean matrizCompleta = false;
     int opcion;
     
     do {
         System.out.println("\nMenú:");
         System.out.println("1. Rellenar la matriz");
         System.out.println("2. Sumar una fila");
         System.out.println("3. Sumar una columna");
         System.out.println("4. Sumar la diagonal principal");
         System.out.println("5. Sumar la diagonal inversa");
         System.out.println("6. Calcular la media de la matriz");
         System.out.println("7. Mostrar matriz");
         System.out.println("8. Salir");

         System.out.print("Ingrese su elección (1-8): ");
         opcion = scanner.nextInt();

         switch (opcion) {
             case 1:
                 llenarMatriz(matriz4, filas, columnas);
                 System.out.println("\nLa matriz se rellenó correctamente: \n");
                 mostrarMatriz(matriz4, filas, columnas);
                 matrizCompleta = true;
                 break;
             case 2:
                 if (matrizCompleta) {
                	 System.out.print("Seleccione la fila a sumar (0, 1, 2, 3): ");
                     int fila = scanner.nextInt();
                     int sumaFila = sumarFila(matriz4, fila);
                     System.out.println("\nLa suma de la fila " + fila + " es: " + sumaFila);
                  
                 } else {
                     System.out.println("¡Se debe rellenar la matriz primero!");
                 }
                 break;
             case 3:
                 if (matrizCompleta) {
                	 System.out.print("Seleccione la columna a sumar (0, 1, 2, 3): ");
                     int columna = scanner.nextInt();
                     int sumaColumna = sumarColumna(matriz4, columna);
                     System.out.println("\nLa suma de la columna " + columna + " es: " + sumaColumna);
                 } else {
                     System.out.println("¡Se debe rellenar la matriz primero!");
                 }
                 break;
             case 4:
                 if (matrizCompleta) {
                     sumarDiagonalPpal(matriz4);
                 } else {
                     System.out.println("¡Se debe rellenar la matriz primero!");
                     //System.out.println(matriz4.length);
                 }
                 break;
             case 5:
                 if (matrizCompleta) {
                	 sumarDiagInversa(matriz4);
                 } else {
                     System.out.println("¡Se debe rellenar la matriz primero!");
                 }
                 break;
             case 6:
                 if (matrizCompleta) {
                	 calcularPromedioTotal(matriz4);
                 } else {
                     System.out.println("¡Se debe rellenar la matriz primero!");
                 }
             case 7:
                 if (matrizCompleta) {
                	 mostrarMatriz(matriz4, filas, columnas);
                 } else {
                     System.out.println("¡Se debe rellenar la matriz primero!");
                 }
                 break;
             case 8:
                 System.out.println("\nCerrando sesión. \n¡Nos vemos!");
                 break;
             default:
                 System.out.println("\nLa opción ingresada no es válida. Intente nuevamente.");
         }
     } while (opcion != 8);

	 
	 
	 
	 
	 
   }
	
	 private static void leerNumeros(int[] arreglo, Scanner scanner) {
	        for (int i = 0; i < arreglo.length; i++) {
	            System.out.print("Ingrese el número en la posición " + i + ": ");
	            arreglo[i] = scanner.nextInt();
	        }
	    }

	 private static void rotarArreglo(int[] arreglo, int[]numRotados) {

	        numRotados[0] = arreglo[arreglo.length - 1];
	        
	        for (int i = arreglo.length - 1; i > 0; i--) {
	        	numRotados[i] = arreglo[i - 1];
	        }

	    }
	 
	 private static void rotarArreglo2(int[] arreglo, int[]numRotados) {

	        numRotados[0] = arreglo[arreglo.length - 1];
			for (int i = 1; i < arreglo.length; i++) {
				numRotados[i] = arreglo[i-1];

			}
	    }

	 private static void mostrarArreglo(int[] arreglo) {
	    	
	        for (int numero : arreglo) {
	            System.out.print(numero + " ");
	        }
	    }
	    
//------------------------------------------------------------------------------------------

	 private static void cargarArreglo (int[] array) {
	        for (int i = 0; i < array.length; i++) {
	            array[i] = random.nextInt(101);
	        }	        
	    }
	  
	 private static int [] crearArregloOrdenado (int[] arreglo) {
	        int[] aux = new int[arreglo.length];
	        int iPar = 0;
	        int iImpar = arreglo.length - 1;

	        for (int numero : arreglo) {
	            if (numero % 2 == 0) {
	            	aux[iPar++] = numero;
	            } else {
	            	aux[iImpar--] = numero;
	            }
	        }
	        return aux;
	 
	  }

//------------------------------------------------------------------------------------------
	  
	private static void mostrarMatriz (int[][] matriz, int filas, int columnas) {
        for (int i = 0; i < filas; i++) {
            for (int j = 0; j < columnas; j++) {
                System.out.print(matriz[i][j] + " ");
            }
            System.out.println();
        }
	}
	  
    private static boolean buscarNumeroEnMatriz(int[][] matriz, int num) {
    	
        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                if (matriz[i][j] == num) {
                    return true; // El número ya está en la matriz
                }
            }
        }
        return false; // El número no está en la matriz
    }
    
    private static void llenarMatriz (int[][] matriz, int filas, int columnas) {
    	int numRandom;
    	for (int i = 0; i < filas; i++) {
            for (int j = 0; j < columnas; j++) {            

	            do {
	            	numRandom = random.nextInt(10 * 5);
	            } while (buscarNumeroEnMatriz(matriz, numRandom));
	            
	            matriz[i][j] = numRandom;
	        }
    	}
    } 

//------------------------------------------------------------------------------------------    
    
    private static int sumarFila(int[][] matriz, int fila) {
        int suma = 0;
        for (int i = 0; i < matriz[fila].length; i++) {
            suma += matriz[fila][i];
        }
        return suma;
    }
    
    private static int sumarColumna(int[][] matriz, int columna) {
        int suma = 0;
        for (int i = 0; i < matriz.length; i++) {
            suma += matriz[i][columna];
        }
        return suma;
    }
    
//------------------------------------------------------------------------------------------
    
    private static void sumarDiagonalPpal(int[][] matriz) {
        int sumaDiagonalPpal = 0;
        for (int i = 0; i < matriz.length; i++) {
        	sumaDiagonalPpal += matriz[i][i];
        }

        System.out.println("La suma de la diagonal principal es: " + sumaDiagonalPpal);
    }

    private static void sumarDiagInversa(int[][] matriz) {
    	
        int sumaDiagInversa = 0;
        
        for (int i = 0; i < matriz.length; i++) {
        	sumaDiagInversa += matriz[i][matriz.length - 1 - i];
        }

        System.out.println("La suma de la diagonal inversa es: " + sumaDiagInversa);
    }

    private static void calcularPromedioTotal(int[][] matriz) {
    	
        int cantidad = matriz.length * matriz[0].length;
        int sumaTotal = 0;

        for (int i = 0; i < matriz.length; i++) {
            for (int j = 0; j < matriz[i].length; j++) {
                sumaTotal += matriz[i][j];
            }
        }
        double promedio = (double) sumaTotal / cantidad;
        System.out.println("La media de la matriz es: " + promedio);
    }
}
