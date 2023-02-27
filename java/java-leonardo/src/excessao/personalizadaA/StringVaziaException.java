package excessao.personalizadaA;

@SuppressWarnings("serial")
public class StringVaziaException extends RuntimeException{

	String nomeDoAtributo;
	
	public StringVaziaException(String nomeDoAtributo) {
		this.nomeDoAtributo = nomeDoAtributo;
	}
	
	public String getMessage() {
		return String.format("O atributo %s está vazio", nomeDoAtributo);
	}
	
}
