	package labs_19;

public class EX13 {

	public static void main(String[] args) {
		
		int[] arrA = new int[10];
		int multiplos = 0;
		
		for (int i = 0; i < 10; i++) {
			arrA[i] = i;
			if (i % 5 == 0) {
				multiplos += 1;
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
		
		System.out.print("O total da elementos múltiplos de 5 é de: " + multiplos);
	}

}
