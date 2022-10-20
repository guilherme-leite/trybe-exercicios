def sales_by_console(games_data: list):
    console_sales = dict()


    for game in games_data:
      game_console = game['Release']['Console']
      game_sales  = game['Metrics']['Sales']

      console_sales[game_console] = (
          console_sales.get(game_console, 0) + game_sales
      )

    return console_sales