package practicaPOO3;

import java.util.ArrayList;
import java.util.List;

public class Password {
	
	private int longitud;
	private String contrasenia;
	
	public Password() {
		this.longitud = 8;
		this.contrasenia = generarPasswordAleatoria();
	}
	
	public Password(String contrasenia) {
		this.longitud = contrasenia.length();
		this.contrasenia = contrasenia;
	}


	public Password(int longitud) {
		this.longitud = longitud;
		this.contrasenia = generarPasswordAleatoria();
	}

	public int getLongitud() {
		return longitud;
	}

	public void setLongitud(int longitud) {
		this.longitud = longitud;
	}

	public String getContrasenia() {
		return contrasenia;
	}

	public void setContrasenia(String contrasenia) {
		this.contrasenia = contrasenia;
	}
	
	@Override
	public String toString() {
		return "Contraseña: " + this.contrasenia;
	}

	private String generarPasswordAleatoria() {
		
		String caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_.*";
		String passwordGenerado = "";

		for (int i = 0; i < this.longitud; i++) {
			passwordGenerado += caracteres.toCharArray()[(int) (Math.random() * caracteres.length())];
		}
		return passwordGenerado;
	}
	
	public static boolean validarPassword (String password) {
		return password.length() >= 8;

	}
	
	public boolean esFuerte () {
        String regexMayusculas = "(.*[A-Z].*){3,}";
        String regexMinusculas = "(.*[a-z].*){2,}";
        String regexNumeros = "(.*\\d.*){6,}";
        
        return (this.contrasenia.matches(regexMayusculas) &&
                this.contrasenia.matches(regexMinusculas) &&
                this.contrasenia.matches(regexNumeros));
	}
}
