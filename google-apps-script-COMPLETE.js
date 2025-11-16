/**
 * Google Apps Script for Multi-Project Email Lead Capture
 * Supports: Gujarati SEO, Simuwash, Declutr, RentSplit, Catholic Dating, Class Action
 *
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Copy this ENTIRE script
 * 2. Open: https://docs.google.com/spreadsheets/d/19g0Bf1QgAnZeFkfxXV0ELrUJjvs3zg4EvIGAmdZOTtY
 * 3. Go to Extensions > Apps Script
 * 4. REPLACE ALL CODE with this script
 * 5. Save (Cmd+S)
 * 6. Click Deploy > Manage deployments
 * 7. Click pencil icon (Edit)
 * 8. Under "Version", select "New version"
 * 9. Click "Deploy"
 */

function doPost(e) {
  try {
    const spreadsheet = SpreadsheetApp.openById(
      "19g0Bf1QgAnZeFkfxXV0ELrUJjvs3zg4EvIGAmdZOTtY"
    );

    // Parse POST data
    let email, source, project, name, age, gender, city, state;

    if (e.postData && e.postData.type === "application/json") {
      const data = JSON.parse(e.postData.contents);
      email = data.email;
      source = data.source || "website";
      project = data.project || "gujarati-seo";
      name = data.name || "";
      age = data.age || "";
      gender = data.gender || "";
      city = data.city || "";
      state = data.state || "";
    } else {
      email = e.parameter.email;
      source = e.parameter.source || "website";
      project = e.parameter.project || "gujarati-seo";
      name = e.parameter.name || "";
      age = e.parameter.age || "";
      gender = e.parameter.gender || "";
      city = e.parameter.city || "";
      state = e.parameter.state || "";
    }

    let sheet;

    // SIMUWASH
    if (project === "simuwash") {
      sheet = spreadsheet.getSheetByName("Simuwash");
      if (!sheet) {
        sheet = spreadsheet.insertSheet("Simuwash");
        sheet.appendRow(["Timestamp", "Email", "Source"]);
      }
      sheet.appendRow([new Date(), email, source]);

    // DECLUTR
    } else if (project === "declutr") {
      sheet = spreadsheet.getSheetByName("Declutr");
      if (!sheet) {
        sheet = spreadsheet.insertSheet("Declutr");
        sheet.appendRow(["Timestamp", "Email", "Source"]);
      }
      sheet.appendRow([new Date(), email, source]);

    // RENTSPLIT
    } else if (project === "rentsplit") {
      sheet = spreadsheet.getSheetByName("RentSplit");
      if (!sheet) {
        sheet = spreadsheet.insertSheet("RentSplit");
        sheet.appendRow(["Timestamp", "Email", "Source"]);
      }
      const existingEmails = sheet.getRange("B:B").getValues().flat();
      if (existingEmails.includes(email)) {
        return ContentService.createTextOutput(
          JSON.stringify({
            success: false,
            message: "Email already registered"
          })
        ).setMimeType(ContentService.MimeType.JSON);
      }
      sheet.appendRow([new Date(), email, source]);

    // CATHOLIC DATING
    } else if (project === "catholic-dating") {
      sheet = spreadsheet.getSheetByName("CatholicDating");
      if (!sheet) {
        sheet = spreadsheet.insertSheet("CatholicDating");
        sheet.appendRow(["Timestamp", "Name", "Age", "Gender", "City", "State", "Email", "Source"]);
      }
      const existingEmails = sheet.getRange("G:G").getValues().flat();
      if (existingEmails.includes(email)) {
        return ContentService.createTextOutput(
          JSON.stringify({
            success: false,
            message: "Email already registered"
          })
        ).setMimeType(ContentService.MimeType.JSON);
      }
      sheet.appendRow([new Date(), name, age, gender, city, state, email, source]);

    // CLASS ACTION
    } else if (project === "class-action") {
      sheet = spreadsheet.getSheetByName("ClassAction");
      if (!sheet) {
        sheet = spreadsheet.insertSheet("ClassAction");
        sheet.appendRow(["Timestamp", "Email", "Source"]);
      }
      const existingEmails = sheet.getRange("B:B").getValues().flat();
      if (existingEmails.includes(email)) {
        return ContentService.createTextOutput(
          JSON.stringify({
            success: false,
            message: "Email already registered"
          })
        ).setMimeType(ContentService.MimeType.JSON);
      }
      sheet.appendRow([new Date(), email, source]);

    // DEFAULT (GUJARATI SEO)
    } else {
      sheet = spreadsheet.getSheets()[0];
      const existingEmails = sheet.getRange("B:B").getValues().flat();
      if (existingEmails.includes(email)) {
        return ContentService.createTextOutput(
          JSON.stringify({
            success: false,
            message: "Email already registered"
          })
        ).setMimeType(ContentService.MimeType.JSON);
      }
      sheet.appendRow([new Date(), email, source]);
    }

    // Success response
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Submitted successfully"
      })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: false,
        message: "Error: " + error.toString()
      })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doOptions(e) {
  return ContentService.createTextOutput("");
}
