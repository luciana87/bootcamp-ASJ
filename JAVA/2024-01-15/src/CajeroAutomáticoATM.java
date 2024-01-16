import java.util.ArrayList;
import java.util.Scanner;

public class CajeroAutomáticoATM {
	
	private static int j = 0;

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
        double saldo = 1000.0; // Saldo inicial
        //ArrayList<String> movimientos2 = new ArrayList<>();
        String[] movimientos = new String [100];
        
        boolean ejecutar = true;

        while (ejecutar) {
            System.out.println("\nMENU:");
            System.out.println("1. EXTRAER");
            System.out.println("2. DEPOSITAR");
            System.out.println("3. CONSULTAR SALDO");
            System.out.println("4. VER ÚLTIMOS MOVIMIENTOS");
            System.out.println("5. SALIR");

            System.out.print("Ingrese la opción: ");
            int opcion = scanner.nextInt();

            switch (opcion) {
                case 1:
                    System.out.print("Ingrese la cantidad a extraer: ");
                    double montoExtraccion = scanner.nextDouble();
                    
                    saldo = extraer(montoExtraccion,saldo,movimientos);
                    break;
                case 2:
                    System.out.print("Ingrese la cantidad a depositar: ");
                    double montoDeposito = scanner.nextDouble();
                    
                    saldo = depositar(montoDeposito,saldo,movimientos);
                    break;
                case 3:
                    System.out.println("Saldo actual: $" + saldo);
        	        //movimientos.add("Consulta saldo: $" + saldo);
        	        movimientos[j++] = "Consulta saldo: $" + saldo;
                    break;
                case 4:
                    System.out.println("\nÚLTIMOS MOVIMIENTOS");
                    mostrarUltimosMovimientos(movimientos);
                    break;
                case 5:
                    System.out.println("Se cerró la sesión.");
                    ejecutar = false;
                    break;
                default:
                    System.out.println("Opción incorrecta. Por favor, ingrese una opción válida.");
                    break;
            }
        }
    }
	
	private static double extraer (double monto, double saldo, String[] movimientos) {
		if (monto <= saldo) {
	        saldo -= monto;
	        //movimientos.add("Extraído: $" + monto);
	        movimientos[j++] = "Extraído: $" + monto;
	        System.out.println("Se extrajo $" + monto + ". \nSaldo actual: $" + saldo);
	    } else {
	        System.out.println("Saldo insuficiente para realizar la extracción.");
	    }
		return saldo;
	}
	
	private static double depositar (double monto, double saldo, String [] movimientos) {
		 saldo += monto;
         //movimientos.add("Depositado: $" + monto);
		 movimientos[j++] = "Depositado: $" + monto;
         System.out.println("Se depositaron $" + monto + ". \nSaldo actual: $" + saldo);
		return saldo;
	}
	
	private static void mostrarUltimosMovimientos(String[] movimientos) {
		 for (int i = 0; i < j; i++) {
	            System.out.println(movimientos[i]);
        }
	}
}
