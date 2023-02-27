package excessao.personalizadaB;

@SuppressWarnings("serial")
public class NumeroNegativoException extends RuntimeException{

	String nomeDoAtributo;
	
	public NumeroNegativoException(String nomeDoAtributo) {
		this.nomeDoAtributo = nomeDoAtributo;
	}
	
	public String getMessage() {
		return String.format("O atributo %s está negativo", nomeDoAtributo);
	}
	
}
