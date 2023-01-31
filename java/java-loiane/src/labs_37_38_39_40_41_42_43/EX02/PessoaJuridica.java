package labs_37_38_39_40_41_42_43.EX02;

public class PessoaJuridica extends Contribuinte {
	private String cnpj;
	
	public PessoaJuridica(String nome, double rendaBruta, String cnpj) {
		super(nome, rendaBruta);
		this.cnpj = cnpj;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	@Override
	public double calcularImposto() {
		return this.getRendaBruta() * 0.10;
	}
	
	@Override
	public String toString() {
		String s = "Pessoa Jurídica: " + "\n";
		s += super.toString();
		s += ". Cnpj: " + this.cnpj;
		s += ". O imposto a ser pago é de: " + this.calcularImposto();
		
		return s;
	}
	
}
