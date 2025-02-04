import { NextRequest, NextResponse } from "next/server";
import axios from "@/utils/axios";

// HTTPS request to edit a user
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        // const requestBody = JSON.stringify({
        //     email: body.email,
        //     fullname: body.fullname,
        //     role: body.role,
        //     password: body.password
        // })

        const response = await axios.put("/users", body);
        if (response.status === 200) {
            return NextResponse.json(response.data, { status: 200 });
        } else {
            console.error(response);
            return NextResponse.json(response.data, { status: response.status });
        }
    } catch (error: any) {
        console.error('Server Error (Get Users):', error.response?.data?.msg);
        return NextResponse.error();
    }
}