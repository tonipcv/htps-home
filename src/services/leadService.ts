import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export interface CreateLeadData {
  name: string
  whatsapp: string
  email: string
  segment?: string
  budget?: string
  profession: string
}

export async function createLead(data: CreateLeadData) {
  try {
    const lead = await prisma.lead.create({
      data: {
        name: data.name,
        whatsapp: data.whatsapp,
        email: data.email,
        segment: data.segment || 'prompt',
        budget: data.budget || 'N/A',
        profession: data.profession
      }
    })
    return lead
  } catch (error) {
    console.error('Error creating lead:', error)
    throw error
  }
} 