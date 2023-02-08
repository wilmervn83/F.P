async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();
  
  console.log("Account balance:", (await ethers.utils.formatEther(weiAmount)));


  const Donut = await  ethers.getContractFactory("Donut");
  const donut = await Donut.deploy();
 
  const Donut1 = await ethers.getContractFactory("Donut1");
  const donut1 = await Donut1.deploy();

  const Donut2 = await ethers.getContractFactory("Donut2");
  const donut2 = await Donut2.deploy();

  const Donut3 = await ethers.getContractFactory("Donut3");
  const donut3 = await Donut3.deploy();


  console.log(
    `Donut deployed to ${donut.address}`, `Donut1 deployed to ${donut1.address}`,`Donut2 deployed to ${donut2.address}`,`Donut3 deployed to ${donut3.address}`
  );





}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
