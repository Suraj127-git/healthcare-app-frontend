import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Footer from '../components/Footer';
import DonationModal from '../components/DonationModal';

function Home() {
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to HealthCare App</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>testing Donation Widget</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Support our healthcare initiatives by making a donation.</p>
              <Button onClick={() => setIsDonationModalOpen(true)}>Donate Now</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Medical Insurance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn about our medical insurance options and coverage details.</p>
              <ul className="list-disc list-inside mt-2">
                <li>Comprehensive health coverage</li>
                <li>Affordable premiums</li>
                <li>Wide network of healthcare providers</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />

      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
      />
    </div>
  );
}

export default Home;

