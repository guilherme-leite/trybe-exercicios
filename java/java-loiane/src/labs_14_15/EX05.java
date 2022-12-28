package labs_14_15;

import java.util.Scanner;

public class EX05 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Digite duas notas");
		
		int nota01 = scan.nextInt();
		int nota02 = scan.nextInt();
		
		int media = (nota01 + nota02) / 2;
		
		if (media >= 7) {
			System.out.println("Aluno aprovado");
		} else {
			System.out.println("Vá para a turma 19");
		}
		
	}
}
