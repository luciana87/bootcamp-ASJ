package colecciones;

public class Automovil {
	
	private String marca;
	private int anio;
	
	public Automovil () {}
	
	public Automovil(String marca, int anio) {
		super();
		this.marca = marca;
		this.anio = anio;
	}
	
	public String getMarca() {
		return marca;
	}
	public void setMarca(String marca) {
		this.marca = marca;
	}
	public int getAnio() {
		return anio;
	}
	public void setAnio(int anio) {
		this.anio = anio;
	}

	public void mostrarDatos () {
		System.out.println("Marca: " + this.marca + " - Año: " + this.anio);
	}
	

}
