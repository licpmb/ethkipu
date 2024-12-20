const { ethers } = require("hardhat");

describe("Greeter", function () {
    let Greeter;
    let greeter;

    this.beforeEach(async function () {
        Greeter = await ethers.getContractFactory("Greeter");
        greeter = await Greeter.deploy("Hola");
    });
    it("Debería inicializarse con el saludo 'Hola'", async ()=>{
        const greeting = await greeter.greet();
        expect(greeting).to.equal("Hola");
    });
    it("Debería cambiar el saludo y leerlo correctamente", async () => {
        await greeter.setGreeting("Hola Mundo");
      const newGreeting = await greeter.greet();
      expect(newGreeting).to.equal("Hola Mundo");
    });

})