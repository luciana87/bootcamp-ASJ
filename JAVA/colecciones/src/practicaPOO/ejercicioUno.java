package practicaPOO;

public class ejercicioUno {

	public static void main(String[] args) {
	
		/*1) Cree una clase que me permita realizar una operación matemática 
		 * de 2 números. (Crear los metodos y atributos necesarios)*/
		
		double num = 15;
		double num2 = 10.5;
		double num3 = 0;
		
		Calculadora calculadora = new Calculadora();
		
		calculadora.setNum(num);
		calculadora.setNum2(num2);
		
		System.out.println(calculadora.sumar());
		System.out.println(calculadora.restar());
		System.out.println(calculadora.multiplicar());
		System.out.println(calculadora.dividir(num,num3));
	}

}
