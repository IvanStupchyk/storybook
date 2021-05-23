import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'UseCallback'
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML5'])


    // const memoizedAddBook = useMemo(() => {
    //     return () => {
    //         const newUsers = [...books, 'Angular' + new Date().getTime()]
    //         setBooks(newUsers)
    //     }
    //
    // }, [books])

    const memoizedAddBook2 = useCallback(() => {
        console.log('books')
        const newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)
    }, [books])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook2}/>
    </>
}

type BooksSecretPropsType = {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('books-secret')
    return (
        <div>
            <button onClick={() => props.addBook()}>add book</button>
        </div>
    )
}

const Books = React.memo(BooksSecret)