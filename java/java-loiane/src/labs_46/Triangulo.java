package labs_46;

public class Triangulo extends Figura2D  {
	private int base;
	private int altura;
	
	public int getBase() {
		return base;
	}
	public void setBase(int base) {
		this.base = base;
	}
	public int getAltura() {
		return altura;
	}
	public void setAltura(int altura) {
		this.altura = altura;
	}
	
	@Override
	public double calcularArea() {
		return (base * altura) / 2;
	}
	
	
}
