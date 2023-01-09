	package labs_19;

public class EX36 {

	public static void main(String[] args) {
		
		int[] arrA = new int[5];
		int[] arrB = new int[arrA.length];
		
		for (int i = 0; i < arrA.length; i++) {
			arrA[i] = (int)Math.round(Math.random()*5);
 		}
		
		for (int i = 0; i < arrA.length; i++) {
			arrB[i] = arrA[i];
			for (int j = 1; j < arrA[i]; j++) {
				arrB[i] *= j;
			}
		}
		
		for (int i = 0; i < arrA.length; i++) {
			if (i == arrA.length - 1) {
				System.out.print(arrA[i]);
				System.out.println(".");
			} else {
				System.out.print(arrA[i]);
				System.out.print(",");
			}
		}
		
		for (int i = 0; i < arrB.length; i++) {
			if (i == arrB.length - 1) {
				System.out.print(arrB[i]);
				System.out.println(".");
			} else {
				System.out.print(arrB[i]);
				System.out.print(",");
			}
		}
		
		}
}
