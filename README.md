# Meu Treino — PWA para iPhone

Pacote pronto para publicar no GitHub Pages.

## Arquivos
- `index.html`: aplicativo de treino interativo.
- `manifest.webmanifest`: dados do app para instalação.
- `sw.js`: service worker para funcionamento offline.
- `icon-192.png`, `icon-512.png`, `apple-touch-icon.png` e `favicon.png`: ícones da Tela de Início e navegador.
- `.nojekyll`: evita processamento desnecessário pelo Jekyll.

## Publicação resumida
1. Crie um repositório no GitHub, por exemplo `meu-treino`.
2. Envie **todo o conteúdo desta pasta** para a raiz do repositório.
3. Em **Settings → Pages**, escolha **Deploy from a branch**.
4. Selecione a branch `main` e a pasta `/(root)` e clique em **Save**.
5. Aguarde o endereço do GitHub Pages ficar disponível.
6. Abra esse endereço no Safari do iPhone.
7. No Safari, escolha **Compartilhar → Adicionar à Tela de Início** e ative **Abrir como App da Web**.
8. Abra o ícone criado. Após a primeira abertura online, o app também fica disponível offline.

## Importante sobre os dados do treino
Os registros de cargas e histórico ficam salvos no armazenamento local do navegador/web app no próprio aparelho. Use o recurso de backup/exportação do app periodicamente se desejar preservar o histórico em caso de troca de iPhone, limpeza de dados do Safari ou reinstalação.
