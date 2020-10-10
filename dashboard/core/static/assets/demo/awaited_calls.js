
const wrapper = async () => {
  try {
    await Promise.all([asyncInterval(adddata_temp, 5000),asyncInterval(adddata_spd, 500),asyncInterval(adddata_wind, 8000)]);

  } catch (e) {
    console.log('error handling');
  }
  console.log("Done!");
  wrapper();
}

wrapper();