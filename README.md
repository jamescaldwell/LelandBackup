# LelandBackup
 by Jim Caldwell

## Implementation Details
This REST api service is designed to handle CRUD calls using node.js, express, and sqlite.

## How to Run
Launch a command line/terminal and type:
- npm install
- node index.js

## API Documentation
#### Create author
 <details>
 <summary><code>POST</code> <code><b>/api/v1/author</b></code></summary>

 ##### Parameters
> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | name      |  required | string (JSON)           | The name of the author                                                |
> | bio       |  required | string (JSON)           | Biography of the author                                               |

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `Author created successfully`                                       |
> | `500`         | `text/html;charset=utf-8`         | `Error on SQL operation`                                            |

##### Example cURL
> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:8080/api/v1/author
> ```
</details>

#### Get all authors
 <details>
 <summary><code>GET</code> <code><b>/api/v1/author</b></code> <code></code></summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Authors retrieved successfully`                                    |
> | `500`         | `text/html;charset=utf-8`         | `Error on SQL operation`                                            |

##### Example cURL
> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8080/api/v1/author
> ```
</details>

#### Get author by id
 <details>
 <summary><code>GET</code> <code><b>/api/v1/author/{author_id}</b></code></summary>

 ##### Parameters
> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | author_id |  required | int (JSON)              | The id number of the author                                           |

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/json;charset=UTF-8`         | `Author record`                                                     |
> | `404`         | `text/html;charset=utf-8`         | `Author not found`                                                  |
> | `500`         | `text/html;charset=utf-8`         | `Error on SQL operation`                                                                 |

##### Example cURL
> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8080/api/v1/author/{author_id}
> ```
</details>

#### Update author by id
 <details>
 <summary><code>PUT</code> <code><b>/api/v1/author/{author_id}</b></code></summary>

 ##### Parameters
> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | author_id |  required | int (JSON)              | The id number of the author                                           |

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/json;charset=UTF-8`         | `Author record was updated suceessfully`                            |
> | `404`         | `text/html;charset=utf-8`         | `Author not found`                                                  |
> | `500`         | `text/html;charset=utf-8`         | `Error on SQL operation`                                            |

##### Example cURL
> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @post.json http://localhost:8080/api/v1/author/{author_id}
> ```
</details>

#### Delete author by id
 <details>
 <summary><code>DELETE</code> <code><b>/api/v1/author/{author_id}</b></code></summary>

 ##### Parameters
> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | author_id |  required | int (JSON)              | The id number of the author                                           |

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/json;charset=UTF-8`         | `Author record was deleted`                                         |
> | `404`         | `text/html;charset=utf-8`         | `Author not found`                                                  |
> | `500`         | `text/html;charset=utf-8`         | `Error on SQL operation`                                            |

##### Example cURL
> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:8080/api/v1/author/{author_id}
> ```
</details>


#### Create book
 <details>
 <summary><code>POST</code> <code><b>/api/v1/book</b></code></summary>
title,description,author_id,pubdate
 ##### Parameters
> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | title     |  required | string (JSON)           | The title of the book                                                 |
> | description|  required | string (JSON)          | Description of the book                                               |
> | author_id |  required | int (JSON)              | Id number of the author                                               |
> | pubdate   |  required | date (JSON)             | Publication date of the book (YYYY-MM-DD)                             |

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `Book created successfully`                                         |
> | `500`         | `text/html;charset=utf-8`         | `Error on SQL operation`                                            |

##### Example cURL
> ```javascript
>  curl -X POST -H "Content-Type: application/json" --data @post.json http://localhost:8080/api/v1/book
> ```
</details>

#### Get all books (with authors)
 <details>
 <summary><code>GET</code> <code><b>/api/v1/book</b></code> <code></code></summary>

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | `Books retrieved successfully`                                      |
> | `500`         | `text/html;charset=utf-8`         | `Error on SQL operation`                                            |

##### Example cURL
> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8080/api/v1/book
> ```
</details>

#### Get book by id
 <details>
 <summary><code>GET</code> <code><b>/api/v1/book/{book_id}</b></code></summary>

 ##### Parameters
> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | book_id   |  required | int (JSON)              | The id number of book                                                 |

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/json;charset=UTF-8`         | `Book record`                                                       |
> | `404`         | `text/html;charset=utf-8`         | `Book not found`                                                    |
> | `500`         | `text/html;charset=utf-8`         | `Error on SQL operation`                                                                 |

##### Example cURL
> ```javascript
>  curl -X GET -H "Content-Type: application/json" http://localhost:8080/api/v1/book/{book_id}
> ```
</details>

#### Update book by id
 <details>
 <summary><code>PUT</code> <code><b>/api/v1/book/{book_id}</b></code></summary>

 ##### Parameters
> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | book_id   |  required | int (JSON)              | The id number of the book                                             |

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/json;charset=UTF-8`         | `Book record was updated suceessfully`                              |
> | `404`         | `text/html;charset=utf-8`         | `Book not found`                                                    |
> | `500`         | `text/html;charset=utf-8`         | `Error on SQL operation`                                            |

##### Example cURL
> ```javascript
>  curl -X PUT -H "Content-Type: application/json" --data @post.json http://localhost:8080/api/v1/book/{book_id}
> ```
</details>

#### Delete book by id
 <details>
 <summary><code>DELETE</code><code><b>/api/v1/book/{book_id}</b></code></summary>

 ##### Parameters
> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | book_id   |  required | int (JSON)              | The id number of the book                                             |

##### Responses
> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/json;charset=UTF-8`         | `Book record was deleted`                                           |
> | `404`         | `text/html;charset=utf-8`         | `Book not found`                                                    |
> | `500`         | `text/html;charset=utf-8`         | `Error on SQL operation`                                            |

##### Example cURL
> ```javascript
>  curl -X DELETE -H "Content-Type: application/json" http://localhost:8080/api/v1/book/{book_id}
> ```
</details>

## Testing
Launch a command line/terminal and type:
- npm test

## Tools Used
- Visual Studio Code
- Node.js
- Sqlite