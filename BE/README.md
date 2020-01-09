# SERVER DOCUMENTATION

## START

1. npm install
2. npm run start
3. start your ui

## CORS

To using all endpoints except [/auth/login](#post-authlogin) you should pass `Authorization` to headers.

##Files

To make any changes to Mock DB, you should go to ```Services/#name/#name.db.json```. Feel free to introduce changes.

## MODEL USING IN DOCUMENTATION

### Course model

```
{
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: AUTHOR_MODEL;
    isTopRated: boolean;
},
```

### Author model

```
{
    id: number;
    name: string;
}
```

### Login Request Model

```
{
    login: string;
    password: string;
}
```

### Token Request Model

```
{
    token: string;
}
```

### User Model

```
{
    id: number;
    token: string,
    name: NAME_MODEL;
    login: string;
    password: string;
}
```

### Name Model

```
{
    firstName: string;
    lastName: string;
}
```

These endpoints allow you to deal with the mock db.

## AUTH

`POST` [/auth/login](#post-authlogin) <br/>
`POST` [/auth/userinfo](#post-authuserinfo) <br/>

## COURSES

`GET` [/courses](#get-courses) <br/>
`GET` [/courses/$id](#get-coursesid) <br/>
`PATCH` [/courses/$id](#patch-courses) <br/>
`POST` [/courses](#post-courses) <br/>
`DELETE` [/courses/$id](#delete-coursesid) <br/>

## AUTHORS

`GET` [/authors](#get-authors) <br/>

## Errors testing

`GET` [/error](#get-error) <br/>
___

#### POST /auth/login

This endpoint use for getting token for authorization.

**Model** [[Login Request Model]](#login-request-model)

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  `login` | required | string  | User login.                                                                     |
|  `password` | required | string  | User password.                                                                     |

**Response** [[Token Request Model]](#token-request-model)


```
{
    "token": string,
}
```
___

#### POST /auth/userinfo

This endpoint use for getting information about user for

**Model** [[Token Request Model]](#token-request-model)

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    `token` | required | string  | Auth token.                                                                     |                                                                |

**Response** [[User Model]](#user-model)

```
{
    id: number,
    token: string,
    name: {
        firstName: string,
        lastName: string
    },
    login: string,
    password: string
}
```
___

#### GET /courses

This endpoint use for getting available courses

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    `start` | non-required | number  | Courses from index (if empty start will be 0).                                                                     |                                                                |
|    `count` | non-required | number  | Appropriate count of courses (if empty count will be length of courses array).                                                                     |                                                                |
|    `sort` | non-required | string  | Sorting key.                                                                     |                                                                |                                                                |                                                                |
|    `textFragment` | non-required | string  | Text fragment for searching.                                                                     |                                                                |

**Response** [[User Model]](#user-model)

```
[
    {
        id: number;
        name: string;
        date: string;
        length: number;
        description: string;
        authors: {
            id: number;
            name: string;
        };
        isTopRated: boolean;
    },
    {
        id: number;
        name: string;
        date: string;
        length: number;
        description: string;
        authors: {
            id: number;
            name: string;
        };
        isTopRated: boolean;
    },
]
```
___

#### GET /courses/$id

This endpoint use for getting course by id. It wait for id in parameters.

Example: `courses/1`

**Response** [[User Model]](#user-model)

```
{
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: {
        id: number;
        name: string;
    };
    isTopRated: boolean;
}
```
___

#### PATCH /courses/#id

This endpoint use for change appropriate course.

**Model** [[User Model]](#user-model)

|          Name | Required |  Type                                                                                                                                                              |
| -------------:|:--------:|:-------
|    `id` | required | number                                                                   |                                                                |
|    `name` | required | string                                                          |                                                                |
|    `date` | required | string                                                                    |                                                                |
|    `length` | required | number                                                                   |                                                                |
|    `authors` | required | AUTHORSMODEL                                                                   |                                                                |
|    `isTopRated` | required | string                                       |                                                                |                                                                     |                                                                |

**Response** [[User Model]](#user-model)

```
{
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: {
        id: number;
        name: string;
    };
    isTopRated: boolean;
}
```
___

#### POST /courses

This endpoint use for create course.

**Model** [[User Model]](#user-model)

|          Name | Required |  Type                                                                                                                                                              |
| -------------:|:--------:|:-------
|    `id` | required | number                                                                   |                                                                |
|    `name` | required | string                                                          |                                                                |
|    `date` | required | string                                                                    |                                                                |
|    `length` | required | number                                                                   |                                                                |
|    `authors` | required | AUTHORSMODEL                                                                   |                                                                |
|    `isTopRated` | required | string                                       |                                                                |                                                                     |                                                                |

**Response** [[User Model]](#user-model)

```
{
    id: number;
    name: string;
    date: string;
    length: number;
    description: string;
    authors: {
        id: number;
        name: string;
    };
    isTopRated: boolean;
}
```
___

#### DELETE /courses/$id

This endpoint use for deleting course.

Example: `courses/1`

___

#### GET /authors

This endpoint use for getting available authors.

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    `textFragment` | non-required | string  | Text fragment for searching.                                                                     |                                                                |

**Response** [[User Model]](#user-model)

```
[
    {
        id: number;
        name: string;
        date: string;
        length: number;
        description: string;
        authors: {
            id: number;
            name: string;
        };
        isTopRated: boolean;
    },
    {
        id: number;
        name: string;
        date: string;
        length: number;
        description: string;
        authors: {
            id: number;
            name: string;
        };
        isTopRated: boolean;
    },
]
```
___

#### GET /error

This endpoint use for testing errors from BE.

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    `code` | required | number  | Error code.                                                               |                                                                |
