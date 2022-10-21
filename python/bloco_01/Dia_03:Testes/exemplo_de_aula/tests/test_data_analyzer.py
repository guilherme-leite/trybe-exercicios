from src.data_analyzer import filter_titles_by_console, filter_titles_by_genre
import pytest

def test_filter_titles_by_console(mock_data):

	result = filter_titles_by_console(mock_data, 'Nintendo DS')

	assert result == [
		'Spider-Man 2',
		'The Urbz: Sims in the City',
		'WarioWare Touched!',
	]

def test_filter_titles_by_genre(mock_data):
	result = filter_titles_by_genre(mock_data, 'Action')

	expected = ['Spider-Man 2','WarioWare Touched!']
	
	assert result == expected
