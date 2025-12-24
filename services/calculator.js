export function calculateWeightOnPlanet(userWeight, planetGravity) {
    // Dünyadaki kütleyi bul (G=9.8) ve yeni gezegen çekimiyle çarp
    const worldGravity = 9.8;
    const result = (userWeight / worldGravity) * planetGravity;
    return result.toFixed(2); // Virgülden sonra 2 basamak
}
