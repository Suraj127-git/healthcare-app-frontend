const API_BASE_URL = 'http://your-laravel-backend-url.com/api';

async function fetchWithAuth(url, options = {}) {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    throw new Error('API request failed');
  }

  return response.json();
}

export async function login(email, password) {
  return fetchWithAuth('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
}

export async function register(name, email, password) {
  return fetchWithAuth('/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });
}

export async function forgotPassword(email) {
  return fetchWithAuth('/forgot-password', {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
}

export async function resetPassword(token, password) {
  return fetchWithAuth('/reset-password', {
    method: 'POST',
    body: JSON.stringify({ token, password }),
  });
}

export async function getDoctors() {
  return fetchWithAuth('/doctors');
}

export async function bookAppointment(doctorId, date, time) {
  return fetchWithAuth('/appointments', {
    method: 'POST',
    body: JSON.stringify({ doctor_id: doctorId, date, time }),
  });
}

export async function getAppointments() {
  return fetchWithAuth('/appointments');
}

export async function makeDonation(name, amount) {
  return fetchWithAuth('/donations', {
    method: 'POST',
    body: JSON.stringify({ name, amount }),
  });
}

export async function getDonations() {
  return fetchWithAuth('/donations');
}

export async function getProfile() {
  return fetchWithAuth('/profile');
}

export async function updateProfile(name, email) {
  return fetchWithAuth('/profile', {
    method: 'PUT',
    body: JSON.stringify({ name, email }),
  });
}

