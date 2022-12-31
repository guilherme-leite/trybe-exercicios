
package labs_16_17;

import java.util.Scanner;

public class EX13 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Forneca um numero para ter a tabuada dele");

		int num = scan.nextInt();
		
		System.out.println("Tabuada de " + num);
		for (int i = 1; i <= 10; i++) {
			System.out.println(num + " x " + i + " = " + i * num);
		}
		
	}

}
