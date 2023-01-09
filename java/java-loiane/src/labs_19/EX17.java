	package labs_19;

import java.util.Random;

public class EX17 {

	public static void main(String[] args) {
		
		Random rand = new Random();
		
		int[] ageArr = new int[10];
		int count = 0;
		
		for (int i = 0; i < 10; i++) {
			ageArr[i] = rand.nextInt(102);
			
			if (ageArr[i] >= 35) {
				count += 1;
			}
			
		}
		
		System.out.println(count + " pessoas tem a idade acima de 35 anos.");
	}

}
