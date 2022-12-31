
package labs_16_17;

import java.util.Scanner;

public class EX25 {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Descubra a média da idade de n alunos");
		
		int n = scan.nextInt();
		int total = 0;

		for (int i = 0; i < n; i++) {
			int idade = scan.nextInt();
			total += idade;
		}
		
		int resultado = total / n;
		
		if (resultado > 0 && resultado < 25) {
			System.out.println("A turma é nova");
		} else if (resultado > 25 && resultado < 60) {
			System.out.println("A turma é adulta");
		} else if (resultado > 60) {
			System.out.println("A turma é idosa");
		}
		

	}
}