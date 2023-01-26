package labs_25_26_27;

public class EX01 {

	public static void main(String[] args) {
		Lampada lamp = new Lampada();
		
		lamp.desligar();
		
		lamp.ligar();
		
		lamp.ligar();
		
		boolean estado = lamp.verificarEstado();
		
		if (estado) {
			System.out.println("A lampada está ligada");
		} else { 
			System.out.println("A lampada está desligada");
		}
		
		lamp.desligar();
		
		estado = lamp.verificarEstado();
		
		if (estado) {
			System.out.println("A lampada está ligada");
		} else { 
			System.out.println("A lampada está desligada");
		}
		
	}

}
