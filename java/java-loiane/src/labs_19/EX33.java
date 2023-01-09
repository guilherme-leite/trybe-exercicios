	package labs_19;

public class EX33 {

	public static void main(String[] args) {
		
		int[] arrA = new int[5];
		boolean isPrime = true;
		
		for (int i = 0; i < arrA.length; i++) {
			arrA[i] = (int)Math.round(Math.random()*30);
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
		
		for (int i = 0; i < arrA.length; i++) {
			for (int j = 2; j < arrA[i]; j++) {
				if (arrA[i] % 2 == 0) {
					isPrime = false;
					break;
				}
			}
			if (isPrime || arrA[i] == 0 || arrA[i] == 1) {
				System.out.println(arrA[i] + " is Prime");
			} else {
				System.out.println(arrA[i] + " is not Prime");
			}
		}
		}
}
