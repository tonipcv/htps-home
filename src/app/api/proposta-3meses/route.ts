import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const lead = await prisma.proposalLead.create({
      data: {
        name: body.name,
        email: body.email,
        whatsapp: body.whatsapp,
        profession: body.profession,
        knowsTechnology: body.knowsTechnology || 'Não',
        revenue: body.revenue || 'Não informado',
        status: 'new'
      },
    })

    return NextResponse.json(lead)
  } catch (error) {
    console.error('Error creating proposal lead:', error)
    return NextResponse.json(
      { error: 'Error creating proposal lead' },
      { status: 500 }
    )
  }
} 