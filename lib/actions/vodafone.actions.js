"use server"

import axios from 'axios';
import { cookies } from 'next/headers'

const BASE_URL = process.env.BASE_URL


export async function getExtractionSupportData() {
    try {

        const cookieStore = await cookies();
        const token = cookieStore.get('access_token')?.value;

        if (!token) {
            throw new Error('No token – the user is not logged in.');
        }

        const response = await axios.get(`${BASE_URL}/api/v1/vodafone/extraction-support`, {
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `access_token=${token}`
            },
        });

        return response.data;

    } catch (error) {
        console.error('Todo fetch error:', error);
        throw new Error('Failed to fetch extraction support data');

    }
}