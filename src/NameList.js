import React, { Component } from 'react'
import Person from './Person'


//List Rendering

function NameList() {

    const names = ['Bruce', 'Clark', 'Sreenivasa', 'Bruce']

    const nameList = names.map((name, index) => <h2 key={index}>{index}{name}</h2>)

    // inner h2 tag  index as key anti-pattern

    //  return <div>{nameList}</div>    
    //When to use index as a key ?
    //1. The items in your list do not have a unique id
    //2. The list is a static list and will not change
    //3.The list will never be re ordered or filtered

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        },
    ]
    const personList = persons.map(person => <Person key={person.id} person={person} />)

    return <div>{personList}</div>
}

export default NameList