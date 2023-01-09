	package labs_19;

public class EX12 {

	public static void main(String[] args) {
		
		int[] arrA = new int[10];
		int soma = 0;
		
		for (int i = 0; i < 10; i++) {
			arrA[i] = i;
			soma += i;
		}
		
		
		for (int i = 0; i < arrA.length; i++) {
			System.out.print(arrA[i]);
			if (i < arrA.length - 1) {
				System.out.print(", ");
			} else {
				System.out.println(".");
			}
		}
		
		System.out.print("O total da soma dos elementos é de: " + soma);
	}

}
