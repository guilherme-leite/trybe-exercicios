package labs_14_15;

import java.util.Scanner;

public class EX26 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Você abastecerá quantos litros?");
		
		int litros = scan.nextInt();
	    
		System.out.println("Você quer abastecer álcool ou gazolina?");
		
		String combustivel = scan.next();
		
		double total = 0;
		
		if (litros < 20) {
			if (combustivel.contentEquals("'alcool")) {
				total = 1.9 * litros - (litros * .03);
			} else {
				total = 2.5 *  litros - (litros * .04);
			}
		} else if (litros > 20) {
			if (combustivel.contentEquals("'alcool")) {
				total =  1.9 * litros - (litros * .05);
			} else {
				total = 2.5 *  litros - (litros * .06);
			}
			
			System.out.println(total);
		}
	}
	
	
}
