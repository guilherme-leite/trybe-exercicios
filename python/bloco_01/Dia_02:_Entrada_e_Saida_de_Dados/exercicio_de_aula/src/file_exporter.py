import csv


def export_data(report_data: dict, headers: list):
        with open('report.csv', mode='w') as file:
          csv_writer = csv.writer(file)
          csv_writer.writerow(headers)
          for key, value in report_data.items():
              csv_writer.writerow([key, value])