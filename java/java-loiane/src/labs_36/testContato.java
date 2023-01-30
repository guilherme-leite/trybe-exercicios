package labs_36;

public class testContato {

	public static void main(String[] args) {
		
		Contatos cont = new Contatos();
		
		cont.setNome("Gui");
//		cont.setTelefone("33454262");
//		cont.setEndereco("Laurentino Proenca Filho");
		
		Endereco end = new Endereco();
		
		end.setNomeDaRua("Laurentino P");
		end.setNumero("-");
		end.setComplemento("-");
		end.setCidade("Vitoria");
		end.setEstado("ES");
		end.setCep("12345");
		
		cont.setEndereco(end);
		
		System.out.println(cont.getNome());
//		System.out.println(cont.getTelefone());
		
		if (cont != null && cont.getEndereco() != null) {
			System.out.println(cont.getEndereco().getCidade());
		}
		
		Telefone tel1 = new Telefone();
		
		tel1.setNumero("33454262");
		tel1.setTipo("residencial");
		tel1.setDdd("27");
		

		Telefone tel2 = new Telefone();
		
		tel2.setNumero("32274666");
		tel2.setTipo("residencial");
		tel2.setDdd("27");

		Telefone[] telefones = new Telefone[2];
		telefones[0] = tel1;
		telefones[1] = tel2;
		
//		cont.setTelefone(tel);
		cont.setTelefones(telefones);
		
//		if (cont != null && cont.getTelefone() != null) {
//			System.out.println(cont.getTelefone().getNumero());
//		}
//		
		if (cont != null && cont.getTelefones() != null) {
			
			for (Telefone t : cont.getTelefones()) {
				System.out.println(t.getDdd() + " " + t.getNumero());
			}
		}
		
	}
}
