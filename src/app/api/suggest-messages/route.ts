import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// setting run time as edge as next goes timebout
export const runtime = 'edge';

export async function POST(req: Request) { 
    try {

        

    }catch(error){
        if (error instanceof OpenAI.APIError) {
            // OpenAI API error handling
            const { name, status, headers, message } = error;
            return NextResponse.json({ name, status, headers, message }, { status });
          } 
          
        else {
            // General error handling
            console.error('An unexpected error occurred:', error);
            throw error;
          }

    }
}

