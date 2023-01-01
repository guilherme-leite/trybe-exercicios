package cursojava.aula18;

import java.util.Scanner;

public class BreakContinue {
		public static void main(String[] args) {
			
			Scanner scan = new Scanner(System.in);
			
			System.out.println("Entre com um número e com um limite.");
			
			int num = scan.nextInt();
			int max = scan.nextInt();
			
			for (int i = num; i <= max; i++) {
				if (i % 7 == 0) {
					System.out.println("O primeiro número divisível por 7 é : " + i);
					break;
				}
			}
		}
	}
