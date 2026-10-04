## Versão 2.3.1

- Força uma nova limpeza única do histórico e rascunhos dos Treinos A e B, corrigindo casos em que a migração 2.3 não removeu o registro anterior.
- Mantém o histórico do Treino C.
- Reforça o uso da data real do dia em novas sessões.

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


## Versão 2.2.0
- Cronômetro baseado no horário real do aparelho, evitando perda de tempo quando o iPhone bloqueia a tela ou suspende JavaScript.
- Sequência obrigatória A → B → C → A. Somente o próximo treino fica habilitado; Histórico continua livre.
- Apenas “Concluir treino” avança a sequência. “Finalizar parcial” mantém o mesmo treino liberado.
- Histórico, cargas e registros anteriores são preservados.


## Versão 2.3

- Confirmação obrigatória antes de concluir/desmarcar exercícios, concluir/desmarcar cardio e finalizar treino completo ou parcial.
- Migração única: apaga os históricos e rascunhos dos Treinos A e B existentes no aparelho, para reiniciar o ciclo conforme solicitado. A limpeza ocorre apenas uma vez nesta atualização.
- Ao abrir um treino, a data é atualizada automaticamente para a data real do aparelho naquele dia.
- Mantém a sequência A → B → C e o cronômetro baseado no horário real.
