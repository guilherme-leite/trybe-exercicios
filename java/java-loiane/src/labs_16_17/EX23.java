
package labs_16_17;

import java.util.Scanner;

public class EX23 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Descubra a média aritmética de n notas");
		
		int n = scan.nextInt();
		int total = 0;
		
		for (int i = 0; i < n; i++) {
			int num = scan.nextInt();
			total += num;
		}
		
		System.out.println("A média dos números é: " + total / n);

	}
}