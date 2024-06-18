import UserModel from '@/model/User';
import dbConnect from '@/lib/dbConnect';
import { Message } from '@/model/User';


export async function POST(request: Request) {
    await dbConnect();
    const { username, content } = await request.json();

     try{

        const user = await UserModel.findOne({ username }).exec();

        if (!user) {
          return Response.json(
            { 
                message: 'User not found',
                success: false 
            },
            { status: 404 }
          );
        }

     }catch(error){
        console.error('Error adding message:', error);
        return Response.json(
          { message: 'Internal server error', success: false },
          { status: 500 }
        );
     }

}