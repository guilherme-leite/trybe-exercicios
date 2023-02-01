package labs_46;

public class Circulo extends Figura2D {
	private int raio;

	public int getRaio() {
		return raio;
	}

	public void setRaio(int raio) {
		this.raio = raio;
	}

	@Override
	public double calcularArea() {
		return 3.14 * (raio * raio);
	}
	
	
}
