package practicaPOO3;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class EjercicioTres {

	public static void main(String[] args) {
		/*Haz una clase llamada Password que siga las siguientes condiciones:
		Que tenga los atributos longitud y contraseña . Por defecto, la longitud sera de 8.
		Un constructor por defecto.
		Un constructor con la longitud que nosotros le pasemos. Generara una contraseña
		aleatoria con esa longitud.
		Los métodos que implementa serán al menos:
		
		    -- esFuerte(): devuelve un booleano si es fuerte o no, para que sea fuerte debe
		tener mas de 2 mayúsculas, mas de 1 minúscula y mas de 5 números.
		    -- generarPassword(): genera la contraseña del objeto con la longitud que
		tenga.
		   -- Método get para contraseña y longitud.
		   -- Método set para longitud.
		
		Ahora, crea una clase clase ejecutable:
		Obtener por teclado, contraseñas ingresadas por el usuario (pueden utilizar arrays o ArrayList).
		Mostrar todas las contraseñas y si son fuertes o no
		
		Ej: 
		contraseña_1 FUERTE
		  contraseña_2 DEBIL
		  contraseña_3 FUERTE 
		*/
		
		Scanner scanner = new Scanner(System.in);

		String passString = "A15PjA_97MxCwDNEj_wZUZkgeQv*AY.x5R3"; // Es fuerte
		
		Password contrasenia = new Password();
		Password contrasenia2 = new Password(35);
		
		System.out.println(contrasenia);
		System.out.println(contrasenia2);
		System.out.println(contrasenia2.esFuerte());
		
		//-------------------------------------------
		
		System.out.println("Ingrese una contraseña de no menos de 8 carateres. \nPara dejar de ingresasr contraseñas ingrese: -1");
		String pass4 = scanner.nextLine();
		
		List<Password> contrasenias = new ArrayList<Password>();
		
		while (!pass4.equals("-1")) {
			
			if (Password.validarPassword(pass4)) {
				contrasenias.add(new Password(pass4));			
			} else {
				System.out.println("Contraseña inválida");
			}
			
			System.out.println("Ingrese una nueva contraseña de no menos de 8 carateres. \nPara dejar de ingresasr contraseñas ingrese: -1");
			pass4 = scanner.nextLine();
		}
		
		//Mostrar lista de contraseñas creadas:
		
		for (Password password : contrasenias) {
			if (password.esFuerte()) {
				System.out.println(password.toString() + " - FUERTE");
			}else {
				System.out.println(password.toString() + " - DEBIL");
			}
		}
	}

}
