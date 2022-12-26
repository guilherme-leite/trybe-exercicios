package labs_11_12_13;

import java.util.Scanner;

public class PaintStore {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Qual a área em m² a ser pintada?");
		
		double totalArea = scan.nextDouble();
		
		double paintNeeded = totalArea / 6;
		
		double can = 3.6;
		double gallon = 18;		
		
		double totalGallon = paintNeeded / gallon;
		double totalCan = paintNeeded / can;
		
		System.out.println("O total de galões a serem comprados é: " + totalGallon);

		System.out.println("O total de latas a serem comprados é: " + totalCan);
		
		

	}

}
