package labs_11_12_13;

import java.util.Scanner;

public class PrintNumber {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite um número");
		
		int number = scan.nextInt();
		
		System.out.println("O número digitado foi " + number);
	}

}
