package practicaPOO;

public class Calculadora {
	
	private double num;
	private double num2;
	
	public Calculadora () {}

	public Calculadora(double num, double num2) {
		this.num = num;
		this.num2 = num2;
	}

	public double getNum() {
		return num;
	}

	public void setNum(double num) {
		this.num = num;
	}

	public double getNum2() {
		return num2;
	}

	public void setNum2(double num2) {
		this.num2 = num2;
	}
	
	
	public double sumar () {
		return this.num + this.num2;
	}
	
	public double restar () {
		double resultado = 0;
		if (this.num > this.num2) {
			resultado = this.num - this.num2;
		} else {
			resultado = this.num2 - this.num;
		}
		return resultado;
	}
	
	public double multiplicar () {
		return this.num * this.num2;
	}
	
	public double dividir (double num, double num2) {
		double resultado = 0;
		if (num != 0 && num2 != 0) {
			resultado = num / num2;
		} else {
			System.out.println("No se puede dividir por 0.");
		}
		return resultado;
	}


}
