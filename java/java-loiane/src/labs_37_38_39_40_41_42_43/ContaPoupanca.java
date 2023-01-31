package labs_37_38_39_40_41_42_43;

import java.util.Calendar;

public class ContaPoupanca extends ContaBancaria {

	int diaRendimento;
	
	public int getDiaRendimento() {
		return diaRendimento;
	}

	public void setDiaRendimento(int diaRendimento) {
		this.diaRendimento = diaRendimento;
	}

	@Override
	public String toString() {
		String s = "Conta Poupanca";
		s += "Dia rendimento: " + this.getDiaRendimento() + "\n";
		s += super.toString();
		
		return s;
	}
	
	public boolean calcularNovoSaldo(double taxaRendimento) {
		Calendar hoje = Calendar.getInstance();
		
		if (diaRendimento == hoje.get(Calendar.DAY_OF_MONTH)) {
//			saldo += saldo * taxaRendimento;
			this.setSaldo(this.getSaldo() + this.getSaldo() * taxaRendimento);
			return true;
		}
		return false;
	}
	
}
