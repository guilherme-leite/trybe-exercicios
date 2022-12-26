package labs_11_12_13;

import java.util.Scanner;

public class ImcCalculatorManWoman {

	public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
		
		System.out.println("Qual é a sua altura fera?");
		
		double altura = scan.nextDouble();
		
		System.out.println("Qual é o seu genero?");
		
		int gender = 0;
		
		gender = scan.nextInt();
		
		double result = 0;
		
		System.out.println(gender);
		
		if (gender == 1) {
			result = (altura * 72.7) - 58;
		} else {
			result = (altura * 62.1) - 44.7;
		}
		
		
		System.out.println("Seu peso ideal é isso: " + result);

		
		
	}

}
