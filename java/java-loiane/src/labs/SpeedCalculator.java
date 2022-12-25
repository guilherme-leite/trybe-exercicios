package labs;

import java.util.Scanner;

public class SpeedCalculator {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		System.out.println("Qual o tamanho do arquivo em mb");
		int size = scan.nextInt();
		
		System.out.println("Qual a velocidade da internet?");
		int speed = scan.nextInt();
		
		float result = (size / speed) / 60;
		
		System.out.println("O download vai levar " + result + " minutos");
	}

}
