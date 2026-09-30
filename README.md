# Meu Treino — PWA v2.1

Esta versão mantém o treino A/B/C e acrescenta:

- histórico automático: **Concluir treino** arquiva a sessão completa sem outra confirmação;
- **Finalizar parcial** também arquiva a sessão, marcada como parcial;
- cada registro histórico guarda cargas, repetições, alternativa A/B, esforço, dor, observações, cardio e tempo;
- o histórico também guarda o nome dos exercícios daquela versão do plano, para continuar legível após futuras alterações;
- retenção local de até 750 sessões;
- detecção de atualização da PWA com aviso **Nova versão disponível → Atualizar agora**;
- atualização sem apagar o histórico local;
- funcionamento offline após o carregamento inicial.

## Atualizar o GitHub Pages manualmente

Substitua no repositório os arquivos desta pasta (principalmente `index.html`, `sw.js` e `manifest.webmanifest`) e faça um commit. O GitHub Pages publicará automaticamente a nova versão.

No iPhone, ao abrir a PWA, ela verificará se existe uma versão nova. Quando houver, aparecerá um aviso para atualizar.

## Dados pessoais do treino

Cargas, repetições e histórico permanecem no armazenamento local da PWA no iPhone. Eles não são enviados ao repositório público do GitHub. Use **Histórico → Exportar backup JSON** periodicamente para ter uma cópia fora do aparelho.
