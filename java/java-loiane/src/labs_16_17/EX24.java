
package labs_16_17;

import java.util.Scanner;

public class EX24 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Descubra os números primos de 0 até n");
		
		int n = scan.nextInt();
		boolean isPrime = true;
		int amount = 0;
		
		for (int j = 2; j < n; j++) {
			isPrime = true;
			for (int i = 2; i < j; i++) {
				amount += 1;
				if (j % i == 0) {
					isPrime = false;
				}
			}
			 
			if (isPrime) {
				System.out.println(j);
			}
		}
		System.out.println("Número de operacões. " + amount);
	}
}