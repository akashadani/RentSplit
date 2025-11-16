/**
 * ADD THIS TO YOUR EXISTING GOOGLE APPS SCRIPT
 *
 * INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/19g0Bf1QgAnZeFkfxXV0ELrUJjvs3zg4EvIGAmdZOTtY
 * 2. Go to Extensions > Apps Script
 * 3. Find the doPost function
 * 4. Add the code snippet below AFTER the "catholic-dating" section (around line 101)
 *    and BEFORE the final "else" clause (around line 102)
 * 5. Save (Cmd+S or Ctrl+S)
 * 6. Deploy new version:
 *    - Click Deploy > Manage deployments
 *    - Click pencil icon (Edit)
 *    - Select "New version"
 *    - Click Deploy
 *
 * The "RentSplit" sheet will be auto-created on first submission with columns:
 * Timestamp | Email | Source
 */

// ADD THIS CODE SNIPPET TO YOUR doPost FUNCTION:

    } else if (project === "rentsplit") {
      sheet = spreadsheet.getSheetByName("RentSplit")
      if (!sheet) {
        sheet = spreadsheet.insertSheet("RentSplit")
        sheet.appendRow(["Timestamp", "Email", "Source"])
      }
      // Check if email already exists in column B (Email column)
      const existingEmails = sheet.getRange("B:B").getValues().flat()
      if (existingEmails.includes(email)) {
        const output = ContentService.createTextOutput(
          JSON.stringify({
            success: false,
            message: "Email already registered",
          }),
        ).setMimeType(ContentService.MimeType.JSON)

        output.setHeaders({
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          "Access-Control-Allow-Headers": "Content-Type",
        })

        return output
      }
      // Add row with timestamp, email, source for RentSplit
      sheet.appendRow([new Date(), email, source])
