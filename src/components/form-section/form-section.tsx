import React, { useState } from 'react';
import Button from '../hero-component/button';

type FormState = {
  name: string;
  email: string;
  message: string;
}

type Errors = {
  name?: string;
  email?: string;
}

function FormSection() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const newErrors: Errors = {};
    if (!formState.name) {
      newErrors.name = 'Please fill this mandatory field';
    }
    if (!formState.email) {
      newErrors.email = 'Please fill this mandatory field';
    }
    setErrors(newErrors);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    errors.email = '';
    errors.name = '';
  };

  const getIconSrc = () => {
    if (errors.email) {
      return '/public/img/form-error-icon.svg';
    }
    if (formState.email) {
      return '/public/img/form-mail-active-icon.svg';
    }
    return '/public/img/form-mail-icon.svg';
  };

  return (
    <div className="flex justify-center items-center bg-form-background-pattern bg-no-repeat bg-center py-[70px]">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-12 rounded-lg shadow-lg w-full max-w-2xl"
      >
        <h1 className="text-[32px] leading-[48px] font-bold text-gray-800 mb-12">
          Let’s discuss your project
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-base font-semibold text-[#27272A]">
              Your full name <span className="text-red-500">*</span>
            </label>
            <div
              className={`mt-1 flex items-center border ${
                errors.name ? 'border-red' : 'border-gray-300'
              } rounded-lg px-3 py-2 focus-within:border-[#7E3AF2] hover:border-[#7E3AF2] transition-colors`}
            >
              <img
                src={
                  formState.name
                    ? '/public/img/form-name-active-icon.svg'
                    : '/public/img/form-name-icon.svg'
                }
                alt="Name icon"
                className={'h-5 w-5'}
              />
              <input
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                className="ml-3 w-full border-none focus:outline-none"
                placeholder="Name Surname"
              />
            </div>
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-base font-semibold text-[#27272A]">
              Your email <span className="text-red-500">*</span>
            </label>
            <div
              className={`mt-1 flex items-center border ${
                errors.email ? 'border-red' : 'border-gray-300'
              } rounded-lg px-3 py-2 focus-within:border-[#7E3AF2] hover:border-[#7E3AF2] transition-colors`}
            >
              <img
                src={getIconSrc()}
                alt="Email icon"
              />
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className="ml-3 w-full border-none focus:outline-none focus:ring-0"
                placeholder="name@example.com"
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>
        </div>
        {/* Message */}
        <div className="mt-9">
          <label htmlFor="message" className="block text-base font-semibold text-[#27272A]">
            Tell me about your project
          </label>
          <textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#7E3AF2] hover:border-[#7E3AF2] transition-colors resize-none"
            placeholder="Add here a general description of your idea and target aim"
            rows={4}
          />
        </div>
        {/* Submit */}
        <div className="mt-10">
          <Button name={'Submit'} />
        </div>
      </form>
    </div>
  );
}

export default FormSection;
