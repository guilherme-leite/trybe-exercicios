package streams;

import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Stream;

public class ImprimindoObjetos {

	public static void main(String[] args) {

		List<String> aprovados = Arrays.asList("lu", "Gui", "Luca", "Ana");
		
		// usando o for normal
//		for (int i = 0; i < aprovados.size(); i++) {
//			System.out.println(aprovados.get(i));
//		}

		// usando for fresco
//		for (String nome: aprovados) {
//			System.out.println(nome);
//		}
		
		//usando iterator
		
		 Iterator<String> it = aprovados.iterator();
		 while(it.hasNext()) {
			 System.out.println(it.next());
		 }
		 
		 
		 //laco interno usando Stream
		 Stream<String> st = aprovados.stream();
		 st.forEach(System.out::println);
		 
	}

}
