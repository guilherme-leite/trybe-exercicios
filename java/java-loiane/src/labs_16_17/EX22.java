
package labs_16_17;

import java.util.Scanner;

public class EX22 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Forneca um número para saber se ele é primo.");
		
		int num = scan.nextInt();
		boolean isPrime = true;
		
		for (int i = 2; i < num; i++) {
			if (num % i == 0) {
				System.out.println("O número é divisível por: " + i);
				isPrime = false;
				
			}
		}
		
		if (isPrime) {
			System.out.println("Primo!");
		}
	}
}
