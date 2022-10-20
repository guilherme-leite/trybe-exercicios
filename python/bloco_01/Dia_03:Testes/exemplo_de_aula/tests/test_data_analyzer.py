from src.data_analyzer import filter_titles_by_console, filter_titles_by_genre


def test_filter_titles_by_console():
	data = [
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


	result = filter_titles_by_console(data, 'Nintendo DS')

	assert result == [
		'Spider-Man 2',
		'The Urbz: Sims in the City',
		'WarioWare Touched!',
	]

def test_filter_titles_by_genre():
	data = [
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


	result = filter_titles_by_genre(data, 'Action')

	expected = ['Spider-Man 2','WarioWare Touched!']
	
	assert result == expected
