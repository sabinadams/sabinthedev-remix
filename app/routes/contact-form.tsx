import { ActionFunction, redirect } from 'remix'
import { transporter } from '~/entry.server';

export let action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()
    
    try {
        await transporter.sendMail({
            from: process.env.CONTACT_EMAIL,
            to: process.env.CONTACT_EMAIL,
            replyTo: formData.get('email')?.toString(),
            subject: `SabinTheDev Contact Form - ${formData.get('name')}`,
            text: formData.get('message')?.toString() 
        });
    } catch( e ) {
        console.error(e)
    }
    
    return redirect('/#contact')
};