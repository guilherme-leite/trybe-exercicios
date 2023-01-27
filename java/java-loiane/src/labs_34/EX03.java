package labs_34;

public class EX03 {

	public static void main(String[] args) {
		imprimir(ConversorDeUnidadesDeVolume.litroParaCm3(3));
		imprimir(ConversorDeUnidadesDeVolume.galaoParaLitros(12));
		imprimir(ConversorDeUnidadesDeVolume.galaoParaPolegadas3(12));
		imprimir(ConversorDeUnidadesDeVolume.metroCubicoParaLitro(12));
		imprimir(ConversorDeUnidadesDeVolume.metroCubicoParaPes3(12));
	}
	
	public static void imprimir(double num) {
		System.out.println(num);
	}
	
}

