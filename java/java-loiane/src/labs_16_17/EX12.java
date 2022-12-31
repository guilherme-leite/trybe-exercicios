
package labs_16_17;

import java.util.Scanner;

public class EX12 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Forneca um numero para ter a tabuada dele");

		int num1 = scan.nextInt();
		int num2 = scan.nextInt();
		
		int result = 0;

		for (int i = 1; i <= num2; i++) {
			result += num1 * num1;
		}
		
		System.out.println("O resultado de " + num1 + "^" + num2 + " é " + result);
		
		
	}

}
