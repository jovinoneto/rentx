<div align="center">
  <img src="./src/assets/logo.svg"/>  
</div>  

#  
## Descrição 
Rentx - projeto de estudo desenvolvido na trilha React Native do programa Ignite oferecido pela <a href="https://rocketseat.com.br">Rocketseat</a>.
#  

> ## Tecnologias  
- <a href="https://docs.expo.dev/">Expo</a>  
- <a href="https://reactnative.dev/">React Native</a>  
- <a href="https://www.typescriptlang.org/">TypeScript</a>  
- <a href="https://styled-components.com/">Style Components</a>  
- <a href="https://docs.swmansion.com/react-native-reanimated/">React Native Reanimated</a>  
- <a href="https://date-fns.org/">Date-fns</a>  
- <a href="https://github.com/lottie-react-native/lottie-react-native">Lottie</a>  
- <a href="https://axios-http.com/ptbr/">Axios</a>  
#  
> ## Executando o projeto    

### Pré-requisitos  
  
Ferramentas necessárias para rodar o projeto:    
- <a href="https://git-scm.com/">Git</a>  
- <a href="https://docs.expo.dev/">Expo</a>  
- <a href="https://classic.yarnpkg.com/en/">Yarn</a>  
- <a href="https://nodejs.org/en/">Nodejs</a>
- <a href="https://code.visualstudio.com/">VSCode</a> sugestão de editor de código  

### Executandoo projeto  


```
# Clone este repositório
$ git clone ...

# Acesse a pasta
$ cd rentx

# Instele as dependências
$ yarn ou npm install
```
É nessário editar os sequintes arquivos de acordo com o IP da máquina que esta sendo executado o projeto  

- <a href="https://github.com/jovinoneto/rentx/blob/a17b9522952c81f4e4321ee2399937080591fae0/package.json#L10">./package.json</a>  
```
"api": "json-server ./src/services/server.json --host "SEU IP" --port 3333 --delay
```
- <a href="https://github.com/jovinoneto/rentx/blob/c8374df47000cd27f6e5456e6a7c9dd5a41ea9fe/src/services/api.ts#L4">./src/services/api.ts</a>  
```
baseURL: 'http://"SEU IP":3333'
```
```
# Start axios
$ yarn api

# Start Expo
$ expo start
```  
#  
