	package labs_19;

public class EX35 {

	public static void main(String[] args) {
		
		int[] arrA = new int[11];
		
		for (int i = 0; i < arrA.length; i++) {
			arrA[i] = i * i;
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
		
		}
}
