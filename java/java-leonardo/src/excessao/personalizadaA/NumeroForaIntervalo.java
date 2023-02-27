package excessao.personalizadaA;

@SuppressWarnings("serial")
public class NumeroForaIntervalo extends RuntimeException{

	String nomeDoAtributo;
	
	public NumeroForaIntervalo(String nomeDoAtributo) {
		this.nomeDoAtributo = nomeDoAtributo;
	}
	
	public String getMessage() {
		return String.format("O atributo %s está fora do intervalo", nomeDoAtributo);
	}
	
}
