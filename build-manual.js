const fs = require('fs');
const { execSync } = require('child_process');

// Cria diretório dist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copia arquivos
fs.cpSync('src', 'dist', { recursive: true });

console.log('Build manual concluído!');