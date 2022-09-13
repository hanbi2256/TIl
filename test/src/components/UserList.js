import React from 'react';

const User = React.memo(function User({ user }) {
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => { }}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => { }}>삭제</button>
        </div>
    );
});

function UserList({user})
    return (
        <div>
            {user.map(user =>(
                <User user={user} key={user.id}/>
            ))}
        </div>
    )

