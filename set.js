const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;postgresql://hacking_database_q4zj_user:CuF96cXla7yH23fDrGsHFrKQa2e0Tog6@dpg-cqjo9ruehbks73cf84mg-a.oregon-postgres.render.com/hacking_database_q4zj
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFOaWJET0dvU0JrOWNGWFdnZlVlSkFtbk1HYjhrSXlIaXdtSGkxWS9VVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGhXenRvcHIxMzZOekhPQWw1OXB2cWdwNW10dkYybVViQ0RXQ0hWWFBoVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSWZyS2l6K1lMaDY5WGJMUFNwVHhKUVJZVnlPQnRuUko4TDF2MVRQdDFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiV3RMazArNk00aG1JWm03OUFMSG1ENFE1RGlEQW5nTVlKTVhXVktLV2dNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZHY0wvMHFxdzBnWTFmN082MmVRNkRJRzdWOFdhSEw2RUhEcElUNlJkVm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFEM2tQUGJKNHdvU0RTaSsrcXd2UmJ3WjFFZmNUc1BpMW1VdGZERE5pMGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtxUC9IOW1NVDgzaUZLQ2NpdE5iYnlYaDM0emp4UzNpV3MxcE4xeHRWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0pmMHBheTRrSFBIWld2aml5TUF5dkVYaFp6Zms3K0M0c3F4UHppOUtGZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNYUm1PSzA5WERoeWUzTTQvcllzM0hpajdjMlNLdFlOckx1SkFSNjZIZVlTU1UreGdweENkdFRRNkUrdTZtV2UwalFIWlZ4VTdTT1BqVTRzMmI4bmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiJwTVRpbWRNdGdQOFMvYk1jeDhkejNzMy9DZ1BJaWk1aUJuN2grL3oxa25nPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJzdG44LXhlUlIyR0pKQWZoaVh5dkFBIiwicGhvbmVJZCI6ImQ2MmEzMGRlLWNmZGMtNGQ2Ny1hN2UyLTNhOTkyNGY4NDY0ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4QjVsZkppRy8vckd1OWZrc25sRlFlODVHaFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXZPTDhUVGtSWnlCK1g1Vkp5b2FlQXVRbE9RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpQQUFEWEZSIiwibWUiOnsiaWQiOiIyNDM5NzI2ODE5NzQ6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS8OLTsOETvOxoo8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pyemc5SURFS3FQcmJVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InJja2pCS21BSG5iMi84MXVPU21GWVN2UkZGSHJJMVFjbVVldTlJQU5obHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImQ1dUNRY0ZWMzViWjJzUmsxYWQ0SHZ6MlByaEJvVGc0YzNrWllZZ1p4TGNvR3lPRVFPM2FEajhPWnBIQUNNcmphWXNpY1hOMWcvdE5YWGxMdXphekNRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3VW5paTE5MVRHcWdRUXBDVThIWHovMHBCb3dBenFPSWpXZk0wczhGbUpaTmZXZ3BqSFNjb2l1Mkh0bG1QMnl4KytYRFFTeGVjb0VGRGNUb0ZaSmpndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0Mzk3MjY4MTk3NDoyNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhM0pJd1NwZ0I1Mjl2L05iamtwaFdFcjBSUlI2eU5VSEpsSHJ2U0FEWVpiIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyNTAxMDQ4fQ==',
    PREFIXE: process.env.PREFIX || ":",
    OWNER_NAME: process.env.OWNER_NAME || "KËNÄN",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "243972681974",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'HUNCHO MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/e18441d126f37be8efbfa.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://hacking_database_q4zj_user:CuF96cXla7yH23fDrGsHFrKQa2e0Tog6@dpg-cqjo9ruehbks73cf84mg-a.oregon-postgres.render.com/hacking_database_q4zj",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
