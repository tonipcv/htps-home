import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    // Ensure request body is not null
    if (!request.body) {
      return NextResponse.json(
        { success: false, error: 'Request body is required' },
        { status: 400 }
      );
    }

    const body = await request.json();
    
    // Log the received data
    console.log('Received demo request body:', body);

    // Extract fields with default values
    const { 
      name = null, 
      email = null, 
      phone = null, 
      whatsapp = null, // Add support for whatsapp field
      specialty = null,
      speciality = null // Add support for alternative spelling
    } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Create demo request in database
    const demoRequest = await prisma.demoRequest.create({
      data: {
        name,
        email,
        phone: phone || whatsapp || null, // Use either phone or whatsapp
        specialty: specialty || speciality || null, // Use either spelling
        status: 'PENDING'
      }
    });

    console.log('Created demo request:', demoRequest);
    return NextResponse.json(
      { 
        success: true, 
        data: demoRequest 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Error creating demo request:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to create demo request' 
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const demoRequests = await prisma.demoRequest.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(
      { 
        success: true, 
        data: demoRequests 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching demo requests:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch demo requests' 
      },
      { status: 500 }
    );
  }
} 