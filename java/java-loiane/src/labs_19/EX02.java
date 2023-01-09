package labs_19;

public class EX02 {

	public static void main(String[] args) {
		
		int[] arrA = new int[8];
		int[] arrB = new int[8];
		
		for (int i = 0; i < 8; i++) {
			arrA[i] = i;
			arrB[i] = arrA[i] * 2;
		}
		
		
		System.out.print("O vetor B contém os elementos de A dobrados: ");

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
