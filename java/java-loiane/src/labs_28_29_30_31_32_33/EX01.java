package labs_28_29_30_31_32_33;

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
