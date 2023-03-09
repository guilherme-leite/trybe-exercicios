package padroes.observer;

import java.util.Date;

public class EventochegadaAniversariante {
	private final Date momento;

	public EventochegadaAniversariante(Date momento) {
		this.momento = momento;
	}

	public Date getMomento() {
		return momento;
	}
	
}
