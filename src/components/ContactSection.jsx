import { GithubIcon, Instagram, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'
import React, { useState } from 'react'
import {cn} from '@/lib/utils.js'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast'


function ContactSection() {
    const initialState = {
            name: '',
            email: '',
            message: '',
        }

    const form = useRef()
    const [formData, setFormData] = useState(initialState)

    const handleChange = (evt) => {
        setFormData({...formData, [evt.target.name] : evt.target.value})
    }

    const sendEmail = (evt) => {
        evt.preventDefault()

        emailjs.sendForm('service_hvz77oi', 'template_b0ue31w', form.current, { publicKey: 'UNp1lmJHWSTBS-qV2'})
            .then(() => {
                console.log("SUCCESS!");
                toast.success('Message Sent Successfully!')
                setFormData(initialState);
            },
            (error) => {
                console.log('FAILED...', error.txt)
                toast.error('Faild to Send message. Please try again')
            }
        )

    }

    return (
        <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'>Touch</span>
                </h2>

                <p className='text-center text-muted-foreground mb-10 max-w-2xl mx-auto'>
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunitiees.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8 p-8'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                        <div className='space-y-6 justify-center'>
                            <div className='flex items-center space-x-4'>

                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='flex space-x-3 '>
                                    <h4 className='font-medium min-w-16 text-start'>Email</h4>
                                    <a href="mailto:ashley.laisure@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                        Ashley.Laisure@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-center space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='flex space-x-3 '>
                                    <h4 className='font-medium min-w-16 text-start'>Phone</h4>
                                    <a href="tel:+19179710226" className='text-muted-foreground hover:text-primary transition-colors'>
                                        (917) 971 0226
                                    </a>
                                </div>
                            </div>

                            <div className='flex items-center space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='h-6 w-6 text-primary'/>
                                </div>
                                <div className='flex space-x-3 '>
                                    <h4 className='font-medium min-w-16 text-start'>Location</h4>
                                    <a href="" className='text-muted-foreground hover:text-primary transition-colors'>
                                        Virginia Beach, VA
                                    </a>
                                </div>
                            </div>

                        </div>

                        <div className=''>
                            {/* <h4 className='font-medium mb-4'>Connect With Me</h4> */}
                            <div className='flex gap-4 justify-center'>
                                <a href="https://www.linkedin.com/in/ashley-laisure-6a9475354/" target='_blank'
                                    className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                    <Linkedin />
                                </a>
                                <a href="https://github.com/ashleylaisure" target='_blank'
                                className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                                    <GithubIcon />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='bg-card/70 p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>

                        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder='Ashley Laisure...'
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' 
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder='ashley.laisure@gmail.com'
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' 
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'>Message</label>
                                <textarea  
                                    id="message" 
                                    name="message" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Hello, I'd like to talk about..."
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' 
                                />
                            </div>

                            <button 
                                type="submit" 
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                )} >
                                Send Message
                                <Send size={16}/>
                            </button>



                        </form>
                    </div>

                </div>
            </div>
            
        </section>
    )
}

export default ContactSection
