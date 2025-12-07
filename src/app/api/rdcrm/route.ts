import { NextRequest, NextResponse } from "next/server";

// ============================================================================
// CONFIGURAÇÃO RD STATION CRM API v1
// Documentação: https://developers.rdstation.com/reference/crm-v1-contacts
// ============================================================================
const RD_CRM_BASE_URL = "https://crm.rdstation.com/api/v1";
const RD_CRM_TOKEN = process.env.RD_CRM_TOKEN;
const RD_CRM_FUNIL = process.env.RD_CRM_FUNIL; // ID do funil de vendas (opcional)

// ============================================================================
// TIPOS
// ============================================================================
interface ContactData {
  nome: string;
  email: string;
  telefone: string;
}

interface RDContact {
  _id: string;
  id: string;
  name: string;
  emails?: Array<{ email: string }>;
  phones?: Array<{ phone: string }>;
}

interface RDContactsResponse {
  contacts: RDContact[];
  total: number;
}

interface RDContactResponse {
  contact: RDContact;
}

// ============================================================================
// FUNÇÕES AUXILIARES
// ============================================================================

/**
 * Busca contato por email no RD CRM v1
 * GET /contacts?token=X&email=Y
 */
async function findContactByEmail(email: string): Promise<RDContact | null> {
  try {
    const response = await fetch(
      `${RD_CRM_BASE_URL}/contacts?token=${RD_CRM_TOKEN}&email=${encodeURIComponent(email)}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      console.error("[RD CRM v1] Erro ao buscar contato por email:", response.status);
      return null;
    }

    const result: RDContactsResponse = await response.json();
    return result.contacts && result.contacts.length > 0 ? result.contacts[0] : null;
  } catch (error) {
    console.error("[RD CRM v1] Erro ao buscar contato por email:", error);
    return null;
  }
}

/**
 * Busca contato por telefone no RD CRM v1
 * GET /contacts?token=X&phone=Y
 */
async function findContactByPhone(phone: string): Promise<RDContact | null> {
  try {
    // Remove formatação do telefone para busca
    const cleanPhone = phone.replace(/\D/g, "");
    const response = await fetch(
      `${RD_CRM_BASE_URL}/contacts?token=${RD_CRM_TOKEN}&phone=${encodeURIComponent(cleanPhone)}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!response.ok) {
      console.error("[RD CRM v1] Erro ao buscar contato por telefone:", response.status);
      return null;
    }

    const result: RDContactsResponse = await response.json();
    return result.contacts && result.contacts.length > 0 ? result.contacts[0] : null;
  } catch (error) {
    console.error("[RD CRM v1] Erro ao buscar contato por telefone:", error);
    return null;
  }
}

/**
 * Cria um novo contato no RD CRM v1
 * POST /contacts?token=X
 */
async function createContact(data: ContactData): Promise<RDContact | null> {
  try {
    // Remove formatação do telefone
    const cleanPhone = data.telefone.replace(/\D/g, "");

    const response = await fetch(`${RD_CRM_BASE_URL}/contacts?token=${RD_CRM_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contact: {
          name: data.nome,
          emails: [{ email: data.email }],
          phones: [{ phone: cleanPhone, type: "cellphone" }],
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[RD CRM v1] Erro ao criar contato:", response.status, errorText);
      return null;
    }

    const result: RDContactResponse = await response.json();
    return result.contact;
  } catch (error) {
    console.error("[RD CRM v1] Erro ao criar contato:", error);
    return null;
  }
}

/**
 * Cria uma nova negociação vinculada ao contato
 * POST /deals?token=X
 */
async function createDeal(contactId: string, contactName: string): Promise<boolean> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dealData: any = {
      deal: {
        name: contactName,
        contacts_ids: [contactId],
      },
    };

    // Adiciona o funil se estiver configurado
    if (RD_CRM_FUNIL) {
      dealData.deal.deal_pipeline_id = RD_CRM_FUNIL;
    }

    const response = await fetch(`${RD_CRM_BASE_URL}/deals?token=${RD_CRM_TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dealData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[RD CRM v1] Erro ao criar negociação:", response.status, errorText);
      return false;
    }

    // Trata a resposta de forma segura
    const result = await response.json();
    
    // A resposta pode vir em diferentes formatos
    const dealId = result?.deal?._id || result?.deal?.id || result?._id || result?.id || "criada";
    console.log("[RD CRM v1] Negociação criada:", dealId);
    return true;
  } catch (error) {
    console.error("[RD CRM v1] Erro ao criar negociação:", error);
    return false;
  }
}

// ============================================================================
// HANDLER PRINCIPAL
// ============================================================================
export async function POST(request: NextRequest) {
  try {
    // Verifica se o token está configurado
    if (!RD_CRM_TOKEN) {
      console.error("[RD CRM v1] RD_CRM_TOKEN não configurado");
      return NextResponse.json(
        { error: "Configuração do CRM não encontrada" },
        { status: 500 }
      );
    }

    // Obtém dados do formulário
    const body: ContactData = await request.json();
    const { nome, email, telefone } = body;

    // Validação básica
    if (!nome || !email || !telefone) {
      return NextResponse.json(
        { error: "Nome, email e telefone são obrigatórios" },
        { status: 400 }
      );
    }

    // Validação mínima de 2 caracteres (exigido pela API v1)
    if (nome.length < 2) {
      return NextResponse.json(
        { error: "Nome deve ter pelo menos 2 caracteres" },
        { status: 400 }
      );
    }

    console.log(`[RD CRM v1] Processando lead: ${nome} (${email})`);

    // ========================================================================
    // PASSO 1: Verificar se o contato já existe (por email ou telefone)
    // ========================================================================
    let contact = await findContactByEmail(email);

    if (!contact) {
      console.log("[RD CRM v1] Contato não encontrado por email, buscando por telefone...");
      contact = await findContactByPhone(telefone);
    }

    // ========================================================================
    // PASSO 2: Se não existir, criar novo contato
    // ========================================================================
    if (!contact) {
      console.log("[RD CRM v1] Contato não encontrado, criando novo...");
      contact = await createContact(body);

      if (!contact) {
        return NextResponse.json(
          { error: "Erro ao criar contato no CRM" },
          { status: 500 }
        );
      }

      console.log(`[RD CRM v1] Contato criado com ID: ${contact._id || contact.id}`);
    } else {
      console.log(`[RD CRM v1] Contato existente encontrado: ${contact._id || contact.id}`);
    }

    // ========================================================================
    // PASSO 3: Criar negociação vinculada ao contato
    // ========================================================================
    const contactId = contact._id || contact.id;
    const dealCreated = await createDeal(contactId, nome);

    if (!dealCreated) {
      return NextResponse.json(
        { error: "Erro ao criar negociação no CRM" },
        { status: 500 }
      );
    }

    console.log(`[RD CRM v1] Negociação criada para contato: ${contactId}`);

    // Sucesso!
    return NextResponse.json({
      success: true,
      message: "Lead cadastrado com sucesso!",
      contactId: contactId,
    });
  } catch (error) {
    console.error("[RD CRM v1] Erro interno:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
