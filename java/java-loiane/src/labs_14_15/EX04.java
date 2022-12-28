package labs_14_15;

import java.util.Scanner;

public class EX04 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite uma letra para descobrir se é uma vogal ou uma consoante.");
		
		String input = scan.next();
		
		switch (input) {
		case "a": 
		case "e":
		case "i":
		case "o":
		case "u": System.out.println("Você digitou uma vogal"); break;
		default: System.out.println("Consoante"); break;
	}
	}
}
