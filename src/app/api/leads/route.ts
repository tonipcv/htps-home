import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const lead = await prisma.lead.create({
      data: {
        name: body.name,
        email: body.email,
        whatsapp: body.whatsapp,
        profession: body.profession,
        segment: body.segment || 'prompt',
      },
    })

    return NextResponse.json(lead)
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { error: 'Error creating lead' },
      { status: 500 }
    )
  }
} 