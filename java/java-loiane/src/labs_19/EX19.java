	package labs_19;

import java.util.Random;

public class EX19 {

	public static void main(String[] args) {
		
		Random rand = new Random();
		
		int[] nota1Arr = new int[10];
		int[] nota2Arr = new int[10];
		int[] result = new int[10];
		
		for (int i = 0; i < 10; i++) {
			nota1Arr[i] = rand.nextInt(10);
			nota2Arr[i] = rand.nextInt(10);
			
			result[i] = (nota1Arr[i] + nota1Arr[i])/2;
		}
		
		for (int i = 0; i < result.length; i++) {
			System.out.print(result[i]);
			if (i < result.length - 1) {
				System.out.print(", ");
			} else {
				System.out.println(".");
			}
		}
		
		for (int i = 0; i < result.length; i++) {
			if (result[i] >= 7) {
				System.out.println("Aprovado");
			} else if (result[i] < 7) {
				System.out.println("Reprovado");
			}
		}
	}

}
