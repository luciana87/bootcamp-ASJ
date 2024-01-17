package colecciones;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class colecciones {

	public static void main(String[] args) {
		List<String> miLista = new ArrayList<String>();
		
		//Agregar Datos
		
		miLista.add("Rojo");
		miLista.add("Azul");
		miLista.add("Verde");
		
		for (int i = 0; i < miLista.size(); i++) {
			System.out.println(miLista.get(i));
		}
		
		
		System.out.println("-----------------------------------------");
		
		miLista.add("Negro");
		miLista.add("Blanco");
		miLista.add(3, "Amarillo"); //Lo pone en la posición 3
		
		mostrarLista(miLista);
		
		System.out.println("-----------------------------------------");
		
		System.out.println(miLista.get(3));
		System.out.println(miLista.get(4));
		
		
		//ELiminar un elemento
		
		miLista.remove(5); //Se puede remover con el indice o
		miLista.remove("Verde"); //Se puede remover con el dato
		
		mostrarLista(miLista);
		
		System.out.println("-----------------------------------------");
		
		//Devuelve el indice del elemento
		System.out.println(miLista.indexOf("Amarillo")); //Me devuelve el indice de la primera vez que lo encuentra
		System.out.println(miLista.indexOf(miLista.lastIndexOf("Amarillo"))); //Me devuelve el indice de la ultima vez que lo encuentra
		
		
		//Elimina toda la lista
		//miLista.clear();
		
		mostrarLista(miLista);
		
		System.out.println(miLista.isEmpty());
//-------------------------------------------------------------------------------
		
		//Iterator, recorrer la lista
		Iterator<String> miIterador = miLista.iterator();
		
		while (miIterador.hasNext()) {
			String elemento = miIterador.next();
			System.out.print(elemento + " - ");
			
		}
		
	}
	
	public static void mostrarLista (List<String> lista) {
		
		for (String color : lista) {
			System.out.println(color);
			
		}
	}

}
