const httpStatus = require('http-status');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const catchAsync = require('../utils/catchAsync');
const ApiError = require('../utils/ApiError');

const downloadBackup = catchAsync(async (req, res) => {
  try {
    const { DB_NAME } = process.env;
    const BACKUP_DIR = path.join(__dirname, '../', 'backups');

    if (!fs.existsSync(BACKUP_DIR)) {
      fs.mkdirSync(BACKUP_DIR);
    }

    const backupFileName = `${DB_NAME}-${new Date().toISOString().replace(/:/g, '-')}.gz`;
    const dumpCmd = `mongodump --uri="mongodb://127.0.0.1:27017" --db=library_project --archive="${path.join(
      BACKUP_DIR,
      backupFileName
    )}" --gzip`;

    exec(dumpCmd, (err) => {
      if (err) {
        throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Backup Failed');
      }

      return res.download(path.join(BACKUP_DIR, backupFileName));
    });
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Server Error');
  }
});

const uploadBackup = catchAsync(async (req, res) => {
  if (!req.file) {
    throw new ApiError(httpStatus.FORBIDDEN, 'back file is required');
  }

  return res.status(httpStatus.OK).send('OK');
});

module.exports = {
  downloadBackup,
  uploadBackup,
};
