import { NextRequest, NextResponse } from "next/server";
import axios from "@/utils/axios";

// HTTPS request to create a user
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        // const requestBody = JSON.stringify({
        //     email: body.email,
        //     fullname: body.fullname,
        //     role: body.role,
        //     password: body.password
        // })

        const response = await axios.post("/users", body);
        console.log(response)
        if (response.status === 200) {
            return NextResponse.json(response.data, { status: 201 });
        } else {
            console.error(response);
            return NextResponse.json(response.data, { status: response.status });
        }
    } catch (error: any) {
        console.error('Server Error (Get Users):', error.response?.data?.msg);
        return NextResponse.error();
    }
}