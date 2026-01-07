'use client';

import { useEffect } from 'react';
import { useFormState, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslation } from '@/hooks/use-translation';
import { submitInquiry } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

type FormValues = {
    companyName: string;
    contactPerson: string;
    email: string;
    phone?: string;
    inquiryType: 'RFQ' | 'Partnership' | 'Technical';
    message: string;
};

export function ContactForm() {
    const { t, language } = useTranslation();
    const { toast } = useToast();

    const [state, formAction] = useFormState(submitInquiry, {
        message: '',
        errors: null,
        success: false,
    });
    
    const form = useForm<FormValues>({
        defaultValues: {
            companyName: '',
            contactPerson: '',
            email: '',
            phone: '',
            inquiryType: 'RFQ',
            message: '',
        },
    });

    useEffect(() => {
        if (state.success) {
            toast({
                title: t('form_success_message'),
                variant: 'default',
            });
            form.reset();
        } else if (state.message && state.errors) {
            toast({
                title: 'Error',
                description: state.message,
                variant: 'destructive',
            });
        }
    }, [state, toast, t, form]);

    const {formState} = useFormState({control: form.control});

    return (
        <Form {...form}>
            <form action={formAction} className="space-y-6">
                <input type="hidden" name="lang" value={language} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                        control={form.control}
                        name="companyName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('form_company_name')}</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage>{state.errors?.companyName}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="contactPerson"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('form_contact_person')}</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage>{state.errors?.contactPerson}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('form_email')}</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} />
                                </FormControl>
                                <FormMessage>{state.errors?.email}</FormMessage>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('form_phone')}</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage>{state.errors?.phone}</FormMessage>
                            </FormItem>
                        )}
                    />
                </div>

                <FormField
                    control={form.control}
                    name="inquiryType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('form_inquiry_type')}</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder={t('form_inquiry_type')} />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="RFQ">{t('form_inquiry_type_rfq')}</SelectItem>
                                    <SelectItem value="Partnership">{t('form_inquiry_type_partnership')}</SelectItem>
                                    <SelectItem value="Technical">{t('form_inquiry_type_technical')}</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t('form_message')}</FormLabel>
                            <FormControl>
                                <Textarea rows={6} {...field} />
                            </FormControl>
                            <FormMessage>{state.errors?.message}</FormMessage>
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={formState.isSubmitting} className="w-full md:w-auto">
                    {formState.isSubmitting ? 'Sending...' : t('btn_send_inquiry')}
                </Button>
            </form>
        </Form>
    );
}
