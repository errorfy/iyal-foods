import React from 'react';
import { Form, Input, Button } from 'antd';
import doodle from '../assets/contact.png';

const Contact: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: { name: string; email: string; message: string }) => {
    const { name, email, message } = values;

    // Get WhatsApp number from environment variable
    const whatsappPhoneNumber = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER;

    // Construct the WhatsApp message
    const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    // Open WhatsApp with the constructed message
    window.open(`https://api.whatsapp.com/send?phone=${whatsappPhoneNumber}&text=${whatsappMessage}`, '_blank');

    // Reset the form
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section id="contact" className="shadow-2xl py-20">
      <div className="container mx-auto px-4 md:px-12 lg:px-16 xl:px-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 bg-white p-8 text-[#338e2b]">
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
            </div>
            <img src={doodle} alt="Contact Doodle" className="w-3/5 mx-auto" />
          </div>

          {/* Ant Design Form */}
          <Form
            form={form}
            name="contactForm"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="space-y-6"
          >
            {/* Name Field */}
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input placeholder="Enter your name" />
            </Form.Item>

            {/* Email Field */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            {/* Message Field */}
            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please input your message!' }]}
            >
              <Input.TextArea rows={3} placeholder="Type your message here..." />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button color='default' variant='solid' htmlType="submit" className="w-full">
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
