import api from './api';

export const productService = {
  getAllProducts: async (filters) => {
    const response = await api.get('/products', { params: filters });
    return response.data;
  },
  getProductById: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },
  getFeaturedProducts: async () => {
    const response = await api.get('/products/featured');
    return response.data;
  },
  getDealsOfDay: async () => {
    const response = await api.get('/products/deals');
    return response.data;
  },
};