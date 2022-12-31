
package labs_16_17;

import java.util.Scanner;

public class EX7 {

	public static void main(String[] args) {

		Scanner scan = new Scanner(System.in);
		
		System.out.println("Por favor digite 5 números para descobrir o maior deles");
		
		int min = Integer.MIN_VALUE;
		
		for (int i = 0; i < 5; i++) {
			
			int num = scan.nextInt();
			if (num > min) {
				min = num;
			}
		}
		
		System.out.println("Obrigado" + min);
	
	}

}
