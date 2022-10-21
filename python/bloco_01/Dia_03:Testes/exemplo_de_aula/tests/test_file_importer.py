import json
from src.file_importer import import_data
import pytest
from unittest.mock import mock_open, patch

@pytest.fixture
def mock_data():
    return [
        {
            "Title": "Hot Shots Golf: Open Tee",
            "Metadata": {
                "Genres": "Sports",
                "Licensed?": True,
                "Publishers": "Sony",
                "Sequel?": True,
            },
            "Release": {
                "Console": "Sony PSP",
                "Rating": "E",
                "Re-release?": True,
                "Year": 2004,
            },
        },
        {
            "Title": "Spider-Man 2",
            "Metadata": {
                "Genres": "Action",
                "Licensed?": True,
                "Publishers": "Activision",
                "Sequel?": True,
            },
            "Release": {
                "Console": "Nintendo DS",
                "Rating": "E",
                "Re-release?": True,
                "Year": 2004,
            },
        },
        {
            "Title": "The Urbz: Sims in the City",
            "Metadata": {
                "Genres": "Simulation",
                "Licensed?": True,
                "Publishers": "EA",
                "Sequel?": True,
            },
            "Release": {
                "Console": "Nintendo DS",
                "Rating": "M",
                "Re-release?": True,
                "Year": 2004,
            },
        },
        {
            "Title": "WarioWare Touched!",
            "Metadata": {
                "Genres": "Action,Racing / Driving,Sports",
                "Licensed?": True,
                "Publishers": "Nintendo",
                "Sequel?": True,
            },
            "Release": {
                "Console": "Nintendo DS",
                "Rating": "E",
                "Re-release?": True,
                "Year": 2004,
            },
        },
    ]

def test_file_importer_invalid_format():
	with pytest.raises(ValueError, match='Formato de arquivo inválido'):
		import_data('data/vide_games.csv')

def test_file_importer_not_found():
	with pytest.raises(FileNotFoundError, match='Arquivo inexistente:'):
		import_data('arquivo_que_não_existe.json')

def test_mock_file_open(mock_data):
	json_as_str = json.dumps(mock_data)
	with patch('builtins.open', mock_open(read_data=json_as_str)):
		import_data('arquivo_que_não_existe.json')