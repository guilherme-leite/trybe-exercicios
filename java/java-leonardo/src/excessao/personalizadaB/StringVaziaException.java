package excessao.personalizadaB;

@SuppressWarnings("serial")
public class StringVaziaException extends Exception{

	String nomeDoAtributo;
	
	public StringVaziaException(String nomeDoAtributo) {
		this.nomeDoAtributo = nomeDoAtributo;
	}
	
	public String getMessage() {
		return String.format("O atributo %s está vazio", nomeDoAtributo);
	}
	
}
