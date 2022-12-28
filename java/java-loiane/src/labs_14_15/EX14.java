package labs_14_15;

import java.util.Scanner;

public class EX14 {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Qual foi a sua nota?");
		
		double input = scan.nextDouble();
		String grade = "";
		
		if (input <= 10 && input >= 9) {
			grade = "A";
			System.out.println("A");
		} else if (input < 9 && input >= 7.5) {
			grade = "B";
			System.out.println("B");
		} else if (input < 7.5 && input >= 6) {
			grade = "C";
			System.out.println("C");
		} else if (input < 6 && input >= 4) {
			grade = "D";
			System.out.println("D");
		} else if (input < 4 && input >= 0) {
			grade = "E";
			System.out.println("E");
		}
		
		switch (grade) {
		case "A": 
		case "B":
		case "C": System.out.println("Aprovado"); break;
		case "D":
		case "E": System.out.println("Reprovado"); break;
		default: System.out.println("Erro"); break;
		}
	}
}
