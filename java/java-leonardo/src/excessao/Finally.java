package excessao;

import java.util.Scanner;

public class Finally {

	public static void main(String[] args) {
		
		Scanner scan = new Scanner(System.in);
try {
		System.out.println("Digite um número");
		System.out.println(7 / scan.nextInt());
		
		
		} catch (Exception e) {
			System.out.println(e.getMessage());
		} finally {
			System.out.println("Finally");
			scan.close();
		}

		System.out.println("Fim!");
	}

}
