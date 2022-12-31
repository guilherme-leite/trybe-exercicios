
package labs_16_17;

import java.util.Scanner;

public class EX8 {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		
		System.out.println("Por favor digite 5 números");
		
		double total = 0;
		double media = 0;

		double num;
		
		for (int i = 0; i < 5; i++) {
			num = scan.nextDouble();
			total += num;
		}
		
		media = total / 5;
		
		System.out.println("Obrigado" + total + " ,media: " + media);
	
	}

}
