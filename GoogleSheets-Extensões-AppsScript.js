function doGet(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const result = {};

  for (let i = 1; i < data.length; i++) {
    result[data[i][0]] = data[i][1];
  }

  return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const body = JSON.parse(e.postData.contents);

  const data = sheet.getDataRange().getValues();
  const map = {};

  for (let i = 1; i < data.length; i++) {
    map[data[i][0]] = i + 1;
  }

  for (let key in body) {
    if (map[key]) {
      sheet.getRange(map[key], 2).setValue(body[key]);
    } else {
      sheet.appendRow([key, body[key]]);
    }
  }

  return ContentService.createTextOutput("OK");
}
