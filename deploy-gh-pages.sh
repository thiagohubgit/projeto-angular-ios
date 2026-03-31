#!/usr/bin/env bash

# Script para fazer deploy no GitHub Pages

# Compilar para produção
echo "Compilando aplicação para produção..."
npm run build

# Navegar para a pasta de distribuição
cd dist/projeto-angular

# Inicializar repositório git nesta pasta
git init
git config user.name "GitHub Action"
git config user.email "action@github.com"
git add -A
git commit -m "Deploy para GitHub Pages"

# Fazer push para branch gh-pages (será criado automaticamente)
git push --force "https://${GH_TOKEN}@github.com/${GITHUB_REPOSITORY}.git" master:gh-pages

echo "✅ Deploy concluído com sucesso!"
