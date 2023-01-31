package labs_37_38_39_40_41_42_43.EX02;

public class PessoaFisica extends Contribuinte {
	private String cpf;
	
	public PessoaFisica(String nome, double rendaBruta, String cpf) {
		super(nome, rendaBruta);
		this.cpf = cpf;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	@Override
	public double calcularImposto() {
		
		double rb = this.getRendaBruta();
		
		if (rb <= 1400) {
				return 0;
			} else if (rb > 1400 && rb <= 2100) {
				return (rb * 0.10) - 100;
			} else if (rb > 2100 && rb <= 2800) {
				return (rb * 0.15) - 270;
			} else if (rb > 2800 && rb <= 3600) {
				return (rb * 0.25) - 500;
			} else {
				return (rb * 0.30) - 700;
		}
	}
	
	@Override
	public String toString() {
		String s = "Pessoa Física: " + "\n";
		s += super.toString();
		s += ". Cpf: " + this.cpf;
		s += ". O imposto a ser pago é de: " + this.calcularImposto();
		
		return s;
	}
	
}
