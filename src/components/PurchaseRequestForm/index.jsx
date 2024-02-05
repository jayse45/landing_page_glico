import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, Input } from 'components';

const PurchaseRequestForm = ({ plan, Package, amount }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (value) => {
    setName(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleNumberChange = (value) => {
    setNumber(value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    const params = {
      "from_name": name,
      "email": email,
      "phone_number": number,
      "plan": plan,
      "package": Package,
      "price": amount,
      "message": message
    }

    console.log(params)

    emailjs.send('service_7rjkioy', 'template_3v9ndof', params, 'TLzOH1g903v1o3joa')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    // Reset the form after sending the email
  };

  return (
    <>
      <h1 className='text-center font-bold text-3xl sm:text-lg text-indigo-800'>Purchase Request Form</h1>
      <form
        className='flex flex-col items-center justify-center mt-[55px] sm:mt-[30px] mb-16 w-full md:w-full gap-10'
        onSubmit={sendEmail}>
        <div>
          <label for="from_name">Full Name:</label>
          <Input
            id="from_name"
            name="from_name"
            placeholder="Full Name"
            className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 w-[500px] sm:w-[260px]"
            type="text"
            shape="square"
            color="white_A700"
            size="xs"
            variant="fill"
            value={name}
            onChange={handleNameChange}
          ></Input>
        </div>

        <div>
          <label for="email">Email Address:</label>
          <Input
            id="email"
            name="email"
            placeholder="Email address"
            className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 w-[500px] sm:w-[260px]"
            type="email"
            shape="square"
            color="white_A700"
            size="xs"
            variant="fill"
            value={email}
            onChange={handleEmailChange}
          ></Input>
        </div>

        <div>
          <label for="phone_number">Phone Number:</label>
          <Input
            name="phone_number"
            placeholder="Phone Number"
            className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-100 border-solid sm:flex-1 w-[500px] sm:w-[260px]"
            type="text"
            shape="square"
            color="white_A700"
            size="xs"
            variant="fill"
            value={number}
            onChange={handleNumberChange}
          ></Input>
        </div>

        <div>
          <label for="plan">Plan:</label>
          <Input
            name="plan"
            placeholder="Plan"
            className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-100 bg-slate-200 border-solid sm:flex-1 w-[500px] sm:w-[260px]"
            type="text"
            shape="square"
            color="white_A700"
            size="xs"
            variant="fill"
            disabled={true}
            value={plan}
          ></Input>
        </div>

        <div>
          <label for="package">Package:</label>
          <Input
            name="package"
            placeholder="Package"
            className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-100 bg-slate-200 border-solid sm:flex-1 w-[500px] sm:w-[260px]"
            type="text"
            shape="square"
            color="white_A700"
            size="xs"
            variant="fill"
            disabled={true}
            value={Package}
          ></Input>
        </div>

        <div>
          <label for="price">Price:</label>
          <Input
            name="price"
            placeholder="Price"
            className="p-0 placeholder:text-black-900 text-[15px] text-left w-full"
            wrapClassName="border border-blue_gray-100 bg-slate-200 border-solid sm:flex-1 w-[500px] sm:w-[260px]"
            type="text"
            shape="square"
            color="white_A700"
            size="xs"
            variant="fill"
            disabled={true}
            value={amount}
          ></Input>
        </div>

        <div>
          <label for="message">Additional Message:</label>
          <textarea
            id="message"
            rows="10" cols="40"
            placeholder='Additional Message'
            name='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='block p-0 placeholder:text-black-900 text-[15px] text-left h-[200px] pb-3 pt-[11px] px-[11px] border border-blue_gray-100 border-solid sm:flex-1 w-[500px] sm:w-full'></textarea>
        </div>

        <Button
          className="common-pointer cursor-pointer text-[15px] text-center w-[300px] sm:w-full"
          shape="round"
          color="indigo_800"
          size="sm"
          variant="fill"
          type="submit"
        >
          Submit
        </Button>

      </form>
    </>
  );
};

export { PurchaseRequestForm };
