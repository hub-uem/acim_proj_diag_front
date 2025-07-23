import { apiSlice } from '../services/apiSlice';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactApiSlide = apiSlice.injectEndpoints({
   endpoints: builder => ({
    contactEmail: builder.mutation<void, ContactForm>({
        query: (formData) => ({
          url: 'contact/',
          method: 'POST',
          body: formData,
        }),
    }),
   })
})

export const { useContactEmailMutation } = contactApiSlide;