### Informações sobre o projeto:

Usando a API de filmes gratuita [themoviedb](https://developers.themoviedb.org/3/getting-started/introduction) em sua versão 3, criar uma listagem dos filmes mais populares do dia, consultando o endpoint [`GET /movie/popular`](https://developers.themoviedb.org/3/movies/get-popular-movies) para realizar a listagem. Ao clicar em um item dessa listagem, outra página com os detalhes do filme escolhido deve ser exibida. Para acessar mais detalhes sobre o filme, consultar o endpoint [`GET /movie/{movie_id}`](https://developers.themoviedb.org/3/movies/get-movie-details).

Criar um filtro usando seus genêros favoritos.Note que um novo endpoint deverá ser consultado para obter uma lista dos possíveis gêneros a serem filtrados, [`GET /genre/movie/list`](https://developers.themoviedb.org/3/genres/get-movie-list).

Para garantir que o usuário encontre o filme que está procurando, essa lista deverá ser paginada sempre que não existir nenhum filtro de gênero ativo.

---

### Funcionalidades:

- Acesso a uma listagem dos filmes mais populares do dia

- Paginação da lista para encontrar novos filmes

- Filtro dos filmes listados por gênero.

- Remoção de filtros e atualização da listagem de acordo com o filtro removido

- Acesso a uma outra página com detalhes sobre o filme, ao clicar em um item na listagem

- Botão de voltar para a página de listagem de filmes

---
