export const getMe = (token) => {
    return fetch('/api/users/me', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};
export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};
export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const saveBook = (bookData, token) => {
    console.log(bookData)
    return fetch('/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookData),
    });
};

export const deleteBook = (bookId, token) => {
    return fetch(`/api/user/books${bookId}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
};

// search with google api
export const searchGoogleBooks = (query) => {
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};

