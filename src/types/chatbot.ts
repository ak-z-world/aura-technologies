export type FlowType =
  | 'buildProduct'
  | 'digitalMarketing'
  | 'crackleapAcademy'
  | 'scriptenCopilot'
  | 'careers'

export interface ChatMessage {
  id: string
  sender: 'bot' | 'user'
  text: string
  pills?: string[]
  flow?: FlowType
  customType?: 'main_menu' | 'lead_success' | 'scripten_intro'
  leadData?: Record<string, string>
  whatsAppUrl?: string
  timestamp: string
}

export interface ChatbotState {
  isOpen: boolean
  currentFlow: FlowType | null
  currentStep: string | null
  formData: Record<string, string>
  isTyping: boolean
  isSubmitting: boolean
}
