package lambdas;

import java.util.function.Predicate;

public class Predicado {
	public static void main(String[] args) {
		
		Predicate<Produto> isCaro = 
				prod -> (prod.preco * (1 - prod.desconto)) >= 750;
		
		Produto prod = new Produto("notebook", 3899.25, 0.15);
		
		System.out.println(isCaro.test(prod));
		
	}
}
