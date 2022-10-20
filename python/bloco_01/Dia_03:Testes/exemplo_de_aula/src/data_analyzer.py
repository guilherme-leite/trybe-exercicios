def filter_titles_by_console(games_data: list, console: str):
	result = []
	for game in games_data:
		if console == game['Release']['Console']:
			result.append(game['Title'])
	return result

def filter_titles_by_genre(games_data: list, genre: str):
    result = []
    for game in games_data:
        if genre in game["Metadata"]["Genres"].split(","):
            result.append(game["Title"])
    return result
