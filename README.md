la seul commande que j'ai utilisé etais:
``` bash
az acr login --name todoapi.azurecr.io 
```
elle permet de se connect au repo de container azure du nom de todoapi 

c'est apres que l'on peut pousser les image avec la command:
``` bash
docker push todoapi.azurecr.io/mongodb-server:v4
```

