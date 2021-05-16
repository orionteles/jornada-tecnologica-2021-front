import React from 'react';
import axios from 'axios';

const apiAcademico = axios.create({
    baseURL: 'http://127.0.0.1:3333/api/v1',
    headers: {
        'content-type':'application/json;charset=utf-8',
        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTU5MTgzMTE2MH0.MC6XHh3qukxsrxvMqyuz1gljBGOltm5eApjNdwmp7V0',
    },    
})

export default apiAcademico