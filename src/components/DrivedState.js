import React, { useState } from 'react'

export default function DrivedState() {
    const [user, setUser] = useState([
        { name: 'Shehab Shekh', age: 25 },
        { name: 'Shahin Shekh', age: 35 },
        { name: 'Abu Said ', age: 30 }
    ])


    const userCount = user.length;
    const averageAge = user.reduce((accum, item) => accum + item.age, 0) / userCount;
    return (
        <>
            <h1>User List</h1>
            {
                user.map((item, key) => {
                    return <h2 key={key}>{item.name} - {item.age} Year's old .</h2>
                })
            }
            <h2>Total User's : {userCount}</h2>
            <h2>Average  : {averageAge}</h2>
        </>
    )
}
