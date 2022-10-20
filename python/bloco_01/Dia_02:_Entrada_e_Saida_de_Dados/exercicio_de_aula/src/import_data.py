import json


def import_data(file_path):
    try:
        with open(file_path) as file:
            return json.load(file)
    except FileNotFoundError:
        raise ValueError('Arquivo com nome errado')
    except json.decoder.JSONDecodeError:
        raise ValueError('Erro no Json')