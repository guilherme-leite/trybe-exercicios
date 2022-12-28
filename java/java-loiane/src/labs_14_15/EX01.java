package labs_14_15;

import java.util.Scanner;

public class EX01 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite dois números");
		
		int num1 = scan.nextInt();
		int num2 = scan.nextInt();
		
		if (num1 > num2) {
			System.out.println("O maior número é " + num1);
		} else {
			System.out.println("O maior número é " + num2);
		}
		
	}

}
