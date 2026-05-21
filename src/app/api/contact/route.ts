import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request)
{
    try
    {
        const { name, email, message } = await req.json();

        if(!name || !email || !message)
        {
            return NextResponse.json({
                error: "Missing required fields",
                status: 400
            });
        }
        
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'HunterHockman@outlook.com',
            subject: `Message from ${name}`,
            replyTo: email,
            text: message
        });

        return NextResponse.json({success: true});
    }
    catch (error)
    {
        return NextResponse.json({
            error: "Failed to send email",
            status: 500
        });
    }
   
}

