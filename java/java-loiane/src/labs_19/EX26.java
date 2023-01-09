	package labs_19;

public class EX26 {

	public static void main(String[] args) {
		
		int[] arrA = new int[10];
		char[] arrB = new char[10];
		
		for (int i = 0; i < arrA.length; i++) {
			arrA[i] = (int)Math.round(Math.random()*10);
		}
		
		for (int i = 0; i < arrA.length; i++) {
			if (arrA[i] < 7) {
				arrB[i] = 'a';
			} else if (arrA[i] == 7) {
				arrB[i] = 'b';
			} else {
				arrB[i] = 'c';
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
		
		}

}
