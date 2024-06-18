import UserModel from '@/model/User';
import dbConnect from '@/lib/dbConnect';
import { Message } from '@/model/User';


export async function POST(request: Request) {
    await dbConnect();
    const { username, content } = await request.json();

     try{

     }catch(error){
        console.error('Error adding message:', error);
        return Response.json(
          { message: 'Internal server error', success: false },
          { status: 500 }
        );
     }

}