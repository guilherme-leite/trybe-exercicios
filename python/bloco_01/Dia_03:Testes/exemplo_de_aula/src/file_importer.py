import json

def import_data(filepath: str):
    if not filepath.endswith(".json"):
        raise ValueError("Formato de arquivo inválido")

    try:
        with open(filepath) as file:
            return json.load(file)
    except FileNotFoundError:
        raise FileNotFoundError(f"Arquivo inexistente: {filepath}")
