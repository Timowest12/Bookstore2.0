/* eslint-disable */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, updateallbooks, cleanstore } from './redux/books/books';
const APIURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UP7uTp1aVUP0n2w5WYMW/books';
export const getBooksList = async () => {
    
    const dispatch = useDispatch();
    let fetchedarray = []
    fetch(APIURL)
      .then((response) => response.json())
      .then((data) => Object.entries(data).forEach((elem,index) => {
    
      let elemdata = elem[1][0]
      //console.log(elemdata)
      //fetchedarray.push(elemdata)
      //const dispatch = useDispatch();
      console.log(index)
      //dispatch(cleanstore());
      dispatch(addBook(elemdata));
    }));
    console.log(fetchedarray)
  };
  