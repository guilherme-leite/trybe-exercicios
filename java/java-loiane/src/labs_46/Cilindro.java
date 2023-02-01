package labs_46;

public class Cilindro extends Figura3D {
	private int raio;
	private int altura;
	
	public int getRaio() {
		return raio;
	}
	public void setRaio(int raio) {
		this.raio = raio;
	}
	public int getAltura() {
		return altura;
	}
	public void setAltura(int altura) {
		this.altura = altura;
	}
	
	@Override
	public double calcularArea() {
		double areaBase = 3.14 * (raio * raio);
		double areaLateral = 2 * 3.14 * raio * altura;
		double areaTotal = (2*areaBase) + areaLateral;
		
		return areaTotal;
	}
	
	@Override
	public double calcularVolume() {
		return 3.14 * (raio * raio) * altura;
	}
	
	
	
}
