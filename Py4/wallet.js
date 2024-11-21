const { ethers } = require("ethers");
require("dotenv").config();

// URL del proveedor de Sepolia desde el archivo .env
const sepoliaUrl = process.env.SEPOLIA_URL;

// Crear un proveedor usando la URL de Sepolia
const provider = new ethers.JsonRpcProvider(sepoliaUrl);

// Cargar la billetera desde una clave privada
const privateKey = process.env.PRIVATE_KEY;
const wallet = new ethers.Wallet(privateKey, provider);

async function sendTransaction() {
  const tx = {
    to: "0x672d3caC3AbA2240c7c73bB826FD8eC7cB3BA56e", // Dirección de destino que debes especificar
    value: ethers.parseEther("0.01"), // Cantidad a enviar en ETH
    gasLimit: 21000,
    // gasPrice: opcional, puedes dejar que el proveedor determine el precio adecuado
  };

  try {
    const txResponse = await wallet.sendTransaction(tx);
    console.log("Transacción enviada:", txResponse.hash);

    // Esperar a que la transacción sea validada
    const receipt = await txResponse.wait();
    console.log("Transacción validada:", receipt);
  } catch (e) {
    console.error("Error al enviar la transacción", e);
  }
}

sendTransaction();

/* 
Llamadas más usadas en ethers.js
Proveedores (providers)
Creación de un proveedor

const provider = new ethers.JsonRpcProvider(url);
Obtener el número de bloque actual

const blockNumber = await provider.getBlockNumber();
Obtener el saldo de una dirección

const balance = await provider.getBalance(address);
Obtener información de un bloque

const block = await provider.getBlock(blockNumber);
Obtener el historial de transacciones de una dirección

const history = await provider.getHistory(address);
Obtener el precio del gas

const gasPrice = await provider.getGasPrice();
Obtener una transacción

const tx = await provider.getTransaction(transactionHash);
Obtener el estado de una transacción

const txReceipt = await provider.getTransactionReceipt(txHash);
*/