import {gql} from 'apollo-boost'

const GET_DATA =gpl`
query fetch_todos{
    todos {
        id
        title
    }
  }
  `;

  export (GET_DATA)