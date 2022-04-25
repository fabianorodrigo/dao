const {ethers} = require("hardhat");

async function main() {
  // Now deploy the CryptoDevsDAO contract
  const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
  const dao = await CryptoDevsDAO.attach(
    "0xd4c2eEE7580B29F5be707E012580766047A88a79"
  );
  const receipt = await dao.withdrawEther();
  await receipt.wait();

  console.log("CryptoDevsDAO withdrawn");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
