	package labs_19;

public class EX29 {

	public static void main(String[] args) {
		
		int[] arrA = new int[20];
		int[] arrB = new int[10];
		int[] arrC = new int[10];
		
		int bPos = 0;
		int cPos = 0;
		
		for (int i = 0; i < arrA.length; i++) {
			arrA[i] = (int)Math.round(Math.random()*10);
 		}

		for (int i = 0; i < arrA.length -1; i++) {
			if (arrA[i] % 2 == 0) {
				arrB[bPos] = arrA[i];
				bPos += 1;
			} else {
				arrC[cPos] = arrA[i];
				cPos += 1;
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
		
		for (int i = 0; i < arrC.length; i++) {
			if (i == arrC.length - 1) {
				System.out.print(arrC[i]);
				System.out.println(".");
			} else {
				System.out.print(arrC[i]);
				System.out.print(",");
			}
		}
		
		
		}

}
