import java.util.Scanner;

public class Estructuras {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.print("Ingrese la cantidad de notas: ");
        int cantidadNotas = scanner.nextInt();
        int suma = 0;
        int i = 1;
        
        //Con FOR:
        


        for (int j = 1; j <= cantidadNotas; j++) {
            System.out.print("Ingrese la nota " + j + ": ");
            int nota = scanner.nextInt();
            suma += nota;
        }
        

        
        //Con While
      
/*
        while (i <= cantidadNotas) {
            System.out.print("Ingrese la nota " + i + ": ");
            int nota = scanner.nextInt();
            suma += nota;
            i++;
        }

*/
        //DO WHILE:
        
/*  do {
            System.out.print("Ingrese la nota " + i + ": ");
            int nota = scanner.nextInt();
            suma += nota;
            i++;
        } while (i <= cantidadNotas);

*/
        
        double promedio = (double) suma / cantidadNotas;
        System.out.println("El promedio de las notas es: " + promedio);
	}

}
