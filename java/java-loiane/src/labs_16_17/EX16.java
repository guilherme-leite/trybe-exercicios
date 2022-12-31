
package labs_16_17;

public class EX16 {

	public static void main(String[] args) {
		
		
		int a = 0;
		int b = 0;
		int c = 1;
		
		for (int i = 0; a < 500; i++) {
			a = b;
			b = c;
			c = a + b;
			System.out.println(a + " ");
		}
	}

}
