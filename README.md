# Projeto Angular iOS Simulator

Um projeto Angular que simula a interface do iOS com um título, lista de configurações e botões de alternância (toggle switches).

## 📋 Funcionalidades

- ✅ Título H1 na página "Configurações"
- ✅ Lista com switches similares ao iOS para habilitar/desabilitar recursos
- ✅ Simulação da barra de status do iOS (hora, conectividade, bateria)
- ✅ Design responsivo e adaptado para mobile
- ✅ Estilo visual realista do iOS com cores e animações

## 🚀 Como Começar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório ou navegue até a pasta do projeto

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

4. Acesse `http://localhost:4200` no seu navegador

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── ios-page/              # Componente principal da página iOS
│   │   ├── ios-page.component.ts
│   │   ├── ios-page.component.html
│   │   └── ios-page.component.css
│   └── app.component.ts        # Componente raiz
├── main.ts                      # Ponto de entrada da aplicação
├── index.html                   # Arquivo HTML principal
└── styles.css                   # Estilos globais
```

## 🎨 Componentes

### IosPageComponent

Componente principal que exibe:
- **Barra de Status**: Simulação do status bar do iOS
- **Título H1**: "Configurações"
- **Texto Descritivo**: Explicação sobre a interface
- **Lista de Alternadores**: 4 itens com toggles (WiFi, Bluetooth, Modo Avião, Notificações)
- **Rodapé**: Informações de versão

## 🔧 Desenvolvimento

- **TypeScript**: Linguagem utilizada para o desenvolvimento
- **Angular 17**: Framework web moderno
- **Standalone Components**: Abordagem moderna do Angular
- **CSS Puro**: Estilização sem dependências externas

## 📱 Responsividade

O projeto é totalmente responsivo e funciona bem em:
- Desktops
- Tablets
- Dispositivos móveis (especialmente com viewport iOS)

## 🛠 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Constrói o projeto para produção
- `npm test` - Executa testes unitários
- `npm run lint` - Executa linter

## 📄 Licença

Este é um projeto de demonstração criado com fins educacionais.

---

**Desenvolvido com Angular 17 e TypeScript** 🚀
