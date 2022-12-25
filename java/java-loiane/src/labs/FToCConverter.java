package labs;

import java.util.Scanner;

public class FToCConverter {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Qual a temperatura em graus F");
		
		double farenheight = scan.nextDouble();
		
		double result = ((farenheight-32)*5)/9;
		
		System.out.println("A temperatura em C é: " + result);

	}

}
