const { Builder, By } = require('selenium-webdriver');

async function testGestionRH() {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Charger l'application
        await driver.get('file:///<CHEMIN_ABSOLU_VERS_INDEX.HTML>');

        // Test Ajouter un employé
        await driver.findElement(By.id('ajout-nom')).sendKeys('Bernard');
        await driver.findElement(By.id('ajout-poste')).sendKeys('Manager');
        await driver.findElement(By.xpath("//button[contains(text(),'Ajouter')]")).click();
        let employes = await driver.findElement(By.id('liste-employes')).getText();
        console.log("Test Ajouter:", employes.includes('Bernard - Manager') ? "Réussi" : "Échoué");

        // Test Supprimer un employé
        await driver.findElement(By.id('supprimer-id')).sendKeys('1');
        await driver.findElement(By.xpath("//button[contains(text(),'Supprimer')]")).click();
        employes = await driver.findElement(By.id('liste-employes')).getText();
        console.log("Test Supprimer:", !employes.includes('Dupont - Développeur') ? "Réussi" : "Échoué");

    } finally {
        await driver.quit();
    }
}

testGestionRH();
