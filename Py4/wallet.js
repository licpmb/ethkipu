const { ethers } = require("ethers");

// Reemplaza con tu URL de Alchemy
const alchemyUrl =
  "https://eth-sepolia.g.alchemy.com/v2/sv9e5nOMVMZrnDLvmNJsUl-bLEaXHS6h";

// Crear un proveedor usando la URL de Alchemy
const provider = new ethers.JsonRpcProvider(alchemyUrl);

// Indicar la cuenta de la que se quiere conocer el saldo
const address = "0xEf5521308CDC37399fFD06310016041639a9CF83";

// Obtener el saldo de la cuenta
async function getBalance() {
  try {
    const balance = await provider.getBalance(address);
    console.log("Saldo de la cuenta:", ethers.formatEther(balance), "ETH");
  } catch (e) {
    console.error("Error al obtener el saldo de la cuenta", e);
  }
}

getBalance();
