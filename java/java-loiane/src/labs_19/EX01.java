package labs_19;

public class EX01 {

	public static void main(String[] args) {
		
		int[] arrA = new int[5];
		int[] arrB = new int[5];
		
		for (int i = 0; i < 5; i++) {
			arrA[i] = i;
			arrB[i] = arrA[i];
		}
		
		
		System.out.print("O vetor B contém os elementos de A: ");

		for (int i = 0; i < arrB.length; i++) {
			System.out.print(arrB[i]);
			if (i < arrB.length - 1) {
				System.out.print(", ");
			} else {
				System.out.println(".");
			}
		}
		
	}

}
