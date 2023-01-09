	package labs_19;

public class EX16 {

	public static void main(String[] args) {
		
		int[] arrA = new int[10];
		int soma = 0;
		int qtd = 0;
		int max = 1;
		int media = 0;
		
		for (int i = 0; i < 10; i++) {
			arrA[i] = i;
			if (i < 15) {
				soma += i;
			} else if (i == 15) {
				qtd += 1;
			} else {
				max += 1;
				media += i;
			}
		}
		
		
		for (int i = 0; i < arrA.length; i++) {
			System.out.print(arrA[i]);
			if (i < arrA.length - 1) {
				System.out.print(", ");
			} else {
				System.out.println(".");
			}		}
		
		System.out.print("A soma dos elementos menores que 15 é de " + soma + ". A quantidade dos elementos iguais a 15 é de " + qtd + ". A média dos elementos superiores a 15 é de " + media / max);
	}

}
