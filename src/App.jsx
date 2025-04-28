import { useState } from 'react';
import BookCover from './pages/BookCover';
import Scene1_BookPage from './pages/Scene1_BookPage';

function App() {
    const [bookIsOpen, setBookIsOpen] = useState(false);

    return (
        <>
            {!bookIsOpen ? (
                <BookCover onOpen={() => setBookIsOpen(true)} />
            ) : (
                <Scene1_BookPage />
            )}
        </>
    );
}

export default App;
