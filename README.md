### Recursive-challenge
Um simple desafio para organizar uma arvore de categorias usando recursividade

### Desafio
Dado uma lista de categorias, organize-as em uma árvore. Exemplo:
 - Entranda:
```javascript
[
    {
        id: 'futebol',
        parent: null
    }, {
        id: 'bola',
        parent: 'futebol'
    }, {
        id: 'meia',
        parent: 'chuteira'
    }, {
        id: 'chuteira',
        parent: 'futebol'
    }
]
```

 - Saída:
```javascript
{
  "futebol": {
    "bola": {},
    "chuteira": {
      "meia": {}
    }
  }
}
```

### LAUS DEO ∴
