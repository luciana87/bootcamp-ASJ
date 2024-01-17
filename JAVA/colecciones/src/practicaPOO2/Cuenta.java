package practicaPOO2;

public class Cuenta {
	
	private String titular;
	private double saldo;
	
	public Cuenta(){}

	public Cuenta(String titular) {
		this.titular = titular;
	}

	public String getTitular() {
		return titular;
	}

	public void setTitular (String titular) {
		this.titular = titular;
	}

	public double getSaldo() {
		return saldo;
	}

	public void setSaldo (double monto) {
		this.saldo = monto;
	}

	@Override
	public String toString() {
		return ("Titular: " + titular + "\nSaldo actual: " + saldo);
	}
	
	public void ingresar (double ingreso) {
		if (ingreso > 0) {
			this.saldo += ingreso;
		}		
	}
	
	public void retirar (double cantidad) {
		if (saldo < cantidad) {
			this.saldo = 0;			
		} else {
			this.saldo -= cantidad;
		}
	}
	


}
