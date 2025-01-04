import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from '../components/Footer';
import AppointmentForm from '../components/AppointmentForm';
import { getDoctors } from '../services/api';

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (error) {
        console.error('Failed to fetch doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Our Doctors</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <Card key={doctor.id}>
              <CardHeader>
                <CardTitle>{doctor.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{doctor.specialization}</p>
                <Button onClick={() => setSelectedDoctor(doctor)} className="mt-4">
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />

      {selectedDoctor && (
        <AppointmentForm
          doctor={selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
        />
      )}
    </div>
  );
}

export default DoctorList;

