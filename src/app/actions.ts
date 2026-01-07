'use server';

import { z } from 'zod';
import { translations } from '@/lib/translations';

type Language = 'en' | 'tr';

// This is a simplified way to get language for server-side validation messages.
// In a real app, this might come from user profile or headers.
const getValidationMessages = (lang: Language) => {
    const t = (key: keyof typeof translations.en) => translations[lang][key] || translations['en'][key];
    return {
        company_short: t('form_validation_company_short'),
        name_short: t('form_validation_name_short'),
        email_invalid: t('form_validation_email_invalid'),
        message_short: t('form_validation_message_short'),
        message_long: t('form_validation_message_long'),
    }
}

export async function submitInquiry(prevState: any, formData: FormData) {
  const lang = (formData.get('lang') as Language) || 'en';
  const messages = getValidationMessages(lang);

  const contactSchema = z.object({
    companyName: z.string().min(2, messages.company_short),
    contactPerson: z.string().min(2, messages.name_short),
    email: z.string().email(messages.email_invalid),
    phone: z.string().optional(),
    inquiryType: z.enum(['RFQ', 'Partnership', 'Technical']),
    message: z.string().min(10, messages.message_short).max(1000, messages.message_long),
  });
  
  const validatedFields = contactSchema.safeParse(Object.fromEntries(formData.entries()));

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Error: Please check the fields.',
      success: false,
    };
  }

  // Here you would typically send an email, save to a database, etc.
  console.log('New Inquiry:', validatedFields.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: messages.form_success_message,
    success: true,
    errors: null,
  };
}
