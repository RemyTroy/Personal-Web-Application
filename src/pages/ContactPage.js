import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
      // Add other form fields as needed
    },
    validationSchema: Yup.object({
      // Define validation schema using Yup
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      message: Yup.string().min(10, 'Too short').max(300, 'Too long').required('Required'),
      // Add other validations as needed
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        // Replace the following values with  Email.js details
        const serviceId = 'service_znusscs'; // service ID
        const templateId = 'template_b1a2xor'; //  template ID
        const userId = 'L3DsHzQicxlRr4S2X'; //  user ID
        const toEmail = 'hoffmatr@oregonstate.edu'; //recipient email

        // Prepare template parameters
        const templateParams = {
          to_email: toEmail,
          from_name: values.name,
          message: values.message,
        };

        // Send email using Email.js
        await emailjs.send(serviceId, templateId, templateParams, userId);

        // Log success and reset the form
        console.log('Email sent successfully:', values);
        resetForm();
      } catch (error) {
        // Log error if sending fails
        console.error('Failed to send email:', error);
      }
    },
  });

  return (
    <>
      <h2>Contact</h2>
      <article>
        <p>This form is designed for users to get in touch with me! Please fill in your details and message to reach out.</p>
        <form onSubmit={formik.handleSubmit}>
          <fieldset>
            <legend>Contact Information</legend>
            <label htmlFor="name" className="required">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              required
              autoFocus
              placeholder="Enter your name"
            />
            {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
            <label htmlFor="email" className="required">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              required
              placeholder="Enter your email"
            />
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <label htmlFor="message" className="required">Message:</label>
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              required
              placeholder="Enter your message"
              minLength="10"
              maxLength="300"
            />
            {formik.touched.message && formik.errors.message ? <div>{formik.errors.message}</div> : null}
            <p>Minimum length: 10 characters, Maximum length: 300 characters</p>
          </fieldset>
          {/* Add other form fields and buttons as needed */}
          <button type="submit">Submit</button>
        </form>
      </article>
    </>
  );
};

export default ContactPage;
