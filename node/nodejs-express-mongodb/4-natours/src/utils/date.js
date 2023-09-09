const ONE_SECONDS_IN_MIL = 1000;
const BASE_DECIMAL = 10;

const convertLocalTimeZoneToUnix = (date) =>
  parseInt(date.getTime() / ONE_SECONDS_IN_MIL, BASE_DECIMAL);

module.exports = { convertLocalTimeZoneToUnix };
