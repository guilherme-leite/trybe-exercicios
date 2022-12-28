package labs_14_15;

import java.util.Scanner;

public class EX10 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Qual turno você estuda?");
		System.out.println("v-Vespertino");
		System.out.println("m-Matutino");
		System.out.println("n-Noturno");
		
		String turno = scan.next();
		
		switch (turno) {
		case "v": System.out.println("Boa tarde!"); break;
		case "m": System.out.println("Bom dia!"); break;
		case "n": System.out.println("Boa noite!"); break;
		default: System.out.println("nenhum dos anteriores");
		}
	}
}
