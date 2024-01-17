import java.util.Scanner;

public class MensajeDeTexto {

	public static void main(String[] args) {

		        Scanner scanner = new Scanner(System.in);

		        System.out.print("Ingrese un texto a traducir: ");
		        String texto = scanner.nextLine().toUpperCase();

		        String resultado = traducirTexto(texto);

		        System.out.println("El texto traducido es: " + resultado);


	}

    private static String traducirTexto(String texto) {
        StringBuilder resultado = new StringBuilder();

        String[] tecladoNumerico = {
            "2", "22", "222",   // ABC
            "3", "33", "333",   // DEF
            "4", "44", "444",   // GHI
            "5", "55", "555",   // JKL
            "6", "66", "666",   // MNO
            "7", "77", "777", "7777",   // PQRS
            "8", "88", "888",   // TUV
            "9", "99", "999", "9999",  // WXYZ
            "0"                 
        };

        for (char letra : texto.toCharArray()) {
            if (Character.isLetter(letra)) {
                int posicion = obtenerPosicionEnTeclado(letra);
                resultado.append(tecladoNumerico[posicion]);
                resultado.append(' ');
            } else {
                resultado.append(letra);
            }
        }
        return resultado.toString();
    }

    private static int obtenerPosicionEnTeclado(char letra) {
        return Character.toUpperCase(letra) - 'A';
    }
		
}
