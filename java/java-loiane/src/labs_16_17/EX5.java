
package labs_16_17;

import java.util.Scanner;

public class EX5 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Forneca a populacao do pais 01, pais 02 e as taxas de crescimento de cada país.");
		
		int anos = 0;
		
		double pais01 = scan.nextDouble();
		double pais02 = scan.nextDouble();
		
		double tx01 = scan.nextDouble();
		double tx02 = scan.nextDouble();
		
		if (pais01 < pais02) {
			System.out.println("Entrou");
			for (int i = 0; pais01 < pais02; i++) {
				pais01 = pais01 + (pais01 * tx01);
				pais02 = pais02 + (pais02 * tx02);
				anos+=1;
			}
		} else if (pais01 > pais02) {
			System.out.println("Entrou 2");
			for (int i = 0; pais02 < pais01; i++) {
				pais01 = pais01 + (pais01 * tx01);
				pais02 = pais02 + (pais02 * tx02);
				anos+=1;
			}
		} else {
			System.out.println("Os números já são iguais.");
		}
		
		
		System.out.println("Obrigado" + anos);
	
	}

}
