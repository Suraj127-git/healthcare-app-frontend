import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Footer from '../components/Footer';
import { getDonations } from '../services/api';

function DonationList() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const data = await getDonations();
        setDonations(data);
      } catch (error) {
        console.error('Failed to fetch donations:', error);
      }
    };
    fetchDonations();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Donation List</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {donations.map((donation) => (
            <Card key={donation.id}>
              <CardHeader>
                <CardTitle>{donation.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Amount: ${donation.amount.toFixed(2)}</p>
                <p>Date: {new Date(donation.date).toLocaleDateString()}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DonationList;

