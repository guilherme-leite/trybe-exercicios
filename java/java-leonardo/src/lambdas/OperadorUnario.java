package lambdas;

import java.util.function.UnaryOperator;

public class OperadorUnario {

	public static void main(String[] args) {

		UnaryOperator<Integer> maisDois = num -> num + 2;
		UnaryOperator<Integer> vezesDois = num -> num * 2;
		UnaryOperator<Integer> aoQuadrado = num -> num * num;
		
		System.out.println(maisDois.apply(2));
		System.out.println(maisDois.andThen(vezesDois).andThen(aoQuadrado).apply(2));		
		
	}

}
