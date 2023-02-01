package labs_49;

public class TestandoOFinally {

	public static void main(String[] args) {
		
	int[] numeros = {4,8,16,32,64,128};
	int[] denominadores = {2,0,4,8,0};
	
	for (int i = 0; i < numeros.length; i++) {
		try {
			System.out.println(numeros[i] + " / " + denominadores[i] + " = " + (numeros[i] / denominadores[i]));
		} catch (ArithmeticException exception1) {
			System.out.println("Não dividirás por 0");
//		} catch (ArrayIndexOutOfBoundsException exception2) {
//			System.out.println("Você tentou acessar um índice inexistente");
		} catch (Throwable exc) {
			System.out.println("Algum erro ocorreu " + exc);
		} finally {
			System.out.println("Essa linha sempre será impressa depois do try e catch");
		}
	}
	
	}

}
