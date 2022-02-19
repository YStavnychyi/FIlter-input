import React, {useEffect, useState} from 'react';
import {users} from './data-mock'

// TO DO:
// data source: file data-mock.js
// - display list of users in following pattern "1. lastName, firstName"
// - if firstName is not present, display only lastName so "1. lastName"
// - list should be filtered with input #filter-input
// - filter should check if lastName of user starts with query from input
// - filtering should NOT be case sensitive

const List = () => {
    const [itemList, setItemList] = useState([])
    const [filterList, setFilterList] = useState([])

    useEffect(()=>{
        users.then((items)=>{
            setItemList(items);
            setFilterList(items);
        })
    },[])

    const handleChange = (element) =>{
        const inputWord = element.target.value.toLowerCase();
        const filter = itemList.filter((item) =>
        item.lastName.toLowerCase().includes(inputWord))
        const newList = inputWord.length > 1 ? filter : itemList;
        setFilterList(newList)
        /*console.log(newList)*/
    }

    return (
        <>
            <input onChange={handleChange} id="filter-input" placeholder="Filter..."/>
            {
                filterList.map((item)=>(
                    <ul key={item.id}>
                        <li>
                            {`${item.id}. ${item.lastName} ${item.firstName !== null ? ', ' + item.firstName: ''}`}
                        </li>
                    </ul>
                ))
            }
        </>
    );
};

export default List;