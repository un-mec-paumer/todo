#!/bin/bash
# À l'intérieur du conteneur mongo, on utilise localhost
mongoimport --uri "mongodb://localhost:27017/tasksBase" --collection tasks --file /tasks.json --jsonArray