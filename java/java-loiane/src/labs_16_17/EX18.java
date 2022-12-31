
package labs_16_17;

import java.util.Scanner;

public class EX18 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Forneça n números");
		
		int n = scan.nextInt();
		
		int sum = 0;
		int min = 0;
		int max = 0;
		
		for (int i = 0; i < n; i++) {
			int num = scan.nextInt();
			if (num >= max) {
				max = num;
			}
			if (num <= min) {
				min = num;
			}
			sum += num;
		}
		System.out.println(min);
		System.out.println(max);
		System.out.println(sum);
	}
}
