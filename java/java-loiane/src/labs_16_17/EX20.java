
package labs_16_17;

import java.util.Scanner;

public class EX20 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Forneca um numero inteiro entre 0 e 16 para ter o seu fatorial.");
		
		int result = 1;
		int num = scan.nextInt();
		
		for (int i = 1; i <= num; i++) {
			if (num > 0 && num < 16) {
				result *= i;				
			} else {
				System.out.println("entre com um número válido.");
				num = scan.nextInt();
				i--;
			}
		}
		
		System.out.println(result);
		
		
	}
}
