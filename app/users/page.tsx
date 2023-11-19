import React from 'react'


interface User {
  id: number;
  name: string;
  email: string;
}


const UsersPage = async () => {

  // Since this returns a "promise", we must "await" it to get the response, and since we use await, we must make the component "async"
  // and all of this happens in the server.
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    // { next: { revalidate: 10 } }); // This means nextjs is gonna run a background job and get fresh data from the backend every 10 seconds. This line obviously won't work if you're using something different like Axios.
                                    // Since we enable caching, this component will be rendered as a STATIC component (not dynamic).
    { cache: 'no-store' }); // If we disable caching, it'll be rendered as a DYNAMIC component.

  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      {/* <p>{new Date().toLocaleTimeString()}</p> */}
      <table className='table table-ordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => 
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage