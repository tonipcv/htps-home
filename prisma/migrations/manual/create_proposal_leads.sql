-- CreateTable
CREATE TABLE "proposal_leads" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "whatsapp" TEXT NOT NULL,
    "profession" TEXT NOT NULL,
    "knowsTechnology" TEXT NOT NULL DEFAULT 'Não',
    "revenue" TEXT NOT NULL DEFAULT 'Não informado',
    "status" TEXT NOT NULL DEFAULT 'new',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL
); 