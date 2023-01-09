	package labs_19;

public class EX24 {

	public static void main(String[] args) {
		
		int[] arrA = new int[10];
		int[] arrB = new int[10];
		
		for (int i = 0; i < arrA.length; i++) {
			arrA[i] = (int)Math.round(Math.random()*10);
			arrB[i] = (arrA[i] % 2 == 0) ? 1 : 0;
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
