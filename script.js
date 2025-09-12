// ANIMAÇÃO DE MENU AO ROLAR
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.style.background = "#0d1117ee";
      header.style.transition = "0.3s";
    } else {
      header.style.background = "transparent";
    }
  });
  
  // BOTÃO SIMULAÇÃO
  const btnSimular = document.getElementById("simular");
  const resultado = document.getElementById("resultado");
  
  btnSimular.addEventListener("click", () => {
    resultado.textContent = "Carregando simulação...";
  
    // API Open-Meteo - Rio de Janeiro
    fetch("https://api.open-meteo.com/v1/forecast?latitude=-22.90&longitude=-43.20&current_weather=true")
      .then(res => res.json())
      .then(data => {
        const temp = data.current_weather.temperature;
        const exemplos = [
          "💡 Luzes da sala foram ligadas automaticamente!",
          "🔒 Sistema de segurança ativado.",
          `🌡️ Ar-condicionado ajustado para manter ${temp}°C no ambiente.`,
          "📹 Câmeras externas estão transmitindo em tempo real.",
          "📊 Painel empresarial mostra redução de 15% no consumo de energia."
        ];
  
        setTimeout(() => {
          const aleatorio = exemplos[Math.floor(Math.random() * exemplos.length)];
          resultado.textContent = aleatorio;
        }, 1500);
      })
      .catch(() => {
        resultado.textContent = "⚠️ Não foi possível acessar os dados de clima. Exibindo simulação padrão...";
        setTimeout(() => {
          const exemplos = [
            "💡 Luzes da sala foram ligadas automaticamente!",
            "🔒 Sistema de segurança ativado.",
            "🌡️ Ar-condicionado ajustado para 22°C.",
            "📹 Câmeras externas estão transmitindo em tempo real."
          ];
          const aleatorio = exemplos[Math.floor(Math.random() * exemplos.length)];
          resultado.textContent = aleatorio;
        }, 1500);
      });
  });
  
  // FORMULÁRIO
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("✅ Mensagem enviada com sucesso! Em breve nossa equipe entrará em contato.");
    form.reset();
  });
  
  // CLIMA FIXO NO HEADER - Rio de Janeiro
  const climaDiv = document.getElementById("clima");
  fetch("https://api.open-meteo.com/v1/forecast?latitude=-22.90&longitude=-43.20&current_weather=true")
    .then(res => res.json())
    .then(data => {
      const temp = data.current_weather.temperature;
      const wind = data.current_weather.windspeed;
      climaDiv.textContent = `🌡️ ${temp}°C | 💨 ${wind} km/h - Rio de Janeiro`;
    })
    .catch(() => {
      climaDiv.textContent = "⚠️ Clima indisponível";
    });
  