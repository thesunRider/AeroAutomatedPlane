
const wrapper = async () => {
  try {
    await Promise.all([asyncInterval(adddata_temp, 5000),asyncInterval(adddata_ping, 5000),asyncInterval(adddata_spd, 500),asyncInterval(adddata_rand, 2000)]);

  } catch (e) {
    console.log('error handling');
  }
  console.log("Done!");
  wrapper();
}

wrapper();