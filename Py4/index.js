const { ethers } = require("ethers");

// Reemplaza con tu URL de Alchemy
const alchemyUrl =
  "<https://eth-mainnet.g.alchemy.com/v2/YOUR_ALCHEMY_PROJECT_ID>";

// Crear un proveedor usando la URL de Alchemy
const provider = new ethers.JsonRpcProvider(alchemyUrl);

// Obtener el número de bloque actual
async function getBlockNumber() {
  try {
    const blockNumber = await provider.getBlockNumber();
    console.log("Número de bloque actual:", blockNumber);
  } catch (e) {
    console.error("Error al obtener el número de bloque", e);
  }
}

getBlockNumber();
