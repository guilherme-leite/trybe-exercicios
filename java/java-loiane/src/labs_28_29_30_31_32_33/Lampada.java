package labs_28_29_30_31_32_33;

public class Lampada {
	private int potencia;
	private String cor;
	private String tipoLuz;
	private int garantiaMeses;
	private String[] tipos;
	private boolean On = false;

	public Lampada() { }
	
	public Lampada(int potencia, String cor, String tipoLuz, int garantiaMeses, String[] tipos, boolean on) {
		this.potencia = potencia;
		this.cor = cor;
		this.tipoLuz = tipoLuz;
		this.garantiaMeses = garantiaMeses;
		this.tipos = tipos;
		On = on;
	}



	public int getPotencia() {
		return this.potencia;
	}
	
	public void setPotencia(int potencia) {
		this.potencia = potencia;
	}
	
	public String getCor() {
		return this.cor;
	}
	
	public void setCor(String cor) {
		this.cor = cor;
	}
	
	public String getTipoLuz() {
		return this.tipoLuz;
	}
	
	public void setTipoLuz(String tipoLuz) {
		this.tipoLuz = tipoLuz;
	}
	
	public int getGarantiaMeses() {
		return garantiaMeses;
	}
	
	public void setGarantiaMeses(int garantiaMeses) {
		this.garantiaMeses = garantiaMeses;
	}
	
	public String[] getTipos() {
		return this.tipos;
	}
	
	public void setTipos(String[] tipos) {
		this.tipos = tipos;
	}
	
	public boolean isOn() {
		return this.On;
	}
	
	public void setIsOn(boolean On) {
		this.On = On;
	}
	
	public void ligar() {
		if (isOn()) {
			setIsOn(true);
			System.out.println("Ligada!");
		} else {
			System.out.println("thump já está ligada");
		}
	}
	
	public void desligar() {
		if (isOn()) {
			setIsOn(false);
			System.out.println("Desligada!");
		} else {
			System.out.println("thump já está desligada");
		}
	}
	
	public boolean verificarEstado() {
		if (isOn()) {
			return true;
		} else {
			return false;
		}
	}
	
}
