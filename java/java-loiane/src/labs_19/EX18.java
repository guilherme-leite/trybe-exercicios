	package labs_19;

import java.util.Random;

public class EX18 {

	public static void main(String[] args) {
		
		Random rand = new Random();
		
		int[] ageArr = new int[10];

		int max = ageArr[0];
		int maxIndex = 0;
		int low = 120;
		int lowIndex = 0;
		
		for (int i = 0; i < 10; i++) {
			ageArr[i] = rand.nextInt(102);
			
			if (ageArr[i] < low) {
				low = ageArr[i];
				lowIndex = i;
			}
			if (ageArr[i] > max) {
				max = ageArr[i];
				maxIndex = i;
			} 
		}

		System.out.println("O maior número é: " + max);
		System.out.println("O menor número é: " + low);
		
		for (int i = 0; i < ageArr.length; i++) {
			System.out.print(ageArr[i]);
			if (i < ageArr.length - 1) {
				System.out.print(", ");
			} else {
				System.out.println(".");
			}
		}
	}

}
