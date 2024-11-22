const { employes, ajouterEmploye, supprimerEmploye } = require('./app');

describe('Gestion RH - Tests unitaires', () => {
    beforeEach(() => {
        // Réinitialiser la liste des employés
        employes.length = 0;
        employes.push(
            { id: 1, nom: "Dupont", poste: "Développeur" },
            { id: 2, nom: "Durand", poste: "Designer" },
            { id: 3, nom: "Martin", poste: "Chef de projet" }
        );
    });

    test('ajouterEmploye ajoute un nouvel employé', () => {
        ajouterEmploye(4, 'Bernard', 'Manager');
        expect(employes).toContainEqual({ id: 4, nom: 'Bernard', poste: 'Manager' });
    });

    test('supprimerEmploye supprime un employé existant', () => {
        supprimerEmploye(2);
        expect(employes).not.toContainEqual({ id: 2, nom: 'Durand', poste: 'Designer' });
    });

    test('supprimerEmploye ne fait rien si l\'employé n\'existe pas', () => {
        supprimerEmploye(999);
        expect(employes.length).toBe(3); // Aucun changement
    });
});
test('modifierEmploye modifie les informations d\'un employé existant', () => {
    modifierEmploye(1, 'Duponté', 'Tech Lead');
    expect(employes).toContainEqual({ id: 1, nom: 'Duponté', poste: 'Tech Lead' });
});

test('modifierEmploye ne modifie rien si l\'ID n\'existe pas', () => {
    modifierEmploye(999, 'Inconnu', 'Inconnu');
    expect(employes.length).toBe(3); // Aucun changement
});
