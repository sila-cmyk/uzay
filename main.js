import { getPlanetData } from './services/planet.js';
import { calculateWeightOnPlanet } from './services/calculator.js';

async function initApp() {
    const btn = document.getElementById('calcBtn');
    const planetInput = document.getElementById('planetInput');
    const weightInput = document.getElementById('weightInput');
    const resultArea = document.getElementById('result');

    btn.addEventListener('click', async () => {
        try {
            resultArea.innerHTML = "Kozmik veriler çekiliyor...";
            
            // 1. API Çağrısı: Gezegen verilerini al
            const planet = await getPlanetData(planetInput.value);
            
            // 2. Mantıksal Bağlantı: Gezegenden gelen gravity ile ağırlık hesapla
            const finalWeight = calculateWeightOnPlanet(weightInput.value, planet.gravity);

            resultArea.innerHTML = `
                <div style="border: 1px solid #ccc; padding: 10px; margin-top: 10px;">
                    <strong>Gezegen:</strong> ${planet.name} <br>
                    <strong>Yerçekimi:</strong> ${planet.gravity} m/s² <br>
                    <strong>Oradaki Ağırlığınız:</strong> ${finalWeight} kg
                </div>
            `;
        } catch (error) {
            resultArea.innerHTML = "Hata: " + error.message;
        }
    });
}

initApp();
