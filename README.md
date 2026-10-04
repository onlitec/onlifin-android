# 💳 OnliFin Android - App Financeiro Mobile

![React Native](https://img.shields.io/badge/React%20Native-TypeScript-blue)
![Expo](https://img.shields.io/badge/Expo-Latest-black)
![iOS](https://img.shields.io/badge/iOS-13%2B-gray)
![Android](https://img.shields.io/badge/Android-6%2B-green)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Beta-orange)

**App mobile para plataforma financeira OnliFin. Gestão de contas, transferências, cartão digital e investimentos.**

## 🎯 Sobre

OnliFin Android é um aplicativo financeiro completo com:
- ✅ Conta digital com débito/crédito
- ✅ Transferências PIX, TED, DOC
- ✅ Cartão digital e físico
- ✅ Investimentos e renda fixa
- ✅ Consultas de saldo e extrato
- ✅ Segurança biométrica
- ✅ Atendimento in-app
- ✅ Offline support

**Stack:** React Native + TypeScript, Expo, Redux

## 🚀 Quick Start

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Expo CLI: `npm install -g expo-cli`
- Android Studio (emulador) ou dispositivo físico

### Instalação
```bash
# Clone
git clone https://github.com/onlitec/onlifin-android
cd onlifin-android

# Instale dependências
npm install

# Start Expo
npm start
```

### Rodando no Emulador/Dispositivo

**Android:**
```bash
npm run android
# Ou pressione 'a' no terminal
```

**iOS:**
```bash
npm run ios
# Requer macOS com Xcode
```

**Desenvolvimento:**
```bash
npm start
# Use Expo Go app no seu celular para ler o QR code
```

## 📦 Estrutura do Projeto

```
onlifin-android/
├── src/
│   ├── screens/         # Telas principais
│   │   ├── Home.tsx
│   │   ├── Account.tsx
│   │   ├── Transfer.tsx
│   │   ├── Card.tsx
│   │   ├── Investments.tsx
│   │   ├── Settings.tsx
│   │   └── Login.tsx
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   └── Modal/
│   ├── navigation/      # React Navigation
│   ├── services/        # API client
│   ├── store/           # Redux slices
│   ├── hooks/           # Custom hooks
│   ├── utils/           # Utilitários
│   └── types/           # TypeScript types
├── assets/              # Imagens, ícones, fontes
├── app.json             # Configuração Expo
├── eas.json             # Configuração EAS Build
└── .env.example         # Variáveis de ambiente
```

## ✨ Funcionalidades Principais

### 💰 Conta Digital
- Saldo em tempo real
- Consulta de extrato
- Comprovantes de transação
- Limite de crédito
- Programa de cashback

### 💸 Transferências
- PIX instantâneo
- TED e DOC agendado
- Envio de dinheiro para contatos
- Pagamento de contas
- Recebimento de requisições

### 💳 Cartão Digital
- Cartão virtual
- Pagamentos NFC
- Limite de gasto
- Bloqueio/desbloqueio
- Alertas de transação

### 📈 Investimentos
- Renda fixa
- CDB e tesouro
- Rendimento em tempo real
- Resgate automático
- Consultor de investimentos

### 🔐 Segurança
- Biometria (Face ID, Touch ID)
- Autenticação 2FA
- Criptografia end-to-end
- Detecção de fraude
- Confirmação de identidade

## 🔧 Tecnologias

**Framework:**
- React Native + TypeScript
- Expo (development & deployment)

**UI & Navigation:**
- React Navigation 6.x
- NativeBase / React Native Paper
- Animated API

**State Management:**
- Redux Toolkit
- Redux Thunk
- Redux Persist (offline)

**APIs & Storage:**
- Axios (HTTP client)
- AsyncStorage (local cache)
- React Query (caching)

**Security:**
- JWT + Refresh tokens
- Biometric SDK
- Secure storage (Keychain/Keystore)

**DevOps:**
- EAS Build (managed build service)
- GitHub Actions (CI/CD)
- Expo Updates (hot releases)

## 📱 Suporta

- **iOS:** 13.0+
- **Android:** 6.0+ (API 23)
- **Tamanho APK:** ~80MB
- **Tamanho iOS:** ~150MB

## 🚀 Build & Deploy

### Build Local
```bash
# Debug
eas build --platform android --profile preview

# Release
eas build --platform android --profile production
```

### Distribuição
```bash
# Google Play
eas submit --platform android --latest

# App Store (requer macOS)
eas submit --platform ios --latest
```

### Expo Updates (Hot Updates)
```bash
# Deploy update sem nova build
eas update --branch production
```

## 🧪 Testes

```bash
# Testes unitários
npm test

# Coverage
npm run test:coverage
```

## 📚 Documentação

- [Setup Guide](docs/SETUP.md)
- [API Reference](docs/API.md)
- [UI Components](docs/COMPONENTS.md)
- [Security Guide](docs/SECURITY.md)
- [Deployment](docs/DEPLOYMENT.md)

## 🤝 Contribuindo

```bash
git checkout -b feature/sua-feature
npm run dev
# Faça mudanças
git commit -m "feat: descrição"
git push origin feature/sua-feature
```

## 💬 Suporte

- 📧 [support@onlifin.com](mailto:support@onlifin.com)
- 🐛 [Issues](https://github.com/onlitec/onlifin-android/issues)
- 📚 [Knowledge Base](https://help.onlifin.com)

## 📄 Licença

MIT License - Veja [LICENSE](LICENSE)

## 🎯 Roadmap

- [ ] Widget de saldo
- [ ] NFC para qualquer cartão
- [ ] Consolidação de contas
- [ ] Assistente IA
- [ ] Marketplace de serviços
- [ ] SuperApp (uber, food, etc)

---

**Status:** Beta  
**Última atualização:** 2026-10-04  
**Versão:** 0.5.0  
**Beta testers:** 1000+
