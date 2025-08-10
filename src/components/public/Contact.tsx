"use client";

import Form from "@/components/Forms/Form";
import { useTranslations } from 'next-intl';
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import contactSchema from "@/schemas/contactSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { message } from "antd";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Button from "../UI/Button";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactFields = [
    {
      name: "name",
      type: "text",
      placeholder: t('form.fields.name'),
    },
    {
      name: "email",
      type: "email",
      placeholder: t('form.fields.email'),
    },
    {
      name: "subject",
      type: "text",
      placeholder: t('form.fields.subject'),
    },
  ];

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            user_id: process.env.NEXT_PUBLIC_EMAILJS_USER_ID,
            accessToken: process.env.NEXT_PUBLIC_EMAILJS_ACCESS_TOKEN,
            template_params: {
              name: data.name,
              email: data.email,
              subject: data.subject,
              message: data.message,
            },
          }),
        }
      );

      if (response.ok) {
        message.success(t('form.success'));
        // Form will be reset automatically by the Form component after successful submission
      } else {
        message.error(t('form.error.send_failed'));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error(t('form.error.general'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ───────────────────────── Contact Section ───────────────────────── */}
      <section
        className='pb-8 flex flex-col md:flex-row gap-12 sm:p-8 md:p-16
                    font-sans text-gray-900 dark:text-slate-100 dark:bg-[#0f172a] sm:pt-0 pt-8 '>
        {/* Left Form Panel */}
        <div
          className='flex-1 bg-[#e8efff] dark:bg-slate-800 rounded-xl p-10 max-w-lg relative pb-40'
          data-aos='fade-right'>
          <div className='text-center lg:text-left mb-8'>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
              {t('header.title')}
            </h2>
            <p className='text-gray-600 dark:text-gray-300 text-sm sm:text-base'>
              {t('header.description')}
            </p>
          </div>
          <Form
            submitHandler={onSubmit}
            resolver={yupResolver(contactSchema)}
            >
            {contactFields.map((field) => (
              <div key={field.name} className='mb-6'>
                <FormInput {...field} />
              </div>
            ))}

            <div>
              <FormTextArea
                name='message'
                id="message"

              />
            </div>

            <Button
              type='submit'
              loading={isSubmitting}
              variant="cta"
              className='mt-6'
              loadingText={t('form.submitting')}>
              {t('form.submit')}
            </Button>
          </Form>
          <div className='text-center lg:text-left absolute bottom-12 left-0 right-0 px-10'>
            <p className='text-xs text-gray-500 dark:text-gray-400 mb-4'>
              {t('security.info')}
            </p>

            <div className='flex flex-wrap justify-center lg:justify-start gap-4 text-xs text-gray-600 dark:text-gray-400'>
              <div className='flex items-center gap-2'>
                <span className='w-1.5 h-1.5 bg-green-500 rounded-full'></span>
                <span>{t('security.features.ssl')}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-1.5 h-1.5 bg-blue-500 rounded-full'></span>
                <span>{t('security.features.gdpr')}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-1.5 h-1.5 bg-purple-500 rounded-full'></span>
                <span>{t('security.features.spam')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Contact‑Info Cards */}
        <div
          className='flex flex-col gap-8 w-full sm:max-w-sm m-auto'
          data-aos='fade-left'>
          {/* Phone */}
          <div className='bg-[#e8efff] dark:bg-slate-800 rounded-xl p-8 flex flex-col items-center text-center'>
            <div className='bg-white dark:bg-slate-700 p-4 rounded-full mb-4'>
              <FaPhone className='text-blue-600 w-6 h-6' />
            </div>
            <p className='font-semibold mb-1'>{t('contact_info.phone.label')}</p>
            <a
              href='tel:+8801741581512'
              className='text-blue-700 dark:text-blue-400 hover:underline transition'>
              {t('contact_info.phone.value')}
            </a>
          </div>

          {/* Email */}
          <div className='bg-[#e8efff] dark:bg-slate-800 rounded-xl p-8 flex flex-col items-center text-center'>
            <div className='bg-white dark:bg-slate-700 p-4 rounded-full mb-4'>
              <FaEnvelope className='text-blue-600 w-6 h-6' />
            </div>
            <p className='font-semibold mb-1'>{t('contact_info.email.label')}</p>
            <a
              href='mailto:biyerthikana@gmail.com'
              className='text-blue-700 dark:text-blue-400 hover:underline transition'>
              {t('contact_info.email.value')}
            </a>
          </div>

          {/* Location */}
          <div className='bg-[#e8efff] dark:bg-slate-800 rounded-xl p-8 flex flex-col items-center text-center'>
            <div className='bg-white dark:bg-slate-700 p-4 rounded-full mb-4'>
              <FaMapMarkerAlt className='text-blue-600 w-6 h-6' />
            </div>
            <p className='font-semibold mb-1'>{t('contact_info.location.label')}</p>
            <address className='not-italic text-gray-700 dark:text-gray-300 text-sm leading-relaxed'>
              {t('contact_info.location.address').split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  {index === 0 && <br />}
                </span>
              ))}
            </address>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Google Map ───────────────────────── */}
      <div className='w-full h-[300px] md:h-[400px] mpb-10'>
        <iframe
          title={t('map.title')}
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.578356451677!2d90.35655181540004!3d23.810332284573265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c754d5ebd69b%3A0x2d79608d9a16429f!2sMirpur-1%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1698866563220!5m2!1sen!2sbd'
          width='100%'
          height='100%'
          style={{ border: 0, display: "block" }}
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
    </>
  );
};

export default Contact;
