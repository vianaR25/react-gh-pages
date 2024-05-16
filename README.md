# Deploy de aplicação react no Github Pages

## gh-pages
1. Instalar o gh-pages no projeto. 
  ```bash
npm install gh-pages
```
2. Modificar o arquivo `package.json` e incluir chaves para os scripts de `deploy` e o `predeploy`. A seção `scripts` do arquivo deve ficar como abaixo:
```JSON
  "scripts": {
    "predeploy": "npm run build", 
    "deploy": "gh-pages -d build", 
    "test": "echo \"Error: no test specified\" && exit 1",
    "start-windows": "SET PUBLIC_URL=/&& webpack serve --config ./webpack.config.js --mode development --port 3000",
    "start-linux": "PUBLIC_URL=/ webpack serve --config ./webpack.config.js --mode development --port 3000",
    "build": "webpack --mode production"
  },
```
3. Modificar o arquivo `package.json` para incluir a `homepage` do projeto, conforme instruções do github Pages no formato `{user/namespace}.gihub.io/{repositório}`, como no exemplo abaixo:
```JSON
   {

   "name" : "nome do meu projeto",
   "homepage": "https://eduardomangeli.github.io/react-github-pages/",
   "version": "0.1.0"
   ...
   }
 ```

## Configurando o Router
5. Modificar o arquivo `index.js` para **trocar** o `BrowserRouter` pelo `HashRouter`. Esse trecho do arquivo deve ficar, como no exemplo abaixo. Lembre-se de importar o HashRouter corretamente.
```JSX
import { HashRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path='/outra' element={<Outra/>}/>
      </Routes>
    </HashRouter>
    
  </React.StrictMode>
);

```

## Fazendo o deploy
6. Para fazer o deploy, basta rodar o comando
```bash
npm run deploy
```
Obs.: O comando de `deploy` cria uma branch `gh-pages`, faz o deploy e publica a aplicação. Essa branch deve ser a configurada no GitHub Pages

### Link para a aplicação de exemplo 
https://eduardomangeli.github.io/react-github-pages/

## Referências:
Tutorial Completo que inclui a criação da aplicação react:
https://github.com/gitname/react-gh-pages
