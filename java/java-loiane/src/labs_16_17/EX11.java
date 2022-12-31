
package labs_16_17;

import java.util.Scanner;

public class EX11 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Forneca dois números inteiros para ter o intervalo entre eles.");

		int num1 = scan.nextInt();
		int num2 = scan.nextInt();
		
		int intervalo = 0;
		
		for (int i = num1 + 1; i < num2; i++) {
			intervalo += i;
			System.out.println(i);
		}
		
		System.out.println(intervalo);
	}

}
