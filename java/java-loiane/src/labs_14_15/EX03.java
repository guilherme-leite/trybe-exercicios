package labs_14_15;

import java.util.Scanner;

public class EX03 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Um número para saber se é negativo ou positivo");
		
		int num1 = scan.nextInt();
		
		if (num1 % 2 == 0) {
			System.out.println("O número é positivo!");
		} else {
			System.out.println("O número é negativo!");
		}
		
	}

}
