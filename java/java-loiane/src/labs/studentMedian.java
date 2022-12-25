package labs;

import java.util.Scanner;

public class studentMedian {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite a primeira nota");
		double primeira = scan.nextDouble();
		
		System.out.println("Digite a segunda nota");
		double segunda = scan.nextDouble();
		
		System.out.println("Digite a terceira nota");
		double terceira = scan.nextDouble();
		
		System.out.println("Digite a quarta nota");
		double quarta = scan.nextDouble();
		
		double result = (primeira + segunda + terceira + quarta) / 4;
		
		System.out.println("A média de todas as notas é de: " + result);
		
	}

}
