from src.file_exporter import export_data
from src.game_analyzer import sales_by_console
from src.import_data import import_data
from rich import print

def exemplo_de_aula_ao_vivo():
	MENU_OPTIONS = '''
Escolha uma das opções:
0 - Sair
1 - Realizar análise
	'''

	user_input = input(MENU_OPTIONS)

	if user_input == '0':
		print('0: Sair')
		return

	games_data = import_data('video_games.json')

	if user_input == '1':
		report = sales_by_console(games_data)
		print('Realizando análise')
		export_data(report, ['console', 'total_sales'])
	else:
		print(f'{user_input} case')

if __name__ == '__main__':
	exemplo_de_aula_ao_vivo()