	package labs_19;

import java.util.Random;

public class EX20 {

	public static void main(String[] args) {
		
		Random rand = new Random();
		
		double[] resultArr = new double[20];
		double dolar = 5.36;
		
		for (int i = 0; i < 10; i++) {
			resultArr[i] = i * dolar; 
		}
		
		for (int i = 0; i < resultArr.length; i++) {
			System.out.print(resultArr[i]);
			if (i < resultArr.length - 1) {
				System.out.print(", ");
			} else {
				System.out.println(".");
			}
		}
		
	}

}
