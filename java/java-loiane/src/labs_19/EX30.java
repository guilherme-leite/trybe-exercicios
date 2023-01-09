	package labs_19;

public class EX30 {

	public static void main(String[] args) {
		
		int[] arrA = new int[20];
		int[] arrB = new int[20];
		
		int bPos = 0;
		
		for (int i = 0; i < arrA.length; i++) {
			arrA[i] = (int)Math.round(Math.random()*10);
 		}
		
		for (int i = 0; i < arrA.length; i++) {
			if(arrA[i] % 2 == 0) {
				arrB[bPos] = arrA[i];
				bPos ++;
			}
		}
		
		for (int i = 0; i < arrA.length; i++) {
			if(arrA[i] % 2 != 0) {
				arrB[bPos] = arrA[i];
				bPos ++;
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
