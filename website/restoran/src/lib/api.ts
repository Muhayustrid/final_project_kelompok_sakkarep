import axios from 'axios';

// Konfigurasi base URL untuk API Django
const API_BASE_URL = 'http://localhost:8000/api';

// Tipe data untuk berbagai entitas
export interface Menu {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    image?: string;
}

export interface Category {
    id: number;
    name: string;
    description?: string;
}

export interface RestaurantProfile {
    id: number;
    name: string;
    logo:string;
    about_us: string;
    address: string;
    phone: string;
    email: string;
    facebook: string;
    instagram: string;
    twitter: string;
}

export interface OpeningHour {
    day: string;
    open_time: string;
    close_time: string;
}

export interface FAQ {
    id: number;
    question: string;
    answer: string;
}
const response = await fetch(`${API_BASE_URL}/test`);

// Fungsi untuk mengambil data dari API
export const fetchMenus = async (): Promise<Menu[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/menus/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching menus:', error);
        return [];
    }
};

export const fetchCategories = async (): Promise<Category[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/menus/categories/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};

export const fetchRestaurantProfile = async (): Promise<RestaurantProfile[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/profile/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching restaurant profile:', error);
        return [];
    }
};

export const fetchOpeningHours = async (): Promise<OpeningHour[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/opening-hour/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching opening hours:', error);
        return [];
    }
};

export const fetchFAQs = async (): Promise<FAQ[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/faq/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching FAQs:', error);
        return [];
    }
};