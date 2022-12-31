
package labs_16_17;

import java.util.Scanner;

public class EX17 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Forneca um numero para ter o seu fatorial.");
		
		int num = scan.nextInt();
		int result = 1;
		
		for (int i = 1; i <= num; i++) {
			result *= i;
			
		}
		
		System.out.println(result);
		
		
	}
}
