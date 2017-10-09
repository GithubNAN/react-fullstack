import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async despatch => {
    const { data } = await axios.get('/api/current_user');
    despatch({ type: FETCH_USER, payload: data });
};

export const handleToken = token => async despatch => {
    const res = await axios.post('./api/stripe', token);
    despatch({ type: FETCH_USER, payload: res.data });
};
