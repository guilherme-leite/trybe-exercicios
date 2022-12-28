package labs_14_15;

import java.util.Scanner;

public class EX07 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite 3 números");
		
		int input01 = scan.nextInt();
		int input02 = scan.nextInt();
		int input03 = scan.nextInt();
		
		if (input01 < input02 && input01 < input03) {
			System.out.println("O número " + input01 + " é o menor");
		} else if (input02 < input01 && input02 < input03) {
			System.out.println("O número " + input02 + " é o menor");
		} else {
			System.out.println("O número " + input03 + " é o menor");
		}
	}
}
