package excessao;

public class ChecadaVsNaoChecada {

	public static void main(String[] args) {
		
		try {
			geraErro1();
		} catch (RuntimeException e) {
			System.out.println(e.getMessage());
		}
		
		try {
			geraErro2();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
		}
		
		System.out.println("Finho");
		
	}
	
	static void geraErro1() {
		throw new RuntimeException("Ocorreu o erro 01");
	}
	
	static void geraErro2() throws Exception{
		throw new Exception("Ocorreu o erro 02");
	}
}
