function doGet(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    var data = sheet.getDataRange().getValues();
  
    var headers = data.shift(); // Remove headers
    var jsonData = data.map(row => {
      let obj = {};
      headers.forEach((header, index) => {
        obj[header] = row[index];
      });
      return obj;
    });
  
    // Return JSONP response
    var callback = e.parameter.callback;
    var output = callback + '(' + JSON.stringify(jsonData) + ')';
    
    return ContentService.createTextOutput(output)
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  function doPost(e) {
    // open active spreadsheet and target the correct sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    // parse incoming json data
    var data = JSON.parse(e.postData.contents);
    // get the next unfilled row
    var nextRow = sheet.getLastRow() + 1;
    // append the data to the sheet
    sheet.appendRow([
      data.Date,
      data.HOS, // Hours of Sleep
      data.Weather,
      data.Breakfast,
      data.Lunch,
      data.Dinner,
      data.Snacks,
      data.Drinks,
      data.PEA, // Physical Activity
      data.Migraine // Migraine? Y/N
    ]);
    // set CORS headers
    var output = ContentService.createTextOutput(JSON.stringify({status: "success"}));
    output.setMimeType(ContentService.MimeType.JSON);
    output.append("\n");
    // add CORS headers to allow requests from any origin
    return output.setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type"
    });
  }
  