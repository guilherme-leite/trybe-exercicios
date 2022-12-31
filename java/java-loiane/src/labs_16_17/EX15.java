
package labs_16_17;

import java.util.Scanner;

public class EX15 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Descubra o numero fibonacci até o enézimo elemento.");
		
		int n = scan.nextInt();
		int a = 0;
		int b = 0;
		int c = 1;
		
		for (int i = 0; i <= n; i++) {
			a = b;
			b = c;
			c = a + b;
			System.out.println(a + " ");
		}
	}

}
