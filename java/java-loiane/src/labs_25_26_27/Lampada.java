package labs_25_26_27;

public class Lampada {
	int potencia;
	String cor;
	String tipoLuz;
	int garantiaMeses;
	String[] tipos;
	boolean isOn = false;
	
	void ligar() {
		if (!isOn) {
			isOn = true;
			System.out.println("Ligada!");
		} else {
			System.out.println("thump já está ligada");
		}
	}
	
	void desligar() {
		if (isOn) {
			isOn = false;
			System.out.println("Desligada!");
		} else {
			System.out.println("thump já está desligada");
		}
	}
	
	boolean verificarEstado() {
		if (isOn) {
			return true;
		} else {
			return false;
		}
	}
	
}
