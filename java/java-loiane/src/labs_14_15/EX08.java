package labs_14_15;

import java.util.Scanner;

public class EX08 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite 3 números");
		
		int product01 = scan.nextInt();
		int product02 = scan.nextInt();
		int product03 = scan.nextInt();
		
		if (product01 < product02 && product01 < product03) {
			System.out.println("O número " + product01 + " é o mais barato");
		} else if (product02 < product01 && product02 < product03) {
			System.out.println("O número " + product02 + " é o mais barato");
		} else {
			System.out.println("O número " + product03 + " é o mais barato");
		}
	}
}
