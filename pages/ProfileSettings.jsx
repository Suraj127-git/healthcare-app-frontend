import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Footer from '../components/Footer';
import { getProfile, updateProfile } from '../services/api';

function ProfileSettings() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setName(data.name);
        setEmail(data.email);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateProfile(name, email);
      console.log(response);
      // Handle successful update (e.g., show success message)
    } catch (error) {
      console.error('Profile update failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Profile Settings</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit">Update Profile</Button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default ProfileSettings;

