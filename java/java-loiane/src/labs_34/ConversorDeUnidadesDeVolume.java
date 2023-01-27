package labs_34;

public class ConversorDeUnidadesDeVolume {

	public static double litroParaCm3(double litros) {
		return litros / 1000;
	}
	
	public static double metroCubicoParaLitro(double metroCubico) {
		return metroCubico / 1000;
	}

	public static double metroCubicoParaPes3(double metroCubico) {
		return metroCubico / 35.32;
	}
	
	public static double galaoParaPolegadas3(double galao) {
		return galao * 231;
	}

	public static double galaoParaLitros(double galao) {
		return galao * 3.785;
	}
	
}		
