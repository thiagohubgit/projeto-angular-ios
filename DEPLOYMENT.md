# 📱 Como Publicar no GitHub e Testar em Dispositivo Físico

## 1️⃣ Criar Repositório no GitHub

### Opção A: Via Website GitHub
1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `projeto-angular-ios`
3. Descrição: `Angular iOS Simulator com Acessibilidade`
4. Deixe como **Public** (necessário para GitHub Pages)
5. Clique em **Create repository**

### Opção B: Via CLI (Command Line)
```bash
# Você pode usar GitHub CLI se instalar
gh repo create projeto-angular-ios --public --source=. --remote=origin --push
```

---

## 2️⃣ Conectar Repositório Local ao GitHub

Execute os comandos na pasta do projeto:

```bash
# Adicionar repositório remoto (substitua YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/projeto-angular-ios.git

# Renomear branch para main (padrão do GitHub)
git branch -M main

# Fazer push inicial
git push -u origin main
```

---

## 3️⃣ Configurar GitHub Pages

### Automático com GitHub Actions (Recomendado)
1. No repositório GitHub, vá em **Settings** → **Pages**
2. Em **Build and deployment**:
   - **Source**: `GitHub Actions`
3. O workflow `.github/workflows/deploy.yml` já está configurado!
4. Toda vez que fizer push, a aplicação será deployada automaticamente

### Manual
Se preferir deploy manual:

```bash
# Compilar para produção
npm run build

# Navegar e fazer deploy (usando gh-cli)
cd dist/projeto-angular
git init
git add .
git commit -m "Deploy para GitHub Pages"
git push --force git@github.com:YOUR_USERNAME/projeto-angular-ios.git master:gh-pages
```

---

## 4️⃣ Acessar em Dispositivo Físico

Após o deploy (5-10 minutos):

### URL de Acesso:
```
https://YOUR_USERNAME.github.io/projeto-angular-ios
```

**Exemplo:**
```
https://seu-usuario.github.io/projeto-angular-ios
```

### Testar no Mobile:
1. **iPhone/iPad**: Abra Safari e acesse a URL
2. **Android**: Abra Chrome e acesse a URL
3. **Desktop**: Qualquer navegador

---

## 5️⃣ Comandos Úteis

```bash
# Verificar status do git
git status

# Ver repositórios remotos
git remote -v

# Fazer push das alterações
git add .
git commit -m "Descrição da mudança"
git push origin main

# Ver histórico de commits
git log --oneline
```

---

## ✅ Checklist de Publicação

- [ ] Repositório criado no GitHub
- [ ] Git remoto vinculado (`git remote -v`)
- [ ] Push inicial feito (`git push -u origin main`)
- [ ] Workflow GitHub Actions ativado
- [ ] GitHub Pages habilitado em Settings
- [ ] Esperou 5-10 minutos para deploy
- [ ] Acessou a URL pública `https://seu-usuario.github.io/projeto-angular-ios`
- [ ] Testou em dispositivo físico (mobile)

---

## 🔍 Troubleshooting

**"403 Forbidden" ao fazer push?**
- Use token de autenticação: `git config --global user.password "seu-token"`
- Ou configure SSH: `ssh-keygen -t ed25519`

**GitHub Pages não ativa automaticamente?**
- Vá em **Settings** → **Pages**
- Selecione **Source**: `GitHub Actions`
- Aguarde 5-10 minutos

**Aplicação quebrada na web?**
- Verifique em **Actions** se o workflow passou
- Veja os logs do build
- Abra DevTools (F12) para ver erros

---

## 📞 Próximos Passos

Após publicar:
1. Teste a acessibilidade em dispositivo real
2. Faça melhorias baseado no teste
3. Commit e push das mudanças
4. GitHub Pages atualiza automaticamente!

