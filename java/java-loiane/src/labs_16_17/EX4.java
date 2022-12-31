
package labs_16_17;

public class EX4 {

	public static void main(String[] args) {
		int anos = 0;
		
		double pais01 = 80000;
		double pais02 = 20000;
		
		for (int i = 0; pais01 > pais02; i++) {
			pais01 = pais01 + (pais01 * 0.3);
			pais02 = pais02 + (pais02 * 0.15);
			anos+=1;
		}
		
		System.out.println("Obrigado" + anos);
	
	}

}
