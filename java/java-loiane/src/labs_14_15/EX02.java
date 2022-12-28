package labs_14_15;

import java.util.Scanner;

public class EX02 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite F ou M");
		
		String letter = scan.next();
		
		if (letter.equalsIgnoreCase("m")) {
			System.out.println("Masculino");
		} else {
			System.out.println("Feminino");
		}
		
	}

}
