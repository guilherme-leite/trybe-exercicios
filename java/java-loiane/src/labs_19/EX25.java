	package labs_19;

public class EX25 {

	public static void main(String[] args) {
		
		int[] arrA = new int[10];
		int[] arrB = new int[10];
		int[] arrC = new int[10];
		
		for (int i = 0; i < arrA.length; i++) {
			arrA[i] = (int)Math.round(Math.random()*10);
			arrB[i] = (int)Math.round(Math.random()*10);
		}
		
		for (int i = 0; i < arrC.length; i++) {
			if (arrA[i] > arrB[i]) {
				arrC[i] = 1;
			} else if (arrA[i] == arrB[i]) {
				arrC[i] = 0;
			} else {
				arrC[i] = -1;
			}
		}
		
		for (int i = 0; i < arrA.length; i++) {
			System.out.print(arrA[i]);
			if (i < arrA.length - 1) {
				System.out.print(", ");
			} else {
				System.out.println(".");
			}
		}
		
		for (int i = 0; i < arrB.length; i++) {
			System.out.print(arrB[i]);
			if (i < arrA.length - 1) {
				System.out.print(", ");
			} else {
				System.out.println(".");
			}
		}
		
		for (int i = 0; i < arrC.length; i++) {
			System.out.print(arrC[i]);
			if (i < arrC.length - 1) {
				System.out.print(", ");
			} else {
				System.out.println(".");
			}
		}
		
		}

}
